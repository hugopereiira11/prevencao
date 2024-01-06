const planilhas = document.querySelector('#planilhas')

fetch('dados.json')
.then(resp => resp.json())
.then(dados => {
    let ordem = dados.sort((a,b) => {
        if(a.nome < b.nome) {
            return -1
        }
    })

    ordem.map(item => {
        planilhas.innerHTML += `
        <tr>
            <td>${item.nome}</td>
            <td><div class="view-pdf"><a href="${item.link}">Visualizar</a></div></td>
        </tr>        
        `
    })
})