# Portfolio of Taobata Simporé

Source code of my portfolio: **[pro-simpo.github.io](https://pro-simpo.github.io)**

I am an engineering student in cybersecurity and embedded systems at ENSA Tétouan (Morocco), from Burkina Faso. I currently work as a QA & application security engineer at EBHI (L3M Holding group), and I am the volunteer lead developer of LSNO Amicale, the alumni network platform of my high school. I am looking for an end-of-studies internship (PFE) starting in February 2027.

## What the site contains

- **Experience**: EBHI (QA and application security), LSNO Amicale, student associations.
- **Projects**: 16 projects with a detail page each, among them ShadowFactory (Red Team vs Blue Team on an IT/OT environment), an IDS/IPS deployment on Azure, the LSNO Amicale platform and several IoT, FPGA and Java projects.
- **Certificates**: ISC2 CC, Microsoft Certified Cybersecurity Business Professional, Cisco Ethical Hacker and others.
- English and French versions, light and dark themes.

## How it is built

- Plain HTML, CSS and JavaScript: no framework, no build step.
- All the content lives in `portfolio-data.js` (English and French). `portfolio.js` renders the sections and the project pages from it.
- `index.html` keeps a static copy of the content for search engines and for visitors without JavaScript.
- `admin/` is the editing page of the site: it signs in with a GitHub token and publishes the changes as a commit.
- A project page can be linked directly, for example `https://pro-simpo.github.io/#pd-shadow`.

## Run it locally

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765`.

## Contact

- LinkedIn: [taobata-simpore](https://linkedin.com/in/taobata-simpore-21b255272)
- Email: [simporetaobata@gmail.com](mailto:simporetaobata@gmail.com)
- GitHub: [Pro-simpo](https://github.com/Pro-simpo)
