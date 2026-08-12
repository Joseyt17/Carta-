
    // SOBRE

    const sobre = document.getElementById("sobre");

    sobre.addEventListener("click", () => {
        sobre.classList.toggle("abierto");
    });


    // CORAZONES FLOTANTES

    const contenedor = document.querySelector(".corazones");

    for (let i = 0; i < 40; i++) {

        const corazon = document.createElement("span");

        corazon.textContent = "❤️";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            (12 + Math.random() * 25) + "px";

        corazon.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        corazon.style.animationDelay =
            Math.random() * 8 + "s";

        contenedor.appendChild(corazon);
    }
