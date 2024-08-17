import ProductRow from "./ProductRow";

import './ProductsList.css';

const ProductsList = props => {

    
    return(
    <>
    <div id="products-wrapper" className="w-9/12 h-full px-20 py-20 flex flex-col overflow-x-hidden overflow-y-scroll ">
        <div className="w-full h-auto my-2 px-3 py-3 font-semibold grid grid-cols-3 bg-blue-600 rounded-xl">
            <div className="w-[60%] text-left">Produto</div>
            <div className="w-[20%] text-left">Quant.</div>
            <div className="w-[20%] text-left">Preço</div>
        </div>
        
        {props.items.map(product => <ProductRow name={product.name} quantity={product.quantity} price={product.price}/>)}
        
        //here is where I need to add each product from the server
    </div>
  
    </>
    
    );
}
