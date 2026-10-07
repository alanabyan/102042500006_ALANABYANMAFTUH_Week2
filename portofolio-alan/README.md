# Portofolio Alan

React + Vite + GSAP (ScrollTrigger).

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil di folder dist/
npm run preview  # cek hasil build
```

## Mengganti konten

Semua teks, proyek, dan skill ada di `src/data.js`. Warna ada di bagian atas `src/index.css`.

## Struktur

```
portofolio-alan/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx          titik masuk, mendaftarkan ScrollTrigger
    App.jsx
    data.js           konten
    index.css         gaya dan token warna
    components/        (komponen setelah hero berada di dalam .sheet di App.jsx)
      Hero.jsx        hero sticky; huruf nama naik saat dibuka, mengecil saat tertimpa
      About.jsx       kata menyala saat scroll
      Projects.jsx    daftar proyek yang membuka saat diklik
      Skills.jsx
      Contact.jsx
```

## Deploy

Vercel atau Netlify: hubungkan repositori, build command `npm run build`, output `dist`.
GitHub Pages: tambahkan `base: "/nama-repo/"` di `vite.config.js`, lalu unggah isi `dist`.
