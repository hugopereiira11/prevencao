const orcamentos = document.querySelector("#orcamentos");

fetch("nav/orcamentos/dados.json")
  .then((resp) => resp.json())
  .then((dados) => {

    let  data = dados.length

    orcamentos.innerHTML += `
        <div class="content">
            <div class="info">
                <div class="fornecedor">${dados[data - 1].fornecedor}</div>
                <div class="numero">${dados[data - 1].num}</div>
                <div class="loja">${dados[data - 1].loja}</div>
                <div class="valor">${dados[data - 1].valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                <div class="data">${dados[data - 1].data}</div>
                <div class="estado">${dados[data - 1].estado}</div>
            </div>
            <div class="view-pdf"><a href="${dados[data - 1].link}">Visualizar</a></div>
        </div>

        <div class="content">
            <div class="info">
                <div class="fornecedor">${dados[data - 2].fornecedor}</div>
                <div class="numero">${dados[data - 2].num}</div>
                <div class="loja">${dados[data - 2].loja}</div>
                <div class="valor">${dados[data - 2].valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                <div class="data">${dados[data - 2].data}</div>
                <div class="estado">${dados[data - 2].estado}</div>
            </div>
            <div class="view-pdf"><a href="${dados[data - 2].link}">Visualizar</a></div>
        </div>

        <div class="content">
            <div class="info">
                <div class="fornecedor">${dados[data - 3].fornecedor}</div>
                <div class="numero">${dados[data - 3].num}</div>
                <div class="loja">${dados[data - 3].loja}</div>
                <div class="valor">${dados[data - 3].valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                <div class="data">${dados[data - 3].data}</div>
                <div class="estado">${dados[data - 3].estado}</div>
            </div>
            <div class="view-pdf"><a href="${dados[data - 3].link}">Visualizar</a></div>
        </div>
    
    `;
  });
