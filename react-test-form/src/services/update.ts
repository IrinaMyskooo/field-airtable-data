import base from "./api";

const updateFields = (recordId: string, fields: any) => {
  base("Form Submissions").update(
    [
      {
        id: recordId,
        fields,
      },
    ],
    function (err: any, records: any): void {
      if (err) {
        console.error(err);
        return;
      }
      records?.forEach(function (record: any) {
        console.log(record.get("Description"));
      });
    }
  );
};

export default updateFields;
