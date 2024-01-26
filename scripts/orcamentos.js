const orcamentos = document.querySelector('#orcamentos')

fetch("nav/orcamentos/dados.json")
  .then((resp) => resp.json())
  .then((dados) => {
    dados = dados.reverse()

    orcamentos.innerHTML = ""

    orcamentos.innerHTML = `
    <div id="title">
        <h2>Últimos Orçamentos...</h2>
        <a href="nav/orcamentos/orcamentos.html">Ver todos</a>
    </div>
    <hr>
    `

    for (let i = 0; i < 5; i++) {
        orcamentos.innerHTML += `
            <div class="content">
                <div class="info">
                    <div class="fornecedor">${dados[i].fornecedor}</div>
                    <div class="numero">${dados[i].num}</div>
                    <div class="loja">${dados[i].loja}</div>
                    <div class="valor">${dados[i].valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                    <div class="data">${dados[i].data}</div>
                    <div class="estado">${dados[i].estado}</div>
                </div>
                <div class="view-pdf"><a href="${dados[i].link}">Visualizar</a></div>
            </div>
        `
    }
  });
