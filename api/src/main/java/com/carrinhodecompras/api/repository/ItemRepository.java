package com.carrinhodecompras.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.carrinhodecompras.api.model.Item;

@Repository
public interface ItemRepository extends MongoRepository<Item, String> {
	
	@Query("{ 'nome' : ?0 }")
	Optional<Item> findByNome(String nome);
	
}
