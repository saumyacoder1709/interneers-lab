import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'; // <-- Import the new list!

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Featured Products</h2>
        {/* Render the list right here */}
        <ProductList /> 
      </main>
    </div>
  );
}

export default App;