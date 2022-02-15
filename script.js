const btn = document.getElementsByTagName("button")[0];
const modaloverlay = document.getElementById("modal-overlay");
const exit = document.getElementById("exit");
const wrapper = document.getElementById("wrapper");

btn.onclick = () =>{
    modaloverlay.classList.remove("hidden");
    modaloverlay.classList.add("visible");
}

exit.onclick=()=>{
    modaloverlay.classList.remove("visible");
    modaloverlay.classList.add("hidden");
}