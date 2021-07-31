import base from "./api";

const createFields = () => {
  base("Form Submissions").create(
    [
      {
        fields: {
          Title: "some title",
          Description: "some description",
          Notes: "some notes",
          Budget: 40,
        },
      },
    ],
    { typecast: true },
    function (err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("CreateField", records);
      //   records(function (record: any) {
      //     // console.log("CreateField",record);
      //   });
    }
  );
};

export default createFields;
