import { useEffect } from "react";
import { useReducer } from "react";
import Spinner from "../UI/Spinner";
import Layout from "../Components/Layout";

let InfoReducer = (_, action) => {
  if (action.type === "Success") {
    return <Layout array={action.array} />;
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

let useFetchCountries = (Country) => {
  let [info, setInfo] = useReducer(InfoReducer, "");

  useEffect(() => {
    setInfo({ type: "Loading" });
    let HttpRequest = async () => {
      try {
        let response = await fetch(
          `https://restcountries.com/v3.1/name/${Country}`
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
  }, [Country]);
  return info;
};

export default useFetchCountries;
