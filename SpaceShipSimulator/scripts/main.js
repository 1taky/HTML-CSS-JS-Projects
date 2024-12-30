const terminalDisplay = document.getElementById("terminal-display");
const inputContent = document.getElementById("input-line");

function displayOutput(text) {
    const output = document.createElement('div');
    output.textContent = text;
    terminalDisplay.appendChild(output);
    terminalDisplay.scrollTop = terminalDisplay.scrollHeight;
}

function helpCommandOutput() {
    const helpOutput = [' -> help - This window', '-> clear - Clear all the commands before'];
    for (let i = 0; i < helpOutput.length; i++) {
        const output = document.createElement('div');
        output.textContent = helpOutput[i];
        terminalDisplay.appendChild(output);
        terminalDisplay.scrollTop = terminalDisplay.scrollHeight;
    }
}

function commandChecker(input) {
    switch(input.trim().toLowerCase()) {
        case 'help':
            helpCommandOutput();
            break;
        case 'clear':
            const clear = () => {terminalDisplay.innerHTML = '';}
            clear();
        break;

        default:
            displayOutput('Unknown command');

    }
}

inputContent.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const input = inputContent.value;
        displayOutput('> ' + input);
        commandChecker(input);
        inputContent.value = '';
    }
}); 
