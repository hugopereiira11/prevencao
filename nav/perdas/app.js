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
    })
