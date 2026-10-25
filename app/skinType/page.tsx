import Image from "next/image";
import Link from "next/link";
import { Nav } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import CarouselSkin from "../../components/CarouselSkin";

export default function Home() {
  return (
    <>
    <Nav />
    <main className="keseluruhan-home">

      <div className="konten-awal-skintype">
        <h1>Get To Know Your Skin Type</h1>
        <p>Your skin deserves the right care. Discover your skin type, explore solutions to your skin concerns, and find the perfect starting point for your skincare journey.</p>

        <h4>Did you know?</h4>
        <h2>Many people don&apos;t fully understand their skin&apos;s needs.</h2>
        <p>But before you know your skin type, you need to know that...</p>
        <CarouselSkin />
        <div className="every-skin-beautiful">
          <h3 className="every-skin">Every skin color is</h3>
          <h3 className="beautiful">beautiful!</h3>
        </div>
        <hr />
        <h4>Analyze Your Skin Problem</h4>
      </div>

      <div className="button-analyze">
        <Link href="#facial-concern"><button className="button-skin">Facial Concerns</button></Link>
        <Link href="#body-concern"><button className="button-skin">Body Concerns</button></Link>
        <Link href="#hair-concern"><button className="button-skin">Scalp & Hair Concerns</button></Link>
      </div>
      <hr />

      <h2 id="facial-concern">Facial Concern</h2>
      <p className="if-u-had">If You Had..</p>

      <div className="concern-face">
        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Wajah tampak mengilap, terutama di dahi, hidung, dan dagu.</li>
                <li>Pori-pori terlihat lebih besar.</li>
                <li>Makeup lebih mudah bergeser atau luntur.</li>
                <li>Rentan mengalami komedo dan jerawat.</li>
              </ul>
            </div>
          <Image src="/minyak.png" className="card-img-bottom" alt="wajah berminyak" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your skin type is...</p>
            <h4 className="card-title">Oily Skin</h4>
          </div>
        </div>

        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Kulit terasa kencang setelah mencuci wajah.</li>
                <li>Permukaan kulit terasa kasar atau bersisik.</li>
                <li>Terlihat garis-garis halus akibat kekeringan.</li>
                <li>Kulit mudah terasa gatal atau tidak nyaman.</li>
              </ul>
            </div>
          <Image src="/muka-kering.png" className="card-img-bottom" alt="wajah berminyak" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your skin type is...</p>
            <h4 className="card-title">Dry Skin</h4>
          </div>
        </div>

        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Garis halus mulai terlihat di sekitar mata dan mulut.</li>
                <li>Kulit terasa kurang kencang.</li>
                <li>Tekstur kulit tampak lebih tidak merata.</li>
                <li>Elastisitas kulit berkurang seiring waktu.</li>
              </ul>
            </div>
          <Image src="/aging.png" className="card-img-bottom" alt="aging" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your skin has...</p>
            <h4 className="card-title">Signs of Aging</h4>
          </div>
        </div>

        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Wajah tampak kurang bercahaya.</li>
                <li>Warna kulit terlihat tidak merata.</li>
                <li>Permukaan kulit terlihat kurang segar.</li>
                <li>Kulit dapat terasa kasar atau tampak lelah.</li>
              </ul>
            </div>
          <Image src="/muka-kusam.png" className="card-img-bottom" alt="muka kusam" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your skin type is...</p>
            <h4 className="card-title">Dull Skin</h4>
          </div>
        </div>

      </div>

      <hr />

      <h2 id="body-concern">Body Concerns</h2>
      <p className="if-u-had">If You Had..</p>

      <div className="concern-body">
        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Kulit terasa kering atau tertarik setelah mandi.</li>
                <li>Muncul sisik halus, terutama di kaki dan siku.</li>
                <li>Permukaan kulit terasa kasar.</li>
                <li>Kulit terlihat pecah-pecah ketika kekeringan cukup berat.</li>
              </ul>
            </div>
          <Image src="/badan-kering.png" className="card-img-bottom" alt="badan kering" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your body skin type is...</p>
            <h4 className="card-title">Dry Body Skin</h4>
          </div>
        </div>

        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Kulit tampak kusam dan kurang bercahaya.</li>
                <li>Warna kulit terlihat tidak merata.</li>
                <li>Area seperti siku dan lutut dapat terlihat lebih gelap.</li>
                <li>Kulit terasa kurang halus akibat penumpukan sel kulit mati.</li>
              </ul>
            </div>
          <Image src="/badan-kusam.png" className="card-img-bottom" alt="badan kering" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your body skin type is...</p>
            <h4 className="card-title">Dull Body Skin</h4>
          </div>
        </div>

      </div>

      <hr />

      <h2 id="hair-concern">Scalp & Hair Concerns</h2>
      <p className="if-u-had">If You Had..</p>

      <div className="concern-hair">
        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Rambut rontok lebih banyak saat keramas atau menyisir.</li>
                <li>Rambut terlihat semakin tipis.</li>
                <li>Belahan rambut tampak semakin lebar.</li>
                <li>Volume rambut terasa berkurang.</li>
              </ul>
            </div>
          <Image src="/rambut-rontok.png" className="card-img-bottom" alt="rambut rontok" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your hair type is...</p>
            <h4 className="card-title">Hair Fall</h4>
          </div>
        </div>

        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Serpihan kecil berwarna putih tampak pada rambut atau bahu.</li>
                <li>Kulit kepala terasa kering atau gatal.</li>
                <li>Serpihan cenderung kering dan mudah terlepas.</li>
                <li>Rambut dapat terasa kering jika perawatan kurang sesuai.</li>
              </ul>
            </div>
          <Image src="/ketombe-kering.png" className="card-img-bottom" alt="ketombe kering" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your hair type is...</p>
            <h4 className="card-title">Dry Dandruff</h4>
          </div>
        </div>

        <div className="card" style= {{ width: '20rem'}}>
          <div className="card-body">
            <div className="card-text">
              <ul>
                <li>Serpihan cenderung lebih besar dan dapat berwarna kekuningan.</li>
                <li>Kulit kepala terasa berminyak.</li>
                <li>Serpihan dapat melekat pada kulit kepala atau pangkal rambut.</li>
                <li>Dapat disertai rasa gatal dan kemerahan.</li>
              </ul>
            </div>
          <Image src="/ketombe-basah.png" className="card-img-bottom" alt="ketombe basah" width={300} height={300} style={{ borderRadius: '15px' }} />
            <p className="card-text">Your hair type is...</p>
            <h4 className="card-title">Oily Dandruff</h4>
          </div>
        </div>

      </div>

    </main>
    <Footer />
    </>
  );
}
