import { Route } from 'react-router';
import './App.css';
import Home from "./pages/home/Home";
import CardDetails from "./pages/cardDetails/CardDetails";
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact/>
      <Route path="/cardDetails" component={CardDetails} exact/>
      <Route path="/cart" component={Cart} exact/>
    </div>
  );
}

export default App; 
