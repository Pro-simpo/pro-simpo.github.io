# Portfolio of Taobata Simporé

Source code of my portfolio: **[pro-simpo.github.io](https://pro-simpo.github.io)**

I am an engineering student in cybersecurity and embedded systems at ENSA Tétouan (Morocco), from Burkina Faso. I currently work as a QA & application security engineer at EBHI (L3M Holding group), and I am the volunteer lead developer of LSNO Amicale, the alumni network platform of my high school. I am looking for an end-of-studies internship (PFE) starting in February 2027.

## What the site contains

- **Experience**: QA & application security engineer at EBHI (security audits, acceptance testing, Playwright test automation in CI), lead developer of LSNO Amicale, student associations.
- **Projects**: 16 projects, each with its own page. Among them:
  - [ShadowFactory](https://pro-simpo.github.io/#pd-shadow): Red Team vs Blue Team on a simulated IT/OT plant, a team project where I built the SOC side (Wazuh, TheHive 5, Shuffle SOAR);
  - [IDS/IPS on Azure](https://pro-simpo.github.io/#pd-ids): Suricata in inline mode on a segmented virtual network;
  - [LSNO Amicale](https://pro-simpo.github.io/#pd-lsno): alumni network platform in production (250+ members, 18 countries);
  - [MACC 2026](https://pro-simpo.github.io/#pd-macc): Morocco's national student cybersecurity competition;
  - IoT, FPGA, Java and web projects.
- **Certificates**: 12 certificates, including ISC2 CC, Microsoft Certified Cybersecurity Business Professional and Cisco Ethical Hacker.
- **CV** in English and French.

## Features

- English and French versions, light and dark themes (the choice is remembered).
- Every project page has its own address (`#pd-<id>`), so it can be linked from a CV, and the browser Back button returns to the list.
- Link preview (title, description and image) when the site is shared.
- Keyboard navigation, and animations paused for visitors who ask their system to reduce motion.
- Demo videos and PDF reports load only when they are opened.

## How it is built

- Plain HTML, CSS and JavaScript: no framework, no build step.
- All the content lives in `portfolio-data.js` (English and French). `portfolio.js` renders the sections and the project pages from it.
- `index.html` keeps a static copy of the content for search engines and for visitors without JavaScript.
- `admin/` is the editing page of the site: it signs in with a GitHub token and publishes the changes as a commit.

| Path | Role |
|---|---|
| `index.html` | Page structure, metadata, static copy of the content |
| `portfolio-data.js` | All texts and data (experience, projects, skills, certificates) |
| `portfolio.js` | Rendering, languages, themes, project pages, animations |
| `portfolio.css` | Styles |
| `admin/` | Editing page |
| `img/` | Images and demo videos |
| `certificates/` | Certificates, project reports and CVs (PDF) |

## Run it locally

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765`.

## Contact

- LinkedIn: [taobata-simpore](https://linkedin.com/in/taobata-simpore-21b255272)
- Email: [simporetaobata@gmail.com](mailto:simporetaobata@gmail.com)
- GitHub: [Pro-simpo](https://github.com/Pro-simpo)
