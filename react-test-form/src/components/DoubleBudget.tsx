import React from "react";
import FieldHeader from "./FieldHeader";
// const PAGE_RELOAD_TYPE = 1;

type Props = {
  value: number | null;
  fieldName: string;
};

const DoubleBudget: React.FC<Props> = ({ value, fieldName }) => {
  // console.log("VALUE", value);

  // if (window.performance) {
  //   if (performance.navigation.type === PAGE_RELOAD_TYPE) {
  //     alert("This page is reloaded");
  //   } else {
  //     alert("This page is not reloaded");
  //   }
  // }

  // alert(window.performance.navigation.type);

  return (
    <div className="fields-container">
      <FieldHeader name={fieldName} />
      {value}
    </div>
  );
};

export default DoubleBudget;
