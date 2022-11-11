import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Another from './Another'
import numberContext from './numberContext'

function App() {

  const [myNumber, aFunction] = useState(2)
  const [myArray, fn] = useState([])

  function addOneToState() {
    aFunction(myNumber + 1)
    fn([...myArray, myNumber])
  }

  useEffect(function (){
    console.log("Hi")
  }, [myNumber])

  // const addOneToState = () => {

  // }

  return (
    <numberContext.Provider value={{myNumber}}>
      <h1>{myNumber} is an {myNumber % 2 == 1 ? "Odd" : "Even"}</h1>
      <button onClick={addOneToState}>Increase</button>
      { 
        myNumber % 2 == 1 ? <Another /> : null
      }
      {
        myArray.map(function(eachItem) {
          return <Another />
        })
      }
    </numberContext.Provider>
  );
}

export default App;
