//@ts-nocheck

import { Dispatch } from "redux";
import { GlobalState} from "./reducers";
import createFields from "../services/create";
import updateFields from '../services/update';
import {getInitialState} from "./reducers/fields";
import {createRecordSucceeded, failedOperations, updateField} from './actions';

export const createRecord = () => {
  return async (dispatch: Dispatch, getState: () => GlobalState) => {
    const recordId = getState().fields.recordId;
    console.log("recordId", recordId);
    if (recordId !== null) {
      return;
    }
    try {
      const record = await createFields(getInitialState());
      console.log("record", record)
      dispatch(createRecordSucceeded({recordId: record.id, fields: record.fields}));
     } catch (error) {
      dispatch(failedOperations);
    }
  };
};

export const updateFieldsThunk = () => {
  return (dispatch: Dispatch) => {
   try {
     const updatedData = updateFields(recordId, getInitialState());
     dispatch(updateField(recordId))
   } catch (error) {
     dispatch(failedOperations)
   }
  }
};
