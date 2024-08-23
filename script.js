const formOpenBtn = document.querySelector("#form-open"),
    home  = document.querySelector(".home"),
    formContainer  = document.querySelector(".form_container"),
    formCloseBtn  = document.querySelector(".form_close"),
    signupBtn  = document.querySelector("#signup"),
    loginBtn  = document.querySelector("#login"),
    pwShowHide  = document.querySelectorAll(".uil-eye");

    formOpenBtn.addEventListener("click", () => home.classList.add("show"))
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"))
    
    pwShowHide.forEach((icon) => {
        icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-lock", "uil-eye");
        }else {
            getPwInput.type = "passoword";
            icon.classList.replace("uil-lock");
        }
        })
    });

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.add("active");
    });
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.remove("active")
    });

    const termosCheckbox = document.getElementById('termosCheckbox');
    const lgpdContent = document.getElementById('lgpdContent');
    const lerMaisLink = document.getElementById('lerMais');
    const lgpdRestante = document.getElementById('lgpdRestante');
    const abrirLGPDLink = document.getElementById('abrirLGPD');
    const termosLabel = document.getElementById('termosLabel');

    lerMaisLink.addEventListener('click', function(event) {
    event.preventDefault();
    lgpdRestante.classList.remove('hidden');
    lerMaisLink.style.display = 'none';
});

    abrirLGPDLink.addEventListener('click', function(event) {
    event.preventDefault();
    termosCheckbox.checked = true;
    lgpdContent.classList.add('show');
});

    termosCheckbox.addEventListener('change', function() {
    if (this.checked) {
        lgpdContent.classList.add('show');
    } else {
        lgpdContent.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", function() {
   
    var url = window.location.href;

   
    var navLinks = document.querySelectorAll(".nav_link");

    
    navLinks.forEach(function(link) {
        
        if (link.href === url) {
            
            link.classList.add("active");
        }
    });
});


function countCharacters() {
    var message = document.getElementById("message").value;
    var charCount = document.getElementById("charCount");
    charCount.textContent = message.length + "/2000";
}



function previewFile() {
    const preview = document.getElementById('pet-image');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "default.jpg"; // Caso nenhum arquivo seja selecionado, volta para a imagem padrão
    }
}