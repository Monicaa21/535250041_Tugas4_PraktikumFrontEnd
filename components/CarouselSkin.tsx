import Image from "next/image";

const images = [
  "/skin1.jpeg",
  "/skin2.jpeg",
  "/skin3.jpeg",
  "/skin4.jpeg",
  "/skin5.jpeg",
  "/skin6.jpeg",
  "/skin7.jpeg",
  "/skin8.jpeg",
];

export default function CarouselSkin() {
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