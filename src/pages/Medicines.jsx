import React, { useEffect } from 'react';
import "/src/style/medicines.scss";

function Medicines() {

  useEffect(() =>{
    document.title = "medicines"
  }, []);

  return (
    <div>Medicines</div>
  )
}

export default Medicines