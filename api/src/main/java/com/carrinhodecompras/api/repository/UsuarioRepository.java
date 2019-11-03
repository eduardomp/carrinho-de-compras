package com.carrinhodecompras.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.carrinhodecompras.api.model.Usuario;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, String> {

}
