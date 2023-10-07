import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!</h2>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <h3>
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
