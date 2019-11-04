package com.carrinhodecompras.api.model;

import java.math.BigDecimal;

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

@Document(collection = "Item")
public class Item {
 
	@Id
    private String id; 
    private String nome;
    private BigDecimal valor;
}
