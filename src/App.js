import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
  // const [count, setCount] = useState(0);

  // using a React Hook useSelector from React Redux
  // getting count variable from counter.js file
  // getting counter reducer from configureStore.js file
  const { count } = useSelector((state) => state.counter)

  // to can use the React Redux Toolkit actions we need to dispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
      </header>
    </div>
  );
}

export default App;
