
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
// import FeaturedPage from './Components/Promo';

function App() {
  return (
    <div className="App">
     <div>      
      <Header/> 
      {/* <FeaturedPage/> */}
      
      <Products/>
     </div>
    </div>
  );
}

export default App;
