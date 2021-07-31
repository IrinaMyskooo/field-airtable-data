export const SET_TEXT_FIELD_VALUE = "SET_TEXT_FIELD_VALUE" as const;
export const SET_NUMBER_FIELD_VALUE = "SET_NUMBER_FIELD_VALUE" as const;
export const GET_UPDATED_DATA = "GET_UPDATED_DATA" as const;

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
    value: number;
  };
};

export type SetNumberFieldValueType = {
  type: typeof SET_NUMBER_FIELD_VALUE;
  payload: {
    fieldId: string;
    value: number;
  };
};

export type getUpdatedDataType = {
  type: typeof GET_UPDATED_DATA;
  payload: {
    fieldId: string;
    value: number;
  };
};

export type Action = SetTextFieldValueType | SetNumberFieldValueType;
