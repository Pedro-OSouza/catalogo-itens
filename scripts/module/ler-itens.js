export default class TabelaRenderizadora {
    constructor(tbody, aoEditar = null, aoDeletar = null) {
      this.tbody = tbody;
      this.aoEditar = aoEditar;
      this.aoDeletar = aoDeletar;
    }
  
    renderizar(dados) {
      this.tbody.innerHTML = "";
      dados.forEach((item) => {
        const linha = this.criarLinha(item);
        this.tbody.appendChild(linha);
      });
    }
  
    criarLinha(item) {
      const tr = document.createElement("tr");

      tr.appendChild(this.criarCelula(item.id));
      tr.appendChild(this.criarCelula(item.nome, { colSpan: 3 }));
      tr.appendChild(this.criarCelula(item.categoria));
      tr.appendChild(this.criarCelula(item.status));
      tr.appendChild(this.criarCelula("Editar", {
        className: "btn editar",
        id: item.id,
        href: `./editar.html?id=${item.id}`,
        onClick: () => this.aoEditar?.(item),
      }))

      tr.appendChild(
        this.criarCelula("Deletar", {
          className: "btn deletar",
          id: item.id,
          onClick: () => {
            this.aoDeletar?.(item.id)
          }
        })
      );
  
      return tr;
    }
  
    criarCelula(conteudo, { colSpan = 1, className = "", id = "", onClick = null, href = "" } = {}) {
      const td = document.createElement("td");
      const link = document.createElement("a");
      if (href) {
        link.href = href
        td.appendChild(link)
        link.textContent = conteudo
      }else {
        td.textContent = conteudo;
      }
      if (colSpan > 1) td.colSpan = colSpan;
      if (className) td.className = className;
      if (id) td.id = id
      if (onClick) {
        td.style.cursor = "pointer";
        td.addEventListener("click", onClick);
      }
      return td;
    }
  }