import { Nav } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import CardProduct from "../../components/CardProduct";

export default function Home() {
  return (
    <>
    <main>
      <Nav />

      <div className="keseluruhan-home">
        <h1>Explore The Products</h1>
        <p>Discover skincare products that match your skin type and give your skin the care it deserves.</p>
    
        <div className="main-countainer">
          {/* search bar */}
          <div className="search-filter-section">
              <input type="search" id="search-product" placeholder="Search Your Beauty Product..."></input>
              {/* button filter */}
              <button id="open-m-filter">Filter</button>

              <div id="modal">
                    <div className="modal-inner">
                        <button id="cancel-filter" aria-label="Tutup">&times;</button>
                        <h1>Filter Your Product!</h1>
                        <h2>Skin Concern</h2>
                        <div id="skin-filter"></div>
                        <hr />
                        <h2>Body Concern</h2>
                        <div id="body-filter"></div>
                        <hr />
                        <h2>Scalp & Hair Concern</h2>
                        <div id="hair-filter"></div>
                        <hr />
                        <button id="close-filter">Done</button>
                    </div>
              </div>

          <button id="matiin-filter">Cancel Filter</button>

          </div>
        </div>
      
  
        {/* Manggil CardProduct buat tampilin produk */}
        <CardProduct />
      </div>

    </main>
    <Footer />
    </>
  );
}
