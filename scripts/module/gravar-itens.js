export default class BancoDeDados {
    constructor(storagekey = "itens", id = "id"){
        this.storagekey = storagekey,
        this.id = id
    }

    /* Tratamento de Id */
    obterUltimoId(){
        return parseInt(localStorage.getItem(this.id)) || 0
    }

    salvarNovoId(id){
        localStorage.setItem(this.id, id.toString())
    }

    gerarNovoId(){
        const novoId = this.obterUltimoId() + 1
        this.salvarNovoId(novoId)
        return novoId
    }

    /* Salvar e carregar */
    salvar(itens){
        localStorage.setItem(this.storagekey, JSON.stringify(itens));
    }

    carregar(){
        const dados = localStorage.getItem(this.storagekey)
        try {
            const parsed = JSON.parse(dados);
            return Array.isArray(parsed) ? parsed : [];
          } catch (e) {
            return [];
          }
    }

    /* Adicionar itens, listar, buscar, apagar */
    adicionar(id, nome, categoria, status){
        const itens = this.carregar()
        let novoItem
        
            novoItem = {
                id: id || this.gerarNovoId() || "id não definido",
                nome: nome,
                categoria: categoria, 
                status: status
            }
        
            console.table(novoItem)
        itens.push(novoItem)
        this.salvar(itens)
        return novoItem
    }

    lista(){
        return this.carregar()
    }

    buscarPorId(id){
        const itens = this.carregar()
        const idBusca = parseInt(id)
        return itens.find((item) => item.id === idBusca)
    }

    buscarPorNome(nome){
        const itens = this.carregar()
        const nomeBusca = nome.toLowerCase()

        return itens.filter((item) => {
            return item.nome && item.nome.toLowerCase().includes(nomeBusca)
        })
    }

    remover(id){
        let itens = this.carregar()
        id = parseInt(id);
        itens = itens.filter((item) => item.id !== id);
        this.salvar(itens);
    }

    editar(id, nome, categoria, status){
        const item = this.buscarPorId(id)

        this.remover(id)

        this.adicionar(parseInt(id), nome, categoria, status)
        console.log(item)

        console.log(item)
    }

    /* apagar depois */
    confirmarGravacao(){
        console.log("Item gravado")
        alert("Item gravado")
    }
}