let botao = document.getElementById("botaoTema");
let icone = document.getElementById("iconeTema");
let textoBotao = document.getElementById("textoBotao");
let mensagem = document.getElementById("mensagem");


botao.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        icone.innerHTML = "&#9728;";
        textoBotao.textContent = "Modo claro";
        if (mensagem) mensagem.textContent = "Estamos utilizando o modo escuro";
    } else {
        icone.innerHTML = "&#9790;";
        textoBotao.textContent = "Modo escuro";
        if (mensagem) mensagem.textContent = "Estamos utilizando o modo claro";
    }
});


let cursor = document.getElementById("mousemove", function(evento){
    cursor.style.left = evento.clientx + "px";
    cursor.style.top = evento.clienty + "px";
});

const pokebola = document.querySelector(".pokebola");

if (pokebola) {
    pokebola.addEventListener("click", function () {
        pokebola.classList.remove("balancar");
        void pokebola.offsetWidth;
        pokebola.classList.add("balancar");
    });
}

const itensGaleria = document.querySelectorAll(".item-galeria");
const modalDesenho = document.getElementById("modalDesenho");
const imagemModal = document.getElementById("imagemModal");
const legendaModal = document.getElementById("legendaModal");
const fecharModal = document.getElementById("fecharModal");

if (modalDesenho && imagemModal && legendaModal) {
    itensGaleria.forEach(function (item) {
        item.addEventListener("click", function () {
            const img = item.querySelector("img");
            const legenda = item.querySelector(".legenda-projeto");
            if (img) {
                imagemModal.src = img.src;
                imagemModal.alt = img.alt;
                legendaModal.textContent = legenda ? legenda.textContent : img.alt;
                modalDesenho.classList.add("ativo");
            }
        });
    });

    if (fecharModal) {
        fecharModal.addEventListener("click", function () {
            modalDesenho.classList.remove("ativo");
        });
    }

    modalDesenho.addEventListener("click", function (evento) {
        if (evento.target === modalDesenho) {
            modalDesenho.classList.remove("ativo");
        }
    });
}