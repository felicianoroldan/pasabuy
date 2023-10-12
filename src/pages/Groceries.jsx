import React, { useEffect } from 'react';
import "/src/style/groceries.scss";

function Groceries() {

  useEffect(() =>{
    document.title = "groceries"
  }, []);

  return (
    <div>Groceries</div>
  )
}

export default Groceries