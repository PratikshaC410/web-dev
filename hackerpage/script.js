const terminal = document.getElementById("terminal");


const messages = [
    "Initializing Network...",
    "Checking encryption...",
    "Connecting to remote service...",
    "Retrieving username...",
    "Username found: gd",
    "Analyzing password security...",
    "Trying a combination of 4.5 trillion passwords...",
    "Decrypting...",
    "Password found: 17042006",
    "Accessing mainframe...",
    "Bypassing firewall...",
    "Connecting to Facebook...",
    "Connection established.",
    "Downloading user data...",
    "Process Complete."
];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLine(text) {
    for (let char of text) {
        terminal.textContent += char;
        await sleep(10);  
    }
    terminal.textContent += "\n";
    await sleep(100);
}

async function runTerminal() {
    for (let msg of messages) {
        await typeLine(msg);
    }
}

runTerminal();
