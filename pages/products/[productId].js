import { useRouter } from "next/router";
function Products({ product }){
    return (
      <>
       <h3>{product.id} | {product.name}</h3>
       <p>{product.body}</p>
      </>
    )
}
  
export default Products;

export async function getStaticProps(context){
   const { params } = context;
   const prodId = params.productId;
   const response = await fetch("http://localhost:4000/products/"+prodId);
   const data = await response.json();
   return {
    props : {
      product : data
    }
   }
}

export async function getStaticPaths(){
  return {
      paths: [
          {params: {productId: '1'}}
      ],
      fallback: 'blocking'
  }
}