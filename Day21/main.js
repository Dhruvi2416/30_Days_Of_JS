let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let lists = document.querySelectorAll("li")
let  p = document.querySelector("p")
h1.innerHTML= `Asabeneh Yetayeh challenges in <span id="year">2020</span>`

 document.querySelector("#year")
//change color of year every second
const changingColor=()=>{
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);
    let color = `rgb(${c1},${c2},${c3})`
    let year =  document.querySelector("#year");
    year.style.color = color;

}

setInterval(changingColor,1000);

//change background color of time every second
const changingBackgroundColor=()=>{
    p.innerHTML= Date();
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);
    let color = `rgb(${c1},${c2},${c3})`
    let time =  document.querySelector("p");
    time.style.backgroundColor = color;

}

setInterval(changingBackgroundColor,1000);
//done - green ongoing - yellow coming- red (backgroungColor)
lists.forEach((list)=>{
    if(list.textContent.toLowerCase().includes("done")){
        list.style.backgroundColor = "green"
    }
   else if(list.textContent.toLowerCase().includes("ongoing")){
        list.style.backgroundColor = "yellow"
    }
    else if(list.textContent.toLowerCase().includes("coming")){
        list.style.backgroundColor = "red"
    }
})