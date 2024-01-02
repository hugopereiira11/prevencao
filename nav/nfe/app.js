const jan2024 = document.querySelector('#jan2024')

fetch('dados.json')
.then(resp => resp.json())
.then(dados => {
    
    let mes = dados.filter((item) => {
        return item.mes == 'janeiro'
    })

    let data = mes.sort((a, b) => {
        if (a.fornecedor < b.fornecedor) {
            return -1
        }
    })


    data.map((item) => {
        jan2024.innerHTML += `
            <div class="content">
                <div class="info">
                    <div class="fornecedor">${item.fornecedor}</div>
                    <div class="loja">${item.loja}</div>
                    <div class="valor">${item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                    <div class="pagamento">${item.pag}</div>
                    <div class="data">${item.data}</div>
                </div>
                <div class="view-pdf"><a href="${item.link}">Visualizar</a></div>
            </div>`;
    });
})