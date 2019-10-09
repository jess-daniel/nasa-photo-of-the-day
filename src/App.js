import React, { useState, useEffect, } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(error => {
        console.log("Data not returned: ", error);
      })
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
