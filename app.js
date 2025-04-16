function ArchitectureStyles() {
  const [expandedCategory, setExpandedCategory] = React.useState(null);
  const [expandedItem, setExpandedItem] = React.useState(null);
  
  // Copy the entire architectureCategories array from our component here
  const architectureCategories = [
    // ...all your categories and items...
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
    setExpandedItem(null);
  };

  const toggleItem = (categoryIndex, itemIndex) => {
    const newExpandedItem = expandedItem && 
                            expandedItem.categoryIndex === categoryIndex && 
                            expandedItem.itemIndex === itemIndex ? 
                              null : 
                              { categoryIndex, itemIndex };
    setExpandedItem(newExpandedItem);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Copy the JSX from our component here */}
    </div>
  );
}

// Render the component
const rootElement = document.getElementById('root');
ReactDOM.render(<ArchitectureStyles />, rootElement);