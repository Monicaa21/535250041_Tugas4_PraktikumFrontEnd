import data from "../data/data.json";

export interface Product {
  id: string;
  name: string;
  brand: string;
  from: string;
  category: string;
  cat2: string;
  permasalahan: string[];
  image: string;
}

const DEFAULT_IMAGE = "default.webp"; 
const CARD_WIDTH = 280;

const FILTER_GROUPS = [
  { category: "Skincare", containerId: "skin-filter" },
  { category: "Bodycare", containerId: "body-filter" },
  { category: "Haircare", containerId: "hair-filter" },
];

// mengubah teks supaya aman ditampilkan di HTML
const ESC_MAP: Record<string, string> = {
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
};
function esc(s: unknown): string {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ESC_MAP[c]);
}

function filterKey(category: string, masalah: string): string {
  return `${category}|${masalah}`;
}

// ambil data
export function getProducts(): Product[] {
  return data as Product[];
}

// ambil 1 data berdasarkan id
export function getProductById(id: string): Product | undefined {
  return getProducts().find((p) => p.id === id);
}

// filter berdasarkan kategori 
export function getProductsByCategory(category: string): Product[] {
  return getProducts().filter((p) => p.category === category);
}

// Versi DOM manual
export function renderCards(target: HTMLElement, products: Product[] = getProducts()) {
  target.innerHTML = "";

  // kalau tidak ada produk yang cocok
  if (products.length === 0) {
    target.innerHTML = '<p class="no-result">No products found.</p>';
    return;
  }

  products.forEach((p) => {
    const imageFile = p.image || DEFAULT_IMAGE;

    const card = document.createElement("div");
    card.className = "card";
    card.style.width = CARD_WIDTH + "px";

    card.innerHTML = `
      <img src="/${esc(imageFile)}" class="card-img-top" alt="${esc(p.name)}">
      <div class="card-body">
        <h4 class="card-title">${esc(p.name)}</h4>
        <p class="card-text">${esc(p.brand)}</p>
        <a class="card-text view-detail" href="/productRec/${esc(p.id)}">View Detail</a>
      </div>
    `;

    target.appendChild(card);
  });
}

export function setupProductExplorer(cardTarget: HTMLElement): () => void {
  const products = getProducts();
  const ac = new AbortController();
  const { signal } = ac;

  const searchInput = document.getElementById("search-product") as HTMLInputElement | null;
  const openBtn = document.getElementById("open-m-filter");
  const doneBtn = document.getElementById("close-filter");
  const cancelBtn = document.getElementById("cancel-filter");
  const resetBtn = document.getElementById("matiin-filter");
  const modal = document.getElementById("modal");

  // filter yang sedang AKTIF (sudah ditekan "Done")
  const terpilih = new Set<string>();

  // bikin tombol filter dari data, dikelompokkan per kategori
  FILTER_GROUPS.forEach(({ category, containerId }) => {
    const wadah = document.getElementById(containerId);
    if (!wadah) return;
    wadah.innerHTML = "";

    const daftarMasalah = [...new Set(products.filter((p) => p.category === category).flatMap((p) => p.permasalahan)),].sort((a, b) => a.localeCompare(b));

    daftarMasalah.forEach((masalah) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-option";
      btn.textContent = masalah;
      btn.dataset.value = filterKey(category, masalah);
      btn.addEventListener("click", () => btn.classList.toggle("selected"), { signal });
      wadah.appendChild(btn);
    });
  });

  const semuaTombol = () =>
    document.querySelectorAll<HTMLButtonElement>("#modal .filter-option");

  // baca tombol yang "selected" -> simpan ke terpilih
  function simpanFilter() {
    terpilih.clear();
    semuaTombol().forEach((b) => {
      if (b.classList.contains("selected") && b.dataset.value) terpilih.add(b.dataset.value);
    });
  }

  // kembalikan tampilan tombol sesuai filter terakhir yang diterapkan (dipakai saat batal)
  function pulihkanTombol() {
    semuaTombol().forEach((b) => {
      b.classList.toggle("selected", terpilih.has(b.dataset.value ?? ""));
    });
  }

  // tombol "Cancel Filter" cuma muncul kalau filter dah dipilih
  function updateTombolReset() {
    resetBtn?.classList.toggle("show", terpilih.size > 0);
  }

  // gabungan search + filter
  function terapkan() {
    const keyword = (searchInput?.value ?? "").trim().toLowerCase();

    const hasil = products.filter((p) => {
      const cocokNama = p.name.toLowerCase().includes(keyword);
      const cocokMasalah =
        terpilih.size === 0 ||
        p.permasalahan.some((m) => terpilih.has(filterKey(p.category, m)));
      return cocokNama && cocokMasalah;
    });

    renderCards(cardTarget, hasil);
  }

  function tutupModal(batal: boolean) {
    if (batal) pulihkanTombol();
    modal?.classList.remove("open");
  }

  // search langsung ke load tiap ketik
  searchInput?.addEventListener("input", terapkan, { signal });

  openBtn?.addEventListener("click", () => modal?.classList.add("open"), { signal });

  doneBtn?.addEventListener("click", () => {
    simpanFilter();
    terapkan();
    updateTombolReset();
    tutupModal(false);
  }, { signal });

  // tombol x, klik area gelap, atau Escape = batal (pilihan yang belum di-Done dibuang)
  cancelBtn?.addEventListener("click", () => tutupModal(true), { signal });
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) tutupModal(true);
  }, { signal });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) tutupModal(true);
  }, { signal });

  resetBtn?.addEventListener("click", () => {
    // hapus semua pilihan filter
    semuaTombol().forEach((b) => b.classList.remove("selected"));
    simpanFilter();
    terapkan();
    updateTombolReset();
  }, { signal });

  terapkan();

  return () => ac.abort();
}