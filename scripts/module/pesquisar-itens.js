export function pesquisarPorNome(itens, nome){
    const nomeBusca = nome.toLowerCase()
    return itens.filter(item => {
        return item.nome && item.nome.toLowerCase().includes(nomeBusca)
    })
}

export function pesquisarPorCategoria(itens, categoriasMarcadas){
    return itens.filter(item => 
        categoriasMarcadas.includes(item.categoria)
    )
}

export function pesquisarPorStatus(itens, statusMarcado){
    return itens.filter(item => 
        statusMarcado.includes(item.status)
    )
}