/**
 * config.js — Sumber data lokal portofolio.
 * Ubah konten di file ini; app.js akan merender ulang UI secara otomatis.
 *
 * Supabase:
 * - Isi supabaseUrl dengan URL project, contoh https://abcxyz.supabase.co
 * - Isi supabasePublishableKey dengan publishable/anon key milik project.
 * - Jangan pernah memasukkan service_role key atau secret key ke frontend.
 */
export const config = {
  supabaseUrl: "",
  supabasePublishableKey: "",
  supabaseTable: "projects",
  requestTimeoutMs: 8000,

  profile: {
    name: "Muhammad Jazil Ammaar",
    role: {
      id: "Visual Communication Designer · Front-End Developer · Video Editor",
      en: "Visual Communication Designer · Front-End Developer · Video Editor",
      ja: "ビジュアルコミュニケーションデザイナー · フロントエンド開発者 · 映像編集者"
    },
    tagline: {
      id: "Mengubah ide menjadi pengalaman digital dan karya visual yang terarah, fungsional, dan bermakna.",
      en: "Turning ideas into purposeful, functional digital experiences and visual work.",
      ja: "アイデアを、目的に沿った機能的なデジタル体験とビジュアル作品へ。"
    },
    email: "email@domain.com"
  },

  biography: {
    paragraphs: [
      {
        id: "Saya siswa jurusan Desain Komunikasi Visual (DKV) di SMK Kartika X-2 Jakarta. Saya tertarik pada perpaduan desain, storytelling, dan teknologi untuk membangun pengalaman digital yang mudah dipahami.",
        en: "I am a Visual Communication Design (DKV) student at SMK Kartika X-2 Jakarta. I am interested in combining design, storytelling, and technology to build digital experiences that are clear and useful.",
        ja: "SMK Kartika X-2 Jakartaでビジュアルコミュニケーションデザインを学んでいます。デザイン、ストーリーテリング、テクノロジーを組み合わせ、分かりやすく役立つデジタル体験を作ることに関心があります。"
      },
      {
        id: "Saya menggunakan perangkat desain dan editing seperti Photoshop, Illustrator, Premiere Pro, After Effects, dan Figma, serta membangun antarmuka web dengan HTML, CSS, JavaScript, dan Supabase.",
        en: "I work with tools such as Photoshop, Illustrator, Premiere Pro, After Effects, and Figma, and build web interfaces using HTML, CSS, JavaScript, and Supabase.",
        ja: "Photoshop、Illustrator、Premiere Pro、After Effects、Figmaなどを使用し、HTML、CSS、JavaScript、Supabaseでウェブインターフェースも開発しています。"
      }
    ]
  },

  projects: [
    {
      id: "prj-1",
      slug: "class-duty-attendance",
      title: {
        id: "Aplikasi Absensi Piket Kelas",
        en: "Class Duty Attendance Web App",
        ja: "クラス当番出席管理ウェブアプリ"
      },
      category: "Web Development",
      description: {
        id: "Aplikasi web untuk mencatat kehadiran piket secara terstruktur. Antarmuka dibangun dengan HTML, CSS, dan JavaScript, dengan Supabase sebagai backend untuk penyimpanan dan sinkronisasi laporan.",
        en: "A web app for structured class-duty attendance records. The interface uses HTML, CSS, and JavaScript, with Supabase as the backend for data storage and report synchronization.",
        ja: "クラス当番の出席を整理して記録するウェブアプリです。HTML、CSS、JavaScriptで画面を構築し、Supabaseでデータ保存とレポート同期を行います。"
      },
      technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      projectUrl: "",
      sortOrder: 1
    },
    {
      id: "prj-2",
      slug: "the-sinners-short-film",
      title: {
        id: "The Sinners — Film Pendek",
        en: "The Sinners — Short Film",
        ja: "The Sinners — 短編映画"
      },
      category: "Film Production / Cinematography",
      description: {
        id: "Film pendek bergenre thriller yang mengeksplorasi konsekuensi masa lalu. Saya berkontribusi sebagai Assistant Director, Co-writer, Storyboard Artist, Cinematographer, dan Co-video Editor, dari perencanaan visual hingga pascaproduksi.",
        en: "A thriller short film exploring the consequences of the past. I contributed as Assistant Director, Co-writer, Storyboard Artist, Cinematographer, and Co-video Editor, from visual planning through post-production.",
        ja: "過去の結果を描くスリラー短編映画です。Assistant Director、共同脚本、絵コンテ、撮影、共同編集を担当し、映像計画からポストプロダクションまで参加しました。"
      },
      technologies: ["Premiere Pro", "After Effects", "Cinematography", "Storyboarding"],
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      projectUrl: "",
      sortOrder: 2
    },
    {
      id: "prj-3",
      slug: "libra-totebag-branding",
      title: {
        id: "LIBRA — Branding Totebag",
        en: "LIBRA — Tote Bag Branding",
        ja: "LIBRA — トートバッグのブランディング"
      },
      category: "Visual Identity",
      description: {
        id: "Proyek identitas visual untuk brand fashion yang mencakup eksplorasi visual, desain branding, layout kemasan, dan analisis SWOT sebagai bagian dari pengembangan konsep produk.",
        en: "A visual identity project for a fashion brand, covering visual exploration, branding design, packaging layout, and SWOT analysis as part of the product concept development.",
        ja: "ファッションブランドのビジュアルアイデンティティ制作。ビジュアルの検討、ブランディング、パッケージレイアウト、SWOT分析を通じて商品コンセプトを開発しました。"
      },
      technologies: ["Illustrator", "Photoshop", "Figma", "Branding"],
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
      projectUrl: "",
      sortOrder: 3
    },
    {
      id: "prj-4",
      slug: "kraft-risol-packaging",
      title: {
        id: "Kraft Paper Lunch Box — Kemasan Risol",
        en: "Kraft Paper Lunch Box — Risol Packaging",
        ja: "クラフト紙ランチボックス — リソールのパッケージ"
      },
      category: "Graphic Design / Packaging Design",
      description: {
        id: "Konsep desain kemasan kraft paper untuk brand risol yang mengutamakan karakter homemade, hierarki informasi, keterbacaan, dan kesiapan produksi cetak seperti bleed, safe area, serta pengaturan warna CMYK.",
        en: "A kraft-paper packaging concept for a risol brand, balancing a homemade identity, information hierarchy, readability, and print-production considerations such as bleed, safe areas, and CMYK color management.",
        ja: "手作り感のあるリソールブランド向けクラフト紙パッケージのコンセプトです。情報の階層と可読性に加え、塗り足し、安全領域、CMYKカラー管理など印刷工程も考慮しました。"
      },
      technologies: ["Photoshop", "Illustrator", "Packaging", "Print Design"],
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
      projectUrl: "",
      sortOrder: 4
    }
  ],

  skills: [
    {
      title: {
        id: "Desain Visual",
        en: "Visual Design",
        ja: "ビジュアルデザイン"
      },
      description: {
        id: "Identitas visual, komposisi, layout, tipografi, dan desain kemasan.",
        en: "Visual identity, composition, layout, typography, and packaging design.",
        ja: "ビジュアルアイデンティティ、構図、レイアウト、タイポグラフィ、パッケージデザイン。"
      },
      items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Packaging Design"]
    },
    {
      title: {
        id: "Web Development",
        en: "Web Development",
        ja: "ウェブ開発"
      },
      description: {
        id: "Antarmuka responsif, logika DOM, dan integrasi backend berbasis web.",
        en: "Responsive interfaces, DOM logic, and web-based backend integration.",
        ja: "レスポンシブな画面、DOMロジック、ウェブバックエンド連携。"
      },
      items: ["HTML", "CSS", "JavaScript", "Supabase"]
    },
    {
      title: {
        id: "Produksi Video",
        en: "Video Production",
        ja: "映像制作"
      },
      description: {
        id: "Penceritaan visual, sinematografi, storyboard, dan penyuntingan.",
        en: "Visual storytelling, cinematography, storyboarding, and editing.",
        ja: "映像による物語表現、撮影、絵コンテ、編集。"
      },
      items: ["Premiere Pro", "After Effects", "Storyboarding", "Color Grading"]
    }
  ],

  socials: [
    { platform: "Email", url: "mailto:email@domain.com" },
    { platform: "GitHub", url: "https://github.com/username" },
    { platform: "Instagram", url: "https://instagram.com/username" }
  ]
};
