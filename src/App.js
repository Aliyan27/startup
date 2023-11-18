import React, { useEffect } from "react";
import AOS from "aos";
import AllRoute from "./routes/AllRoute";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <AllRoute />
    </>
  );
};

export default App;
