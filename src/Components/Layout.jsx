import { useState } from "react";
import { useEffect } from "react";
import classes from "./Layout.module.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { useRef } from "react";

const Layout = (props) => {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  useEffect(() => {
    let map = tt.map({
      key: "5Vyzgv1PiXBAhjb1GQ2YADsXGSwR1VNm",
      container: mapElement.current,
      center: [props.array[0].latlng[1], props.array[0].latlng[0]],
      zoom: 5,
    });

    setMap(map);
  }, []);
  let Language = "";
  for (let i = 0; i < Object.values(props.array[0].languages).length; i++) {
    if (i === Object.values(props.array[0].languages).length - 1) {
      Language += ` ${Object.values(props.array[0].languages)[i]}.`;
    } else {
      Language += ` ${Object.values(props.array[0].languages)[i]},`;
    }
  }
  let Capital = "";
  for (let i = 0; i < props.array[0].capital.length; i++) {
    if (i === props.array[0].capital.length - 1) {
      Capital += ` ${props.array[0].capital[i]}.`;
    } else {
      Capital += ` ${props.array[0].capital[i]},`;
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.container__first}>
        <h2>{props.array[0].name.common}</h2>
        <img src={props.array[0].flags.png} alt="Flag" />
        <p>Capital(s): {Capital}</p>
        <p>Language(s):{Language}</p>
        <p>Population: {props.array[0].population}.</p>
      </div>
      <div className={classes.container__second}>
        <div className={classes.container__second__map} ref={mapElement}></div>
      </div>
    </div>
  );
};

export default Layout;
