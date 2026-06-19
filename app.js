import { products } from './data/products.js';

// Global State
const state = {
  view: "home", // home, store, detail, story
  products: products,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  selectedProduct: null
};

// State'i güncelle ve render et (Reactivity Pattern)
const setState = (newState) => {
  Object.assign(state, newState);
  render();
  localStorage.setItem('cart', JSON.stringify(state.cart));
};

// Router Logic
const navigate = (view, productId = null) => {
  const newState = { view };
  if (productId) newState.selectedProduct = state.products.find(p => p.id === productId);
  setState(newState);
};

// UI Engine
const render = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    ${Navbar()}
    <main>
      ${state.view === 'home' ? HomeView() : ''}
      ${state.view === 'store' ? StoreView() : ''}
      ${state.view === 'detail' ? DetailView() : ''}
    </main>
    ${CartDrawer()}
  `;
};

// Component (Örnek: Product Card)
const ProductCard = (product) => `
  <div class="card" onclick="app.navigate('detail', ${product.id})">
    <div class="img-placeholder">IMAGE</div>
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
  </div>
`;

// Init
window.app = { navigate, setState }; // Global erişim
render();
