burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')



burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
})

// Search button
let search =document.getElementById('search');
search.addEventListener("input",function() {
    let inputval =search.value;
    // console.log("input event fire",inputval);
    let notecard =document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function(element){
        let cardTxt =element.getElementsByTagName("h1")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display ="block";
        }
        else{
            element.style.display ="none";
        }
    });
})