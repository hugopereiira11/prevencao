const janeiro = document.querySelector('#janeiro')

fetch('./dados.json').then(resp => resp.json())
.then(dados => {
    let filtrojan = dados.filter(dado => dado.mes === 'janeiro')

    filtrojan.map(dado => {
        janeiro.innerHTML += `
            <div class="content">
                <div class="info">
                    <div class="fornecedor">${dado.fornecedor}</div>
                    <div class="data">${dado.data}</div>
                </div>
                <div class="view-pdf">
                    <a href="${dado.link}">Visualizar</a>
                </div>
            </div>
        `
    })
}).catch(err => console.log(err))