import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gap:"20px",
      padding:"40px"
    }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
