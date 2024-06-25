const input=document.querySelector(".input");
const listcontainer=document.getElementById("list-container");
const btnadd=document.querySelector(".add");

let addtask=()=>{
    if(input.value==""){
        alert("Please write something!");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    input.value="";
}
btnadd.addEventListener('click',addtask);

listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
