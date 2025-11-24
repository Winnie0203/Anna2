const btn = document.getElementById("startProtocol");
const dialogueBox = document.getElementById("dialogueBox");
const popup = document.getElementById("popup");
const finalPopup = document.getElementById("finalPopup");

const lines = [
    "Connor prototype ST–200: Detecting procrastination… confirmed.",
    "Gaming detected. Neural focus dropping.",
    "Mission priority: AIML exam. Failure probability: 69%.",
    "Correct action: STUDY."
];

btn.addEventListener("click", () => {
    btn.style.display = "none";
    subtitle.innerText = "Study Mode Activated...";
    dialogueBox.style.display = "block";
    runDialogue();
});

function runDialogue() {
    let index = 0;

    const typeNextLine = () => {
        if (index >= lines.length) {
            popup.style.display = "none";
            setTimeout(() => finalPopup.style.display = "block", 800);
            return;
        }

        dialogueBox.innerHTML = "";
        let charIndex = 0;
        let line = lines[index];

        activatePopupOnce();

        const typeInterval = setInterval(() => {
            dialogueBox.innerHTML += line[charIndex];
            charIndex++;
            if (charIndex >= line.length) {
                clearInterval(typeInterval);
                index++;
                setTimeout(typeNextLine, 2500);
            }
        }, 60);
    };

    typeNextLine();
}

function activatePopupOnce() {
    popup.style.top = "20px";
    setTimeout(() => popup.style.top = "-200px", 2300);
}
