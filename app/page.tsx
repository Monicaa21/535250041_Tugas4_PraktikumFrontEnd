import Image from "next/image";
import { Nav } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
    <Nav />

    <main className="keseluruhan-home">

      <div className="konten-utama">
        <h4 className="self-care">Self Care</h4>
        <div className="h1-index">
          <h1>Your Skin,</h1>
          <h1 className="h1-kedua-index">Your Story</h1>
        </div>
        <p>Your journey to healthier skin begins with understanding it. Explore skincare tips, learn about common skin concerns, and discover the right care for you.</p>
      </div>

      <Carousel />

      <h2>Your Complete Beauty Guide</h2>
      <p>Discover the little things that make you feel your best.</p>
      <div className="card-utama">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <Image src="/skin.jpg" className="card-img" alt="skin" width={500} height={500} />
            <h4 className="mt-2 mb-0">Your Skin, Your Glow</h4>
            <p className="card-text fg-2">Discover your skin type, and explore skincare routines to help your face feel healthy, hydrated, and radiant.</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <Image src="/body.jpg" className="card-img" alt="body" width={400} height={250} />
            <h4 className="mt-2 mb-0">Care for Every Inch</h4>
            <p className="card-text fg-2">Give your body the care it deserves. Learn how to keep your skin soft and moisturized while exploring simple routines for smooth, healthy-looking skin.</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <Image src="/hair-care.jpg" className="card-img" alt="scalp" width={400} height={250} />
            <h4 className="mt-2 mb-0">Love Your Locks</h4>
            <p className="card-text fg-2">From scalp care to shiny strands, discover hair care tips and routines that help you understand your hair type and keep your hair looking its best.</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <Image src="/healthy-food.jpg" className="card-img" alt="healthy-food" width={400} height={250} />
            <h4 className="mt-2 mb-0">Glow from Within</h4>
            <p className="card-text fg-2">Nourish your body with balanced nutrition. Explore foods rich in essential nutrients that support overall health and help maintain healthy skin from within.</p>
          </div>
        </div>
      </div>

      <div className="keseluruhan-explore-concern">
        <h2>Explore Your Concern</h2>
          <div className="card-explore-masalah">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body explore-ending">
                <Image src="/Screenshot 2026-10-23 151405.png" className="card-img" alt="muka" width={400} height={250} />
                <h4 className="mt-2 mb-0">Facial Concern</h4>
                <p className="card-text fg-2">Discover your skin&apos;s needs.</p>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body explore-ending">
                <Image src="/Screenshot 2026-10-23 151420.png" className="card-img" alt="badan" width={400} height={250} />
                <h4 className="mt-2 mb-0">Body Concern</h4>
                <p className="card-text fg-2">Care beyond the face.</p>
              </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body explore-ending">
                <Image src="/Screenshot 2026-10-23 151431.png" className="card-img" alt="rambut" width={400} height={250} />
                <h4 className="mt-2 mb-0">Scalp & Hair</h4>
                <p className="card-text fg-2">Understand your roots.</p>
              </div>
            </div>
          </div>
        <button id="button-ke-skintype">Get To Know More!</button>
      </div>

    </main>
    <Footer />
    </>
  );
}
