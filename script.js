const cardMinimizado = document.getElementById('cardMinimizado');
const cardMax = document.getElementById('cardMax');

let cardAberto = false;

cardMinimizado.addEventListener('click', function() {
  if (cardAberto) {
    cardMax.style.display = 'none';
    cardAberto = false;
  } else {
    cardMax.style.display = 'block';
    cardAberto = true;
  }
});