import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {useFieldData} from '../useFieldData';
import FieldRenderer from "./FieldRenderer";
import { useFields } from "../redux/selectors";
import "../style.css";
import { createRecord, updateFieldsThunk } from "../redux/operations";


const FormComponent: React.FC = () => {
   const fieldData = useFields();
   const dispatch = useDispatch();
        console.log('fieldData',fieldData)

    const objectFieldsData = useFieldData();
    console.log('objectFieldsData', objectFieldsData)
  
    useEffect(() => {
      dispatch(createRecord());
    }, [dispatch]);
  
    const handleEditFields = () => {
      dispatch(updateFieldsThunk());
    }

    return (
    <div>
      <div className="fields-container">
        {fieldData.map((form, inx) => (
          <FieldRenderer key={inx} field={form} />
        ))}
      </div>
      <div className="fields-button" onClick={handleEditFields}>Save</div>
    </div>
    )
};

export default FormComponent;