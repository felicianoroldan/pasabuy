import React, { useEffect } from 'react';
import "/src/style/greenwich.scss";


function Greenwich() {

  useEffect(() => {
    document.title = "greenwich";
  }, []);


  return (
    <>
    <div>Greenwich</div>
    </>
  )
}

export default Greenwich