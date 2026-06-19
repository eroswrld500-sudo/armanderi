import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

export default function Page() {
  return (
    <>
      <Header />

      <div style={{
        textAlign:"center",
        padding:"80px 20px"
      }}>
        <h2 style={{fontSize:"48px", fontWeight:300}}>
          Zamansız Lüks Deri Koleksiyonu
        </h2>
        <p style={{opacity:0.6}}>
          Arman Deri — premium craftsmanship
        </p>
      </div>

      <ProductGrid />
    </>
  );
}
