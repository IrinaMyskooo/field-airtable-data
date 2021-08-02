import base from "./api";
import {Field} from '../redux/types';

const createFields = (fields: Field) => {
  base("Form Submissions").create(
    [
      {
        "fields": {
          "Title": fields.name,
          "Description": fields.value,
          "Notes": fields.value,
          "Budget": fields.value
        }
       },
       ],
    { typecast: true },
    function (err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("CreateField RECORDS", records);
      //   records(function (record: any) {
      //     // console.log("CreateField",record);
      //   });
    }
  );
};

export default createFields;
