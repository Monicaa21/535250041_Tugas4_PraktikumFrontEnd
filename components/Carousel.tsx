import Image from "next/image";

const images = [
  "/carousel1.jpeg",
  "/carousel2.jpeg",
  "/carousel3.jpeg",
  "/carousel4.jpeg",
  "/carousel5.jpeg",
  "/carousel6.jpeg",
  "/carousel7.jpeg",
];

export default function Carousel() {
  // ... = spread operator
  const loop = [...images, ...images, ...images, ...images];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {loop.map((src, i) => (
          <div className="carousel-item" key={i}>
            <Image src={src} alt={`Gambar ${(i % images.length) + 1}`} width={300} height={300} loading="eager" />
          </div>
        ))}
      </div>
    </div>
  );
}