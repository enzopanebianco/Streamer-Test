# STREAMER-TEST API

Essa aplicação foi criada com o intuito de testar os conhecimentos básicos de um desenvolvedor **.net core**.

Trata-se de uma API Rest, com acesso a um banco de dados SQL contendo apenas uma entidade 'Courses'.

## ESTRUTURA BÁSICA
               
**./Data**  
Contexto do banco de dados                  

**./Model**  
Modelagem do banco de dados

**./Services**  
Classes de serviços de acesso ao banco de dados

**./SS_DB.db**  
Sqlite DB

**ATENÇÃO: é importante manter a estrutura do projeto como está. A intenção do teste é puramente analisar o modo em que você escreve o seu código e se organiza dentro dessa estrutura. Caso ache necessário, fique à vontade para criar novas pastas.**

## O que fazer?
Desenvolver um CRUD da entidade 'Project'.

Fique a vontade para programar como você costuma programar. Será analisada a organização, criatividade e boas práticas do código. Como trata-se apenas de um teste, qualquer dúvida que surgir no meio do caminho, resolva como você achar que é mais coerente.

### Model
Criar a seguinte tabela, através do Code-First do Entity Framework Core.

Realizar as atualizações no banco de dados através das Migrations do EF Core

**Table:** Projects

| **Nome**        | **Tipo**              |
|-----------------|-----------------------|
| Id              | Int                   |
| Name            | String [REQUIRED]     |
| Image           | String                |
| Why             | String                |
| What            | String                |
| WhatWillWeDo    | String                |
| ProjectStatus   | ProjectStatus (Enum)  |
| Course          | Course [REQUIRED]     |
| CourseId        | Int (FK de Course)    |

#### Relacionamentos  
1 Course / N Project | OnDelete.Cascade

#### ProjectStatus (Enum)
0 - Em desenvolvimento  
1 - Publicado

### Services
Criar uma classe em ./Service com os acessos necessários para realizar a criação, edição, remoção e listagem da entidade 'Project' via DBContext (./Data/StreamerContext.cs)

### Controller
Criar os seguintes métodos:

#### GetById
[HttpGet]  
Recebe um ID de um 'Project'.  
Retorna um objeto do tipo 'Project'.

#### GetByCourse
[HttpGet]  
Recebe um ID de um 'Course'.  
Retorna uma lista genérica de 'Project'.

#### Update
[HttpPut]  
Recebe um objeto do tipo 'Project' e realiza a atualização do mesmo.  
Retorna um valor booleano.

#### Delete
[HttpDelete]  
Recebe um ID de um 'Project' e realizar a remoção do mesmo.  
Retorna um valor booleano.

#### Create
[HttpPost]  
Recebe um objeto do tipo Project e realiza a inserção no banco de dados.
Retorna o Id do 'Project' inserido.

----

# STREAMER-TEST FRONT-END

Para nós, é importante ver como é o seu desempenho também no front-end, mas nesse caso, nós não criamos um projeto base. Pedimos apenas que crie uma aplicação Angular que consuma e realize todas as request criadas para a API. 

Dessa forma conseguiremos ver toda a atmosfera da aplicação funcionando. Desde de as telas realizando as requisições, o banco de dados armazenando as informações e a API retornando a resposta para o front novamente exibir.

É importante que a navegação seja clara, porém não levaremos em consideração a identidade visual e nem o design da aplicação.
