/*-----inicio classe criada sidebar-----*/
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu");  //toggle é alteração(adicionar ou remover)uma classe chamada show-menu/ se tiver ele tira, se nao tiver ele coloca(informa o estado) se é exibido ou oculto
});
/*-----fim classe criada sidebar-----*/