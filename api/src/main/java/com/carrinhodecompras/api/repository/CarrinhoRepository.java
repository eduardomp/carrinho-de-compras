package com.carrinhodecompras.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.carrinhodecompras.api.model.Carrinho;
import com.carrinhodecompras.api.model.Item;

@Repository
public interface CarrinhoRepository extends MongoRepository<Carrinho, String> {
	
	@Query("{ 'usuario' : ?0 }")
	Optional<Carrinho> findByUsuarioId(String id);
	
}
