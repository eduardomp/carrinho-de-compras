package model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor 
@AllArgsConstructor 
@EqualsAndHashCode()
@Getter
@Setter
@ToString

@Document(collection = "Usuario")
public class Usuario {
 
    private Integer id; 
    private String nome;
    private String email;
}
