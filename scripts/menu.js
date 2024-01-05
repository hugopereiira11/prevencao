const body = document.body

body.innerHTML += `
<div id="float-menu" style="display: none;">
<nav>
  <a href="#" style="text-decoration: line-through;">Área de Trocas</a>
  <a href="#" style="text-decoration: line-through;">Avarias</a>
  <a href="/nav/balanco/balanco.html">Balanço</a>
  <a href="/nav/consumo/consumo.html">Consumo</a>
  <a href="/nav/nfe/nfe.html">Notas de Devolução</a>
  <a href="/nav/orcamentos/orcamentos.html">Orçamentos</a>
  <a href="/nav/perdas/perdas.html">Perdas de Loja</a>
  <a href="#" style="text-decoration: line-through;">Planilhas</a>
  <a href="#" style="text-decoration: line-through;">Sobre</a>
</nav>
</div>

<div id="menu-button">
<input type="checkbox" name="botao-menu" id="botao-menu">
<label for="botao-menu">
    <span id="btn-menu" class="material-icons md-48">
        menu
    </span>
    <span class="material-icons md-48" id="btn-close">
        close
    </span>
</label>
</div>
`
