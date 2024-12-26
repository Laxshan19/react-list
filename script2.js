//with key
const { useState} = React; // Import both useState and useEffect

  const App = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  
    const addItem = () => {
      setItems(['Orange', ...items]); // Add a new item to the beginning of the list
    };
  
    return (
      <div>
        <button onClick={addItem}>Add Orange</button>
        <ul>
          {items.map((item, index) => {
             console.log('Rendering:', item);
            <li key={index}>{item}</li> // Unique key for each list item
  })}
        </ul>
      </div>
    );
  };
  

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);