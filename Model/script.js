
const closemodal = document.getElementById("close-modal");
const openmodal = document.getElementById("open-modal");
const modalcontainer = document.querySelector(".modal-container");

openmodal.addEventListener("click",()=>{
    console.log("o")
    modalcontainer.classList.add("show")
})

closemodal.addEventListener("click", () => {
    console.log("c")
    modalcontainer.classList.remove("show")
})