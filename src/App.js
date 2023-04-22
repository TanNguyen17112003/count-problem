import logo from './logo.svg';
import {useReducer} from 'react';
import './App.css';
const initCount = { count: 0 }
function reducer(state, action) {
  if (action.type == "increase") {
    return { count: state.count + 1 };
  }
  else if (action.type == "decrease") {
    return { count: state.count - 1 };
  }
  else if (action.type == "reset") {
    return { count: state.count = 0 };
  }
  else {
    return { count: state.count };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initCount);
  const handleChange = (count, kind) => {
    if (kind == 1) {
      dispatch({
        type: "increase"
      })
    }
    else if (kind == 2) {
      dispatch({
        type: "decrease"
      })
    }
    else if (kind == 3) {
      dispatch({
        type: "reset"
      })
    } 
  }

  return (
    <div>
      <h2>This project for testing using useReducer by using count problem</h2>
      <span>Count: {state.count}</span>
      <br />
      <button onClick={() => handleChange(state, 1)}>Increase</button>
      <button onClick={() => handleChange(state, 2)}>Decrease</button>
      <button onClick={() => handleChange(state, 3)}>Reset</button>
    </div>
  );
}

export default App;
