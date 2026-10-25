import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { getProductById } from "../../../script/script";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();
  return (
    <div className="page-container">
      <Nav />

      <main className="main-content">
        <div className="keseluruhan-home">
          <div className="product-detail">
            <Image
              src={`/${product.image}`}
              alt={product.name}
              width={420}
              height={420}
              className="product-detail-img"
              priority
            />

            <div className="product-detail-info">
              <p className="product-detail-cat">{product.category} / {product.cat2}</p>
              <h1>{product.name}</h1>
              <p className="product-detail-meta">{product.brand} | {product.from}</p>

              <h4>Cocok buat kamu yang punya permasalahan...</h4>
              <div className="product-tags">
                {product.permasalahan.map((m) => (
                  <span className="product-tag" key={m}>{m}</span>
                ))}
              </div>

              <Link href="/productRec" className="back-link">&larr; Back to products</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}