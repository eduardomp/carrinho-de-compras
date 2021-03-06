package com.carrinhodecompras.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.carrinhodecompras.api.model.Usuario;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, String> {
	
	@Query("{ 'email' : ?0 }")
	Optional<Usuario> findByEmail(String email);


}
