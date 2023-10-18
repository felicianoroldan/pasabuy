import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import"/src/style/greenwich.scss";
import GwichCard from "../components/GwichCard";
import { MdOutlineArrowBack } from "react-icons/md";



function Greenwich() {

  useEffect(() => {

    document.title = "greenwich";
  }, []);

  return (
    <>
      <Link to="/">
        <MdOutlineArrowBack size={20} className="ms-3 fixed-top g-backicon" />
      </Link>
      <GwichCard/>
    </>
  );
}

export default Greenwich;
