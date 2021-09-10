/*-----inicio classe criada sidebar-----*/
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu");  //toggle é alteração(adicionar ou remover)uma classe chamada show-menu/ se tiver ele tira, se nao tiver ele coloca(informa o estado) se é exibido ou oculto
});
/*-----fim classe criada sidebar-----*/

/*-------script para orçamento-------*/
//1ª tratamento d evento da caixa de texto

document.querySelector("#qtde").addEventListener("change", atualizarPreco) 
document.querySelector("#js").addEventListener("change", atualizarPreco) 
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco) 
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco) 

document.querySelector("#prazo").addEventListener("change",function (){
     const prazo = docum.querySelector("#prazo").value
     document.querySelector("label[for=prazo]").innerHTML = 'Prazo: ${prazo} semanas'
     atualizarPreco()
}) 

function atualizarPreco(){

     const qtde = document.querySelector("#qtde").value
     const temJS = document.querySelector("#js").checked
     const incluiLayout = docum.querySelector("#layout-sim").checked
     const prazo = docum.querySelector("#prazo").value
     
     let preco = qtde*100; 
     if(temJS) {
          preco = preco  + (preco * 0.1);
      }
     if(incluiLayout){
          preco = preco + 500;
     }

     let taxaUrgencia = 1 - preco * 0.1;
     preco = preco + (preco * taxaUrgencia);
     document.querySelector("#preco").innerHTML = "Total do serviço:<br> R$ " + preco.toFixed(2);



}


