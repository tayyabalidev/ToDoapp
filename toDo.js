let input=document.getElementById("inp");
let text=document.querySelector(".home")

function add(){
    if(input.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("li");
       
        newEle.innerHTML =`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}