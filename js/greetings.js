const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const loginButton = document.querySelector("#login-form button");
const logoutButton = document.querySelector("#greetingBox button");

const greetingBox = document.querySelector("#greetingBox");
const greeting = document.querySelector("#greetingBox h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//
function onHidden(){
    console.log(loginForm);
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    loginInput.classList.toggle(HIDDEN_CLASSNAME);
    loginButton.classList.toggle(HIDDEN_CLASSNAME);

    greetingBox.classList.toggle(HIDDEN_CLASSNAME);
    greeting.classList.toggle(HIDDEN_CLASSNAME);
    logoutButton.classList.toggle(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault(); //기본동작 막기
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = ""; //
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    //
    onHidden();
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

//
function onLogOut(){
    localStorage.removeItem(USERNAME_KEY);
    onHidden();
}

loginForm.addEventListener("submit", onLoginSubmit);

logoutButton.addEventListener("click", onLogOut);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    // loginForm.classList.remove(HIDDEN_CLASSNAME);
    // loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
    //
    onHidden();
}