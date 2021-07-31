import base from "./api";

const updateFields = (recordId, fields) => {
  base("Form Submissions").update(
    [
      {
        id: recordId,
        fields,
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
