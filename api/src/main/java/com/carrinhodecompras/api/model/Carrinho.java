package com.carrinhodecompras.api.model;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
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

@Document(collection = "Carrinho")
public class Carrinho {
	
	@Id
	private String id;
	@DBRef
	private Usuario usuario;
	@DBRef
	private List<Item> items;
	private BigDecimal valorTotal;
}
