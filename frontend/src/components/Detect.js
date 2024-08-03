import React, { useState } from "react";
import axios from "axios";
import "./Detect.css";
export const Detect = () => {

  const [file, setFile] = useState(null);
  const [res, setRes] = useState("");

  function handleChange(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  const fetchWeatherData2 = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post("http://localhost:5000/", formData);

        const data = response.data;
        setRes(data.predicted_class);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    fetchWeatherData2();
  };

  return (
    <>
        <div className="Detect">
            <form onSubmit={handleSubmit2}>
              <div className="upload-container">
                <h2 className="upload-heading">Upload Image:</h2>
               
                
                <div className="infile">
                  <input type="file" class="kkk" onChange={handleChange} />
                  

                </div>
                <br />
                <img
                  src={file ? URL.createObjectURL(file) : null}
                  className="small-image"
                />
                <br />
                <br />
                {/* <button type="submit">Submit</button> */}
                <input type="submit" value="Submit" class="colored-button"/>

                <div><h3>{res}</h3></div>
              </div>
            </form>
        </div>
    </>
  );
};
// export default Home;
