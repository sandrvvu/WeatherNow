import { BsGeoAlt } from "react-icons/bs";

type LocationProps = {
  city: string;
  onLocationClick: () => void;
};

const Location: React.FC<LocationProps> = ({city, onLocationClick}: LocationProps) => {
    return (
      <div className="location-box" onClick={onLocationClick}>
        <BsGeoAlt/>
        <p>{city}</p>
      </div>
    );
  };
  
  export default Location;