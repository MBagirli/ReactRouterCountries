import useFetch from "../CustomHook/Fetch";
import { useParams } from "react-router-dom";

const Region = () => {
  let params = useParams();

  let array = useFetch(params.CountryId);

  return (
    <section>
      <div className="List">{array}</div>
    </section>
  );
};

export default Region;
