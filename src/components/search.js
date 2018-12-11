import React from 'react';
import './search.css';


function Search(props){
    return(
        <div className="SearchDiv">  
            <span className="Status">Status</span>
            <form 
                className="Search"
                onSubmit={props.handleSubmit}
            >
                <input 
                    ref={props.setRef} // reference object to itsefl
                    type="text"
                    placeholder="search"
                    className="Search-input"
                    name="search"
                />
            </form>
        </div>
    )
}

export default Search;