# Carrinho de Compras

Projeto angular + spring boot + mongodb.

Estutura de pastas:

Diretorio "api" -> contém a api REST da aplicação (spring boot).

Diretorio "front-end" -> contém o front-end ( Angular 8) 

Para rodar o projeto siga os passos:

Front end: 

Acesse o diretorio carrinho-de-compras/front-end/carrinho e execute o comando abaixo

```
ng serve --open
```

Back-End:

Antes de executar o projeto, certifique-se que tenha uma instalação do mongodb rodando na porta 27017, caso não tenha ainda instalado o mongodb e tenha o docker instalado, execute o comando abaixo:

```
sudo docker run -d -p 27017:27017 --name carrinho mongo
```

Acesse o diretorio carrinho-de-compras/api

execute o maven para gerar o jar executavel

```
./mvnw clean package
```

na pasta carrinho-de-compras/api/target execute o arquivo api-0.0.1-SNAPSHOT.jar com o comando abaixo

```
java -jar api-0.0.1-SNAPSHOT.jar
```

Tudo pronto, já é possivel testar a aplicação. 

Obs: é possivel testar a API REST utilizando a collection do  Postman publicada neste link.

https://www.getpostman.com/collections/0760b6a4a39377606e58

