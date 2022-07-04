import './App.css';
import Product from './Product'
import Search from './Search'

function App() {

  // I console log the prop data received from the child component (Search)
  const handleSearch = (event) => {
    console.log(event.target.title.value)
}

  return (

    <div className="App">
      <h1>Hello World</h1>
      <Search 
      // I initialize the OnSearch prop and call the handleSearch function 
      // to do something with the data received 
      onSearch = {handleSearch}
      />
      <Product
      title = "shoes"
      price = {40}
      description="running shoe for hiking the mountain"
      />
       <Product
      title = "Iphone"
      price = {405}
      description="running shoe for hiking the mountain"
      />
       <Product
      title = "Book"
      price = {20}
      description="running shoe for hiking the mountain"
      />


    </div>
  );
}

export default App;
