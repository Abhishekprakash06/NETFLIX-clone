let q1 = document.querySelector(".ask1");
let q2 = document.querySelector(".ask2");
let q3 = document.querySelector(".ask3");
let q4 = document.querySelector(".ask4");
let q5 = document.querySelector(".ask5");
let q6 = document.querySelector(".ask6");

let hide1 = document.querySelector(".hide1")
let hide2 = document.querySelector(".hide2");
let hide3 = document.querySelector(".hide3");
let hide4 = document.querySelector(".hide4");
let hide5 = document.querySelector(".hide5");
let hide6 = document.querySelector(".hide6");

let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");
let i3 = document.querySelector(".i3");
let i4 = document.querySelector(".i4");
let i5 = document.querySelector(".i5");
let i6 = document.querySelector(".i6");
q1.addEventListener("click",function(){
     //hide1.classList.add("into");
     hide1.style.display="block";
    
    
    i1.style.display="none";
    i2.style.display="inline";
    i3.style.display="inline";
    i5.style.display="inline";
    i4.style.display="inline";
    i6.style.display="inline";
    hide2.style.display="none";
    hide3.style.display="none";
    hide4.style.display="none";
    hide5.style.display="none";
    hide6.style.display="none";
    
});
q2.addEventListener("click",function(){
    // hide2.classList.add("sea");
    hide2.style.display="block";
    i2.style.display="none";
    i1.style.display="inline";
    i3.style.display="inline";
    i5.style.display="inline";
    i4.style.display="inline";
    i6.style.display="inline";
    hide1.style.display="none";
    hide3.style.display="none";
    hide4.style.display="none";
    hide5.style.display="none";
    hide6.style.display="none";
    

    
})

q3.addEventListener("click",function(){
    hide3.style.display="block";
    i3.style.display="none";
    i2.style.display="inline";
    i1.style.display="inline";
    i5.style.display="inline";
    i4.style.display="inline";
    i6.style.display="inline";
    hide2.style.display="none";
    hide1.style.display="none";
    hide4.style.display="none";
    hide5.style.display="none";
    hide6.style.display="none";
    
})

q4.addEventListener("click",function(){
    hide4.style.display="block";
    i4.style.display="none";
    i2.style.display="inline";
    i3.style.display="inline";
    i5.style.display="inline";
    i1.style.display="inline";
    i6.style.display="inline";
    hide2.style.display="none";
    hide3.style.display="none";
    hide1.style.display="none";
    hide5.style.display="none";
    hide6.style.display="none";
    
})

q5.addEventListener("click",function(){
    hide5.style.display="block";
    i5.style.display="none";
    i2.style.display="inline";
    i3.style.display="inline";
    i1.style.display="inline";
    i4.style.display="inline";
    i6.style.display="inline";
    hide2.style.display="none";
    hide3.style.display="none";
    hide4.style.display="none";
    hide1.style.display="none";
    hide6.style.display="none";
    
})

q6.addEventListener("click", function(){
    hide6.style.display="block";
    i6.style.display="none";
    i2.style.display="inline";
    i3.style.display="inline";
    i5.style.display="inline";
    i4.style.display="inline";
    i1.style.display="inline";
    hide2.style.display="none";
    hide3.style.display="none";
    hide4.style.display="none";
    hide5.style.display="none";
    hide1.style.display="none";
    
})