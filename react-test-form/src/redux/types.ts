import {SET_NUMBER_FIELD_VALUE, SET_TEXT_FIELD_VALUE, CREATE_RECORD_SUCCESS, UPDATE_FIELD, CREATE_RECORD_FAILED} from './constants';

export type Field =
  | {
      type: "text";
      id: string;
      name: string;
      value: string;
    }
  | {
      type: "number";
      id: string;
      name: string;
      value: number;
    }
  | {
      type: "disabled";
      id: string;
      name: string;
      value: number;
    };

export type State = {
  fieldData: Field[];
  isLoading: boolean;
  recordId: string | null;
};

export type SetTextFieldValueType = {
  type: typeof SET_TEXT_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: string;
  };
};

export type SetNumberFieldValueType = {
  type: typeof SET_NUMBER_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: number;
  };
};

export type UpdateFieldType = {
  type: typeof UPDATE_FIELD;
  payload: {
    fieldId: string;
    value: number | string;
  };
};

export type createRecordSucceededType = {
  type: typeof CREATE_RECORD_SUCCESS;
  payload: {
    recordId: string;
    fields: Field[];
   }
}

export type failedOperationsType = {
  type: typeof CREATE_RECORD_FAILED;
  payload: any;
}

export type Action = SetTextFieldValueType | SetNumberFieldValueType | UpdateFieldType | createRecordSucceededType;
