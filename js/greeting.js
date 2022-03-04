const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

loginForm.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    /** greeting.innerText = "Hello, " + username; **/
    paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    
}

if (savedUsername !== null) {
    // show hello
    paintGreeting(savedUsername);
} else {
    // show form
    loginForm.addEventListener("submit", submitForm);
}

