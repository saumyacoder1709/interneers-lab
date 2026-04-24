import Product from './Product';

export default function ProductList() {
  // 1. Our Dummy Data Array
  const dummyData = [
    { id: 1, name: "Dummy Laptop Pro", description: "High performance coding machine.", price: 1299 },
    { id: 2, name: "Mechanical Keyboard", description: "Tactile switches for fast typing.", price: 150 },
    { id: 3, name: "Wireless Mouse", description: "Ergonomic design with zero latency.", price: 80 }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      gap: '20px', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'flex-start',
      marginTop: '30px' 
    }}>
      {/* 2. The React Map Loop */}
      {/* We iterate over our array and spawn a <Product /> block for each one */}
      {dummyData.map(item => (
        <Product 
          key={item.id} // React requires a unique 'key' for every item in a list
          name={item.name} 
          description={item.description} 
          price={item.price} 
        />
      ))}
    </div>
  );
}