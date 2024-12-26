//Conditional Rendering in Lists
const App = () => {
    const items = ['Apple', null, 'Banana', undefined, 'Cherry'];
  
    return (
      <ul>
        {items.map((item, index) =>
          item ? <li key={index}>{item}</li> : null
        )}
      </ul>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);