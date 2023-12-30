const body = document.body

body.innerHTML += `
<div id="float-menu" style="display: none;">
<nav>
  <a href="#">Área de Trocas</a>
  <a href="#">Avarias</a>
  <a href="/nav/consumo/consumo.html">Consumo</a>
  <a href="/nav/orcamentos/orcamentos.html">Orçamentos</a>
  <a href="/nav/perdas/perdas.html">Perdas</a>
  <a href="#">Sobre</a>
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