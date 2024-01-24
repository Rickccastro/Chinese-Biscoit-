const lucky_main = document.querySelector("#lucky_main")

const lucky_main2 = document.querySelector("#lucky_main2")

const biscoit_closed = document.querySelector("#biscoit_closed")

const btn_reset=document.querySelector("#reset")

let timeoutId;

/*Events*/ 

biscoit_closed.addEventListener('click',ClickOpen)
btn_reset.addEventListener('click',Reset)


function ClickOpen(){
    ScreenToggle()

}

function iniciateVibration() {

  biscoit_closed.classList.add("tremor");
}

function stopVibration() {
  
  biscoit_closed.classList.remove("tremor");

}
function Reset(){
    ScreenToggle()
}

function ScreenToggle(){
    lucky_main.classList.toggle("hide")
    lucky_main2.classList.toggle("hide")
}