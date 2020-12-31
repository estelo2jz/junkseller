import React from 'react';
import Product from '../Product';
import '../../styles/Electronics.scss';

function Electronics() {
  return (
    <div className="products__base">
      <div className=".electronics__container">
        <div className="electronics__container-heading">
          <h1>Electronics</h1>
        </div>
        <div className="electronics__container-flex-grid">
          <div className="electronics__container-flex-1">
              <Product 
                id = "123123"
                title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                price = {599.99}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
              />
              <Product 
                id = "123123"
                title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                price = {599.99}
                rating = {5}
                image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
              />          
              <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.99}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
              />          
          </div>
          <div className="electronics__container-3-grid">
            <div className="electronics__container-3-grid-grid-1">
              <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.991}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />
                <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.991}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />          
                <Product 
                    id = "123123"
                    title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                    price = {599.991}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />  
            </div>
            <div className="electronics__container-3-grid-grid-2">
              <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.992}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />
                <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.992}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />          
                <Product 
                    id = "123123"
                    title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                    price = {599.992}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />  
            </div>
            {/* <div className="electronics__container-3-grid-grid-3">
              <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.993}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />
                <Product 
                  id = "123123"
                  title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                  price = {599.993}
                  rating = {5}
                  image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />          
                <Product 
                    id = "123123"
                    title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
                    price = {599.993}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
                />  
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
