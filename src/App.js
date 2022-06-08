import './App.css';

const welcome = {
  greeting: "Hey",
  title: "React"
}

const list = [{
  title: "React",
  url: "https://reactjs.org/:",
  author: "Eric Arizmendi",
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
},
{
  title: 'GraphQL',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 2,
},
];

// const mapMyArray = list[0].map(x => x + "f");
// const mapMyArray = list[1].map(name => name);


function getTitle(name) {
  return name
}



function App() {

  return (

    <div className="App">
      <h1>Hello World!!!!</h1>
      <h1>{welcome.greeting}  {welcome.title}
      </h1>

      <h1>{list[1].points} {list[0].points}</h1>
      {/* <h1>{mapMyArray}</h1> */}
      <ul>
        {list.map(item => {
          // This is NOT the way to list a arrays of objects we need to add a key and a UNIQUE ID 
          // Doing it this way will result in a waring in the console but it will still work
          // return<li>{item.title} {item.url}</li>

          // This is the right way to list a array of objects with a key and
          // Unique id 
          return <li key={item.objectID}>
            {item.title}
            {item.url}

            </li>;
        })}
      </ul>

      <h1>my name is {getTitle("eric")} </h1>
      <label htmlFor="search"> Search:</label>
      <input id="search" type="text" />
      <button id="myButton">Submit</button>




    </div>
  );
}

export default App;
