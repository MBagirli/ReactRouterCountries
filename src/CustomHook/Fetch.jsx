import { useEffect } from "react";
import { useReducer } from "react";
import Spinner from "../UI/Spinner";
import Country from "../Components/Country";

let InfoReducer = (_, action) => {
  if (action.type === "Success") {
    return action.array.map((item, index) => {
      return <Country obj={item} key={index} />;
    });
  }
  if (action.type === "Error") {
    return (
      <li>
        <p className="Error">Something went wrong...</p>
      </li>
    );
  }
  if (action.type === "Loading") {
    return <Spinner />;
  }
};

let useFetch = (Region) => {
  let [info, setInfo] = useReducer(InfoReducer, "");

  useEffect(() => {
    setInfo({ type: "Loading" });
    let HttpRequest = async () => {
      try {
        let response = await fetch(
          `https://restcountries.com/v3.1/region/${Region}`
        );
        let data = await response.json();
        if (response.ok) {
          setInfo({ type: "Success", array: data });
        } else {
          throw new Error();
        }
      } catch {
        setInfo({ type: "Error" });
      }
    };
    HttpRequest();
  }, [Region]);
  return info;
};

export default useFetch;
