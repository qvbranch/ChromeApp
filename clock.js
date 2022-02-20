const clock = document.querySelector("h2#clock"); //혹은 #clock

function getClock(){    
    const date = new Date(); //Date object 생성
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock(); //웹사이트가 로드 되자마자 실행하기위해 호출해주기
setInterval(getClock, 1000);