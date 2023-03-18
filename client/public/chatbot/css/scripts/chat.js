// Collapse-feature-of-chatbot
var coll = document.getElementsByClassName("collapse-button");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

//Shows the time while message
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time ;
}

//First mesaage from the chatbot 
function firstBotMessage() {
    let firstMessage = "Hello,how can I help you?"
    document.getElementById("chatbot-message").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    
    // Update time every second
    setInterval(function() {
        let time = getTime();
        document.getElementById("chat-msg-time").innerHTML = time;
    }, 1000);

    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chatbot-bottom-side").scrollIntoView(true);
}

//Gets the text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "We love coding!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chatbot-bottom-side").scrollIntoView(true);  

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chatbot-bottom-side").scrollIntoView(true);

}

function sendButton() {
    getResponse();
}

//Press enter to send a message in chatbot
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});