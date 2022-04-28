import React, { useEffect, useState } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=imperial&appid=c3511c4a959981dd064d41343c59edf3";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!data) return null;
  // console.log(data);

  return (
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
    </div>
  );
};

export default Weather;
