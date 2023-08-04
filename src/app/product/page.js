import React from 'react';
import Item from './Item';

const App = () => {
  // Some sample items
  const items = [
    { id: 1, name: 'Item 1', variant: 'A', subvariant: '1', price: 10 },
    { id: 1, name: 'Item 1', variant: 'A', subvariant: '2', price: 12 },
    { id: 2, name: 'Item 2', variant: 'B', subvariant: '1', price: 15 },
  ];

  return (
      <div>
        <h1>My Online Shop</h1>
        {items.map((item) => (
          <Item key={`${item.id}-${item.variant}-${item.subvariant}`} {...item} />
        ))}
        <hr />
      </div>
  );
};

export default App;
