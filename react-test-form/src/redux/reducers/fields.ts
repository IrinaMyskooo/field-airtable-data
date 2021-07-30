import { Action, State } from "../types";

export const initialState: State = {
  fieldData: [
    {
      type: "text",
      id: `title`,
      name: `Title`,
      value: "some title",
    },
    {
      type: "text",
      id: `description`,
      name: `Description`,
      value: "some description",
    },
    {
      type: "text",
      id: `notes`,
      name: `Notes`,
      value: "some notes",
    },
    {
      type: "number",
      id: `budget`,
      name: `Budget`,
      value: 40,
    },
    {
      type: "disabled",
      id: `doubleBudget`,
      name: `Double Budget`,
      value: 0,
    },
  ],
  isLoading: false,
};

/* istanbul ignore next */
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SET_NUMBER_FIELD_VALUE":
    case "SET_TEXT_FIELD_VALUE": {
      return {
        ...state,
        fieldData: state.fieldData.map((field) => {
          if (field.id === action.payload.fieldId) {
            return {
              ...field,
              value: action.payload.value,
            };
          } else {
            return field;
          }
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
