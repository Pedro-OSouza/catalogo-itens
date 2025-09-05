# Catálogo de Itens

Este é um projeto de um catálogo de itens simples, desenvolvido para demonstrar habilidades em **HTML**, **CSS** e **JavaScript** puro. A aplicação permite gerenciar uma lista de itens de forma prática e intuitiva diretamente no navegador.

---

## Recursos (Features)

* **Cadastro de Itens**: Adicione novos itens ao catálogo com informações como nome, categoria e status.
* **Listagem Dinâmica**: Visualize todos os itens em uma tabela, que é renderizada dinamicamente.
* **Pesquisa**: Procure itens por nome usando a barra de pesquisa.
* **Filtros**: Refine a lista de itens com filtros por categoria (Computador, Ferramenta de Robótica, Móvel) e por status (Em Uso, Dispensado, Quebrado, Em Reforma).
* **Edição e Remoção**: Edite ou remova qualquer item diretamente da lista.
* **Armazenamento Local**: Todos os dados são salvos no **Local Storage** do navegador, garantindo que as informações persistam entre as sessões.

---

## Tecnologias Utilizadas

* **HTML5**: Estrutura e semântica do projeto.
* **CSS3**: Estilização e layout, com uso de Flexbox para organização da interface.
* **JavaScript (ES6)**: Lógica principal da aplicação, manipulação do DOM e gerenciamento dos dados.

---

## Como Usar

Para visualizar o projeto, basta abrir o arquivo `index.html` no seu navegador. Não é necessário nenhum servidor web, pois a aplicação roda inteiramente no lado do cliente.

---

## Estrutura de Arquivos

A estrutura do projeto está organizada da seguinte forma:

```
├── css/
│   ├── cadastrar.css
│   ├── editar.css
│   └── index.css
├── scripts/
│   ├── module/
│   │   ├── gravar-itens.js
│   │   ├── ler-itens.js
│   │   └── pesquisar-itens.js
│   ├── app.js
│   ├── cadastrar.js
│   └── editar.js
├── cadastrar-item.html
├── editar.html
└── index.html
```
---
