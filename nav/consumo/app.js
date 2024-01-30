const main = document.querySelector('main')

fetch('dados.json')
.then(resp => resp.json())
.then(dados => {
    dados = dados.sort(( a, b ) => {
        if (a.setor < b.setor) {
            return -1;
        }
    })

    let meses = dados.map(dado => dado.mes)
    meses = [...new Set( meses )]

    function consumo() {

        main.innerHTML = ''

        main.innerHTML = `
            <h2>Relatório de Consumo</h2>
            <hr />
        `

        meses.map( mes => {

            let filtro = dados.filter(dado => dado.mes == mes)

            main.innerHTML += `
                <div class="mes">
                    <h3>${mes}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Setor</th>
                                <th>Valor</th>
                                <th>PDF</th>
                            </tr>
                        </thead>
                        <tbody id="${mes}"></tbody>
                    </table>
                </div>
            `

            filtro.map(dado => {
                document.getElementById(mes).innerHTML += `
                    <tr>
                        <td>${dado.setor}</td>
                        <td>${dado.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>
                            <div class="view-pdf">
                                <a href="${dado.link}" ${dado.link == "" ? 'style="text-decoration: line-through;"' : ''}>Visualizar</a>
                            </div>
                        </td>
                    </tr>
                `
            })

            const total = filtro.reduce((sum, dado) => {
                return sum + dado.valor
            }, 0)

            document.getElementById(mes).innerHTML += `
                <tr>
                    <td>Total</td>
                    <td style="height: 45.9275px">${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td></td>
                </tr>
            `
        })


    }

    consumo()

})