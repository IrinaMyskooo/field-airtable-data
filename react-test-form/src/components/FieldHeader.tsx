import React from "react";

type Props = {
  name: string;
};

const FieldHeader: React.FC<Props> = ({ name }) => {
  return <h4 style={{ marginBottom: 16 }}>{name}</h4>;
};

export default FieldHeader;
