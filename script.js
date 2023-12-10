
let pop = document.getElementById("popUp");
let navBar = document.querySelector(".navbar");
let black = document.querySelector(".black");
let reveals = document.querySelectorAll(".reveal");
let roadLogo = document.getElementById("road_logo");

let howItWorks = document.getElementById("howItWorks");
let company = document.getElementById("companyT");
let finance = document.getElementById("finance");
let faqs = document.getElementById("faqs");
let dashBoard = document.getElementById("dash");
const navBarButtons = document.querySelectorAll(".navBarButton");
let financeSearch = document.getElementById("financeInput1");
let financeSearchAfter = document.getElementById("financeInput1After");
let topReveal = document.querySelectorAll(".topReveal");
let firstBodyBg = document.getElementById("firstBodyBg");

function revealTop(){
    topReveal.forEach(top => top.style.transform = "translateX(0)");
    firstBodyBg.style.opacity = "1";
}

navBarButtons.forEach(navButton => navButton.addEventListener("mousedown", changeNavBg));
navBarButtons.forEach(navButton => navButton.addEventListener("mouseup", changeNavBg1));


function changeNavBg(){
    this.style.backgroundColor = "#b9c3ce";
}
function changeNavBg1(){
    this.style.backgroundColor = "transparent";
}

document.addEventListener("click", (close)=>{
    if(close.target.id == "companyT"){
        pop.style.display = "block";
        if(pop.style.display == "block"){
            document.addEventListener("click", (close)=>{
                if(close.target.id !== "popUp" && close.target.id !== "companyT"){
                    pop.style.display = "none";
                }
                else{pop.style.display = "block"}
            })
        }
        else{
            return;
        }
    }
    else{pop.style.display = "none"}

})



function popUpp(){
    if(pop.style.display = "block"){
        pop.style.display = "none";
       }
    else{
        pop.style.display = "block";
    }
}

window.addEventListener("scroll", runOnScroll);

function runOnScroll(){
    if(window.scrollY > 30){
        navBar.classList.add("onScroll");
        black.classList.add("onScrollShadow");
    }
    else{
        navBar.classList.remove("onScroll");
        black.classList.remove("onScrollShadow");
    }
}

window.addEventListener("scroll", reveal)

function reveal(){
    reveals.forEach(ele =>{
        if(ele.getBoundingClientRect().top < window.innerHeight - 100){
            ele.classList.add("active");
        }
        else{
            ele.classList.remove("active");
        }
    })
}


let navBarResponseButton = document.getElementById("navBarResponseButton");
let navBarResRight = document.getElementById("navBarResRight");
let navBarResLeft = document.getElementById("navBarResLeft");
let navBarResLinks = document.querySelectorAll(".navBarResLinks")

navBarResponseButton.addEventListener("click", ()=>{
    navBarResRight.style.transform = "translateX(0)";
    navBarResRight.style.zIndex = "4";
    navBarResRight.style.boxShadow = "2px 0 50px rgba(0,0,0,0.5)";
    navBarResLeft.style.opacity = ".3";
    navBarResLeft.style.width = "100%";
    navBarResLeft.style.zIndex = "3";
    document.body.style.overflow = "hidden";
})

navBarResLeft.addEventListener("click", ()=>{
    navBarResLeft.style.opacity = "0";
    navBarResLeft.style.zIndex = "2";
    navBarResRight.style.transform = "translateX(-100%)";
    navBarResRight.style.zIndex = "3";
    navBarResRight.style.boxShadow = "none"
    document.body.style.overflow = "auto";
})

navBarResLinks.forEach(link => link.addEventListener("mousedown", ()=>{
    link.style.backgroundColor = "rgb(201, 201, 201)";
}))
navBarResLinks.forEach(link => link.addEventListener("mouseup", ()=>{
    link.style.backgroundColor = "transparent";
}))


let questionBody = document.querySelectorAll(".questionBody");
let question = document.querySelectorAll(".question");
let questionToggle = document.querySelectorAll(".questionToggle");
let arrow = document.querySelectorAll(".arrow");

function openAndClose(clickToOpen, questionTopen, RoatatingArrow, ClassToRemove){
    clickToOpen.forEach(Toggle => Toggle.addEventListener("click", (Target)=>{
        for(i=0; i<=clickToOpen.length; i++){
            if(clickToOpen[i]==Target.currentTarget){
                let currentQuestion = questionTopen[i];
                let currentArrow = RoatatingArrow[i];
                if(currentQuestion.classList.contains(ClassToRemove)){
                    currentQuestion.classList.remove(ClassToRemove);
                    currentArrow.style.transform = "rotate(225deg)";
                }
                else{
                    currentQuestion.classList.add(ClassToRemove);
                    currentArrow.style.transform = "rotate(45deg)";
                }
            }
            else{
                questionTopen[i].classList.add("questionBodyContent");
            }
        }
    }))
}

openAndClose(questionToggle, question, arrow, "questionBodyContent");
