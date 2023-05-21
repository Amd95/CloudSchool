import React, { useEffect, useState } from "react";
import axios from "axios";

function connectDb() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      {data ? <div>{data}</div> : <div>Loading...</div>}
    </div>
  );
}

export default connectDb;
