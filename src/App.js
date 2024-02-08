// import './App.css';
import { incremented,decremented } from './redux/counter';
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log({count})
  return (
    <div className="App">
      <h1>Count is : {count}</h1>
      <button onClick={() => {dispatch(incremented())}}>increment</button>
      <button onClick={() => {dispatch(decremented())}}>decrement</button>
    </div>
  );
}

export default App;
