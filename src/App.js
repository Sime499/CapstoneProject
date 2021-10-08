import "./App.css";
import data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/ANJU">
            <h1> ANJU Coffee</h1>
          </a>
        </div>
        <div>
          <a href="/Shop" class="">
            Shop
          </a>
          <a href="/Shop" class="">
            Sign In
          </a>
          <a href="/Cart" class="">
            Cart
          </a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <footer>
        <p className="row footer">All right is preserved</p>
        <p>cory and sime</p>
      </footer>
    </div>
  );
}

export default App;
