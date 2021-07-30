import React from "react";
import { Field } from "../redux/types";
import TextField from "./TextField";
import NumberField from "./NumberField";
import DoubleBudget from "./DoubleBudget";

type Props = {
  field: Field;
};

const FieldRenderer = (props: Props) => {
  const { field } = props;
  // console.log("field", field);

  switch (field.type) {
    case "text":
      return (
        <TextField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );
    case "number":
      return (
        <NumberField
          fieldId={field.id}
          fieldName={field.name}
          value={field.value}
        />
      );
    case "disabled":
      return <DoubleBudget value={field.value} fieldName={field.name} />;
    default:
      return null;
    // throw new Error(`Unknown field type: ${field.type}`);
  }
};

export default FieldRenderer;
