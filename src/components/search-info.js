import React from 'react';
import './search-info.css';


function SearchInfo(props){
    return(
        <div className="SearchInfoDiv">  
            <form 
                className="SearchInfo"
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

export default SearchInfo;