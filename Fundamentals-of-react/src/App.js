import React from 'react';



const App = () => {
  // We are able to remove the curly brackets because theirs no logic to it as well as the return statement 
  // but I'll keep it for now incase I need to code some logic to it  

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },];


  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
      <Button />
      <hr />
      {/* <Developer /> */}
      {/* and by the way: that's how you do comments in JSX */}
    </div>
  );
}

const Search = () => {
  // this is a onChange handlers function 
  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return(
    <div>
      <label htmlFor="search">Search: </label>
      {/* when user clicks on the input field the handleChange function runs and shows the change in the console */}
      <input id="search" type="text" onChange={handleChange} />
    </div>
  )
}

const Button = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      Coount = {count};

      <button 
      type='button'
      onClick={ () => setCount(count + 1)}
      >
        Start count
      </button>
    </div>
  )
}


const List = (props) =>
(
  <ul>
    {props.list.map(data =>
      <li key={data.objectID}>
        <span>
          <a href={data.url}>{data.title}</a>
        </span>
        <span>{data.author}</span>
        <span>{data.num_comments}</span>
        <span>{data.points}</span>
      </li>
    )} </ul>
);



// We are defining a class named Developer 
class Developer {
  //  A constructor is a special method of a class or structure in object-oriented programming that initializes a newly created object of that 
  // type. Whenever an object is created, the constructor is called automatically.
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + ' ' + this.lastName;

  }
}

// class instantiation
const robin = new Developer('Robin', 'dog');
const dennis = new Developer('Dennis', 'Wieruch');

console.log(robin.getName(), dennis.getName());
export default App;
