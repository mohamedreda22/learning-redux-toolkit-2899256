import productList from '../data/productList'
import '../styles/home.scss'

const ProductCatalogue = () => {
  return (
    <div className="container product-catalogue">
      <div className="row">
        {productList.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img
                  className="card-img-top center-block"
                  // @ts-ignore
                  src={product.imageUrl}
                  alt="Card cap"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCatalogue
