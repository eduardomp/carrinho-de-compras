package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, Integer> {

}
