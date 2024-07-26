// Select DOM elements
const slideElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const passwordElement = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const copyButton = document.querySelector("#copy-button");

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';
let generatedPassword = "";


sizePassword.innerHTML = slideElement.value;


slideElement.oninput = function() {
    sizePassword.innerHTML = this.value;
};


buttonElement.addEventListener("click", generatePassword);


function generatePassword() {

    let pass = "";
    const length = parseInt(slideElement.value, 10);
    const charsetLength = charset.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetLength);
        pass += charset.charAt(randomIndex);
    }


    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
    generatedPassword = pass;
}


function copyPassword() {
    if (generatedPassword) {
        navigator.clipboard.writeText(generatedPassword)
            .then(() => alert("Senha copiada com sucesso!"))
            .catch(err => alert("Erro ao copiar senha: " + err));
    } else {
        alert("Nenhuma senha gerada para copiar.");
    }
}


if (copyButton) {
    copyButton.addEventListener("click", copyPassword);
}
