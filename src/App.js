import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const product=[
    {ProductName: 'Photography',
    price: 'US$9.99/mo'},
    {ProductName: 'Premiere Pro',
    price: 'US$14.99/mo'},
    {ProductName: 'Illustrator',
    price: 'US$20.99/mo'},
    {ProductName: 'Acrobat Pro',
    price: 'US$19.99/mo'},
]

  return (
    <div className="App">
      <header className="App-header">
      <DynamicList></DynamicList>
      <Counter></Counter>
        <div style={{display: 'inline'}} >
          {
            product.map(pt=><Product productList={pt}></Product>)
          }
        </div>

      </header>
    </div>
  );
}
function Product(props){
  console.log(props)
  let syt={
    border: '4px solid green',
    color: 'red',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #e1e1e1',
    minHeight: '285px',
    padding: '15px',
    width: '285px',
    margin: '10px',

  }
  let btn={
    borderRadius: '18px',
    content: "",
    backgroundColor: 'blue',
    marginTop: '130px',
    transition: 'box-shadow .13s ease-out,margin .13s ease-out',
    color: 'white'
  }
  return(
    <div style={syt}>
       <h3>{props.productList.ProductName}</h3>
        <h4 style={{font: '24px'}}>{props.productList.price}</h4>

        <button style={btn}>Buy now</button>
    </div>
  )
}
function Counter(){
  let [count,setCount]=useState(0)
  return(
    <div>
      <p>Count:{ count}</p>
      
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function DynamicList(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));

  },[])
  
  return(
    <div style={{textAlign: 'left',
    border: '4px solid white'
    }}>
      {
         users.map(data=>
            <p>Name: {data.name}
            <br></br>
            Email: {data.email}</p>
        )
      }

       
    </div>

  )
}
export default App;
