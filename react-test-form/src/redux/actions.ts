import {
  SET_TEXT_FIELD_VALUE,
  SET_NUMBER_FIELD_VALUE,
  SetTextFieldValueType,
  SetNumberFieldValueType,
  getUpdatedDataType,
  GET_UPDATED_DATA,
} from "./types";

export const setTextFieldValue = (
  payload: SetTextFieldValueType["payload"]
): SetTextFieldValueType => ({
  type: SET_TEXT_FIELD_VALUE,
  payload,
});

export const setNumberFieldValue = (
  payload: SetNumberFieldValueType["payload"]
): SetNumberFieldValueType => ({
  type: SET_NUMBER_FIELD_VALUE,
  payload,
});

export const getUpdatedData = (
  payload: getUpdatedDataType["payload"]
): getUpdatedDataType => ({
  type: GET_UPDATED_DATA,
  payload,
});
