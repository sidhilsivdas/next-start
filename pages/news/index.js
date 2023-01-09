import Link from "next/link";

function News({ news }){
    return (
        <>
         <h1>News</h1>
         {
            news.map( item => {
                return <div><Link href={`news/${item.id}`}><h3>{item.id} - {item.title} </h3></Link><hr/></div>
            })
         }
        </>
    )
}


export default News;

export async function getServerSideProps(){
  const response = await fetch(`http://localhost:4000/news/`);
  const data = await response.json();
  return {
    props: {
        news: data
    }
  }
}