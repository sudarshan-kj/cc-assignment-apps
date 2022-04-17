import { useContext } from "react";
import { AppContext } from "../App";
import { actions } from "../actions";

const Results = () => {
  const { setAnswer } = actions;
  const [appData, dispatchAppData] = useContext(AppContext);

  const handleLoadButtonClick = () => {
    dispatchAppData(setAnswer(1, "Hello Usha!", "string"));
  };

  return (
    <div>
      Results:
      {Object.entries(appData.answers).map(([answerId, { value }]: any) => (
        <div key={answerId}>{value}</div>
      ))}
      <button onClick={handleLoadButtonClick}>Load data</button>
    </div>
  );
};

export default Results;
