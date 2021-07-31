import { Dispatch } from "redux";
import { GlobalState } from "./reducers";

export const createRecord = () => {
  console.log("createRecord", createRecord);
  return (dispatch: Dispatch, getState: () => GlobalState) => {
    const recordId = getState().fields.recordId;
    console.log("recordId", recordId);
    if (recordId !== null) {
      return;
    }
  };
};
