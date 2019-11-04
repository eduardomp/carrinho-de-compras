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

import com.carrinhodecompras.api.model.Usuario;
import com.carrinhodecompras.api.repository.UsuarioRepository;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) {
		
		Optional<Usuario> usuarioExistente = repository.findByEmail(usuario.getEmail());
		
		if(usuarioExistente.isPresent()) {
			return new ResponseEntity<Usuario>(HttpStatus.CONFLICT);
		}
		
		repository.save(usuario);
		
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		
	}
	
	@PutMapping("/usuarios")
	public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
		
		Optional<Usuario> usuarioExistente = repository.findById(usuario.getId());
		
		if(usuarioExistente.isPresent()) {
			
			Usuario usuarioAtualizado = usuarioExistente.get();
			usuarioAtualizado.setNome(usuario.getNome());
			usuarioAtualizado.setEmail(usuario.getEmail());
			
			repository.save(usuarioAtualizado);
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		}
		
		return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		
	}
	
	@GetMapping("/usuarios")
	public List<Usuario> getAll(){
		return repository.findAll();
	}
	
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> getById(@PathVariable String id){
		
		Optional<Usuario> usuarioExistente = repository.findById(id);
		
		if(usuarioExistente.isPresent()) {
			return new ResponseEntity<Usuario>(usuarioExistente.get(),HttpStatus.OK);
		}
		
		return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> delete(@PathVariable String id) {
		
		Optional<Usuario> usuarioExistente = repository.findById(id);
		
		if(usuarioExistente.isPresent()) {
			repository.deleteById(id);
			return new ResponseEntity<Usuario>(HttpStatus.OK);
		}
		
		return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		
	}
}
