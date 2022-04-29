import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherContainer, Temp, City } from "./WeatherStyles";

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
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}°</Temp>
      <City>Georgia, Tbilisi</City>
    </WeatherContainer>
  );
};

export default Weather;
