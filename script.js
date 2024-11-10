// Sample request data (in a real application, this would come from a backend)
const sampleRequests = [
    { id: 1, name: "Community Shelter", description: "Requesting 20 meals for dinner service" },
    { id: 2, name: "Local Food Bank", description: "Requesting any available packaged food items" },
];

// Donor login function (mock login for demonstration)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("donor-login").classList.add("hidden");
        document.getElementById("requests").classList.remove("hidden");
        document.getElementById("contribution").classList.remove("hidden");
        loadRequests();
    } else {
        alert("Please enter your username and password.");
    }
}

// Function to load requests from sample data
function loadRequests() {
    const requestList = document.getElementById("request-list");
    requestList.innerHTML = "";

    sampleRequests.forEach(request => {
        const requestDiv = document.createElement("div");
        requestDiv.classList.add("request-item");
        requestDiv.innerHTML = `
            <h3>${request.name}</h3>
            <p>${request.description}</p>
            <button onclick="respondToRequest(${request.id})">Respond</button>
        `;
        requestList.appendChild(requestDiv);
    });
}

// Function to handle contribution submission
function contribute() {
    const foodDetails = document.getElementById("foodDetails").value;

    if (foodDetails) {
        alert("Thank you for your contribution! Our team will coordinate for delivery.");
        document.getElementById("foodDetails").value = ""; // Clear form after submission
    } else {
        alert("Please enter food details before submitting.");
    }
}

// Function to respond to specific request (in a real application, this would be more complex)
function respondToRequest(requestId) {
    const request = sampleRequests.find(r => r.id === requestId);
    alert(`Responding to ${request.name}: ${request.description}`);
}
