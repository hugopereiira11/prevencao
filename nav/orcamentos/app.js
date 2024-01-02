const dez2023 = document.querySelector("#dez2023");

fetch("dados.json")
  .then((resp) => resp.json())
  .then((dados) => {
    console.log(dados)

    let mes = dados.filter((item) => {
      return item.mes == 'dezembro'
    })

    let data = mes.sort((a, b) => {
      if (a.fornecedor < b.fornecedor) {
        return -1;
      }
    });

    data.map((orc) => {
      dez2023.innerHTML += `
            <div class="content">
                <div class="info">
                    <div class="fornecedor">${orc.fornecedor}</div>
                    <div class="numero">${orc.num}</div>
                    <div class="loja">${orc.loja}</div>
                    <div class="valor">${orc.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                    <div class="data">${orc.data}</div>
                    <div class="estado">${orc.estado}</div>
                </div>
                <div class="view-pdf"><a href="${orc.link}">Visualizar</a></div>
            </div>`;
    });
  });
