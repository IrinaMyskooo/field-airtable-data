import { Action, State, Field } from "../types";
import {SET_NUMBER_FIELD_VALUE, SET_TEXT_FIELD_VALUE, SELECT_FIELD, CREATE_RECORD_SUCCESS, UPDATE_FIELD} from '../constants';

export const getInitialState = (): Field[] => [
  {
    type: 'text',
    id: `title`,
    name: `Title`,
    value: 'some title'
  },
  {
    type: 'text',
    id: `description`,
    name: `Description`,
    value: 'some description'
  },
  {
    type: 'text',
    id: `notes`,
    name: `Notes`,
    value: 'some notes'
  },
  {
    type: 'number',
    id: `budget`,
    name: `Budget`,
    value: 40
  }
];
export const initialState: State = {
  // fieldData: [
  //   {
  //     type: "text",
  //     id: `title`,
  //     name: `Title`,
  //     value: "some title",
  //   },
  //   {
  //     type: "text",
  //     id: `description`,
  //     name: `Description`,
  //     value: "some description",
  //   },
  //   {
  //     type: "text",
  //     id: `notes`,
  //     name: `Notes`,
  //     value: "some notes",
  //   },
  //   {
  //     type: "number",
  //     id: `budget`,
  //     name: `Budget`,
  //     value: 40,
  //   },
  //   {
  //     type: "disabled",
  //     id: `doubleBudget`,
  //     name: `Double Budget`,
  //     value: 0,
  //   },
  // ],
  recordId: null,
  isLoading: false,
  fieldData: getInitialState(),
};

/* istanbul ignore next */
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_NUMBER_FIELD_VALUE:
    case SET_TEXT_FIELD_VALUE: {
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
    case SELECT_FIELD: 
      return {
  ...state,
  fieldData: action.payload,
}
    case CREATE_RECORD_SUCCESS: 
      return {
        ...state,
        fieldData: { ...state.fieldData, ...action.payload}
      }; 
    case UPDATE_FIELD: 
    return {
      ...state,
      fieldData: state.fieldData.map((field) => 
           field.id === action.payload.fieldId ? action.payload : field, 
      )
    }
    
        default:
      return state;
  }
};

export default reducer;
