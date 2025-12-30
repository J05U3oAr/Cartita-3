const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.getElementById("letter");
const textElement = document.getElementById("text");
const heart = document.querySelector(".heart");

const letterText = 
`Querida ___,

Quería decirte esto con calma,
como se dicen las cosas importantes.

No con prisas,
no con mensajes rápidos.

Gracias por estar.
Gracias por quedarte.

Con cariño,
Arodi`;

let index = 0;

function typeText() {
    if (index < letterText.length) {
        textElement.textContent += letterText.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

envelope.addEventListener("click", () => {
    flap.style.transform = "rotateX(180deg)";
    heart.style.opacity = "0";

    setTimeout(() => {
        letter.style.display = "block";
        typeText();
    }, 1000);
});
