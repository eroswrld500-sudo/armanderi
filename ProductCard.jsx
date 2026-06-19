"use client";
import { useCart } from "@/store/cart";

export default function ProductCard({ product }) {
  const add = useCart((s) => s.add);

  return (
    <div style={{
      padding:"20px",
      border:"1px solid #eee",
      borderRadius:"16px",
      margin:"10px"
    }}>

      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <strong>{product.price} ₺</strong>

      <button
        onClick={() => add(product)}
        style={{
          marginTop:"10px",
          padding:"10px",
          cursor:"pointer"
        }}
      >
        Sepete Ekle
      </button>

    </div>
  );
}
