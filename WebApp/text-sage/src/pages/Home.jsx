import { useState } from "react";
import axios from 'axios';  
import '../index.css';  

const Home = () => {    
    const [inputText, setInputText] = useState("");  
    const [summary, setSummary] = useState("");      

    const handleSummarize = async (event) => {
      event.preventDefault();  // Prevent the form from reloading the page
      
      try {
        console.log("Sending request to summarize text:", inputText);
        const response = await axios.post("http://127.0.0.1:5000", { text: inputText });
        console.log("Received response:", response.data);
        setSummary(response.data.summary); // Set the summary
      } catch (error) {
        console.error("Error summarizing text:", error);
      }
    };
    
    const handleClear = () => {
      setInputText("");   // Clear the input text
      setSummary("");     // Clear the summary
    };

    return (
       <div className="container">
      <h1>Text-Sage</h1>



        <textarea
          placeholder="Paste text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-area"
        />
        
        <div className="button-container">
          {/* Set button type to 'button' to avoid form submission */}
          <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
          <button type="button" className="summarize-button" onClick={handleSummarize}>Summarize</button>
        </div>

  

      {summary && (
        <div className="summary-section">
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
    );
}

export default Home;
