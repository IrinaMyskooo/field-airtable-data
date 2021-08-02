import base from "./api";
import {Field} from '../redux/types';
// import {useFieldData} from '../useFieldData';

// {
//   "Title": "title",
//   "Description": "description",
//   "Notes": "notes",
//   "Buget": 40,
// }
const createFields = async (fields: Field) => {
  console.log('fields', fields);
  
  const result = await base("Form Submissions").create(
    [
      {
          "Title": "title",
          "Description": "description",
          "Notes": "notes",
          "Buget": 40,
        }
    ],
    { typecast: true }
  );

  return result;
};

export default createFields;
