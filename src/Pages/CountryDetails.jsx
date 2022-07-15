import { useParams } from "react-router-dom";
import useFetchCountries from "../CustomHook/FetchCountries";

const CountryDetails = () => {
  let params = useParams();

  let data = useFetchCountries(params.DetailsId);

  return <div className="Murad">{data}</div>;
};

export default CountryDetails;
