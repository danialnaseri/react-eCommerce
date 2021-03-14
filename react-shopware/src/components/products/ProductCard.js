import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    
  return (
    
    <div  className="col mb-4 text-center mt-5">       
        
        <div className="card">
          <div className="view overlay">
            <img className="card-img-top" src={product.image} alt="#" />
            <Link to={"/product/" + product._id}>
              <div className="mask rgba-white-slight"></div>
            </Link>
          </div>

         
          <div className="card-body">
            
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.desc}</p>            

            <Link
              to={"/product/" + product._id}
              className="btn unique-color white-text btn-md">
              Visa Produkt
            </Link>
          </div>
        </div>  
              
    </div>
   
  );
};

export default ProductCard;
