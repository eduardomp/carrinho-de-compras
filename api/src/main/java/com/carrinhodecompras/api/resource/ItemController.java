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

import com.carrinhodecompras.api.model.Item;
import com.carrinhodecompras.api.repository.ItemRepository;

@RestController
public class ItemController {

	@Autowired
	private ItemRepository repository;
	
	@PostMapping("/items")
	public ResponseEntity<Item> save(@RequestBody Item item) {
		
		Optional<Item> itemExistente = repository.findByNome(item.getNome());
		
		if(itemExistente.isPresent()) {
			return new ResponseEntity<Item>(HttpStatus.CONFLICT);
		}
		
		repository.save(item);
		
		return new ResponseEntity<Item>(item, HttpStatus.OK);
		
	}
	
	@PutMapping("/items")
	public ResponseEntity<Item> update(@RequestBody Item item) {
		
		Optional<Item> itemExistente = repository.findById(item.getId());
		
		if(itemExistente.isPresent()) {
			
			Item itemAtualizado = itemExistente.get();
			itemAtualizado.setNome(item.getNome());
			itemAtualizado.setValor(item.getValor().setScale(2));
			
			repository.save(itemAtualizado);
			return new ResponseEntity<Item>(item, HttpStatus.OK);
		}
		
		return new ResponseEntity<Item>(HttpStatus.NOT_FOUND);
		
	}
	
	@GetMapping("/items")
	public List<Item> getAll(){
		return repository.findAll();
	}
	
	@GetMapping("/items/{id}")
	public ResponseEntity<Item> getById(@PathVariable String id){
		
		Optional<Item> itemExistente = repository.findById(id);
		
		if(itemExistente.isPresent()) {
			return new ResponseEntity<Item>(itemExistente.get(),HttpStatus.OK);
		}
		
		return new ResponseEntity<Item>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/items/{id}")
	public ResponseEntity<Item> delete(@PathVariable String id) {
		
		Optional<Item> itemExistente = repository.findById(id);
		
		if(itemExistente.isPresent()) {
			repository.deleteById(id);
			return new ResponseEntity<Item>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Item>(HttpStatus.NOT_FOUND);
		
	}
}
