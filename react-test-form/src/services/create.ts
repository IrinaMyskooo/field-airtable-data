import base from "./api";

const createFields = () => {
  base("Form Submissions").create(
    [
      {
        fields: {
          Title: "some title",
          Description: "some description dsfds fds",
          Notes: "some notes",
        },
      },
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
      records.forEach(function (record: any) {
        console.log(record.getId());
      });
    }
  );
};

export default createFields;
