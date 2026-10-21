import { ref } from 'vue';

// Current language state: persisted in localStorage, defaults to English
const lang = ref(
  typeof localStorage !== 'undefined' && localStorage.getItem('lang') === 'id' ? 'id' : 'en'
);

const messages = {
  en: {
    langLabel: 'Switch language',
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portofolio',
      contact: 'Contact'
    },
    home: {
      welcome: 'Welcome to my universe',
      roles: ['Fullstack Explorer', 'Digital Artisan', 'Creative Problem Solver', 'Engineering Enthusiast'],
      tagline: 'Passionate about crafting <span class="text-white">beautiful digital experiences</span> through code. Based in Indonesia, exploring the boundaries of the digital world. 👋🏼',
      downloadCv: 'Download CV',
      cvTitle: 'System Notification',
      cvMessage: 'CV link coming soon! Please reach out to me via the <b>Contact</b> menu for now.',
      cvOk: 'Understood'
    },
    about: {
      title: 'About Me',
      story1: 'The Story Behind',
      story2: 'Every Code',
      bio1: 'Hello! I am a developer who believes that the best kind of technology is the one that possesses <span class="text-primary font-medium">\'soul\'</span>.',
      bio2: 'My fascination with the digital world began with a simple curiosity: <span class="italic text-white/90">how does it all work?</span> That spark of inquiry is what led me to my current career—transforming complex problems into elegant solutions. To me, code is more than just lines of instructions; it is an instrument for creating meaningful user experiences.',
      bio3: 'From building large-scale platforms to designing minimalist personal blogs, my focus remains the same: meticulous attention to detail and a commitment to quality. <span class="text-white font-semibold">I don\'t just build products; I build unforgettable experiences.</span>',
      skills: 'Skills',
      techTab: 'Tech Stack',
      toolsTab: 'Tools'
    },
    portfolio: {
      title: 'Past Project Experience',
      subtitle: 'Explore the projects I\'ve worked on so far',
      viewGithub: 'View github repository',
      viewDemo: 'View finished project',
      projects: {
        1: 'A mobile application for student attendance tracking using Flutter.',
        2: 'A web-based application to track personal finances, income, and expenses.',
        3: 'A professional corporate website for representing brand identity and services.',
        4: 'A premium granite company landing page with product catalog, project showcase, testimonials, and consultation flow.',
        5: 'An editorial-style optical store landing page with curated collections, eye care services, and appointment booking.'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a question or want to work together? Feel free to reach out!',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      messagePlaceholder: 'Your message here...',
      send: 'Send Message',
      sending: 'Sending...',
      sentTitle: 'Message Sent!',
      sentText: 'Thank you for reaching out. I\'ll get back to you soon!',
      sendAnother: 'Send Another Message',
      errRequired: 'Please fill in all fields.',
      errFailed: 'Failed to send message. Please try again later.',
      errCredentials: 'Error: {msg}. Please check your credentials.'
    },
    status: {
      Advanced: 'Advanced',
      Advance: 'Advance',
      Intermediate: 'Intermediate',
      Beginner: 'Beginner',
      'Version Control': 'Version Control',
      'Git Hosting': 'Git Hosting',
      'Package Manager': 'Package Manager',
      Database: 'Database'
    }
  },
  id: {
    langLabel: 'Ganti bahasa',
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      portfolio: 'Portofolio',
      contact: 'Kontak'
    },
    home: {
      welcome: 'Selamat datang di alam semestaku',
      roles: ['Fullstack Explorer', 'Pengrajin Digital', 'Pemecah Masalah Kreatif', 'Penggemar Engineering'],
      tagline: 'Bersemangat menciptakan <span class="text-white">pengalaman digital yang indah</span> melalui kode. Berbasis di Indonesia, menjelajahi batas-batas dunia digital. 👋🏼',
      downloadCv: 'Unduh CV',
      cvTitle: 'Notifikasi Sistem',
      cvMessage: 'Tautan CV segera hadir! Untuk saat ini, silakan hubungi saya melalui menu <b>Kontak</b>.',
      cvOk: 'Mengerti'
    },
    about: {
      title: 'Tentang Saya',
      story1: 'Cerita di Balik',
      story2: 'Setiap Kode',
      bio1: 'Halo! Saya seorang developer yang percaya bahwa teknologi terbaik adalah yang memiliki <span class="text-primary font-medium">\'jiwa\'</span>.',
      bio2: 'Ketertarikan saya pada dunia digital dimulai dari satu rasa penasaran sederhana: <span class="italic text-white/90">bagaimana semua ini bekerja?</span> Percikan rasa ingin tahu itulah yang membawa saya ke karier saat ini—mengubah masalah yang rumit menjadi solusi yang elegan. Bagi saya, kode lebih dari sekadar baris perintah; ia adalah instrumen untuk menciptakan pengalaman yang bermakna bagi pengguna.',
      bio3: 'Dari membangun platform berskala besar hingga merancang blog pribadi yang minimalis, fokus saya tetap sama: kecermatan terhadap detail dan komitmen pada kualitas. <span class="text-white font-semibold">Saya tidak hanya membangun produk; saya membangun pengalaman yang tak terlupakan.</span>',
      skills: 'Keahlian',
      techTab: 'Teknologi',
      toolsTab: 'Perkakas'
    },
    portfolio: {
      title: 'Pengalaman Proyek Sebelumnya',
      subtitle: 'Jelajahi proyek yang pernah saya kerjakan sejauh ini',
      viewGithub: 'Lihat repositori GitHub',
      viewDemo: 'Lihat proyek jadi',
      projects: {
        1: 'Aplikasi mobile untuk pencatatan kehadiran mahasiswa menggunakan Flutter.',
        2: 'Aplikasi web untuk melacak keuangan pribadi, pemasukan, dan pengeluaran.',
        3: 'Website korporat profesional untuk menampilkan identitas dan layanan merek.',
        4: 'Landing page perusahaan batu granit premium dengan katalog produk, portofolio proyek, testimoni, dan alur konsultasi.',
        5: 'Landing page toko optik bergaya editorial dengan koleksi terkurasi, layanan periksa mata, dan booking janji temu.'
      }
    },
    contact: {
      title: 'Hubungi Saya',
      subtitle: 'Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi saya!',
      name: 'Nama Anda',
      email: 'Email Anda',
      message: 'Pesan',
      namePlaceholder: 'Budi Santoso',
      emailPlaceholder: 'budi@contoh.com',
      messagePlaceholder: 'Tulis pesan Anda di sini...',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      sentTitle: 'Pesan Terkirim!',
      sentText: 'Terima kasih sudah menghubungi. Saya akan segera membalas!',
      sendAnother: 'Kirim Pesan Lain',
      errRequired: 'Mohon isi semua kolom.',
      errFailed: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
      errCredentials: 'Kesalahan: {msg}. Mohon periksa kredensial Anda.'
    },
    status: {
      Advanced: 'Mahir',
      Advance: 'Mahir',
      Intermediate: 'Menengah',
      Beginner: 'Pemula',
      'Version Control': 'Kontrol Versi',
      'Git Hosting': 'Hosting Git',
      'Package Manager': 'Pengelola Paket',
      Database: 'Database'
    }
  }
};

// Translate a dot-separated key, e.g. t('home.welcome') or t('status.Database')
export function t(key) {
  const parts = key.split('.');
  let val = messages[lang.value];
  for (const p of parts) {
    val = val?.[p];
  }
  return val ?? key;
}

export function setLang(value) {
  lang.value = value === 'id' ? 'id' : 'en';
  try {
    localStorage.setItem('lang', lang.value);
  } catch (e) {
    /* storage unavailable — ignore */
  }
}

export function toggleLang() {
  setLang(lang.value === 'en' ? 'id' : 'en');
}

export { lang };
