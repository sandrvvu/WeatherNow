export type Weather = {
  temp: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  sunrise: number;
  sunset: number;
  description: string;
  icon: string;
};

export type RequestedData<T> = {
  status: "idle" | "loading" | "fulfilled" | "failed";
  data?: T | null;
  errorType: string | null;
};
