import { products } from "./data";
import { card } from "./card";

export default function App() {
    const filteredProducts = products.filter((product) => product.priceInt > 4000000);
    return (
        <div className="App">
            <h1>SAS 2024 2025 IT AKRAM</h1>
            <div className="card-container">{filteredProducts.map(card)}</div>
        </div>
    );
}

