import { Link } from "react-router-dom";
import classes from "./Country.module.css";

const Country = (props) => {
  return (
    <div>
      <Link to={`${props.obj.name.common}`}>
        <div className={classes.container}>
          <img
            className={classes.container__img}
            src={props.obj.flags.png}
            alt="Flag"
          />
        </div>
      </Link>
    </div>
  );
};

export default Country;
