import React,{ useState } from 'react'

// I am declaring props in the search component 
// To be able to use it as a way to pass data to the PARENT (App) component
const Search = (props) => {

      /*  Initial State */
    const [searchTerm, setSearchTerm] = useState(" ");

    /* The handleChange() function to set a new state for input */
    const handleChange = (event)=> {
        event.preventDefault();


        // I'm grabbing the value from the user (the change event) and storing it to the setSearchTerm
        // setSearchTerm(event.target.value);

        setSearchTerm(event.target.title.value);


        // Setting the props here to be able to use it in the parent component (onSearch)
        // This is where we store the user input to be able to pass it to the parent component 
        props.onSearch(event);

    }


    return (
        <div>
            {/* <label htmlFor="search">Search: </label>
            <input name="title" id="todoTitle" type="text" onChange={handleChange} />
            <p>
                Searching for <strong> {searchTerm}</strong>.
            </p>

            <button onChange={handleChange}>Submit</button>
            <p>{searchTerm}</p> */}

            <form onSubmit={handleChange}>
            <label htmlFor="todoTitle">
                Title
            </label>
            <input name="title" id="todoTitle"></input>
            <button>Add</button>
            <p>{searchTerm}</p>
        </form>


        </div>
    )
    
}

export default Search