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
        setTimeout(function(){alert("Contact me for this service.");}, 1000);
        
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


// videos of Brainwave projects


let video2 = document.getElementById("video-container2");
video2.addEventListener("click", function(){
    video2.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/phishing_checker.mp4" type="video/mp4">
        </video>`;
})

let video3 = document.getElementById("video-container3");
video3.addEventListener("click", function(){
    video3.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/password_checker.mp4" type="video/mp4">
        </video>`;
})

let video4 = document.getElementById("video-container4");
video4.addEventListener("click", function(){
    video4.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/Solar_Tracker.mp4" type="video/mp4">
        </video>`;
})


// Gestion des thèmes

//document.documentElement.setAttribute('data-theme', 'light');
let themeButton = document.getElementsByClassName("theme-toggle")[0];
let img24 = document.getElementsByClassName("img24");
const heure = new Date().getHours();

// Détermine si c'est jour ou nuit
if (heure >= 6 && heure < 19) {
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    for (let i = 0; i < img24.length; i++) {
        img24[i].style.filter = "invert(100%)";
    }
}

themeButton.innerHTML = "🌙";
themeButton.addEventListener("click", function(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeButton.innerHTML = `${newTheme === "dark" ? "☀️" : "🌙"}`
    if (newTheme === "dark") {
        for (let i = 0; i < img24.length; i++) {
            img24[i].style.filter = "invert(100%)";
        }
    }
    else {
        for (let i = 0; i < img24.length; i++) {
            img24[i].style.filter = "initial";
        }
    }
});




// Gestion de seeMore

let seeMore = document.getElementsByClassName("seeMore");
let lienProjet = document.getElementsByClassName("lienProjet");
let seeMoreButton = document.getElementsByClassName("seeMoreButton");


window.addEventListener("load", () => {
    for(let see = 0; see < seeMore.length; see++) {
        if (seeMore[see].offsetHeight < 705) {
            lienProjet[see].style.display = "none";
        }
    }
});

let handleButton = [];

for(let e = 0; e < seeMoreButton.length; e++) {
    seeMoreButton[e].addEventListener("click", () => {
        const currentScroll = window.scrollY;
        seeMore[e].classList.toggle("expanded");
        seeMoreButton[e].classList.toggle("expended");
        if (seeMore[e].classList.contains("expanded")) {
            window.scrollTo({top: currentScroll});
            seeMoreButton[e].textContent = "↑ SEE LESS ↑";
            lienProjet[e].style.display = "initial";
            seeMoreButton[e].style.opacity = "0.9";
            window.addEventListener('scroll', handleButton[e] = function () {
                let dist = window.innerHeight  - seeMore[e].getBoundingClientRect().top;
                if ((dist - 50) < seeMore[e].offsetHeight) {
                    seeMoreButton[e].style.top = `${dist - 100}px`;
                }
            });
        } else {
            seeMoreButton[e].textContent = "↓ SEE MORE ↓";
            lienProjet[e].style.display = "none";
            window.scrollTo({top: seeMore[e].offsetTop});
            window.removeEventListener('scroll', handleButton[e]);
            seeMoreButton[e].style.top = "initial";
            seeMoreButton[e].style.opacity = "initial"
        }
    });
}


// Gestion des documents cv

document.addEventListener('DOMContentLoaded', function() {
  
  const cv_button = document.getElementById('cv_button');
  const cv_menu = document.getElementById('cv_menu');

  cv_button.addEventListener('click', function() {
    cv_menu.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
    if (!cv_button.contains(event.target)) {
      if (cv_menu.classList.contains('show')) {
        cv_menu.classList.remove('show');
      }
    }
  });

});


// Gestion barre niveau contenu visité

document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
 
    const updateProgressBar = () => {
        // Calcul de la hauteur totale du contenu défilable
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        // Position de défilement actuelle
        const scrollPosition = window.scrollY;
 
        // Calcul du pourcentage de progression
        const progress = (scrollPosition / totalHeight) * 100;
 
        // Mise à jour de la largeur de la barre
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    };
 
    // Écouter l'événement de défilement
    window.addEventListener('scroll', updateProgressBar);
 
    // Mettre à jour au chargement pour les pages déjà défilées
    updateProgressBar();
});
