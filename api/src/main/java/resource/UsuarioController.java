package resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Usuario;
import repository.UsuarioRepository;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	@PostMapping("/usuario")
	public String salvar(@RequestBody Usuario usuario) {
		repository.save(usuario);
		return "Usuario com inserido com sucesso! Id: "+ usuario.getId();
	}
}
