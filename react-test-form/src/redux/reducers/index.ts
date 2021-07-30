import { combineReducers } from "redux";
import { State as FieldsState } from "../types";
import fields from "./fields";

export type GlobalState = {
  fields: FieldsState;
};

export default combineReducers({
  fields,
});
