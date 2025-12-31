const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.getElementById("letter");
const textElement = document.getElementById("text");
const heart = document.querySelector(".heart");

const letterText = 
`Querida Karen,

Quería darte las gracias por todo.
Con todo, me refiero a cada momento en que has estado ahí,
cada sonrisa que has compartido a mi lado,
cada gesto de cariño.
cada motivación que has generado en mí.
gracias por ayudarme a mejorar como persona,
tanto de manera espiritual, como emocional y mental
Gracias por tu paciencia,
por tu comprensión,
por tu apoyo incondicional.

Quiero que sepas que valoro muchísimo nuestra relación,
y que cada instante contigo es un tesoro que guardo con cariño en mi corazón.
Espero en Dios que me pueda seguir dando vida y la oportunidad de seguir compartiendo momentos inolvidables a tu lado.
Ya que tú eres una de las personas más importantes en mi vida.
Y quiero que siempre estés en ella. 
Hoy pues que acaba el año te lo digo de manera clara y sincera:
Te quiero mucho y quiero que siempre estés a mi lado 🤍.

Espero que estés pasando una exclente noche
Con tus familiares y seres queridos a tu lado.
Te deso lo mejor para este nuevo año que comienza.
Que todos tus sueños y metas se hagan realidad.
Feliz año nuevooooooooo 🎉🎊🥳 Te quiero muchoooo 🤍`;

let index = 0;

function typeText() {
    if (index < letterText.length) {
        textElement.textContent += letterText.charAt(index);
        index++;
        setTimeout(typeText, 50);
    } else {
        letter.classList.add('typing-complete');
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