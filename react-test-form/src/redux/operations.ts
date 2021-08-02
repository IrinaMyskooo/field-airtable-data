//@ts-nocheck

import { Dispatch } from "redux";
import { GlobalState} from "./reducers";
import createFields from "../services/create";
import updateFields from '../services/update';
import getFields from '../services/select';
import {getInitialState} from "./reducers/fields";
import {createRecordSucceeded, failedOperations, updateField, selectField} from './actions';

export const createRecord = () => {
  return (dispatch: Dispatch, getState: () => GlobalState) => {
    const recordId = getState().fields.recordId;
    console.log("recordId", recordId);
    if (recordId !== null) {
      return;
    }
    try {
      const record = createFields(getInitialState());
      dispatch(createRecordSucceeded(recordId));
      console.log(records)
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

export const selectedFields = () => {
  return (dispatch: Dispatch) => {
    try {
      getFields(getInitialState());
      dispatch(selectField(values))
    } catch (error) {
      dispatch(failedOperations)
    }
  }
}
