package com.carrinhodecompras.api.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carrinhodecompras.api.model.Carrinho;
import com.carrinhodecompras.api.repository.CarrinhoRepository;

@RestController
public class CarrinhoController {

	@Autowired
	private CarrinhoRepository repository;
	
	@PostMapping("/carrinhos")
	public ResponseEntity<Carrinho> save(@RequestBody Carrinho carrinho) {
		
		repository.save(carrinho);
		
		return new ResponseEntity<Carrinho>(carrinho, HttpStatus.OK);
		
	}
	
	@PutMapping("/carrinhos")
	public ResponseEntity<Carrinho> update(@RequestBody Carrinho carrinho) {
		
		Optional<Carrinho> CarrinhoExistente = repository.findById(carrinho.getId());
		
		if(CarrinhoExistente.isPresent()) {
			
			Carrinho CarrinhoAtualizado = CarrinhoExistente.get();
			CarrinhoAtualizado.setItems(carrinho.getItems());
			
			repository.save(CarrinhoAtualizado);
			return new ResponseEntity<Carrinho>(carrinho, HttpStatus.OK);
		}
		
		return new ResponseEntity<Carrinho>(HttpStatus.NOT_FOUND);
		
	}
	
	@GetMapping("/carrinhos")
	public List<Carrinho> getAll(){
		return repository.findAll();
	}
	
	@GetMapping("/carrinhos/{id}")
	public ResponseEntity<Carrinho> getById(@PathVariable String id){
		
		Optional<Carrinho> CarrinhoExistente = repository.findById(id);
		
		if(CarrinhoExistente.isPresent()) {
			return new ResponseEntity<Carrinho>(CarrinhoExistente.get(),HttpStatus.OK);
		}
		
		return new ResponseEntity<Carrinho>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/carrinhos/{id}")
	public ResponseEntity<Carrinho> delete(@PathVariable String id) {
		
		Optional<Carrinho> CarrinhoExistente = repository.findById(id);
		
		if(CarrinhoExistente.isPresent()) {
			repository.deleteById(id);
			return new ResponseEntity<Carrinho>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Carrinho>(HttpStatus.NOT_FOUND);
		
	}
}
