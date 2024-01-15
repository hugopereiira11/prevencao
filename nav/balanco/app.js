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
        <td><div class="view-pdf" ${!item.entrada ? 'style="text-decoration: line-through;"': ''}><a href="${!item.entrada ? '#' : item.entrada}" ${!item.entrada ? 'style="text-decoration: line-through;"': ''}>Visualizar</a></div></td>
        <td><div class="view-pdf" ${!item.saida ? 'style="text-decoration: line-through;"': ''} ><a href="${!item.saida ? '#' : item.saida}" ${!item.saida ? 'style="text-decoration: line-through;"': ''}>Visualizar</a></div></td>
    </tr>
`
    })
    
})

