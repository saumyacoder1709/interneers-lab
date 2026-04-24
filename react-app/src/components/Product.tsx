// 1. We must import the 'useState' tool from React
import { useState } from 'react';

interface ProductProps {
  name: string;
  description: string;
  price: number;
}

export default function Product({ name, description, price }: ProductProps) {
  // 2. The State Machine!
  // 'isExpanded' is the current memory (starts as false).
  // 'setIsExpanded' is the function we use to change the memory.
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      // 3. The Click Event: When clicked, flip the state to the opposite of what it currently is!
      onClick={() => setIsExpanded(!isExpanded)}
      style={{ 
        border: '1px solid #e0e0e0', 
        padding: '20px', 
        borderRadius: '8px', 
        width: '250px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer', // Turns the mouse into a hand so the user knows it's clickable
        transition: 'height 0.3s ease'
      }}
    >
      <h3 style={{ marginTop: 0 }}>{name}</h3>
      <p style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '1.2rem' }}>${price}</p>
      
      {/* 4. Conditional Rendering: This is React magic. */}
      {/* This reads as: "If isExpanded is TRUE, then render the HTML inside the parentheses." */}
      {isExpanded && (
        <div style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{description}</p>
        </div>
      )}

      <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '10px' }}>
        {isExpanded ? 'Click to hide' : 'Click for details'}
      </p>
    </div>
  );
}