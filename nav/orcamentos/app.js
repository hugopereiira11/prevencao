const main = document.querySelector("main");

fetch("dados.json").then((resp) => resp.json())
  .then((dados) => {

    /// Renderização dos Orçamentos
    
    let meses = dados.map(dado => dado.mes)


    let unique = [...new Set(meses)]

    console.log(unique)

    

    function allData() {

      main.innerHTML = ""

      main.innerHTML = `
        <h2>Lista de Orçamentos</h2>
        <hr />
      `

      unique.map(mes => {

        let filtro = dados.filter(dado => dado.mes == mes)

        let filtroSort= filtro.sort((a, b) => {
          if (a.fornecedor < b.fornecedor) {
            return -1;
          }
        }) 


        main.innerHTML += `
          <div class="mes">
            <h3>${mes}</h3>
            <div id="${mes}" class="dados"></div>
          </div>
        `

        filtroSort.map(dado => {
          document.getElementById(mes).innerHTML += `
          <div class="content">
            <div class="info">
                <div class="fornecedor">${dado.fornecedor}</div>
                <div class="numero">${dado.num}</div>
                <div class="loja">${dado.loja}</div>
                <div class="valor">${dado.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                <div class="data">${dado.data}</div>
            </div>
            <div class="view-pdf"><a href="${dado.link}">Visualizar</a></div>
        </div>
          `
        })

        
      })
    }

    allData()

    /// Barra de Pesquisa
    let searchInput = document.querySelector('#search-input')

    searchInput.oninput = function() {
      let filtro = dados.filter(dado => dado.fornecedor.toLowerCase().includes(searchInput.value.toLowerCase()))

      let filtroSort= filtro.sort((a, b) => {
          if (a.fornecedor < b.fornecedor) {
            return -1;
          }
        })

      main.innerHTML = `
          <h2>Lista de Orçamentos</h2>
          <hr />    
      `

      filtroSort.map(dado => {
        main.innerHTML += `
        <div class="content">
          <div class="info">
              <div class="fornecedor">${dado.fornecedor}</div>
              <div class="numero">${dado.num}</div>
              <div class="loja">${dado.loja}</div>
              <div class="valor">${dado.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
              <div class="data">${dado.data}</div>
          </div>
          <div class="view-pdf"><a href="${dado.link}">Visualizar</a></div>
      </div>
        `
      })

      if (searchInput.value == '') {
        allData()
      }

    }

            
  });
