// Semua konten ada di sini. Ganti sesuai kebutuhan.
export const profile = {
	name: 'Alan',
	intro:
		'Mahasiswa Sistem Informasi. Saya membangun antarmuka web dan bereksperimen dengan machine learning.',
	about:
		'Saya suka membuat halaman web yang rapi dan cepat, lalu mencari tahu cara kerja di baliknya.',
	aboutBody:
		'Saya mahasiswa Sistem Informasi yang mengerjakan frontend, machine learning untuk teks berbahasa Indonesia, dan dasar-dasar jaringan. Saya lebih suka produk yang tidak perlu dijelaskan panjang.',
	photo: '/foto.jpg', // taruh file di public/foto.jpg
	cv: '/cv.pdf', // taruh file di public/cv.pdf
	email: 'halo@alan.dev',
};

export const projects = [
	{
		title: 'Ajarin',
		year: '2026',
		focus: 'Menghemat waktu guru',
		output: 'Backend API',
		desc: 'Generator modul ajar dan bank soal untuk guru. Guru memasukkan topik, aplikasi menyusun modulnya.',
		stack: 'TypeScript, Express, Prisma, zod',
		image: '/proyek/ajarin.jpg',
	},
	{
		title: 'Pangrango Hub',
		year: '2026',
		focus: 'Navigasi yang ringkas',
		output: 'Aplikasi web Vue.js',
		desc: 'Aplikasi web dengan layout sidebar dan navbar yang bisa dilipat.',
		stack: 'Vue.js, CSS',
		image: '/proyek/pangrango.jpg',
	},
	{
		title: 'Proses bisnis Gogomall',
		year: '2026',
		focus: 'Pemodelan proses bisnis',
		output: 'Dokumen analisis',
		desc: 'Studi kasus tujuh proses bisnis home shopping omnichannel untuk tugas besar PPB.',
		stack: 'Analisis sistem informasi',
		image: '/proyek/gogomall.jpg',
	},
	{
		title: 'Eksperimen NLP',
		year: '2026',
		focus: 'Teks berbahasa Indonesia',
		output: 'Notebook dan model',
		desc: 'Prapemrosesan teks dan model deep learning untuk teks berbahasa Indonesia.',
		stack: 'Python, Jupyter',
		image: '/proyek/nlp.jpg',
	},
];

export const skills = [
	{ group: 'Frontend', items: 'React, Vue.js, HTML, CSS, JavaScript, GSAP' },
	{ group: 'Machine learning', items: 'Python, Jupyter, NLP, deep learning' },
	{ group: 'Backend', items: 'Node.js, Express, Prisma, TypeScript' },
	{ group: 'Jaringan', items: 'Cisco IOS' },
];
