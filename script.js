cardAberto = false;

if (document.title.includes("Agendamentos")) {
  const pedidoMinimizado = document.querySelectorAll('.pedido-minimizado i');
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
  
} else if (document.title.includes("Login")) {
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute("type", type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });

  function logar() {
    var email = document.getElementById("login").value;
    var senha = document.getElementById("password").value;  
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos");
        return false; 
    }       
    var tipoUsuario;
    if (email === "admin@example.com" && senha == "admin") {
        tipoUsuario = "admin";
    } else if (email === "gerente@example.com" && senha == "gerente") {
        tipoUsuario = "gerente";
    } else if (email === "user@example.com" && senha == "user123") {
        tipoUsuario = "usuario";
    }          
    if (tipoUsuario === "admin") {
        window.location.href = "/admin/admin.html";
        alert("Bem-vindo, admin!");
    } else if (tipoUsuario === "gerente") {
        window.location.href = "/gerente/gerente.html";
        alert("Bem-vindo, gerente!");
    } else if (tipoUsuario === "usuario") {
        window.location.href = "/user/telaLanchonetes.html";
        alert("Bem-vindo, usuário comum!");
    }
    else {
        alert("Usuário ou senha incorretos");
    }
  }
} else if (document.title.includes("Cadastro")) {
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute("type", type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });

  const togglePassword2 = document.querySelector('#togglePassword1');
  const password2 = document.querySelector('#confirm-password');

  togglePassword2.addEventListener('click', function (e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute("type", type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });

  function formatarCPF(campo) {
    var cpf = campo.value.replace(/\D/g, '');

    if (cpf.length > 10) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    campo.value = cpf;
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    const cpfInput = document.getElementById('cpf');
    const defaultPlaceholder = 'CPF';

    cpfInput.addEventListener('focus', () => {
        if (cpfInput.value === '') {
        cpfInput.placeholder = '000.000.000-00';
        }
    });

    cpfInput.addEventListener('blur', () => {
        if (cpfInput.value === '') {
        cpfInput.placeholder = defaultPlaceholder;
        }
    });
  });
}

function confirmarRetirada() {
  var overlay = document.getElementById("confirmarRetirada");
  overlay.style.display = "flex";
}
function ocultarDiv() {
  var overlay = document.getElementById("confirmarRetirada");
  overlay.style.display = "none";
}