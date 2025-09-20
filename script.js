
                                const sparkleContainer = document.getElementById('sparkle-container');
const container = document.querySelector('.container');
const bodyContainer = document.querySelector('.body-container');
// CAMBIAR: Frases que saldran al hacer clic
const cuteMessages = [
    "¡Eres especial! ✨",
    "Te amo mucho ❤️",
    "¡Eres hermosa!",
    "Eres mi luz interior 🌟",
    "Mi amor por ti es ilimitado 🌸",
    "Eres mi lugar seguro 🫀",
    "¡Tu sonrisa ilumina todo! 😊",
    "Tu abrazo es mi refugio 🤗",
    "Eres increíble 💖",
    "¡Nunca dejes de brillar!",
    "Eres mi inspiración 🌟",
    "Tu sonrisa me da felidad 🌸",
    "Eres todo para mi ❤️",
];
document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);

        const moveX = Math.cos(angle) * 3;
        const moveY = Math.sin(angle) * 4;

        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

setInterval(createSparkle, 300);

bodyContainer.addEventListener('click',(event) => {
    createCuteMessage(event);
})

function createCuteMessage(e) {
    const randomIndex = Math.floor(Math.random() * cuteMessages.length);
    const messageText = cuteMessages[randomIndex];

    const messageElement = document.createElement('div');
    messageElement.classList.add('cute-message');
    messageElement.innerText = messageText;

    document.body.appendChild(messageElement);

    messageElement.style.left = `${e.clientX}px`;
    messageElement.style.top = `${e.clientY}px`;

    setTimeout(() => {
        messageElement.remove();
    }, 2500);
}
                            