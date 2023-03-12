import React from "react";

const Title = ({ part1, part2 }) => {
  return (
    <div className="title">
      <h1>
        {part1}
        <span> {part2}</span>
      </h1>
    </div>
  );
};

export default Title;
