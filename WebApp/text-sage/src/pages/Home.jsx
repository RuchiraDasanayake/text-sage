import  { useState } from "react";
import '../index.css';  

const Home = () => {    

    const [inputText, setInputText] = useState("");  
    const [summary, setSummary] = useState("");      
  
    const handleSummarize = () => {
    
      setSummary("This is a summarized version of the provided text.");
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
        <button className="clear-button" onClick={handleClear}>Clear</button>
        <button className="summarize-button" onClick={handleSummarize}>Summarize</button>
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