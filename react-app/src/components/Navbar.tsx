export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#34495e', padding: '10px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Laptops</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Accessories</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cart</a>
    </nav>
  );
}