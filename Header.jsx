"use client";
import { useCart } from "@/store/cart";

export default function Header() {
  const items = useCart((s) => s.items);

  return (
    <header style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"20px",
      borderBottom:"1px solid #eee"
    }}>
      <h1 style={{letterSpacing:"6px", fontWeight:300}}>
        ARMAN DERİ
      </h1>

      <div>
        🛒 {items.length}
      </div>
    </header>
  );
}
