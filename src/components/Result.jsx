import React from "react";

export default function Result({ score, total }) {
  return (
    <div>
      <h1>
        Score : {score}/{total}
      </h1>
    </div>
  );
}
