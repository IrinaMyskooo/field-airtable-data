import React from "react";
import FieldHeader from "./FieldHeader";

type Props = {
  value: number | null;
  fieldName: string;
};

const DoubleBudget: React.FC<Props> = ({ value, fieldName }) => {

  return (
    <div className="fields-container">
      <FieldHeader name={fieldName} />
      {value}
    </div>
  );
};

export default DoubleBudget;
