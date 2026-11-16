/* Préférence système « réduire les animations » : coupe les canevas animés, la frappe des rôles et le défilement doux */
var REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
var SCROLL_BEHAVIOR = REDUCE_MOTION ? 'auto' : 'smooth';

/* ===================== DATA-DRIVEN SECTION RENDERERS =====================
 * Runs synchronously at script load — fills sections from PORTFOLIO_DATA.
 * portfolio-data.js must be loaded BEFORE portfolio.js.
 */
(function() {
    if (!window.PORTFOLIO_DATA) return;
    var D = window.PORTFOLIO_DATA;

    var GITHUB_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>';

    function _renderExperience(lang) {
        var el = document.querySelector('.ex-tl');
        if (!el || !D.experience) return;
        el.innerHTML = D.experience.map(function(e) {
            var l = e[lang] || e.en;
            return '<div class="ex-tl-item"><div class="ex-tl-card">'
                + (e.logo ? '<img class="ex-tl-logo" src="' + e.logo + '" alt="' + (e.logoAlt || '') + '">' : '')
                + '<span class="ex-when" data-i18n="' + e.id + '-when">' + l.when + '</span>'
                + '<h3 class="ex-role" data-i18n="' + e.id + '-role">' + l.role + '</h3>'
                + '<div class="ex-org">' + e.org + '</div>'
                + '<p class="ex-det" data-i18n="' + e.id + '-det">' + l.det + '</p>'
                + '</div></div>';
        }).join('');
    }

    function _renderServices(lang) {
        var el = document.querySelector('.sv-grid');
        if (!el || !D.services) return;
        el.innerHTML = D.services.map(function(s) {
            var l = s[lang] || s.en;
            return '<div class="sv-card" data-clr="' + s.color + '">'
                + '<div class="sv-icon-wrap"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' + s.iconSvg + '</svg></div>'
                + '<h3 class="sv-title" data-i18n="' + s.id + '-title">' + l.title + '</h3>'
                + '<p class="sv-desc" data-i18n="' + s.id + '-desc">' + l.desc + '</p>'
                + '<div class="sv-tags">' + s.tags.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>'
                + '</div>';
        }).join('');
    }

    function _renderProjects(lang) {
        var el = document.querySelector('.pt-grid');
        if (!el || !D.projects) return;
        el.innerHTML = D.projects.map(function(p) {
            var l = p[lang] || p.en;
            return '<article class="pt-card" data-cat="' + p.category + '" data-det="' + p.detId + '">'
                + '<div class="pt-glare"></div>'
                + '<div class="pt-thumb"><img src="' + p.thumbnail + '" alt="' + p.thumbAlt + '"></div>'
                + '<div class="pt-body">'
                + '<div class="pt-cats" data-i18n="pt-' + p.id + '-cats">' + l.cats + '</div>'
                + '<h3 class="pt-title"><a href="#pd-' + (p.detId || p.id) + '">' + p.title + '</a></h3>'
                + '<p class="pt-desc" data-i18n="pt-' + p.id + '-desc">' + l.desc + '</p>'
                + '<div class="pt-stack">' + p.stack.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>'
                + (p.github ? '<a class="pt-link" href="' + p.github + '" target="_blank" rel="noopener">' + (p.linkLabel ? '<span data-i18n="pt-' + p.id + '-link">' + (p.linkLabel[lang] || p.linkLabel.en) + '</span>' : 'GitHub') + ' ' + GITHUB_ICON + '</a>' : '')
                + '</div></article>';
        }).join('');
    }

    var PD_ICONS = {"github": "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a4 4 0 011-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7a4 4 0 011 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0012 2z\"/></svg>", "pdf": "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z\"/><polyline points=\"14,2 14,8 20,8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10,9 9,9 8,9\"/></svg>", "link": "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12h20\"/><path d=\"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z\"/></svg>"};

    function _pdMain(det, lang) {
        var l = det[lang] || det.en;
        var html = '<div class="pd-main lang-' + lang + '">';
        (l.sections || []).forEach(function(sec) {
            html += '<div class="pd-section"><h3 class="pd-section-h">' + sec.title + '</h3>';
            if (sec.type === 'list') html += '<ul class="pd-list">' + (sec.items || []).map(function(x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
            else if (sec.type === 'stack') html += '<div class="pd-stack">' + (sec.items || []).map(function(x) { return '<span>' + x + '</span>'; }).join('') + '</div>';
            else html += '<p>' + (sec.text || '') + '</p>';
            html += '</div>';
        });
        if (l.links && l.links.length) {
            html += '<div class="pd-meta">' + l.links.map(function(a) {
                return '<a class="pd-link-btn' + (a.ghost ? ' pd-link-ghost' : '') + '" href="' + a.url + '" target="_blank" rel="noopener">' + (PD_ICONS[a.icon] || PD_ICONS.link) + ' ' + a.label + '</a>';
            }).join('') + '</div>';
        }
        if (l.team && (l.team.label || l.team.text)) {
            html += '<div class="pd-team"><span class="pd-team-label">' + (l.team.label || '') + '</span> ' + (l.team.text || '') + '</div>';
        }
        return html + '</div>';
    }

    var PDF_ICON = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';
    function _pdMedia(det) {
        var play = '<div class="pd-play"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg><span data-i18n="pd-watch-demo">Watch demo</span></div>';
        return '<div class="pd-media">' + (det.media || []).map(function(m) {
            var st = m.style ? ' style="' + m.style + '"' : '';
            if (m.type === 'label') return '<div class="pd-media-label"' + st + '>' + m.text + '</div>';
            if (m.type === 'video') return '<div class="pd-video-wrap" role="button" tabindex="0" data-src="' + m.src + '"><img loading="lazy" src="' + (m.poster || '') + '" alt="' + (m.alt || '') + '">' + play + '</div>';
            if (m.type === 'pdf') return '<div class="pd-video-wrap pd-pdf-wrap" role="button" tabindex="0" data-pdf="' + m.src + '"><img loading="lazy" src="' + (m.poster || '') + '" alt="' + (m.alt || '') + '"><div class="pd-play">' + PDF_ICON + '<span data-i18n="pd-view-pdf">View presentation</span></div></div>';
            if (m.type === 'gallery') return '<div class="pd-imgs">' + (m.images || []).map(function(im) { return '<img loading="lazy" src="' + im.src + '" alt="' + (im.alt || '') + '">'; }).join('') + '</div>';
            return '<img loading="lazy"' + (m.overview ? ' class="pd-overview-img"' : '') + ' src="' + m.src + '" alt="' + (m.alt || '') + '"' + st + '>';
        }).join('') + '</div>';
    }

    function _renderDetails() {
        var box = document.getElementById('pt-detail');
        if (!box || !D.projects) return;
        box.querySelectorAll('.pt-det').forEach(function(n) { n.parentNode.removeChild(n); });
        D.projects.forEach(function(p) {
            var det = p.detail;
            if (!det) return;
            var el = document.createElement('div');
            el.className = 'pt-det';
            el.id = 'pd-' + (p.detId || p.id);
            el.innerHTML = ['en', 'fr'].map(function(L) {
                var l = det[L] || det.en;
                return '<div class="pd-header lang-' + L + '"><div class="pd-cats">' + (l.cats || '') + '</div><h2 class="pd-title">' + (l.title || p.title) + '</h2></div>';
            }).join('') + '<div class="pd-layout">' + _pdMain(det, 'en') + _pdMain(det, 'fr') + _pdMedia(det) + '</div>';
            box.appendChild(el);
        });
    }

    function _renderCertificates() {
        var el = document.querySelector('.ce-grid');
        if (!el || !D.certificates) return;
        el.innerHTML = D.certificates.map(function(c) {
            return '<a class="ce-card" href="' + c.pdf + '" target="_blank" rel="noopener">'
                + '<div class="ce-thumb"><img src="' + c.thumb + '" alt="' + c.thumbAlt + '"></div>'
                + '<div class="ce-body">'
                + '<span class="ce-code">' + c.code + '</span>'
                + '<h4 class="ce-title">' + c.title + '</h4>'
                + '<div class="ce-iss">' + c.issuer + '</div>'
                + '</div></a>';
        }).join('');
    }

    function _renderSkills() {
        var root = document.querySelector('.div3skillphoto');
        if (!root || !D.skills) return;
        D.skills.forEach(function(cat) {
            var container = root.querySelector('.' + cat.containerClass + ' .skills-container');
            if (!container) return;
            container.innerHTML = cat.items.map(function(s) {
                return '<span class="skill-badge" data-skill="' + s.name + '">'
                    + '<div class="skillImage"><i class="' + s.iconClass + '"></i></div>'
                    + s.name + '</span>';
            }).join('');
        });
    }

    /* Initial render at script load time */
    var _initLang = localStorage.getItem('lang') || 'en';
    _renderExperience(_initLang);
    _renderServices(_initLang);
    _renderProjects(_initLang);
    _renderCertificates();
    _renderSkills();
    _renderDetails();
    /* Language switching is handled by applyLang() via data-i18n attributes on the generated elements. */
})();

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
            behavior: SCROLL_BEHAVIOR,
            block: 'start'
        });
    });
});


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

// Affichage de la page dès que le DOM est prêt (sans attendre les images, les polices ni les vidéos)
(function() {
    var loadImage = document.getElementById("loadImage");
    var loadDiv = document.getElementById("loadDiv");
    if (loadImage) loadImage.style.display = "none";
    if (loadDiv) loadDiv.style.display = "initial";
})();


// Gestion des thèmes : le choix du visiteur est mémorisé ; sinon clair le jour (6 h - 19 h), sombre la nuit
(function() {
    var themeButton = document.getElementsByClassName("theme-toggle")[0];
    function stored() {
        try { var v = localStorage.getItem('theme'); return (v === 'light' || v === 'dark') ? v : null; } catch (e) { return null; }
    }
    function byHour() {
        var h = new Date().getHours();
        return (h >= 6 && h < 19) ? 'light' : 'dark';
    }
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeButton) themeButton.textContent = theme === 'dark' ? "☀️" : "🌙";
    }
    setTheme(stored() || byHour());
    if (themeButton) themeButton.addEventListener("click", function() {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
        try { localStorage.setItem('theme', next); } catch (e) {}
    });
})();





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



// Met à jour les variables CSS --x et --y avec la position du curseur
var lampEl = document.getElementById('pageHome');
if (lampEl) lampEl.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + window.scrollY + 'px');
});





// Canevas de défilement style hacker : en pause quand l'onglet est masqué, désactivé si le visiteur réduit les animations
(function() {
    var canvas = document.getElementById('matrix-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var fontSize = 8;
    var rainDrops = [];

    function resize() {
        if (canvas.width === window.innerWidth && canvas.height === window.innerHeight) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var columns = Math.floor(canvas.width / fontSize);
        while (rainDrops.length < columns) rainDrops.push(1);
        rainDrops.length = columns;
    }

    function draw() {
        ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)'; // Vert
        ctx.font = fontSize + 'px monospace';

        for (var i = 0; i < rainDrops.length; i++) {
            var text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    var timer = null;
    function start() { if (!timer && !REDUCE_MOTION && !document.hidden) timer = setInterval(draw, 103); }
    function stop() { clearInterval(timer); timer = null; }

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', function() { if (document.hidden) stop(); else start(); });
})();


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
        let ctT = 0, ctRunning = false, ctVisible = !('IntersectionObserver' in window);
        const ctFrame = () => {
            if (!ctRunning) return;
            if (cW === 0 || cH === 0) ctResize(); else drawContact(ctT++);
            ctAnim = requestAnimationFrame(ctFrame);
        };
        // L'animation ne tourne que si la section Contact est à l'écran et l'onglet visible
        const ctUpdate = () => {
            const run = ctVisible && !document.hidden && !REDUCE_MOTION;
            if (run && !ctRunning) { ctRunning = true; ctFrame(); }
            else if (!run && ctRunning) { ctRunning = false; cancelAnimationFrame(ctAnim); }
        };
        // Animations réduites : une seule image fixe
        const ctStatic = () => { if (REDUCE_MOTION && ctVisible) { ctResize(); if (cW && cH) drawContact(0); } };
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(function(entries) {
                ctVisible = entries[0].isIntersecting;
                ctStatic();
                ctUpdate();
            }).observe(ctCanvas);
        }
        window.addEventListener('resize', ctStatic, { passive: true });
        document.addEventListener('visibilitychange', ctUpdate);
        ctUpdate();
    }

    // Contact form — Formspree via fetch (pas de redirection)
    const contactForm = document.getElementById('contactForm');
    const ctFormStatus = document.getElementById('ctFormStatus');
    if (contactForm && ctFormStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('[type="submit"]');
            // Messages dans la langue affichée (textes ct-status-* de portfolio-data.js)
            const tr = function(key, fallback) { return (window._i18n && window._i18n(key)) || fallback; };
            submitBtn.disabled = true;
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            }).then(function(res) {
                if (res.ok) {
                    ctFormStatus.textContent = tr('ct-status-ok', 'Message sent! I will reply within 24 hours.');
                    contactForm.reset();
                } else {
                    ctFormStatus.textContent = tr('ct-status-error', 'Sending failed. Please contact me directly by email.');
                }
                ctFormStatus.classList.add('show');
                setTimeout(function() { ctFormStatus.classList.remove('show'); }, 5000);
            }).catch(function() {
                ctFormStatus.textContent = tr('ct-status-network', 'Connection error. Please try again later.');
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
            if (target) target.scrollIntoView({ behavior: SCROLL_BEHAVIOR, block: 'start' });
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
        btn.setAttribute('aria-pressed', btn.classList.contains('pt-active') ? 'true' : 'false');
        btn.addEventListener('click', function() {
            filters.forEach(function(b) { b.classList.remove('pt-active'); b.setAttribute('aria-pressed', 'false'); });
            btn.classList.add('pt-active');
            btn.setAttribute('aria-pressed', 'true');
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
    var PT_TILT = 4;
    var PT_Z    = 6;

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
            card.style.transform = 'perspective(1000px) rotateX(' + (-dy * PT_TILT).toFixed(2) + 'deg) rotateY(' + (dx * PT_TILT).toFixed(2) + 'deg) translateZ(' + PT_Z + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.4s ease, border-color 0.25s, box-shadow 0.3s';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });

        /* The address becomes #pd-<id>: the page can be shared and the browser Back button returns to the list.
           The title is a real link (keyboard and screen readers); a click anywhere else on the card does the same. */
        card.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;
            var detId = card.getAttribute('data-det');
            if (!detId || !document.getElementById('pd-' + detId)) return;
            if (location.hash === '#pd-' + detId) ptOpenById(detId);
            else location.hash = 'pd-' + detId;
        });
    });

    function ptShowList() {
        if (!ptList || !ptDetail) return;
        document.querySelectorAll('.pt-det').forEach(function(d) { d.style.display = 'none'; });
        ptDetail.style.display = 'none';
        ptList.style.display = 'block';
    }

    /* --- Back button --- */
    if (ptBack) {
        ptBack.addEventListener('click', function() {
            ptShowList();
            if (/^#pd-/.test(location.hash) && window.history && history.pushState) {
                history.pushState(null, '', location.pathname + location.search);
            }
        });
    }

    /* --- Open a specific project via #pd-<id> (cards, CV and external links) --- */
    function ptOpenById(detId) {
        if (!detId) return;
        var detDiv = document.getElementById('pd-' + detId);
        if (detDiv && ptList && ptDetail) {
            document.querySelectorAll('.pt-det').forEach(function(d) { d.style.display = 'none'; });
            detDiv.style.display = 'block';
            ptList.style.display = 'none';
            ptDetail.style.display = 'block';
        }
        var sec = document.getElementById('pagePortfolio');
        if (sec) sec.scrollIntoView({ behavior: SCROLL_BEHAVIOR, block: 'start' });
    }
    function ptHandleHash() {
        var m = (location.hash || '').match(/^#pd-([\w-]+)$/);
        if (m) ptOpenById(m[1]);
        else if (ptDetail && ptDetail.style.display === 'block') ptShowList();
    }
    window.addEventListener('hashchange', ptHandleHash);
    setTimeout(ptHandleHash, 300);

    /* Direct link from a CV (#pd-<id>): the page is shown before its images are loaded, so the content above
       can still move. Once everything is loaded, put the project back at the top, unless the visitor has
       already started to scroll. */
    if (/^#pd-[\w-]+$/.test(location.hash)) {
        var ptUserMoved = false;
        ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function(ev) {
            window.addEventListener(ev, function() { ptUserMoved = true; }, { passive: true, once: true });
        });
        window.addEventListener('load', function() {
            setTimeout(function() {
                if (ptUserMoved || !/^#pd-[\w-]+$/.test(location.hash)) return;
                var sec = document.getElementById('pagePortfolio');
                if (sec) sec.scrollIntoView({ behavior: 'auto', block: 'start' });
            }, 350);
        });
    }

    /* --- Keyboard: Enter or Space on a video / PDF thumbnail --- */
    document.querySelectorAll('.pd-video-wrap').forEach(function(wrap) {
        wrap.addEventListener('keydown', function(e) {
            if (e.target !== wrap || (e.key !== 'Enter' && e.key !== ' ')) return;
            e.preventDefault();
            wrap.click();
        });
    });

    /* --- PDF presentations in detail view (inline on desktop, new tab on phones) --- */
    document.querySelectorAll('.pd-pdf-wrap').forEach(function(wrap) {
        wrap.addEventListener('click', function() {
            var src = wrap.getAttribute('data-pdf');
            if (!src || wrap.querySelector('iframe')) return;
            if (window.innerWidth < 740) { window.open(src, '_blank', 'noopener'); return; }
            wrap.innerHTML = '<iframe src="' + src + '#view=FitH" title="PDF" loading="lazy"></iframe>';
            wrap.style.cursor = 'default';
        });
    });

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
    var CE_TILT = 4;
    var CE_Z    = 6;

    ceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.transition = 'transform 0.1s ease, border-color 0.3s, box-shadow 0.35s, background 0.3s';
        });

        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
            var dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
            card.style.transform = 'perspective(1000px) rotateX(' + (-dy * CE_TILT).toFixed(2) + 'deg) rotateY(' + (dx * CE_TILT).toFixed(2) + 'deg) translateZ(' + CE_Z + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.4s ease, border-color 0.3s, box-shadow 0.35s, background 0.3s';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });
})();
(function() {
    var el = document.getElementById('typedRole');
    if (!el) return;
    var _tx = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.texts) || {};
    function _roles(L) {
        var v = (_tx[L] && _tx[L]['hero-roles']) || (_tx.en && _tx.en['hero-roles']) || '';
        return v.split('|').map(function(r) { return r.trim(); }).filter(Boolean);
    }
    var rolesMap = { en: _roles('en'), fr: _roles('fr') };
    if (!rolesMap.en.length) rolesMap.en = [''];
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
        /* Reduced motion: the first role is shown as plain text, without the typing effect */
        if (REDUCE_MOTION) { el.textContent = getRoles()[0] || ''; return; }
        el.textContent = '';
        tick();
    };
    window._typingReset();
})();

(function() {
    var home = document.getElementById('pageHome');
    if (!home) return;
    var grid = home.querySelector('.hero-grid');
    var heroText = home.querySelector('.hero-text');
    var photoStage = home.querySelector('.photo-stage');
    var glowTop = home.querySelector('.hero-glowtop');
    if (!grid || REDUCE_MOTION) return;

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
    var SV_TILT = 4;
    var SV_Z    = 6;

    function _initSvTilt() {
        document.querySelectorAll('.sv-card:not([data-tilt])').forEach(function(card) {
            card.setAttribute('data-tilt', '1');
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
            card.style.transform = 'perspective(1000px) rotateX(' + (-dy * SV_TILT).toFixed(2) + 'deg) rotateY(' + (dx * SV_TILT).toFixed(2) + 'deg) translateZ(' + SV_Z + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transition = 'transform 0.4s ease, border-color 0.25s, box-shadow 0.3s';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
        });
    }

    _initSvTilt();
    window._initSvTilt = _initSvTilt;
})();

/* ===================== i18n — EN / FR ===================== */
(function() {
    var SAVED = localStorage.getItem('lang') || 'en';
    window._currentLang = SAVED;

    /* UI texts come from PORTFOLIO_DATA.texts (editable in the admin) */
    var t = { en: {}, fr: {} };
    if (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.texts) {
        ['en', 'fr'].forEach(function(L) {
            var src = window.PORTFOLIO_DATA.texts[L] || {};
            Object.keys(src).forEach(function(k) { t[L][k] = src[k]; });
        });
    }

    /* Merge PORTFOLIO_DATA translations so admin edits override hardcoded values */
    if (window.PORTFOLIO_DATA) {
        var _pd = window.PORTFOLIO_DATA;
        if (_pd.experience) _pd.experience.forEach(function(e) {
            if (e.en) { t.en[e.id+'-when']=e.en.when; t.en[e.id+'-role']=e.en.role; t.en[e.id+'-det']=e.en.det; }
            if (e.fr) { t.fr[e.id+'-when']=e.fr.when; t.fr[e.id+'-role']=e.fr.role; t.fr[e.id+'-det']=e.fr.det; }
        });
        if (_pd.services) _pd.services.forEach(function(s) {
            if (s.en) { t.en[s.id+'-title']=s.en.title; t.en[s.id+'-desc']=s.en.desc; }
            if (s.fr) { t.fr[s.id+'-title']=s.fr.title; t.fr[s.id+'-desc']=s.fr.desc; }
        });
        if (_pd.projects) _pd.projects.forEach(function(p) {
            if (p.en) { t.en['pt-'+p.id+'-cats']=p.en.cats; t.en['pt-'+p.id+'-desc']=p.en.desc; }
            if (p.fr) { t.fr['pt-'+p.id+'-cats']=p.fr.cats; t.fr['pt-'+p.id+'-desc']=p.fr.desc; }
            if (p.linkLabel) { t.en['pt-'+p.id+'-link']=p.linkLabel.en; t.fr['pt-'+p.id+'-link']=p.linkLabel.fr || p.linkLabel.en; }
        });
    }

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
    /* Text lookup in the current language, for strings set from JavaScript (plain text) */
    window._i18n = function(key) {
        var v = (t[window._currentLang] || t.en)[key];
        if (v === undefined) v = t.en[key];
        return v === undefined ? '' : String(v).replace(/<[^>]+>/g, '');
    };
})();
