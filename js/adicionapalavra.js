let novaPalavra;
let palavras = [];
let p

selecionarElemento('#adicionar').addEventListener('click', function(){
  // Acrescenta uma nova palavra no vetor "palavras" 
  novaPalavra = selecionarElemento('#novaPalavra').value; 
  palavras.push(novaPalavra);
  
  // Acrescenta uma nova palavra na div "palavras" 
  p = document.createElement('p');
  p.textContent = novaPalavra;
  selecionarElemento('#palavras').appendChild(p);

  // Limpa o campo de texto "novaPalavra" para evitar duplicidade de valores no vetor "palavras"
  selecionarElemento('#novaPalavra').value = "";

  // Atualiza o valor do vetor "palavras" gravado na SessionStorage
  sessionStorage.setItem('palavras', palavras);
  return palavras;
});