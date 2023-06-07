cardAberto = false;

if (document.title.includes("Agendamentos")) {
  const pedidoMinimizado = document.querySelectorAll('.pedido-minimizado');
  const pedidoMax = document.querySelectorAll('.pedido-maximizado');

  for (let i = 0; i < pedidoMinimizado.length; i++) {
    pedidoMinimizado[i].addEventListener('click', function() {
      if (cardAberto) {
        pedidoMax[i].style.display = 'none';
        cardAberto = false;
      } else {
        pedidoMax[i].style.display = 'block';
        cardAberto = true;
      }
    });
  }
} else if (document.title.includes("Histórico")) {
  const pedidoMinimizado = document.querySelectorAll('.pedido-minimizado');
  const pedidoMax = document.querySelectorAll('.pedido-maximizado');

  for (let i = 0; i < pedidoMinimizado.length; i++) {
    pedidoMinimizado[i].addEventListener('click', function() {
      if (cardAberto) {
        pedidoMax[i].style.display = 'none';
        cardAberto = false;
      } else {
        pedidoMax[i].style.display = 'block';
        cardAberto = true;
      }
    });
  }
} else if (document.title.includes("Avaliação")) {
  const cardMinimizado = document.getElementById('cardMinimizado');
  const cardMax = document.getElementById('cardMax');

  cardMinimizado.addEventListener('click', function() {
    if (cardAberto) {
      cardMax.style.display = 'none';
      cardAberto = false;
    } else {
      cardMax.style.display = 'block';
      cardAberto = true;
    }
  });
  
}






