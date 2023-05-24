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
document.getElementById("buttonLogin").addEventListener("click", function() {
    var emailLogin = document.getElementById("emailLogin").value;
    if (emailLogin == "admin") {
        window.location.href = '/admin/admin.html';
    }
    else if (emailLogin == 'gerente') {
        window.location.href = '/gerente/gerente.html'
    }
    else {
        window.location.href = '/user/telaLanchonetes.html';
    }
});