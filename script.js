// roda o script apenas quando a pagina estiver totalmente carregada
document.addEventListener('DOMContentLoaded', function () {

    // --- DARK MODE ---
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;

    // função que aplica o tema salvo e troca o icone do botão
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };

    // ao carregar, verifica se o usuario já tinha um tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // evento de clique no botão para alternar o tema
    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // salva a escolha do usuario
    });


    // --- LÓGICA DE VALIDAÇÃO DO FORMULÁRIO ---
    const form = document.querySelector('#cadastroForm');
    
    // evento de envio do formulario.
    form.addEventListener('submit', function (event) {
        // impede o recarregamento da pagina para a validação via JS
        event.preventDefault();
        event.stopPropagation();

        // valida os campos usando os atributos 'required' do HTML
        if (form.checkValidity()) {
            alert('Cadastro e agendamento realizados com sucesso!');
            form.reset(); 
            form.classList.remove('was-validated');
        } else {
            // mostra os feedbacks de erro do Bootstrap
            form.classList.add('was-validated');
        }
    });

});
