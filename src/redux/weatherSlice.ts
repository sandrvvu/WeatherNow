import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Weather, RequestedData } from "../types";

type WeatherSliceState = {
  weatherData: RequestedData<Weather>;
};

const initialState: WeatherSliceState = {
  weatherData: { status: "idle", data: null, errorType: null },
};

export const fetchWeather = createAsyncThunk<Weather, string>(
  "weather/fetchWeather",
  async (city) => {
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const extractedData = await response.json();

    const data : Weather = {
      temp: extractedData.main.temp,
      humidity: extractedData.main.humidity,
      pressure: extractedData.main.pressure,
      wind_speed:  extractedData.wind.speed,
      sunrise: extractedData.sys.sunrise,
      sunset: extractedData.sys.sunset,
      description: extractedData.weather[0].description,
      icon: extractedData.weather[0].icon
    }

    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weatherData.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData.status = "fulfilled";
        state.weatherData.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.weatherData.status = "failed";
        state.weatherData.errorType = action.error.message || "Fetching Error";
      });
  },
});

export default weatherSlice.reducer;
