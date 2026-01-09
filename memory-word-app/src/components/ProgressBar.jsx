import React from "react";

export default function ProgressBar() {
  const text = "Level 1: Beginner";
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="level">
      <div>
        <h4>{text}</h4>
      </div>

      {arr.map((element, index) => (
        <div className="level-bar" key={index}></div>
      ))}

      <div className="xp" style={{ width: `${67}%` }}></div>
    </div>
  );
}
