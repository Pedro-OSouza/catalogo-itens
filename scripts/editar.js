import BancoDeDados from "./module/gravar-itens.js";


const nomeInpt = document.querySelector("#nome")
const categoriaSelect = document.querySelector("#categoria")
const statusSelect = document.querySelector("#status")
const editarBtn = document.querySelector("#editarBtn")

const banco = new BancoDeDados()

const params = new URLSearchParams(window.location.search)
const idParams = params.get("id")

const item = banco.buscarPorId(idParams)
console.log(item)

nomeInpt.value = item.nome
categoriaSelect.value = item.categoria
statusSelect.value = item.status

editarBtn.addEventListener("click", (event) => {
    event.preventDefault()
     banco.editar(idParams, nomeInpt.value,
     categoriaSelect.value,
     statusSelect.value
     )
     window.location.href = "index.html"
    }
)


