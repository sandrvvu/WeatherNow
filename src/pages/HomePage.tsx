import WeatherInput from '../components/WeatherInput'
import WeatherCard from '../components/WeatherCard'
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import { useAppSelector } from "../redux/hooks";

const HomePage: React.FC = () => {

  const { status, data } = useAppSelector(
    (state) => state.weatherData
  );

  return (
    <div className="main__container">
      <div className="content">
      <WeatherInput/>
      {status === "fulfilled" && data && <WeatherCard data={data}/>}
       {status === "failed" && <NotFound/>}
       {status === "loading" && <Loading/>}
      </div>
    </div>
  )
}

export default HomePage