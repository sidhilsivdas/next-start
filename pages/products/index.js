import Link from "next/link";

function Products({ products }){
    return (<div><h1>Products Page</h1><br/>
           {
             products.map( product => {
              return (<div><h4>{product.id} | <Link href={`products/${product.id}`}>{product.name}</Link></h4></div>);
             })
           } 
    </div>)
}
  
  export default Products;

  export async function getStaticProps(){
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    return {
      props: {
        products : data
      },
      revalidate : 10
    }
  }