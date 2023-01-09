function Users({ users }){
    return <><h1>Users page</h1>
    {
        users.map(user => {
           return (<div key={user.id}><p >{user.name} - {user.id}</p></div>);
        })
    }
    </>
}
  
  export default Users

  export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return {
        props:{
            users : data
        }
    }
  }