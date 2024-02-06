import { useState } from "react";

const NumberOfEvents =({setCurrentNOE, setErrorAlert})=>{
    const [query, setQuery] = useState("32");
    const handleInputChanged =(event)=>{
        const value = event.target.value;
        setQuery(value);
        setCurrentNOE(value);

        let infoText;
        if (isNaN(value) || setQuery <= 0 ) {
            infoText = "You must input a valid positive number"
        } else {
            infoText = "";
            setCurrentNOE(value);
        }
        setErrorAlert(infoText);
        }
    return(
        <div id="number-of-events">
            <input type="text" className="textboxNumber"
            placeholder="Enter a number"
            value={query}
            onChange={handleInputChanged}
            />
        </div>
    )
}
export default NumberOfEvents;