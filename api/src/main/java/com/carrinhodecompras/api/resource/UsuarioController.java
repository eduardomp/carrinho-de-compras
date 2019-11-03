package com.carrinhodecompras.api.resource;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.message.StringFormattedMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carrinhodecompras.api.model.Usuario;
import com.carrinhodecompras.api.repository.UsuarioRepository;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	@PostMapping("/usuarios")
	public String save(@RequestBody Usuario usuario) {
		repository.save(usuario);
		return String.format("Usuario com id %s inserido com sucesso!", usuario.getId());
	}
	
	@GetMapping("/usuarios")
	public List<Usuario> getAll(){
		return repository.findAll();
	}
	
	@GetMapping("/usuarios/{id}")
	public Optional<Usuario> getById(@PathVariable String id){
		return repository.findById(id);
	}
	
	@DeleteMapping("/usuarios/{id}")
	public String delete(@PathVariable String id) {
		repository.deleteById(id);
		return "Usuario removido com sucesso!";
	}
}
