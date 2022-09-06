import React from "react";

function ResultSection({ icon, content }) {
  return (
    <div>
      <div>{icon}</div>
      <div>{content}</div>
    </div>
  );
}

export default ResultSection;
