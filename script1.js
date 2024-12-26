//without key
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
          {items.map((item) => {
             console.log('Rendering:', item);
            <li>{item}</li> // No `key`
})}
        </ul>
      </div>
    );
  };


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

  /*
  =>React uses keys to optimize rendering. Without keys, React re-renders all list items even if only one changes, 
    which can hurt performance.
             Best Practices for key:
             ----------------------------
                ->  Use unique IDs from data (preferred).
                ->  Avoid using array indices unless data is static and doesn't change.

                
  =>The key in React is used to uniquely identify elements in a list when rendering them dynamically.
    It helps React efficiently update the DOM by identifying which items have changed, been added, or removed.

  Why is key important?
  ----------------------
     =>Improves Rendering Performance React compares the current virtual DOM with the previous one 
     (a process called reconciliation). If each list item has a unique key, React can:
          ->Quickly determine which items need to be updated.
          ->Avoid re-rendering unchanged items.
     =>Prevents Unnecessary Re-renders Without a key, React might re-render all items, 
        even those that haven't changed. This is inefficient, especially for long lists.

     =>Avoids UI Bugs If items in a list change position or are removed, not using a key can 
        lead to incorrect data mapping or visual glitches.
  */