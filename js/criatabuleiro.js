let tabuleiro;

// Cria campos de texto em quantidade proporcional a quantidade de letras da palavra que foi sorteada
for(i=0;i<sessionStorage.getItem('palavraSorteada').length;i++){
    tabuleiro = document.createElement('input');  
    selecionarElemento('main').appendChild(tabuleiro);
  };