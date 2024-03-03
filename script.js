// document.addEventListener("DOMContentLoaded", () => {
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", fetchSearchData);

//     const searchInput = document.getElementById("search-input");

//     searchInput.addEventListener('keyup', function (event) {
//         if (event.key === 'Enter') {
//             fetchSearchData();
//             searchInput.value = ''; // Clear the input field after sending
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // Display initial bot message
//     const initialBotMessage = {
//         type: "bot",
//         message: "Hello, how can I help you?"
//     };
//     displayBotMessageWithTypingEffect(initialBotMessage);

//     // Rest of your existing code...
// });




// const chatHistory = [];

// function fetchSearchData() {
//     const searchInput = document.getElementById("search-input").value;
//     const userMessage = { type: "user", message: searchInput };
//     chatHistory.push(userMessage);
//     displayUserMessage(userMessage);
//     const apiUrl = `http://127.0.0.1:5000/${searchInput}`;

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(data => {
//             const botMessage = { type: "bot", message: data.response.response };
//             chatHistory.push(botMessage);
//             displayBotMessageWithTypingEffect(botMessage);
//         })
//         .catch(error => console.error("Error fetching data:", error));
// }

// function displayUserMessage(message) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageDiv = document.createElement("div");
//     messageDiv.className = message.type;
//     const messageText = document.createElement("p");
//     messageText.textContent = message.message;
//     messageDiv.appendChild(messageText);
//     chatContainer.appendChild(messageDiv);
// }

// function displayBotMessageWithTypingEffect(message) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageDiv = document.createElement("div");
//     messageDiv.className = message.type;
//     const messageText = document.createElement("p");
//     messageDiv.appendChild(messageText);
//     chatContainer.appendChild(messageDiv);

//     typeMessage(message.message, messageText);
// }

// function typeMessage(message, targetElement) {
//     let index = 0;

//     function type() {
//         if (index < message.length) {
//             targetElement.textContent += message.charAt(index);
//             index++;
//             setTimeout(type, 20); // Adjust the delay here (milliseconds)
//         }
//     }

//     type();
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", fetchSearchData);

//     const searchInput = document.getElementById("search-input");

//     searchInput.addEventListener('keyup', function (event) {
//         if (event.key === 'Enter') {
//             fetchSearchData();
//             searchInput.value = ''; // Clear the input field after sending
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // Display initial bot message
//     const initialBotMessage = {
//         type: "bot",
//         message: "Hello, how can I help you?"
//     };
//     displayBotMessageWithTypingEffect(initialBotMessage);

//     // Rest of your existing code...
// });

// const chatHistory = [];
// let isFetching = false; // New variable to track fetching state

// function fetchSearchData() {
//     if (isFetching) {
//         return; // Return early if a fetch request is already in progress
//     }

//     const searchInput = document.getElementById("search-input").value;
//     if (!searchInput.trim()) {
//         return; // Return early if the input is empty or contains only whitespace
//     }

//     const userMessage = { type: "user", message: searchInput };
//     chatHistory.push(userMessage);
//     displayUserMessage(userMessage);
//     const apiUrl = `http://127.0.0.1:5000/${searchInput}`;

//     isFetching = true; // Set fetching state to true

//     fetch(apiUrl)
//         .then(response => {
//             isFetching = false; // Reset fetching state on response or error
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })

//         .then(data => {
//             const botMessage = { type: "bot", message: data.response};

//             const initialBotMessage = {
//                 type: "bot",
//                 message: "Hello, how can I help you?"
//             };

//             chatHistory.push(botMessage);
//             // displayBotMessageWithTypingEffect(botMessage);
//             displayBotMessageWithTypingEffect(botMessage);
//         })
//         .catch(error => {
//             isFetching = false; // Reset fetching state on error
//             console.error("Error fetching data:", error);
//         });
// }

// function displayUserMessage(message) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageDiv = document.createElement("div");
//     messageDiv.className = message.type;
//     const messageText = document.createElement("p");
//     messageText.textContent = message.message;
//     messageDiv.appendChild(messageText);
//     chatContainer.appendChild(messageDiv);
// }

// function displayBotMessageWithTypingEffect(message) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageDiv = document.createElement("div");
//     messageDiv.className = message.type;
//     const messageText = document.createElement("p");
//     messageDiv.appendChild(messageText);
//     chatContainer.appendChild(messageDiv);

//     typeMessage(message.message, messageText);
// }

// function typeMessage(message, targetElement) {
//     let index = 0;

//     function type() {
//         if (index < message.length) {
//             targetElement.textContent += message.charAt(index);
//             index++;
//             setTimeout(type, 20); // Adjust the delay here (milliseconds)
//         }
//     }

//     type();
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", fetchSearchData);

//     const searchInput = document.getElementById("search-input");
//     searchInput.addEventListener('keyup', function (event) {
//         if (event.key === 'Enter') {
//             fetchSearchData();
//             searchInput.value = ''; // Clear the input field after sending
//         }
//     });

//     // Display initial bot message
//     const initialBotMessage = {
//         type: "bot",
//         message: "Hello, how can I help you?"
//     };
//     displayBotMessageWithTypingEffect(initialBotMessage);
// });

// const chatHistory = [];
// let isFetching = false; // New variable to track fetching state

// function fetchSearchData() {
//     if (isFetching) {
//         return; // Return early if a fetch request is already in progress
//     }

//     const searchInput = document.getElementById("search-input").value;
//     if (!searchInput.trim()) {
//         return; // Return early if the input is empty or contains only whitespace
//     }

//     const userMessage = { type: "user", message: searchInput };
//     chatHistory.push(userMessage);
//     displayUserMessage(userMessage);

//     // Concatenate all messages in chatHistory into a single string
//     const allMessages = chatHistory.map(msg => msg.message).join(" ");

//     const apiUrl = `http://127.0.0.1:5000/${encodeURIComponent(allMessages)}`;

//     isFetching = true; // Set fetching state to true

//     fetch(apiUrl)
//         .then(response => {
//             isFetching = false; // Reset fetching state on response or error
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(data => {
//             const botMessage = { type: "bot", message: data.response };
//             chatHistory.push(botMessage);
//             displayBotMessageWithTypingEffect(botMessage);
//         })
//         .catch(error => {
//             isFetching = false; // Reset fetching state on error
//             console.error("Error fetching data:", error);
//         });
// }

// function displayUserMessage(message) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageDiv = document.createElement("div");
//     messageDiv.className = message.type;
//     const messageText = document.createElement("p");
//     messageText.textContent = message.message;
//     messageDiv.appendChild(messageText);
//     chatContainer.appendChild(messageDiv);
// }

// function displayBotMessageWithTypingEffect(message) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageDiv = document.createElement("div");
//     messageDiv.className = message.type;
//     const messageText = document.createElement("p");
//     messageDiv.appendChild(messageText);
//     chatContainer.appendChild(messageDiv);

//     typeMessage(message.message, messageText);
// }

// function typeMessage(message, targetElement) {
//     let index = 0;

//     function type() {
//         if (index < message.length) {
//             targetElement.textContent += message.charAt(index);
//             index++;
//             setTimeout(type, 20); // Adjust the delay here (milliseconds)
//         }
//     }

//     type();
// }


document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", fetchSearchData);

    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            fetchSearchData();
            searchInput.value = ''; // Clear the input field after sending
        }
    });

    // Display initial bot message
    const initialBotMessage = {
        type: "bot",
        message: "Hello, how can I help you?"
    };
    displayBotMessageWithTypingEffect(initialBotMessage);
});

const chatHistory = [];
let isFetching = false; // Variable to track fetching state

function fetchSearchData() {
    if (isFetching) {
        return; // Return early if a fetch request is already in progress
    }

    const searchInput = document.getElementById("search-input").value;
    if (!searchInput.trim()) {
        return; // Return early if the input is empty or contains only whitespace
    }

    const userMessage = { type: "user", message: searchInput };
    chatHistory.push(userMessage);
    displayUserMessage(userMessage);

    // Concatenate all messages in chatHistory into a single string
    const allMessages = chatHistory.map(msg => msg.message).join(" ");

    const apiUrl = `http://127.0.0.1:5000/${encodeURIComponent(allMessages)}`;

    isFetching = true; // Set fetching state to true

    fetch(apiUrl)
        .then(response => {
            isFetching = false; // Reset fetching state on response or error
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const botMessage = { type: "bot", message: data.response };
            chatHistory.push(botMessage);
            displayBotMessageWithTypingEffect(botMessage);
        })
        .catch(error => {
            isFetching = false; // Reset fetching state on error
            console.error("Error fetching data:", error);
        });
}

function displayUserMessage(message) {
    const chatContainer = document.getElementById("chat-container");
    const messageDiv = document.createElement("div");
    messageDiv.className = message.type;
    const messageText = document.createElement("p");
    messageText.textContent = message.message;
    messageDiv.appendChild(messageText);
    chatContainer.appendChild(messageDiv);
}

function displayBotMessageWithTypingEffect(message) {
    const chatContainer = document.getElementById("chat-container");
    const messageDiv = document.createElement("div");
    messageDiv.className = message.type;
    const messageText = document.createElement("p");
    messageDiv.appendChild(messageText);
    chatContainer.appendChild(messageDiv);

    typeMessage(message.message, messageText);
}

function typeMessage(message, targetElement) {
    let index = 0;

    function type() {
        if (index < message.length) {
            targetElement.textContent += message.charAt(index);
            index++;
            setTimeout(type, 20); // Adjust the delay here (milliseconds)
        }
    }

    type();
}
