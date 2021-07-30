import base from "./api";

const updateFields = () => {
  base("Form Submissions").update(
    [
      {
        id: "recAIOKYgeRaXdqJg",
        fields: {
          Title: "some title",
          Description: "some description dsfds fds",
          Notes: "some notes",
        },
      },
      {
        id: "recEqd8TcDrgNoyST",
        fields: {
          Title: "some title",
          Description: "some description",
          Notes: "some notes",
          Budget: 40,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records?.forEach(function (record) {
        console.log(record.get("Description"));
      });
    }
  );
};

export default updateFields;
