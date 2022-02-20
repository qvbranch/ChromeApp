const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}



/*
const colors = ["#f4895f", "#2E8CD5", "#914ead", "#eebc12"];
const hi = document.querySelector("div.hello h1");
hi.style.color="white";

function handleWindowResize() {
    const width = window.innerWidth;
    if(width < 200){
        document.body.style.backgroundColor = colors[0];
    } else if (width >= 200 && width < 700) {
        document.body.style.backgroundColor = colors[1];
    } else if (width >= 700 && width < 900) {
        document.body.style.backgroundColor = colors[2];
    } else if (width >= 900 && width < 1000) {
        document.body.style.backgroundColor = colors[3];
    }
}

window.addEventListener("resize", handleWindowResize);
*/