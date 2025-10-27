# Mood Check-In - EmergencyyCall

Prototipe web yang menenangkan dan minimalis untuk pemeriksaan emosi harian yang dirancang untuk platform kesehatan mental EmergencyyCall.

## 🎯 Purpose

Mood Check-In menyediakan antarmuka yang aman dan mendukung secara emosional di mana pengguna dapat melaporkan keadaan emosional mereka setiap hari dan menerima rekomendasi yang berempati untuk dukungan kesehatan mental.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Font**: Inter (for readability and calm aesthetic)

## 🎨 Design System

### Color Palette

- **Primary (Soft Blue)**: #4D90FE - Digunakan untuk elemen interaktif dan tindakan utama
- **Secondary (Light Gray)**: #F5F6FA - Digunakan untuk latar belakang dan elemen sekunder
- **Background**: Putih murni (#FFFFFF) - Menciptakan nuansa bersih dan minimalis
- **Accents**: Bayangan lembut dan sudut membulat (2xl) untuk kenyamanan emosional

### Typography

- **Font Family**: Inter
- **Headings**: Bold, large sizes for clarity
- **Body**: Regular weight, readable contrast for accessibility

## 🧩 Component Architecture

### Core Components

1. **Header** - Judul dan instruksi yang ramah
2. **MoodSelector** - Pemilih suasana hati berbasis emoji interaktif dengan 5 emosi
3. **SubmitButton** - Tombol tindakan utama dengan status pemuatan
4. **Notification** - Notifikasi toast yang empatik dengan pesan spesifik suasana hati
5. **RecommendationCard** - Kartu placeholder untuk tindakan langkah selanjutnya
6. **LayoutContainer** - Pembungkus responsif dengan latar belakang gradien
7. **Footer** - Branding dan tautan navigasi

## 💡 Key Features

### Smooth Animations

- Transisi fade dan slide-in untuk semua elemen
- Efek hover lembut pada elemen interaktif
- Animasi sukses seperti confetti saat pengiriman
- Status pemuatan dengan animasi berdenyut

### Accessibility

- Struktur HTML semantik
- Elemen interaktif yang mematuhi ARIA
- Teks dengan kontras tinggi untuk keterbacaan
- Dukungan navigasi keyboard
- Ramah pembaca layar

### Responsive Design

- Pendekatan yang mengutamakan perangkat seluler
- Beradaptasi dengan indah dari seluler ke desktop
- Ukuran tombol yang ramah sentuh
- Tata letak grid yang fleksibel

### Emotional Safety

- Palet warna menenangkan mengurangi kecemasan
- Bayangan lembut dan sudut membulat menciptakan kenyamanan
- Pesan empatik berdasarkan pemilihan suasana hati
- Tidak ada transisi yang keras atau animasi yang mengejutkan
- Nada yang mendukung di seluruh

## 🚀 Getting Started

### Installation

```bash
npm install
```

# Clone the repository

git clone <repo-url>

# Install dependencies

npm install

# Run development server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mood-checkin/
├── app/
│ ├── layout.tsx # Root layout dengan font dan metadata
│ ├── page.tsx # Halaman utama Mood Check-In
│ └── globals.css # Konfigurasi Tailwind dan token desain
├── components/
│ ├── header.tsx # Judul sambutan
│ ├── mood-selector.tsx # Pemilih suasana hati berbasis emoji
│ ├── submit-button.tsx # Tombol tindakan utama
│ ├── notification.tsx # Notifikasi sukses
│ ├── recommendation-card.tsx # Kartu tindakan langkah selanjutnya
│ ├── layout-container.tsx # Pembungkus responsif
│ └── footer.tsx # Footer dengan tautan
├── lib/
│ └── moods.ts # Data dan kutipan suasana hati
└── README.md # File ini
```

## 🧠 State Management

Aplikasi ini menggunakan lightweight React `useState` yang ringan untuk status formulir:

- `selectedMood` - Melacak suasana hati yang dipilih pengguna
- `showNotification` - Mengontrol visibilitas notifikasi
- `isSubmitting` - Mengelola status pemuatan selama pengiriman

Pendekatan ini menjaga komponen tetap sederhana dan efisien tanpa pustaka manajemen status eksternal.

## 🎭 Mood-Specific Messaging

Setiap suasana hati memicu pesan-pesan empati yang dipersonalisasi:

- **Happy**: Mendorong kelanjutan energi positif
- **Calm**: Memvalidasi keadaan damai dan mendorong kesadaran
- **Stressed**: Menawarkan dukungan dan menyarankan bantuan profesional
- **Sad**: Memvalidasi emosi dan mendorong untuk menjangkau
- **Anxious**: Memberikan jaminan dan strategi koping

## 🔄 Future Enhancements

- Integrasi backend untuk pelacakan riwayat suasana hati
- Rekomendasi yang dipersonalisasi dengan AI
- Integrasi dengan penjadwalan konselor
- Analisis dan wawasan tren suasana hati
- Notifikasi dorong untuk pengingat check-in
- Dukungan mode gelap
- Dukungan multi-bahasa

## 📝 Design Philosophy

Antarmuka ini memprioritaskan **kenyamanan emosional** dan **aksesibilitas**:

1. **Minimalisme** - Mengurangi beban kognitif bagi pengguna yang mengalami stres
2. **Estetika Lembut** - Warna menenangkan dan animasi lembut
3. **Empati** - Pesan yang mendukung dan validasi
4. **Kejelasan** - Hierarki yang jelas dan tipografi yang mudah dibaca
5. **Keamanan** - Tidak ada transisi yang mengejutkan atau elemen yang membingungkan

## 📄 Task

<image src="/public/assets/images/case-asessment-front-end.jpg" alt="Mood Check-In Task" width="600"/>
