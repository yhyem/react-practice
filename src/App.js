import React, { useState, useCallback } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
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
    <Route path="/:category?" component={NewsPage} />
  )
}

export default App;