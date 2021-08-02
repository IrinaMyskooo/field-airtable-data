import {
  SetTextFieldValueType,
  SetNumberFieldValueType,
  UpdateFieldType,
  createRecordSucceededType,
  SelectFieldData, 
  failedOperationsType
} from "./types";
import {SET_NUMBER_FIELD_VALUE, SET_TEXT_FIELD_VALUE, SELECT_FIELD, CREATE_RECORD_SUCCESS, UPDATE_FIELD, CREATE_RECORD_FAILED} from './constants';

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

export const updateField = (
  payload: UpdateFieldType["payload"]
): UpdateFieldType => ({
  type: UPDATE_FIELD,
  payload,
});

export const createRecordSucceeded = (
  payload: createRecordSucceededType["payload"]
  ): createRecordSucceededType => ({
    type: CREATE_RECORD_SUCCESS,
    payload,
  });

export const selectField = (
  payload: SelectFieldData["payload"])
  : SelectFieldData => ({
    type: SELECT_FIELD,
    payload,
  });

export const failedOperations = (
  payload: failedOperationsType["payload"])
  : failedOperationsType => ({
    type: CREATE_RECORD_FAILED,
    payload: new Error("Error"),
    
  })
