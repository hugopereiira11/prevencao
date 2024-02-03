const nfe = document.querySelector("#nfe");

fetch("nav/nfe/dados.json")
  .then((resp) => resp.json())
  .then((dados) => {
    dados = dados.reverse();

    nfe.innerHTML = "";

    nfe.innerHTML = `
    <div id="title">
        <h2>Últimas Devoluções...</h2>
        <a href="nav/nfe/nfe.html">Ver todos</a>
    </div>
    <hr>
    `;

    for (let i = 0; i < 5; i++) {
      nfe.innerHTML += `
            <div class="content">
                <div class="info">
                    <div class="fornecedor">${dados[i].fornecedor}</div>
                    <div class="loja">${dados[i].loja}</div>
                    <div class="valor">${dados[i].valor.toLocaleString(
                      "pt-BR",
                      { style: "currency", currency: "BRL" }
                    )}</div>
                    <div class="pagamento">${dados[i].pag}</div>
                    <div class="data">${dados[i].data}</div>
                </div>
                <div class="view-pdf"><a href="${
                  dados[i].link
                }">Visualizar</a></div>
            </div>
        `;
    }
  });
