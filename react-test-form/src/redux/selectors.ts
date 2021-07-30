import { useSelector } from "react-redux";
import type { GlobalState } from "./reducers";
import type { Field } from "./types";

/* istanbul ignore next */
export const useFields = (): Field[] => {
  const fieldData: Field[] = useSelector(
    (state: GlobalState) => state.fields.fieldData
  );
  return fieldData;
};

export const useALoading = (): boolean => {
  // const isLoading:
  return useSelector((state: GlobalState) => state.fields.isLoading);
};
