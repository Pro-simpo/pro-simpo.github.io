// le bouton "faire glisser" et l'apparition des sections

let glisser = document.getElementsByClassName("glisser")[0];

window.addEventListener('scroll', function() {
    let windowHeight = window.innerHeight;
    let glisserPosition = glisser.getBoundingClientRect().top;
    if (glisserPosition < windowHeight - 200) {
        glisser.style.display = "none";
    }
    var sections = document.querySelectorAll('.sections');
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        
        if (position < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

let toucher = document.getElementById("toucher");
toucher.addEventListener("click", function () {
    glisser.style.display = "none";
    let targetSection = document.querySelector(boutton2[1].getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
});
let toucher2 = document.getElementById("toucher2");
toucher2.addEventListener("click", function () {
    glisser.style.display = "none";
    let targetSection = document.querySelector(boutton2[1].getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
});

// comportement des boutons de la nav-bar

let bouttons = document.querySelectorAll('.nav-button');
bouttons.forEach(button => {
    button.addEventListener("mouseover" , function() {
        button.style.background = "linear-gradient(90deg, #004AAD 0%, #1A8FD2 100%)";
        button.style.transition = "transform 0.5s ease";
    });
    button.addEventListener("mouseout" , function() {
        button.style.background = "initial";
        button.style.transition = "transform 0.5s ease";
    });

    button.addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// comportement des zones numérotées

let areas = document.getElementsByClassName("area");
for(let i = 0; i < areas.length; i++) {
    areas[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
let boutton2 = document.querySelectorAll('.button2');
for(let a = 0, u = 0; a < areas.length; a++) {
    areas[a].addEventListener("mouseover" , function() {
        boutton2[u].style.background = "linear-gradient(90deg, #004AAD 0%, #1A8FD2 100%)";
        boutton2[u].style.transition = "transform 0.5s ease";
    });
    areas[a].addEventListener("mouseout" , function() {
        boutton2[u].style.background = "initial";
        boutton2[u].style.transition = "transform 0.5s ease";
    });
    u++;
    if(u == 8){
        u = 1;
    }
}


// comportement de summary

let Sum = document.getElementsByTagName("summary")[0];
Sum.onclick = function () {
        if (Sum.innerHTML=="|||") {
            Sum.innerHTML = "_";
        }
        else if (Sum.innerHTML=="_") {
            Sum.innerHTML = "|||";
        }
};


let open = document.getElementsByClassName("open");
let details = document.getElementsByTagName("details")[0];

for (i in open) {
    open[i].onclick = function () {
        details.open = false;
        Sum.innerHTML = "|||";
    };
}

document.getElementsByTagName("section")[0].addEventListener("click", function () {
    if (details.open = true) {
        details.open = false;
        Sum.innerHTML = "|||";
    }
});


// comportement de "codé totalement par moi"

let coded2 = document.getElementById("coded2");
let coded = document.getElementById("coded");
coded2.addEventListener('animationend', function(){
    coded.classList.add("codedremove");
    var windowWidth = window.innerWidth;
    let desktop = document.getElementById("desktop");
    if(windowWidth <= 500) {
        desktop.style.display = "initial";
        desktop.classList.add("desktopVisible");
    }

});

// comportement des images de projets portfolio

let projetlien = document.getElementsByClassName("projets");
let projetimage = document.getElementsByClassName("projetimage");
for(let i = 0; i < projetimage.length; i++){
    projetimage[i].addEventListener('click', function(){
        projetlien[i].click();
    });
}

// loadImage

let loadImage = document.getElementById("loadImage");
let loadDiv = document.getElementById("loadDiv");
window.onload = function() {
    loadImage.style.display = "none";
    loadDiv.style.display = "initial"
}

// affichage projets

let projetremove = document.getElementsByClassName("projetremove");
let projetadd = document.getElementsByClassName("projetadd");
let projetliens = document.getElementsByClassName("projetlien");
let projetbutton = document.getElementsByClassName("projetbutton");



for(let i = 0; i < projetliens.length; i++) {
    projetliens[i].addEventListener("click", function(a) {
        a.preventDefault();
        for(element of projetremove) {
            if(projetadd[i].style.display = "none") {}
                element.classList.add("projetremoveactive");
                projetadd[i].style.display = "initial";
        }
    });
    projetbutton[i].addEventListener("click", function(){
        if(projetadd[i].style.display = "initial") {
            for(element of projetremove) {
                projetadd[i].style.display = "none";
                element.classList.remove("projetremoveactive");
            }
        }
    });
}

// choose cliquée

let choose = document.getElementsByClassName("choose");
for(element of choose) {
    element.addEventListener("click", function(){
        setTimeout(function(){alert("Please contact me for this service.");}, 1000);
        
    });
}

// video of agencyProject

let video = document.getElementById("video-container");
video.addEventListener("click", function(){
    video.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/video.mp4" type="video/mp4">
        </video>`;
})

// animation des listes
window.addEventListener('scroll', function() {
    let windowHeight = window.innerHeight;
    var animations = document.querySelectorAll('.animations');
    animations.forEach(function(anim) {
        var position = anim.getBoundingClientRect().top;
        
        if (position < windowHeight - 100) {
            anim.classList.add('animation');
        }
    });
});

// Age

const annee = new Date().getFullYear();
let calcul = annee - 2003;
let age = document.getElementById("age");
age.innerHTML = calcul;
