const jan2024 = document.querySelector('#jan2024')

fetch('./dados.json')
.then(resp => resp.json())
.then(dados => {
    let jan = dados.filter((item) => {
        return item.mes === "janeiro"
    })

    jan.map((item) => {
        
    jan2024.innerHTML += `
    <tr>
        <td>${item.setor}</td>
        <td><div class="view-pdf"><a href="${item.link}">Visualizar</a></div></td>
    </tr>
`
    })
    
})