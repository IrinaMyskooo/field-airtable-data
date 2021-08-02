import base from "./api";

const updateFields = async (recordId: string, fields: any) => {
 const result = await base("Form Submissions").update(
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
  return result;
};

export default updateFields;
