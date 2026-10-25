import { Nav } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div className="page-container">
      <Nav />

      <main className="main-content">
        <div className="keseluruhan-home aboutt">
          <h1>About My Website</h1>

          <div className="informasi-terkait">
            <h2>Tentang Informasi</h2>
            <p>Ciri-ciri yang disebutkan dalam website ini merupakan panduan dan pengetahuan umum, bukan diagnosis.</p>
          </div>

          <div className="gambar-terkait">
            <h2>Gambar Yang Digunakan</h2>
            <p>Gambar yang dipakai untuk kondisi kulit didapat dari generate AI & pinterest yang menggambarkan ciri-ciri permasalahan suatu kulit manusia, bukan dari hasil jepretan foto kulit secara langsung.</p>
            <p>Tetapi, gambar yang ditunjukkan dalam produk merupakan foto asli dari produk/merek yang sudah ada, jadi gambarnya nyata dan bukan hasil dari generate AI.</p>
          </div>

          <p className="quotes">Beauty means nothing if you can&apos;t accept yourself</p>
          <p> - Monica Irene :)</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
