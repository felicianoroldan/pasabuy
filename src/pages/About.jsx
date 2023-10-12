import React, { useEffect } from 'react';
import "/src/style/about.scss";

export default function About() {

  useEffect(() => {
    document.title = "about"
  }, []);

  return (
    <div>About</div>
  )
}
