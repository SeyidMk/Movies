import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: "C:\\Users\\hp\\Desktop\\react1.jpeg",
  imageSize: 500,
};
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function App() {
  
  const [count, setCount] = useState(0);
  function HandleClick(){
    return(setCount(count + 1))
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
      />
      <Hi/>
      <MyButton count={count} onClick={HandleClick}/>
      <br />
      <br />
      <MyButton count={count} onClick={HandleClick}/>
      {2===2 ? (<h1>yes 2=2</h1>) : (<h1>2 is not equal to 2</h1>)}
      <ul>{listItems}</ul>
      <Items/>
    </div>
  )
}
function Hi(){
  return(
      <h1>Hi there, Seyid is here for help</h1>
  );
}
function MyButton({count, onClick}){
  return(
    <button onClick={onClick} style={{backgroundColor: 'black', color: 'white'}}>you clicked us {count} times</button>
  )
}

const List = products.map(product=>
  <li key={product.id}>{product.title}</li>
  );

function Items(){
  return(<ul>{List}</ul>)
}
