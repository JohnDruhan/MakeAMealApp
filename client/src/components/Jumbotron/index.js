import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Make-A-Meal Recipe Finder</h1>
      <h3>It's Easy To Make Your Next Meal - Type Any Food or Dish In The "Search" Below</h3>
      <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
        Powered by Recipe Puppy
      </a>
    </div>
  );
}

export default Jumbotron;
