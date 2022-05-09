import React, { useContext } from "react";
import { AppContext } from "../App";

const Results = () => {
  const [appData] = useContext(AppContext);

  return (
    <div>
      Results:
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
    </div>
  );
};

export default Results;
