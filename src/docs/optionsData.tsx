// src/components/Option.tsx

import Botol from "../components/models/Botol";
import Celurit from "../components/models/Celurit";
import Ganja from "../components/models/Ganja";
import { Model } from "../components/models/Rokok";
import { Sex } from "../components/models/Sex";
import { Sign } from "../components/models/Sign";

interface Option {
  title: string;
  description: string;
  information: string;
  informationLink: string;
  image: string;
  backgroundColor: string;
  height: string;
  model: JSX.Element; // Allow JSX elements here
  caseImages: string[];
  previewImage?: string; // Menambahkan properti ini
}

export const options: Option[] = [
export const options: Option[] = [
  {
    title: "Tawuran",
    description: "36%",
    information:
      "Angka tawuran di Indonesia masih menjadi masalah serius, khususnya di kalangan pelajar. Pada tahun 2021, Badan Pusat Statistik (BPS) mencatat bahwa terdapat 188 desa/kelurahan di Indonesia yang menjadi lokasi tawuran pelajar. Provinsi Jawa Barat tercatat sebagai wilayah dengan angka tawuran pelajar tertinggi, yakni di 37 desa/kelurahan, diikuti oleh Sumatera Utara dan Maluku​",
    informationLink:
      "https://jakarta.bps.go.id/id/statistics-table/2/MTE5NCMy/banyaknya-kelurahan-yang-mengalami-perkelahian-massal-disebabkan-keramaian--podes-.html",
    image: "/icon/celurit.png",
    backgroundColor: "#5562AD",
    height: "225px",
    model: (
      <>
        <Celurit
          scale={1.2}
          position={[1, 0, 0]}
          rotation={[0, Math.PI, Math.PI / 6]}
          isHovered
        />
        <Celurit
          scale={1.2}
          position={[-1, 0, 0]}
          rotation={[0, 0, Math.PI / 6]}
          isHovered
        />
      </>
    ),
    caseImages: [
      "/public/tawuran/1.jpeg",
      "/public/tawuran/2.jpeg",
      "/public/tawuran/3.jpeg",
      "/public/tawuran/1.jpeg",
      "/kasus.png",
    ],
    previewImage: "/tawuran/1.jpeg", 
  },
  {
    title: "Narkoba",
    description: "3-12 Tahun",
    information: "Data terkait penyalahgunaan narkoba di Indonesia...",
    informationLink:
      "https://puslitdatin.bnn.go.id/portfolio/data-statistik-kasus-narkoba", // Add this link
    image: "/path/to/anak-anak-image.jpg",
    backgroundColor: "#E33B3B",
    height: "300px",
    model: <Ganja scale={15} />,
    model: <Ganja scale={15} />,
    caseImages: [
      "/narkoba/1.png",
      "/narkoba/2.jpeg",
      "/narkoba/3.jpg",
      "/narkoba/4.jpg",
      "/narkoba/5.jpg",
    ],
    previewImage: "/narkoba/2.jpeg",
  },
  {
    title: "Merokok",
    description: "13-17 Tahun",
    information:
      "Data terkait merokok di Indonesia menunjukkan bahwa Indonesia adalah salah satu negara dengan prevalensi perokok tertinggi di dunia. Pada 2022, diperkirakan lebih dari 61,4 juta orang di Indonesia adalah perokok, dengan lebih dari 70% di antaranya adalah laki-laki dewasa. Prevalensi merokok pada remaja juga sangat tinggi, dengan sekitar 20% remaja berusia 13-15 tahun tercatat sebagai perokok aktif.",
    informationLink:
      "https://www.badankebijakan.kemkes.go.id/perokok-dewasa-di-indonesia-meningkat-dalam-sepuluh-tahun-terakhir/#:~:text=Hasil%20Global%20Adult%20Tobacco%20Survey,%25%20menjadi%201%2C6%25.", // Add this link
    image: "/path/to/remaja-image.jpg",
    backgroundColor: "#0E9D75",
    height: "320px",
    model: <Model />,
    model: <Model />,
    caseImages: [
      "/merokok/1.jpg",
      "/merokok/2.jpg",
      "/merokok/3.jpg",
      "/merokok/4.jpg",
      "/merokok/5.jpg",
    ],
    previewImage: "/path/to/merokok-preview.jpg",
  },
  {
    title: "Seksual",
    description: "18-59 Tahun",
    information:
      "Berdasarkan Survei Pengalaman Hidup Perempuan Nasional (SPHPN) 2021 dari BPS dan Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (KPPPA), sekitar 1 dari 3 perempuan di Indonesia berusia 15-64 tahun pernah mengalami kekerasan fisik atau seksual sepanjang hidupnya.",
    informationLink:
      "https://www.rri.co.id/nasional/594845/indonesia-dikatakan-darurat-seks-bebas-ini-penyebabnya", // Add this link
    image: "/path/to/dewasa-image.jpg",
    backgroundColor: "#F36932",
    height: "270px",
    model: <Sex />,
    caseImages: [
      "/seksual/1.jpg",
      "/seksual/2.jpg",
      "/seksual/3.jpg",
      "/seksual/4.jpeg",
      "/seksual/5.jpg",
    ],
    previewImage: "/path/to/seksual-preview.jpg",
  },
  {
    title: "Bullying",
    description: "60 tahun keatas",
    information:
      "Data mengenai bullying di Indonesia menunjukkan bahwa praktik ini masih menjadi masalah serius, terutama di kalangan remaja dan pelajar. Menurut survei dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, serta beberapa lembaga swadaya masyarakat, prevalensi bullying di lingkungan sekolah cukup tinggi.",
    informationLink:
      "https://www.unicef.org/indonesia/media/5691/file/FactSheetPerkawinanAnakdiIndonesia.pdf", // Add this link
    image: "/path/to/lansia-image.jpg",
    backgroundColor: "#16AE79",
    height: "220px",
    model: <Sign />,
    caseImages: [
      "/bullying/1.jpg",
      "/bullying/2.jpg",
      "/bullying/3.jpg",
      "/bullying/4.jpg",
      "/bullying/5.jpg",
    ],
    previewImage: "/path/to/bullying-preview.jpg",
  },
  {
    title: "Mabok",
    description: "60 tahun keatas",
    information:
      "Menurut survei dari Badan Narkotika Nasional (BNN), ada tren yang mengkhawatirkan mengenai konsumsi alkohol di kalangan remaja. Data menunjukkan bahwa sekitar 14,4% remaja di kota-kota besar pernah mengonsumsi alkohol, dengan sebagian besar melaporkan pernah mengalami mabuk akibat konsumsi berlebihan.",
    informationLink:
      "https://www.bps.go.id/id/statistics-table/2/MTQ3NSMy/konsumsi-alkohol-oleh-penduduk-umur--15-tahun-dalam-satu-tahun-terakhir.html", // Add this link
    image: "/path/to/lansia-image.jpg",
    backgroundColor: "#16AE79",
    height: "320px",
    model: <Botol scale={4} />,
    caseImages: [
      "/mabok/1.jpg",
      "/mabok/2.jpg",
      "/mabok/3.jpg",
      "/mabok/4.jpg",
      "/mabok/5.jpeg",
    ],
    previewImage: "/path/to/mabok-preview.jpg",
  },

];