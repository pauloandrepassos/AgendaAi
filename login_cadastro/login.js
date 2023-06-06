const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');

            togglePassword.addEventListener('click', function (e) {
                // toggle the type attribute
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute("type", type);
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');


                // toggle the eye slash icon
            });
function logar() {
    var email = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
              
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