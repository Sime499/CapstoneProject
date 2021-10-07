import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            ANJU
          </a>
        </div>
        <div>
          <a href="cart.html" class="">
            ANJU
          </a>
          <a href="signin.html" class="">
            Sign In
          </a>
          <a href="index.html" class="">
            Register
          </a>
        </div>
      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./image/P3.png" alt="product" />
            </a>
            <div className="card-body">
              {" "}
              <a href="product.html">
                <h2>Yerga Chefe Coffee</h2>
              </a>
            </div>
            <div class="rating">
              <span>
                <i class="fa fa-star "></i>
              </span>
              <span>
                <i class="fa fa-star"></i>
              </span>
              <span>
                <i class="fa fa-star"></i>
              </span>
              <span>
                <i class="fa fa-star"></i>
              </span>
              <span>
                <i class="fa fa-star"></i>
              </span>
            </div>
            <div class="price">$120</div>
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
