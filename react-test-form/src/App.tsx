// import DoubleBudget from "./components/DoubleBudget";
import { useEffect } from "react";
import FieldRenderer from "./components/FieldRenderer";
import { useFields } from "./redux/selectors";
import getFields from "./services/select";
import updateFields from "./services/update";
import createFields from "./services/create";
import {} from "./";
import "./style.css";
import { createRecord } from "./redux/operations";
import { useDispatch } from "react-redux";

const App = () => {
  const fieldData = useFields();
  const dispatch = useDispatch();
  // console.log("fieldData", fieldData);

  // useEffect(() => {
  //   getFields();
  // }, []);

  // useEffect(() => {
  //   updateFields();
  // });

  useEffect(() => {
    dispatch(createRecord());
  }, [dispatch]);

  return (
    <div>
      <div className="fields-container">
        {fieldData.map((form, inx) => (
          <FieldRenderer key={inx} field={form} />
        ))}
      </div>
      <div className="fields-button">Save</div>
    </div>
  );
};
export default App;
