import React, { useState } from "react"

const SearchBar =({onFormSubmit})=>{

    const [term,setTerm] = useState("")

    const onInputChange =(event)=>{
        setTerm(event.target.value)
    }

    const FormSubmit=(event)=>{
        event.preventDefault()

        onFormSubmit(term)
    }
    return(
        <div className="search_bar ui segment">
            <form onSubmit={FormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" 
                    onChange={onInputChange}
                    value={term}></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar