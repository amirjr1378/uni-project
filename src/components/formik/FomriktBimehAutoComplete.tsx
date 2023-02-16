import SelectWithSearch, { SelectWithSearchProps } from "../SelectWithSearch";
import { useField } from "formik";
import BaseApi from "../../api/Api";
import FetchData from "../FetchData";
import BaseSelect, { SelectPropTypes } from "../base/base-select";

export type FormikSelectBimehPrp = Omit<
  SelectPropTypes,
  "options" | "onChange" | "displayValue" | "value"
> & {
  name: string;
  value?: any;
};

const FomrikBimehAutoComplete = (prp: FormikSelectBimehPrp) => {
  const { value, name, ...rest } = prp;

  const [field, , meta] = useField({ name: name, value: value });

  const fetch = () => {
    return BaseApi?.getAllInsurances.getAllInsurancesList().then((res) => {
      return res?.data?.map((node) => ({
        label: node?.title || "",
        value: node?.id || "",
      }));
    });
  };

  return (
    <FetchData request={fetch} deps={[]}>
      {(opts) => {
        return (
          <BaseSelect
            {...rest}
            // value={field?.value}
            onSelect={(val, node) => {
              console.log("adf", val);
              meta.setValue(val);
            }}
            options={opts || []}
          />
        );
      }}
    </FetchData>
  );
};
export default FomrikBimehAutoComplete;
