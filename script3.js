//Nested Lists
const App = () => {
    const categories = [
      { name: 'Fruits', items: ['Apple', 'Banana'] },
      { name: 'Vegetables', items: ['Carrot', 'Peas'] }
    ];
  
    return (
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);