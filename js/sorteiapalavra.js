let palavra;
let palavraSorteada;

selecionarElemento('#comecar').addEventListener('click', function(){
    // Sorteia uma palavra do vetor "palavras"
    palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)];
    
    // Evita que a palavra sorteada seja igual a anterior
    while(palavraSorteada == sessionStorage.getItem('palavraSorteada')){
          palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)];
    }
    
    // Atualiza o valor da palavra sorteada gravada na SessionStorage 
    sessionStorage.setItem('palavraSorteada', palavraSorteada);
  });