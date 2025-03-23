const button = document.getElementById('copy');
const main_paragraph = document.getElementById('main_paragraph');
const message = document.getElementById('message');

// Array of random texts
const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "Life is what happens when you're busy making other plans.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Happiness depends upon ourselves."
];

// Function to select a random text
function getRandomText() {
    return texts[Math.floor(Math.random() * texts.length)];
}

// Set random text on page load
main_paragraph.textContent = getRandomText();

function copyToClipboard(element) {
    navigator.clipboard.writeText(element.textContent)
        .then(() => {
            message.textContent = "Copied to Clipboard!";
            message.classList.add('after-clicked');
            message.style.opacity = '1';

            // Gradually fade out the message
            setTimeout(() => {
                message.style.transition = 'opacity 1s ease-out';
                message.style.opacity = '0';
            }, 1500);
        })
        .catch(() => {
            console.log('Unable to Copy The Data!');
        });
}

button.addEventListener('click', () => copyToClipboard(main_paragraph));
