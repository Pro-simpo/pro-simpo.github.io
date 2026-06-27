// apparition progressive des sections au scroll
window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    document.querySelectorAll('.sections').forEach(function(section) {
        if (section.getBoundingClientRect().top < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}, { passive: true });

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


// ── Hamburger menu ──
(function() {
    var toggle   = document.getElementById('menuToggle');
    var drawer   = document.getElementById('mobileDrawer');
    var backdrop = document.getElementById('drawerBackdrop');
    if (!toggle || !drawer || !backdrop) return;

    function openMenu() {
        toggle.classList.add('is-open');
        drawer.classList.add('is-open');
        backdrop.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        toggle.classList.remove('is-open');
        drawer.classList.remove('is-open');
        backdrop.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function() {
        drawer.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    var closeBtn = document.getElementById('drawerClose');
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    drawer.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 740) closeMenu();
    });
})();

/*
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
*/
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
if (video) video.addEventListener("click", function(){
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
if (age) age.innerHTML = calcul;


// videos of Brainwave projects


let video2 = document.getElementById("video-container2");
if (video2) video2.addEventListener("click", function(){
    video2.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/phishing_checker.mp4" type="video/mp4">
        </video>`;
})

let video3 = document.getElementById("video-container3");
if (video3) video3.addEventListener("click", function(){
    video3.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/password_checker.mp4" type="video/mp4">
        </video>`;
})

let video4 = document.getElementById("video-container4");
if (video4) video4.addEventListener("click", function(){
    video4.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/Solar_Tracker.mp4" type="video/mp4">
        </video>`;
})

let videoHePRAS = document.getElementById("videoHePRAS");
if (videoHePRAS) videoHePRAS.addEventListener("click", function(){
    videoHePRAS.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/videoHePRAS.mp4" type="video/mp4">
        </video>`;
})

let videoJobApplication = document.getElementById("videoJobApplication");
if (videoJobApplication) videoJobApplication.addEventListener("click", function(){
    videoJobApplication.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/videoJobApplication.mp4" type="video/mp4">
        </video>`;
})

let videoFireDetection = document.getElementById("videoFireDetection");
if (videoFireDetection) videoFireDetection.addEventListener("click", function(){
    videoFireDetection.innerHTML = `
        <video width="100%" height="auto" controls autoplay>
            <source src="img/videoFireDetection.mp4" type="video/mp4">
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


// Positionnement dynamique des skillimages

let skillphoto7 = document.getElementById('skillphoto7');
let skillphoto8 = document.getElementById('skillphoto8');
let aiesec = document.getElementById('aiesec');
let skillphoto7para = document.getElementById('skillphoto7para');
let skillphoto8para = document.getElementById('skillphoto8para');
let aiesecpara = document.getElementById('aiesecpara');
let pageExperience = document.getElementById('pageExperience');

document.addEventListener('scroll', function() {
    if (aiesec && aiesecpara) aiesec.style.top = `${aiesecpara.offsetTop + 6 }px`;
    if (skillphoto7 && skillphoto7para) skillphoto7.style.top = `${skillphoto7para.offsetTop + 6 }px`;
    if (skillphoto8 && skillphoto8para) skillphoto8.style.top = `${skillphoto8para.offsetTop + 6 }px`;
});


// Met à jour les variables CSS --x et --y avec la position du curseur
var lampEl = document.getElementById('pageHome');
if (lampEl) lampEl.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + window.scrollY + 'px');
});





// création du canevas de défilement style hacker
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 8;
const columns = Math.floor(canvas.width / fontSize);

const rainDrops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
    //ctx.fillStyle = 'rgba(249, 250, 251, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 255, 0, 0.3)'; // Vert
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}
setInterval(draw, 103); // 33ms correspond à environ 30 images par seconde

// Gère le redimensionnement de la fenêtre pour que l'animation reste fluide
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Recalculer les colonnes serait idéal ici pour une adaptation parfaite
});    


//

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Fonction récursive qui parcourt les nœuds d'un élément pour appliquer l'effet glitch.
     * @param {Node} node - Le nœud HTML à traiter (peut être un élément ou un nœud de texte).
     */
    function processNode(node) {
        // Cas 1 : Le nœud est un nœud de texte (le contenu textuel lui-même)
        if (node.nodeType === Node.TEXT_NODE) {
            // On vérifie que le texte n'est pas juste des espaces vides
            if (node.textContent.trim().length === 0) {
                return;
            }

            const fragment = document.createDocumentFragment(); // Un conteneur temporaire et performant
            const words = node.textContent.split(/\s+/);

            words.forEach(word => {
                if (word.length > 0) {
                    const span = document.createElement('span');
                    span.className = 'glitch-word';
                    span.setAttribute('data-text', word);
                    span.textContent = word;
                    fragment.appendChild(span);
                    fragment.appendChild(document.createTextNode(' ')); // Recrée l'espace
                }
            });

            // Remplace le nœud de texte original par notre fragment de spans
            node.parentNode.replaceChild(fragment, node);
        } 
        // Cas 2 : Le nœud est un élément HTML (comme <p>, <a>, <strong>)
        else if (node.nodeType === Node.ELEMENT_NODE) {
            // On ne veut pas appliquer l'effet à l'intérieur de balises qui ont déjà un effet
            // ou qui sont des scripts/styles.
            if (node.classList.contains('glitch-word') || node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
                return;
            }
            
            // On parcourt tous les enfants de cet élément et on relance la fonction sur eux.
            // On utilise Array.from pour créer une copie, car la liste des enfants va être modifiée.
            Array.from(node.childNodes).forEach(child => processNode(child));
        }
    }

    // Ciblez les conteneurs principaux où l'effet doit être appliqué.
    const elementsToGlitch = document.querySelectorAll('.glitch-container');
    elementsToGlitch.forEach(element => {
        processNode(element);
    });

    // Contact canvas — grille perspective + onde (Claude Design hero)
    const ctCanvas = document.getElementById('ctCanvas');
    if (ctCanvas) {
        const ctx2d = ctCanvas.getContext('2d');
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const COLS = 22, ROWS = 20, ACC = '2,136,209';
        let cW = 0, cH = 0, ctAnim;
        const ctResize = () => {
            const sec = document.getElementById('pageContact');
            if (!sec) return;
            const r = sec.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) return;
            cW = r.width; cH = r.height;
            ctCanvas.width = cW * dpr; ctCanvas.height = cH * dpr;
            ctCanvas.style.width = cW + 'px'; ctCanvas.style.height = cH + 'px';
            ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        ctResize();
        window.addEventListener('load', ctResize, { passive: true });
        window.addEventListener('resize', ctResize, { passive: true });
        const drawContact = (t) => {
            ctx2d.clearRect(0, 0, cW, cH);
            const horizon = cH * 0.38;
            for (let i = -COLS; i <= COLS; i++) {
                const bx = cW / 2 + (i / COLS) * (cW * 1.5);
                const a = 0.08 + 0.14 * (1 - Math.abs(i) / COLS);
                ctx2d.strokeStyle = 'rgba(' + ACC + ',' + a + ')';
                ctx2d.lineWidth = 1;
                ctx2d.beginPath(); ctx2d.moveTo(cW / 2, horizon); ctx2d.lineTo(bx, cH); ctx2d.stroke();
            }
            for (let i = 0; i < ROWS; i++) {
                const p = ((i + (t * 0.006) % 1) / ROWS);
                const y = horizon + (cH - horizon) * (p * p);
                const a = Math.min(1, p * 1.3) * 0.22;
                ctx2d.strokeStyle = 'rgba(' + ACC + ',' + a + ')';
                ctx2d.lineWidth = 1;
                ctx2d.beginPath(); ctx2d.moveTo(0, y); ctx2d.lineTo(cW, y); ctx2d.stroke();
            }
            ctx2d.save();
            ctx2d.strokeStyle = 'rgba(79,195,247,0.9)';
            ctx2d.lineWidth = 2; ctx2d.shadowBlur = 20; ctx2d.shadowColor = 'rgba(' + ACC + ',1)';
            ctx2d.beginPath();
            for (let x = 0; x <= cW; x += 4) {
                const ph = x * 0.013 + t * 0.05;
                const amp = 14 + 6 * Math.sin(t * 0.012);
                const env = Math.exp(-Math.pow((x - cW / 2) / (cW * 0.52), 2) * 1.1);
                const y = horizon + (Math.sin(ph) * amp + Math.sin(ph * 2.7) * 5) * env;
                x === 0 ? ctx2d.moveTo(x, y) : ctx2d.lineTo(x, y);
            }
            ctx2d.stroke(); ctx2d.restore();
        };
        let ctT = 0;
        const ctFrame = () => {
            if (cW === 0 || cH === 0) { ctResize(); ctAnim = requestAnimationFrame(ctFrame); return; }
            drawContact(ctT++);
            ctAnim = requestAnimationFrame(ctFrame);
        };
        ctFrame();
    }

    // Contact form — Formspree via fetch (pas de redirection)
    const contactForm = document.getElementById('contactForm');
    const ctFormStatus = document.getElementById('ctFormStatus');
    if (contactForm && ctFormStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('[type="submit"]');
            submitBtn.disabled = true;
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            }).then(function(res) {
                if (res.ok) {
                    ctFormStatus.textContent = 'Message envoyé ! Je vous répondrai sous 24h.';
                    contactForm.reset();
                } else {
                    ctFormStatus.textContent = 'Erreur lors de l\'envoi. Contactez-moi directement par email.';
                }
                ctFormStatus.classList.add('show');
                setTimeout(function() { ctFormStatus.classList.remove('show'); }, 5000);
            }).catch(function() {
                ctFormStatus.textContent = 'Erreur de connexion. Réessayez plus tard.';
                ctFormStatus.classList.add('show');
                setTimeout(function() { ctFormStatus.classList.remove('show'); }, 5000);
            }).finally(function() {
                submitBtn.disabled = false;
            });
        });
    }
});

// Side nav — numérotation fixe des sections (desktop uniquement)
(function() {
    var sideNav = document.getElementById('side-nav');
    if (!sideNav) return;

    var dots = Array.from(sideNav.querySelectorAll('.sn-dot'));
    var sectionIds = ['pageEducation', 'pageSkills', 'pageCertificates', 'pageExperience', 'pageServices', 'pagePortfolio'];
    var sections = sectionIds.map(function(id) { return document.getElementById(id); }).filter(Boolean);
    var homeSection = document.getElementById('pageHome');

    dots.forEach(function(dot) {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(dot.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function updateNav() {
        var winH = window.innerHeight;

        if (homeSection) {
            var homeBottom = homeSection.getBoundingClientRect().bottom;
            if (homeBottom > winH * 0.5) {
                sideNav.classList.remove('sn-visible');
                return;
            } else {
                sideNav.classList.add('sn-visible');
            }
        }

        var current = -1;
        sections.forEach(function(sec, i) {
            var top = sec.getBoundingClientRect().top;
            if (top <= winH * 0.5) current = i;
        });

        dots.forEach(function(dot, i) {
            dot.classList.toggle('sn-active', i === current);
        });
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    // Appeler après window.load : #loadDiv est révélé par window.onload (ligne ~153)
    // avant ce listener, donc #pageHome a sa hauteur réelle ici
    window.addEventListener('load', function() { requestAnimationFrame(updateNav); });
})();

/* ===================== PORTFOLIO FILTER + GLARE + DETAIL VIEW ===================== */
(function() {
    var filters  = document.querySelectorAll('.pt-filter');
    var cards    = document.querySelectorAll('.pt-card');
    var ptList   = document.getElementById('pt-list');
    var ptDetail = document.getElementById('pt-detail');
    var ptBack   = document.getElementById('pt-back');

    if (!filters.length || !cards.length) return;

    /* --- Filters --- */
    filters.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filters.forEach(function(b) { b.classList.remove('pt-active'); });
            btn.classList.add('pt-active');
            var cat = btn.getAttribute('data-cat');
            cards.forEach(function(card) {
                if (cat === 'all' || card.getAttribute('data-cat') === cat) {
                    card.classList.remove('pt-hidden');
                } else {
                    card.classList.add('pt-hidden');
                }
            });
        });
    });

    /* --- Glare + tilt 3D + view-switch click --- */
    var PT_TILT = 12;
    var PT_Z    = 18;

    cards.forEach(function(card) {
        var glare = card.querySelector('.pt-glare');
        if (!glare) return;

        card.addEventListener('mouseenter', function() {
            card.style.transition = 'transform 0.1s ease, border-color 0.3s, box-shadow 0.35s';
        });

        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
            var dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
            card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%');
            card.style.setProperty('--my', ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%');
            card.style.transform = 'perspective(700px) rotateX(' + (-dy * PT_TILT).toFixed(2) + 'deg) rotateY(' + (dx * PT_TILT).toFixed(2) + 'deg) translateZ(' + PT_Z + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1), border-color 0.3s, box-shadow 0.35s';
            card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });

        card.addEventListener('click', function(e) {
            if (e.target.closest('a.pt-link')) return;
            var detId = card.getAttribute('data-det');
            if (!detId || !ptList || !ptDetail) return;
            var detDiv = document.getElementById('pd-' + detId);
            if (!detDiv) return;
            document.querySelectorAll('.pt-det').forEach(function(d) { d.style.display = 'none'; });
            detDiv.style.display = 'block';
            ptList.style.display = 'none';
            ptDetail.style.display = 'block';
            var sec = document.getElementById('pagePortfolio');
            if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* --- Back button --- */
    if (ptBack) {
        ptBack.addEventListener('click', function() {
            document.querySelectorAll('.pt-det').forEach(function(d) { d.style.display = 'none'; });
            ptDetail.style.display = 'none';
            ptList.style.display = 'block';
        });
    }

    /* --- Video players in detail view --- */
    document.querySelectorAll('.pd-video-wrap').forEach(function(wrap) {
        wrap.addEventListener('click', function() {
            var src = wrap.getAttribute('data-src');
            if (!src) return;
            wrap.innerHTML = '<video controls autoplay playsinline style="width:100%;height:100%;display:block;object-fit:contain"><source src="' + src + '" type="video/mp4"></video>';
        });
    });
})();

/* ===================== CERTIFICATE CARD TILT 3D ===================== */
(function() {
    var ceCards = document.querySelectorAll('.ce-card');
    if (!ceCards.length) return;
    var CE_TILT = 9;
    var CE_Z    = 12;

    ceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.transition = 'transform 0.1s ease, border-color 0.3s, box-shadow 0.35s, background 0.3s';
        });

        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
            var dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
            card.style.transform = 'perspective(700px) rotateX(' + (-dy * CE_TILT).toFixed(2) + 'deg) rotateY(' + (dx * CE_TILT).toFixed(2) + 'deg) translateZ(' + CE_Z + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1), border-color 0.3s, box-shadow 0.35s, background 0.3s';
            card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });
})();
(function() {
    var el = document.getElementById('typedRole');
    if (!el) return;
    var rolesMap = {
        en: ['Cybersecurity Engineer', 'QA Tester', 'Embedded Systems Dev'],
        fr: ['Ingénieur Cybersécurité', 'QA Tester', 'Systèmes Embarqués']
    };
    var ri = 0, ci = 0, del = false, timer = null;
    function getRoles() { return rolesMap[window._currentLang || 'en'] || rolesMap.en; }
    function tick() {
        var roles = getRoles();
        var w = roles[ri % roles.length];
        if (!del) {
            ci++;
            if (ci > w.length) {
                del = true;
                el.textContent = w;
                timer = setTimeout(tick, 1600);
                return;
            }
        } else {
            ci--;
            if (ci < 0) {
                del = false;
                ri = (ri + 1) % getRoles().length;
                ci = 0;
            }
        }
        el.textContent = w.slice(0, Math.max(0, ci));
        timer = setTimeout(tick, del ? 38 : 82);
    }
    window._typingReset = function() {
        clearTimeout(timer);
        ci = 0; del = false; ri = 0;
        el.textContent = '';
        tick();
    };
    tick();
})();

(function() {
    var home = document.getElementById('pageHome');
    if (!home) return;
    var grid = home.querySelector('.hero-grid');
    var heroText = home.querySelector('.hero-text');
    var photoStage = home.querySelector('.photo-stage');
    var glowTop = home.querySelector('.hero-glowtop');
    if (!grid) return;

    var ticking = false;
    var mx = 0, my = 0;

    function update() {
        var rect = home.getBoundingClientRect();
        var dx = (mx - rect.left - rect.width / 2) / (rect.width / 2);
        var dy = (my - rect.top - rect.height / 2) / (rect.height / 2);
        dx = Math.max(-1, Math.min(1, dx));
        dy = Math.max(-1, Math.min(1, dy));

        grid.style.transform = 'perspective(1200px) rotateX(' + (-dy * 3) + 'deg) rotateY(' + (dx * 3) + 'deg)';
        if (heroText) heroText.style.transform = 'translate(' + (-dx * 8) + 'px, ' + (-dy * 5) + 'px)';
        if (photoStage) photoStage.style.transform = 'translate(' + (dx * 12) + 'px, ' + (dy * 8) + 'px)';
        if (glowTop) glowTop.style.transform = 'translateX(calc(-50% + ' + (dx * 35) + 'px))';
        ticking = false;
    }

    home.addEventListener('mousemove', function(e) {
        mx = e.clientX;
        my = e.clientY;
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });

    home.addEventListener('mouseleave', function() {
        grid.style.transform = '';
        if (heroText) heroText.style.transform = '';
        if (photoStage) photoStage.style.transform = '';
        if (glowTop) glowTop.style.transform = 'translateX(-50%)';
    });
})();

/* ===================== SCROLL INDICATOR FADE ===================== */
(function() {
    var ind = document.querySelector('.glisser');
    if (!ind) return;
    window.addEventListener('scroll', function() {
        ind.style.opacity = window.scrollY > 80 ? '0' : '1';
    }, { passive: true });
})();

/* ===================== SERVICES CARDS — TILT 3D + GLARE ===================== */
(function() {
    var SV_TILT = 10;
    var SV_Z    = 14;

    document.querySelectorAll('.sv-card').forEach(function(card) {
        /* Create glare dynamically */
        var glare = document.createElement('div');
        glare.className = 'sv-glare';
        card.insertBefore(glare, card.firstChild);

        card.addEventListener('mouseenter', function() {
            card.style.transition = 'transform 0.1s ease, border-color 0.25s, box-shadow 0.3s';
        });

        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
            var dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
            card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%');
            card.style.setProperty('--my', ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%');
            card.style.transform = 'perspective(700px) rotateX(' + (-dy * SV_TILT).toFixed(2) + 'deg) rotateY(' + (dx * SV_TILT).toFixed(2) + 'deg) translateZ(' + SV_Z + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.4, 0.64, 1), border-color 0.25s, box-shadow 0.3s';
            card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });
})();

/* ===================== i18n — EN / FR ===================== */
(function() {
    var SAVED = localStorage.getItem('lang') || 'en';
    window._currentLang = SAVED;

    var t = {
        en: {
            'nav-home':'Home','nav-education':'Education','nav-skills':'Skills',
            'nav-certs':'Certificates','nav-experience':'Experience',
            'nav-services':'Services','nav-portfolio':'Portfolio','nav-contacts':'Contacts',
            'hero-status':'AVAILABLE &middot; ENSA T&Eacute;TOUAN',
            'hero-intro':'// Hi, I\'m',
            'hero-bio':'23-year-old engineering student from Burkina&nbsp;Faso, based in Morocco. I bridge <strong>cybersecurity</strong> and <strong>embedded systems</strong> &mdash; deploying SOC infrastructures, cloud IDS/IPS and IoT solutions that are resilient by design.',
            'hero-badge1':'&#9702; ENSA T&eacute;touan',
            'hero-badge2':'&#9702; Cybersecurity &amp; Embedded',
            'hero-badge3':'&#9702; Open to opportunities',
            'hero-cta-pri':'View my projects',
            'hero-cta-ghost':'Contact me',
            'edu1-title':'ENSA - TETOUAN | 2024 - Currently | Engineering Cycle',
            'edu1-desc':'A cycle of three years studies in cybersecurity and embedded systems.<br>More information on <a class="sites" href="https://ensate.uae.ac.ma/" target="_blank">the official site of ENSATE.</a>',
            'edu2-title':'ENSA - TETOUAN | 2022 - 2024 | Preparatory Cycle',
            'edu2-desc':'Two years of <strong>preparatory studies for the Engineering Cycle</strong>.<br>More information on <a class="sites" href="https://ensa-tetouan.ac.ma/" target="_blank">the official site of ENSATE.</a>',
            'edu3-title':'LYCÉE SCIENTIFIQUE NATIONAL DE OUAGADOUGOU | 2019 - 2022 | High School Degree',
            'edu3-desc':'<strong>Scientific High School Degree</strong> (C) obtained in Burkina Faso with honors (BIEN).<br>More information on <a class="sites" href="https://lsno-bf.org/" target="_blank">the official site of LSNO.</a>',
            'skills-cat1':'Cybersecurity',
            'skills-cat2':'Embedded systems',
            'skills-cat3':'Web and Software Development',
            'skills-cat4':'Other skills',
            'exp1-when':'2026',
            'exp1-role':'Internship – QA Tester Web/Mobile',
            'exp1-det':'Functional, regression and security testing on web and mobile applications. Writing test plans, test cases and bug reports; collaboration with development teams in an agile cycle.',
            'exp2-when':'Feb. 2026 – Present',
            'exp2-role':'Secretary General',
            'exp2-det':'Managing administrative operations, communication and logistics for major events of the international student association at ENSA Tétouan.',
            'exp3-when':'02/2025 – 07/2025',
            'exp3-role':'EP Manager – OGX-OGT',
            'exp3-det':'AIESEC is a global youth-led organization focused on leadership development through international exchanges. As an Experience Participant (EP) Manager for Outgoing Global Talent, I managed and coordinated international internship programs, helping young professionals secure impactful opportunities abroad.',
            'exp4-when':'Apr. – May 2025',
            'exp4-role':'Internship – Cybersecurity &amp; ML',
            'exp4-det':'Built a Phishing URL Scanner (Python, Flask, Scikit-learn) classifying URLs in real time, and a Password Strength Checker (Python, Streamlit) with visual feedback and improvement suggestions.',
            'exp5-when':'01/2025 – 05/2025',
            'exp5-role':'Club CoderSphere',
            'exp5-det':'CoderSphere is a technology hub dedicated to robotics, embedded systems, and cybersecurity. Through hands-on projects, I deepened my expertise in electronics and hardware design while strengthening my technical problem-solving and teamwork skills in a collaborative environment.',
            'exp6-when':'10/2023 – 10/2024',
            'exp6-role':'Deputy Secretary General',
            'exp6-det':'The AEBM supports Burkinaé students in Morocco through integration and guidance. During my tenure as Deputy Secretary General, I oversaw administrative tasks and coordinated community projects, significantly enhancing my leadership, organizational, and cross-cultural communication abilities.',
            'sv1-title':'Penetration Testing',
            'sv1-desc':'Real-world attack simulation on your systems to uncover vulnerabilities before malicious actors can exploit them.',
            'sv2-title':'SOC &amp; Blue Team',
            'sv2-desc':'Full SOC infrastructure deployment (SIEM, SOAR, incident management) to detect and respond to threats in real time.',
            'sv3-title':'Security &amp; Web/Mobile Testing',
            'sv3-desc':'Functional, regression and security testing on your web and mobile apps, with structured bug reports in an agile cycle.',
            'sv4-title':'Front-End Development',
            'sv4-desc':'Modern, responsive and animated web interfaces — from mockup to deployment, with a strong focus on UX quality.',
            'sv5-title':'Java Desktop Apps',
            'sv5-desc':'Full-featured desktop applications for client management, reservations or business workflows, connected to a database.',
            'sv6-title':'IoT &amp; Embedded Systems',
            'sv6-desc':'Design of intelligent embedded systems: data acquisition, automation and IoT/cloud connectivity.',
            'sv7-title':'Cloud Security &amp; IDS/IPS',
            'sv7-desc':'Deployment and hardening of cloud infrastructures with active intrusion detection and prevention systems.',
            'sv8-title':'AI &amp; Machine Learning',
            'sv8-desc':'ML models for classification, anomaly detection and predictive analytics applied to real-world problems.',
            'sv-cta':'Contact me',
            'pt-back':'&#8592; All projects',
            'pt-filter-all':'All','pt-filter-iot':'IoT / Embedded','pt-filter-cyber':'Cybersecurity',
            'pt-filter-web':'Web','pt-filter-java':'Java','pt-filter-fpga':'FPGA','pt-filter-other':'Other',
            'pt-shadow-cats':'Cybersecurity &middot; SOC &middot; Cloud &middot; R&amp;D',
            'pt-shadow-desc':'Full SOC infrastructure (Wazuh, TheHive 5, Shuffle SOAR) on OCI monitoring a simulated IT/OT industrial environment. 15 detection rules, automated SOAR workflow (detect → block IP → TheHive incident).',
            'pt-ids-cats':'Cybersecurity &middot; IDS/IPS &middot; Azure',
            'pt-ids-desc':'Suricata 8.0.4 deployment on Azure with custom VNet segmentation and NSG rules. 50,000+ active signatures and 4 custom detection rules for intrusion prevention.',
            'pt-fire-cats':'IoT &middot; Embedded &middot; ML',
            'pt-fire-desc':'End-to-end IoT solution combining ESP32 sensors, Random Forest ML, and a real-time web dashboard for early forest fire detection.',
            'pt-solar-cats':'IoT &middot; AI &middot; Embedded',
            'pt-solar-desc':'Embedded system with ESP32 and AI algorithms that automatically adjusts solar panel orientation to maximize energy production.',
            'pt-hepras-cats':'Java &middot; Database',
            'pt-hepras-desc':'Database management app for medical practices — patient records, appointments, billing, and role-based access control with SHA-256.',
            'pt-fpga-cats':'FPGA &middot; VHDL &middot; Digital Design',
            'pt-fpga-desc':'FPGA-based parking management with automated barrier control, real-time occupancy display, and FSM logic deployed in VHDL.',
            'pt-job-cats':'Web &middot; React',
            'pt-job-desc':'React app to manage job applications with an analytics dashboard, advanced search/filter, and JSON import/export features.',
            'pt-brainwave-cats':'Cybersecurity &middot; Python &middot; ML',
            'pt-brainwave-desc':'Two security tools built during internship: a Phishing URL Scanner with ML classification and a Password Strength Checker following OWASP standards.',
            'pt-agency-cats':'Java &middot; JavaFX &middot; Database',
            'pt-agency-desc':'Desktop app for managing clients, reservations, itineraries, and payments — with admin dashboard and WhatsApp integration.',
            'pt-portfolio-cats':'Web &middot; Front-end',
            'pt-portfolio-desc':'This portfolio — built from scratch with vanilla HTML, CSS, and JavaScript. Dark/light themes, canvas animations, and fully responsive.',
            'pt-odace-cats':'IoT &middot; Electronics &middot; Arduino',
            'pt-odace-desc':'Hands-on Arduino and electronics projects in the O\'dace club — components, circuits, and applied embedded systems theory.',
            'pt-marathon-cats':'Web &middot; HTML &middot; CSS',
            'pt-marathon-desc':'Two timed front-end coding challenges. Won Marathon 1 by delivering a complete website in 5 hours. Placed 3rd in Marathon 2.',
            'pt-engineering-cats':'Academic &middot; Engineering',
            'pt-engineering-desc':'Academic projects from the engineering cycle at ENSA Tetouan combining cybersecurity and embedded systems across various modules.',
            'pt-preparatory-cats':'Community &middot; Social',
            'pt-preparatory-desc':'Team social project: renovated an orphanage study room, organized tutoring sessions, and raised 6,500 MAD in community funding.',
            'ct-title':'Let\'s work together',
            'ct-lead':'An opportunity, an internship, a collaboration? I\'m open to projects in cybersecurity, embedded systems, QA testing and web development.',
            'ct-phone':'Phone',
            'ct-label-name':'Full name','ct-label-email':'Email','ct-label-subject':'Subject','ct-label-message':'Message',
            'ct-ph-name':'Your name','ct-ph-email':'you@example.com','ct-ph-subject':'Message subject','ct-ph-message':'Your message…',
            'ct-submit':'Send message'
        },
        fr: {
            'nav-home':'Accueil','nav-education':'Formation','nav-skills':'Compétences',
            'nav-certs':'Certifications','nav-experience':'Expérience',
            'nav-services':'Services','nav-portfolio':'Portfolio','nav-contacts':'Contacts',
            'hero-status':'DISPONIBLE &middot; ENSA T&Eacute;TOUAN',
            'hero-intro':'// Bonjour, je suis',
            'hero-bio':'Étudiant ingénieur de 23 ans originaire du Burkina&nbsp;Faso, basé au Maroc. Je relie la <strong>cybersécurité</strong> et les <strong>systèmes embarqués</strong> &mdash; déployant des infrastructures SOC, des IDS/IPS cloud et des solutions IoT résilientes.',
            'hero-badge1':'&#9702; ENSA T&eacute;touan',
            'hero-badge2':'&#9702; Cybersécurité &amp; Embarqué',
            'hero-badge3':'&#9702; Ouvert aux opportunités',
            'hero-cta-pri':'Voir mes projets',
            'hero-cta-ghost':'Me contacter',
            'edu1-title':'ENSA - TÉTOUAN | 2024 - En cours | Cycle Ingénieur',
            'edu1-desc':'Un cycle de trois ans en cybersécurité et systèmes embarqués.<br>Plus d\'informations sur <a class="sites" href="https://ensate.uae.ac.ma/" target="_blank">le site officiel de l\'ENSATE.</a>',
            'edu2-title':'ENSA - TÉTOUAN | 2022 - 2024 | Cycle Préparatoire',
            'edu2-desc':'Deux ans de <strong>classes préparatoires pour le Cycle Ingénieur</strong>.<br>Plus d\'informations sur <a class="sites" href="https://ensa-tetouan.ac.ma/" target="_blank">le site officiel de l\'ENSATE.</a>',
            'edu3-title':'LYCÉE SCIENTIFIQUE NATIONAL DE OUAGADOUGOU | 2019 - 2022 | Baccalauréat',
            'edu3-desc':'<strong>Baccalauréat Scientifique</strong> (C) obtenu au Burkina Faso avec mention Bien.<br>Plus d\'informations sur <a class="sites" href="https://lsno-bf.org/" target="_blank">le site officiel du LSNO.</a>',
            'skills-cat1':'Cybersécurité',
            'skills-cat2':'Systèmes embarqués',
            'skills-cat3':'Web et Développement logiciel',
            'skills-cat4':'Autres compétences',
            'exp1-when':'2026',
            'exp1-role':'Stage – Testeur QA Web/Mobile',
            'exp1-det':'Réalisation de tests fonctionnels, de régression et de sécurité sur des applications web et mobiles. Rédaction de plans et cas de test et rapports de bugs ; collaboration avec les équipes de développement en cycle agile.',
            'exp2-when':'Fév. 2026 – Présent',
            'exp2-role':'Secrétaire Général',
            'exp2-det':'Gestion des opérations administratives, de la communication et de la logistique pour les événements majeurs de l\'association internationale d\'étudiants de l\'ENSA Tétouan.',
            'exp3-when':'02/2025 – 07/2025',
            'exp3-role':'Responsable EP – OGX-OGT',
            'exp3-det':'L\'AIESEC est une organisation mondiale dirigée par des jeunes axée sur le développement du leadership par des échanges internationaux. En tant que Responsable EP pour les Talents Mondiaux Sortants, j\'ai géré et coordonné des programmes de stages internationaux, aidant de jeunes professionnels à décrocher des opportunités impactantes à l\'étranger.',
            'exp4-when':'Avr. – Mai 2025',
            'exp4-role':'Stage – Cybersécurité &amp; ML',
            'exp4-det':'Développement d\'un Scanner d\'URLs de Phishing (Python, Flask, Scikit-learn) classifiant les URLs en temps réel, et d\'un Vérificateur de Force de Mot de Passe (Python, Streamlit) avec retour visuel et suggestions d\'amélioration.',
            'exp5-when':'01/2025 – 05/2025',
            'exp5-role':'Club CoderSphere',
            'exp5-det':'CoderSphere est un hub technologique dédié à la robotique, aux systèmes embarqués et à la cybersécurité. À travers des projets pratiques, j\'ai approfondi mon expertise en électronique et en conception matérielle tout en renforçant mes compétences en résolution de problèmes techniques dans un environnement collaboratif.',
            'exp6-when':'10/2023 – 10/2024',
            'exp6-role':'Secrétaire Général Adjoint',
            'exp6-det':'L\'AEBM soutient les étudiants Burkinabés au Maroc à travers l\'intégration et l\'orientation. En tant que Secrétaire Général Adjoint, j\'ai supervisé les tâches administratives et coordonné des projets communautaires, renforçant mes capacités de leadership, d\'organisation et de communication interculturelle.',
            'sv1-title':'Test de Pénétration',
            'sv1-desc':'Simulation d\'attaques réelles sur vos systèmes pour identifier les vulnérabilités avant les acteurs malveillants.',
            'sv2-title':'SOC &amp; Blue Team',
            'sv2-desc':'Déploiement d\'infrastructure SOC complète (SIEM, SOAR, gestion d\'incidents) pour détecter et répondre aux menaces en temps réel.',
            'sv3-title':'Sécurité &amp; Tests Web/Mobile',
            'sv3-desc':'Tests fonctionnels, de régression et de sécurité sur vos applications web et mobiles, avec rapports de bugs en cycle agile.',
            'sv4-title':'Développement Front-End',
            'sv4-desc':'Interfaces web modernes, responsives et animées — de la maquette au déploiement, avec une attention particulière à l\'UX.',
            'sv5-title':'Applications Desktop Java',
            'sv5-desc':'Applications bureau complètes pour la gestion de clients, réservations ou workflows métier, connectées à une base de données.',
            'sv6-title':'IoT &amp; Systèmes Embarqués',
            'sv6-desc':'Conception de systèmes embarqués intelligents : acquisition de données, automatisation et connectivité IoT/cloud.',
            'sv7-title':'Sécurité Cloud &amp; IDS/IPS',
            'sv7-desc':'Déploiement et sécurisation d\'infrastructures cloud avec systèmes de détection et prévention d\'intrusions actifs.',
            'sv8-title':'IA &amp; Machine Learning',
            'sv8-desc':'Modèles ML pour la classification, la détection d\'anomalies et l\'analyse prédictive appliquée à des problèmes concrets.',
            'sv-cta':'Me contacter',
            'pt-back':'&#8592; Tous les projets',
            'pt-filter-all':'Tous','pt-filter-iot':'IoT / Embarqué','pt-filter-cyber':'Cybersécurité',
            'pt-filter-web':'Web','pt-filter-java':'Java','pt-filter-fpga':'FPGA','pt-filter-other':'Autre',
            'pt-shadow-cats':'Cybersécurité &middot; SOC &middot; Cloud &middot; R&amp;D',
            'pt-shadow-desc':'Infrastructure SOC complète (Wazuh, TheHive 5, Shuffle SOAR) sur OCI pour surveiller un environnement IT/OT simulant un site industriel. 15 règles de détection, workflow SOAR automatisé (détection → blocage IP → incident TheHive).',
            'pt-ids-cats':'Cybersécurité &middot; IDS/IPS &middot; Azure',
            'pt-ids-desc':'Déploiement de Suricata 8.0.4 sur Azure avec segmentation VNet personnalisée et règles NSG. Plus de 50 000 signatures actives et 4 règles de détection sur mesure pour la prévention d\'intrusions.',
            'pt-fire-cats':'IoT &middot; Embarqué &middot; ML',
            'pt-fire-desc':'Solution IoT complète combinant des capteurs ESP32, un classificateur Random Forest et un tableau de bord web en temps réel pour la détection précoce des feux de forêt.',
            'pt-solar-cats':'IoT &middot; IA &middot; Embarqué',
            'pt-solar-desc':'Système embarqué avec ESP32 et algorithmes IA qui ajuste automatiquement l\'orientation des panneaux solaires pour maximiser la production d\'énergie.',
            'pt-hepras-cats':'Java &middot; Base de données',
            'pt-hepras-desc':'Application de gestion médicale — dossiers patients, rendez-vous, facturation et contrôle d\'accès basé sur les rôles avec SHA-256.',
            'pt-fpga-cats':'FPGA &middot; VHDL &middot; Conception numérique',
            'pt-fpga-desc':'Gestion de parking à base de FPGA avec contrôle automatique des barrières, affichage de l\'occupation en temps réel et logique FSM déployée en VHDL.',
            'pt-job-cats':'Web &middot; React',
            'pt-job-desc':'Application React pour gérer les candidatures d\'emploi avec tableau de bord analytique, recherche/filtre avancé et fonctionnalités d\'import/export JSON.',
            'pt-brainwave-cats':'Cybersécurité &middot; Python &middot; ML',
            'pt-brainwave-desc':'Deux outils de sécurité développés lors du stage : un Scanner d\'URLs de Phishing avec classification ML et un Vérificateur de Force de Mot de Passe selon les normes OWASP.',
            'pt-agency-cats':'Java &middot; JavaFX &middot; Base de données',
            'pt-agency-desc':'Application bureau pour la gestion des clients, réservations, itinéraires et paiements — avec tableau de bord admin et intégration WhatsApp.',
            'pt-portfolio-cats':'Web &middot; Front-end',
            'pt-portfolio-desc':'Ce portfolio — construit de zéro avec HTML, CSS et JavaScript vanilla. Thèmes sombre/clair, animations canvas et entièrement responsive.',
            'pt-odace-cats':'IoT &middot; Électronique &middot; Arduino',
            'pt-odace-desc':'Projets Arduino et électronique pratiques au club O\'dace — composants, circuits et théorie des systèmes embarqués appliquée.',
            'pt-marathon-cats':'Web &middot; HTML &middot; CSS',
            'pt-marathon-desc':'Deux défis de programmation front-end chronométrés. Marathon 1 remporté en livrant un site complet en 5 heures. 3ème place au Marathon 2.',
            'pt-engineering-cats':'Académique &middot; Ingénierie',
            'pt-engineering-desc':'Projets académiques du cycle ingénieur à l\'ENSA Tétouan combinant cybersécurité et systèmes embarqués à travers différents modules.',
            'pt-preparatory-cats':'Communauté &middot; Social',
            'pt-preparatory-desc':'Projet social en équipe : rénovation d\'une salle d\'étude dans un orphelinat, sessions de tutorat et collecte de 6 500 MAD.',
            'ct-title':'Travaillons ensemble',
            'ct-lead':'Une opportunité, un stage, une collaboration ? Je suis ouvert aux projets en cybersécurité, systèmes embarqués, tests QA et développement web.',
            'ct-phone':'Téléphone',
            'ct-label-name':'Nom complet','ct-label-email':'Email','ct-label-subject':'Sujet','ct-label-message':'Message',
            'ct-ph-name':'Votre nom','ct-ph-email':'vous@exemple.com','ct-ph-subject':'Objet du message','ct-ph-message':'Votre message…',
            'ct-submit':'Envoyer le message'
        }
    };

    function applyLang(lang) {
        window._currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        var dict = t[lang] || t.en;
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var k = el.getAttribute('data-i18n');
            if (dict[k] !== undefined) el.innerHTML = dict[k];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
            var k = el.getAttribute('data-i18n-ph');
            if (dict[k] !== undefined) el.placeholder = dict[k];
        });
        document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
            var k = el.getAttribute('data-i18n-label');
            if (dict[k] !== undefined) el.setAttribute('data-label', dict[k].replace(/<[^>]+>/g, ''));
        });
        var btn = document.getElementById('langToggle');
        if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
        if (window._typingReset) window._typingReset();
    }

    /* Apply saved lang on load */
    applyLang(SAVED);

    /* Wire toggle button */
    var btn = document.getElementById('langToggle');
    if (btn) {
        btn.addEventListener('click', function() {
            applyLang(window._currentLang === 'fr' ? 'en' : 'fr');
        });
    }

    window.applyLang = applyLang;
})();
