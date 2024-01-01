const info = document.querySelector('#dadosdez')

fetch('dados.json')
    .then(resp => resp.json())
    .then(dados => {
        dados.dezembro.map((dado) => {
            info.innerHTML += `
                <tr>
                    <td>${dado.setor}</td>
                    <td>${dado.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td><div class="view-pdf"><a href="${dado.link}">Visualizar</a></div></td>
                </tr>
            `
        })

        const total = dados.dezembro.reduce((sum, dado) => {
          return sum + dado.valor;
          
    }, 0)

    const valorTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

    info.innerHTML += `
      <tr>
        <td>Total</td>
        <td style="height: 45.9275px">${valorTotal}</td>
        <td></td>
      </tr>

`
    })
