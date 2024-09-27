import Botol from "../components/models/Botol";
import Celurit from "../components/models/Celurit";

export const options = [
  {
    title: "Tawuran",
    description: "1-12 Bulan",
    information:
      "Angka tawuran di Indonesia masih menjadi masalah serius, khususnya di kalangan pelajar. Pada tahun 2021, Badan Pusat Statistik (BPS) mencatat bahwa terdapat 188 desa/kelurahan di Indonesia yang menjadi lokasi tawuran pelajar. Provinsi Jawa Barat tercatat sebagai wilayah dengan angka tawuran pelajar tertinggi, yakni di 37 desa/kelurahan, diikuti oleh Sumatera Utara dan Maluku​",
    informationLink: "https://jakarta.bps.go.id/id/statistics-table/2/MTE5NCMy/banyaknya-kelurahan-yang-mengalami-perkelahian-massal-disebabkan-keramaian--podes-.html", 
    image: "/icon/celurit.png",
    backgroundColor: "#5562AD",
    height: "225px",
    model: <Celurit isHovered />,
    caseImages: [
      "/public/tawuran/1.jpeg", 
      "/public/tawuran/2.jpeg",
      "/public/tawuran/3.jpeg",
      "/public/tawuran/1.jpeg",
      "/kasus.png",
    ],
  },
  {
    title: "Narkoba",
    description: "3-12 Tahun",
    information: "Data terkait penyalahgunaan narkoba di Indonesia...",
    informationLink: "https://puslitdatin.bnn.go.id/portfolio/data-statistik-kasus-narkoba", // Add this link
    image: "/path/to/anak-anak-image.jpg",
    backgroundColor: "#E33B3B",
    height: "300px",
    model: <Botol scale={3}/>,
    caseImages: [
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
    ],
  },

  {
    title: "Merokok",
    description: "13-17 Tahun",
    information:
      "Data terkait merokok di Indonesia menunjukkan bahwa Indonesia adalah salah satu negara dengan prevalensi perokok tertinggi di dunia. Pada 2022, diperkirakan lebih dari 61,4 juta orang di Indonesia adalah perokok, dengan lebih dari 70% di antaranya adalah laki-laki dewasa. Prevalensi merokok pada remaja juga sangat tinggi, dengan sekitar 20% remaja berusia 13-15 tahun tercatat sebagai perokok aktif.",
    informationLink: "https://www.badankebijakan.kemkes.go.id/perokok-dewasa-di-indonesia-meningkat-dalam-sepuluh-tahun-terakhir/#:~:text=Hasil%20Global%20Adult%20Tobacco%20Survey,%25%20menjadi%201%2C6%25.", // Add this link
    image: "/path/to/remaja-image.jpg",
    backgroundColor: "#0E9D75",
    height: "320px",
    model: <Celurit isHovered />,
    caseImages: [
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
    ],
  },
  {
    title: "Seksual",
    description: "18-59 Tahun",
    information:
      "Berdasarkan Survei Pengalaman Hidup Perempuan Nasional (SPHPN) 2021 dari BPS dan Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (KPPPA), sekitar 1 dari 3 perempuan di Indonesia berusia 15-64 tahun pernah mengalami kekerasan fisik atau seksual sepanjang hidupnya.",
    informationLink: "https://www.rri.co.id/nasional/594845/indonesia-dikatakan-darurat-seks-bebas-ini-penyebabnya", // Add this link
    image: "/path/to/dewasa-image.jpg",

    backgroundColor: "#F36932",
    height: "270px",
    model: <Celurit isHovered />,
    caseImages: [
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
    ],
  },
  {
    title: "Bullying",
    description: "60 tahun keatas",
    information:
      "Data mengenai bullying di Indonesia menunjukkan bahwa praktik ini masih menjadi masalah serius, terutama di kalangan remaja dan pelajar. Menurut survei dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, serta beberapa lembaga swadaya masyarakat, prevalensi bullying di lingkungan sekolah cukup tinggi.",
      informationLink: "https://www.unicef.org/indonesia/media/5691/file/FactSheetPerkawinanAnakdiIndonesia.pdf", // Add this link
    image: "/path/to/lansia-image.jpg",
    backgroundColor: "#16AE79",
    height: "220px",
    model: <Celurit isHovered />,
    caseImages: [
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
    ],
  },
  {
    title: "Mabok",
    description: "60 tahun keatas",
    information:
      "Menurut survei dari Badan Narkotika Nasional (BNN), ada tren yang mengkhawatirkan mengenai konsumsi alkohol di kalangan remaja. Data menunjukkan bahwa sekitar 14,4% remaja di kota-kota besar pernah mengonsumsi alkohol, dengan sebagian besar melaporkan pernah mengalami mabuk akibat konsumsi berlebihan.",
      informationLink: "https://www.bps.go.id/id/statistics-table/2/MTQ3NSMy/konsumsi-alkohol-oleh-penduduk-umur--15-tahun-dalam-satu-tahun-terakhir.html", // Add this link
    image: "/path/to/lansia-image.jpg",
    backgroundColor: "#16AE79",
    height: "320px",
    model: <Celurit isHovered />,
    caseImages: [
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
      "/kasus.png",
    ],
  },

];