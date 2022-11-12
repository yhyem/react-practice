import React, { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=%REACT_APP_API_KEY%'
  //     );
  //     setData(response.data);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }
  return (
    <>
      <Categories />
      <NewsList />
    </>
  )
}

export default App;