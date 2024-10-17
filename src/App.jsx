
import './App.css'
import Counter from './counter';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick() {
    alert('button clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
     
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>
    

      <button onClick={handleClick}>click me</button>
      <button onClick={()=>addToFive(3)}>Four</button>
     
    </>
  )
}

export default App
