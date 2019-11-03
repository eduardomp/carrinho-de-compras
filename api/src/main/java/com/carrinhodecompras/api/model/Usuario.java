package com.carrinhodecompras.api.model;

import org.springframework.data.annotation.Id;
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
 
	@Id
    private String id; 
    private String nome;
    private String email;
}
