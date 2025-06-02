import BancoDeDados from "./module/gravar-itens.js";
import TabelaRenderizadora from "./module/ler-itens.js"
import { pesquisarPorCategoria, pesquisarPorNome, pesquisarPorStatus } from "./module/pesquisar-itens.js";

const tabela = document.querySelector("#lista-de-itens")
const barraDePesquisa = document.querySelector("#pesquisar")
const pesquisarBtn = document.querySelector("#pesquisar-btn")
const checkStatus = document.querySelectorAll(".check-status")
const checkCategoria = document.querySelectorAll(".check-categorias")
const filtroStatus = [];
const filtroCategorias = [];

const banco = new BancoDeDados()

const renderizarTabela = function () {
    const dados = banco.carregar();
    renderizador.renderizar(dados);
};

  
// Instancia o renderizador com o callback de deletar
const renderizador = new TabelaRenderizadora(
    tabela,
    null, 
    function (id) {
      banco.remover(id);
      renderizarTabela(); 
  }
);


/* pesquisar por nome */
pesquisarBtn.addEventListener("click", function () {
  const valorDePesquisa = barraDePesquisa.value.trim()
  const dados = pesquisarPorNome(banco.carregar(), valorDePesquisa)

  if (dados.length > 0) {
    renderizador.renderizar(dados)
  } else{
    alert("Nenhum dado com este nome")
  }
})

/* Filtrar por status */
checkStatus.forEach( function(item) {
  item.addEventListener("click", function () {
    if(item.checked){
      filtroStatus.push(item.value)
    }
    if(!item.checked){
      filtroStatus.splice(item.value, 1)
    }
    const dados = pesquisarPorStatus(banco.carregar(), filtroStatus)
    
    if (dados.length > 0){
      renderizador.renderizar(dados)
    } else {
      alert("Nenhum dado com este status")
    }
  })
})

/* filtrar por categoria */
checkCategoria.forEach( function(item) {
  item.addEventListener("click", function () {
    if(item.checked){
      filtroCategorias.push(item.value)
    }
    if (!item.checked) {
      filtroCategorias.splice(item.value, 1)

    }

    const dados = pesquisarPorCategoria(banco.carregar(), filtroCategorias)

    if (dados.length > 0){
      renderizador.renderizar(dados)
    } else {
      alert("Nenhum dado com estas categorias")
    }
  })
})

/* Ativa fazendo a primeira redenrização dos elementos */
document.addEventListener('DOMContentLoaded', function () {
  renderizarTabela();
});  