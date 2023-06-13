const estatisticas = document.querySelectorAll("[data-estatistica]");
const controle = document.querySelectorAll(".controle-ajuste");
const pecas = {
   "bracos": {
       "forca": 29,
       "poder": 35,
       "energia": -21,
       "velocidade": -5
   },
 
   "blindagem": {
       "forca": 41,
       "poder": 20,
       "energia": 0,
       "velocidade": -20
   },
   "nucleos":{
       "forca": 0,
       "poder": 7,
       "energia": 48,
       "velocidade": -24
   },
   "pernas":{
       "forca": 27,
       "poder": 21,
       "energia": -32,
       "velocidade": 42
   },
   "foguetes":{
       "forca": 0,
       "poder": 28,
       "energia": 0,
       "velocidade": -2
   }
}

controle.forEach(elemento => {
    elemento.addEventListener("click", (evento) => {
        manipulandoDados(evento.target.dataset.controle, evento.target.parentNode);
        alterandoEstatisticas(evento.target.dataset.controle, pecas[evento.target.dataset.peca]);
    });
});


 function manipulandoDados(operacao, x) {
    let peca = x.querySelector("[data-contador]");

    if(operacao === "+"){
       peca.value = parseInt(peca.value) + 1;
    } else {
       peca.value = parseInt(peca.value) - 1;
    }

 };

 function alterandoEstatisticas(operacao, x) {
   estatisticas.forEach(elemento => {
      if(operacao === "+"){
         elemento.textContent = parseInt(elemento.textContent) + x[elemento.dataset.estatistica];
      } else {
         elemento.textContent = parseInt(elemento.textContent) - x[elemento.dataset.estatistica];
      }
   });
 };









