const button = document.getElementById("button");
const textinput = document.getElementById("textinput");

function makeLI(text) {
    let li = document.createElement("li");
    li.innerText = text;
    document.querySelector("#text").appendChild(li);
}


function klik() {
    console.log(textinput.value);
    sendmessege(textinput.value);
}
async function sendmessege(prompt) {
    makeLI(prompt);
    const url = "http://localhost:11434/api/generate";
    const Option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "phi3",
            prompt: prompt,
            stream: false
        })

    }


    const response = await (fetch(url, Option));
    const data = await response.json();
    makeLI(data.response);
    console.log(data.response);
}
sendmessege("my name is yago");