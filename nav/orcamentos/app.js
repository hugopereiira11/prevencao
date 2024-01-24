const main = document.querySelector("main");

fetch("dados.json").then((resp) => resp.json())
  .then((dados) => {


    /// Ordem Alfabética
    dados = dados.sort((a, b) => {
      if (a.fornecedor < b.fornecedor) {
        return -1;
      }
    })

    /// Renderização dos Orçamentos
    
    let meses = dados.map(dado => dado.mes)

    let unique = [...new Set(meses)]

    unique.map(mes => {

      let filtro = dados.filter(dado => dado.mes == mes)

      main.innerHTML = `
        <h2>Lista de Orçamentos</h2>
        <hr />    
      `

      main.innerHTML += `
        <div class="mes">
          <h3>${mes}</h3>
          <div id="${mes}" class="dados"></div>
        </div>
      `

      filtro.map(dado => {
        document.getElementById(mes).innerHTML += `
        <div class="content">
          <div class="info">
              <div class="fornecedor">${dado.fornecedor}</div>
              <div class="numero">${dado.num}</div>
              <div class="loja">${dado.loja}</div>
              <div class="valor">${dado.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
              <div class="data">${dado.data}</div>
              <div class="estado">${dado.estado}</div>
          </div>
          <div class="view-pdf"><a href="${dado.link}">Visualizar</a></div>
      </div>
        `
      })
    })
            
  });
