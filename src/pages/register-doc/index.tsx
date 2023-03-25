import FormikInput from "../../components/formik/FomrikInput";
import FormikErrorMessage from "../../components/base/FormikErrorMessage";
import FormikDatePicker from "../../components/formik/FormikDatePicker";
import { RegisterDoctorDto } from "../../api/ApiGlobals";
import BaseApi from "../../api/Api";
import { Formik } from "formik";
import FormikSelect from "../../components/formik/Select";
import FormikCategoryAutoComplete from "../../components/formik/FormikCategoryAutoComplete";
import FormikCityAutoComplete from "../../components/formik/FormikCityAutoComplete";
import FomrikBimehAutoComplete from "../../components/formik/FomriktBimehAutoComplete";
import FormikTextArea from "../../components/formik/TextArea";
import BaseButton from "../../components/base/BaseButton";
import { LabelValue } from "../../global-types/LabelValue";
import Loading from "../../loading";
import { toast } from "react-toastify";
import useLocalStorage from "use-local-storage";
import { omit } from "lodash";
import { useNavigate } from "react-router-dom";

const genderOptions = [
  { label: "خانوم", value: 1 },
  { label: "آقا", value: 2 },
];

type RegisterFormikType = Omit<
  RegisterDoctorDto,
  "categoryId" | "insuranceIds"
> & {
  category?: LabelValue;
  insurances: LabelValue[];
};

const RegisterDoc = () => {
  const [token, setToken] = useLocalStorage("token", undefined);
  const navigate = useNavigate();

  const registerDoc = (data: RegisterFormikType) => {
    console.log("sdsdsd", data);
    const payload: RegisterDoctorDto = {
      ...omit(data, "insurances", "category"),
      categoryId: data?.category?.value as number,
      insuranceIds:
        data?.insurances?.map((node) => node?.value as number) || [],
    };

    delete payload.insuranceIds;

    const query: any = {
      firstName: "Mohammad",
      lastName: "Zarei",
      address: "درب اول",
      birthDate: "1999-03-10T18:09:04.788Z",
      nationalCode: "2282824229",
      gender: 1,
      categoryId: 1,
      email: "mohammad.zr1378@gmail.com",
      mobileNumber: "09174235360",
      password: "123",
      confirmPassword: "123",
      city: "شیراز",
      shortDescription: "آثممخ فاهس هس ئغ ذهخ",
      insuranceIds: [1],
    };
    return BaseApi.registerDoctor.registerDoctorCreate(payload).then((res) => {
      console.log("token", res?.data);
      toast.success("اکانت شما با موفقیت ساخته شد");
      navigate("/login");
      return res?.data;
    });
  };

  return (
    <Formik<RegisterFormikType>
      initialValues={{
        insurances: [],
        nationalCode: "",
        mobileNumber: "",
        lastName: "",
        firstName: "",
        confirmPassword: "",
        password: "",
        gender: 1,
        email: "",
        city: "",
        address: "",
        birthDate: "",
        shortDescription: "",
      }}
      onSubmit={registerDoc}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => {
        console.log("adf", errors, touched);
        return (
          <div className={"mb-9 bg-white p-5 rounded-3"}>
            <Loading visible={isSubmitting} />
            <fieldset
              className={
                "border border-1 rounded-4 m-5 px-6 py-5 flex flex-wrap gap-x-20 gap-y-[30px] overflow-visible box-content "
              }
            >
              <legend>اطلاعات کاربری</legend>
              <div>
                <FormikInput
                  name={"firstName"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px] h-[42px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  tabIndex={1}
                  autoFocus
                  label={"نام"}
                />
                <FormikErrorMessage name={"firstName"} />
              </div>{" "}
              <div>
                <FormikInput
                  name={"lastName"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  tabIndex={2}
                  label={"نام خانوادگی"}
                />
                <FormikErrorMessage name={"lastName"} />
              </div>{" "}
              <div>
                <FormikDatePicker
                  submitOnChange
                  tabIndex={3}
                  name={"birthDate"}
                  label={"تاریخ تولد"}
                  className={"w-[312px] h-[42px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"birthDate"} />
              </div>{" "}
              <div>
                <FormikInput
                  name={"mobileNumber"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  tabIndex={4}
                  label={"شماره تلفن مطب"}
                />
                <FormikErrorMessage name={"mobileNumber"} />
              </div>{" "}
              <div>
                <FormikInput
                  name={"email"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  tabIndex={5}
                  label={"ایمیل"}
                />
                <FormikErrorMessage name={"email"} />
              </div>{" "}
              <div>
                <FormikInput
                  name={"nationalCode"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  tabIndex={6}
                  label={"کد ملی"}
                />
                <FormikErrorMessage name={"nationalCode"} />
              </div>
              <div>
                <FormikSelect
                  label={"جنسیت"}
                  tabIndex={7}
                  options={genderOptions}
                  name={"gender"}
                  className={"w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"gender"} />
              </div>
              <div>
                <FormikCategoryAutoComplete
                  label={"تخصص"}
                  tabIndex={8}
                  name={"category"}
                  textClassName={"w-[312px] rounded-2 !pr-[50px] border-1"}
                  comboBoxContainerProps={{
                    className: "border-1 rounded-2 shadow-sm ",
                  }}
                  className={" rounded-2  shadow-sm"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"categoryId"} />
              </div>{" "}
              <div>
                <FormikInput
                  label={"کلمه عبور"}
                  name={"password"}
                  tabIndex={9}
                  textClassName={"outline-0"}
                  inputClassName={"w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"password"} />
              </div>{" "}
              <div>
                <FormikInput
                  label={"تکرار کلمه عبور"}
                  name={"confirmPassword"}
                  textClassName={"outline-0 "}
                  inputClassName={"w-[312px]"}
                  tabIndex={10}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"confirmPassword"} />
              </div>{" "}
              <div>
                <FormikInput
                  label={"شهر"}
                  name={"city"}
                  textClassName={"outline-0 "}
                  tabIndex={11}
                  inputClassName={"w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"city"} />
              </div>
              <div>
                <FomrikBimehAutoComplete
                  multiple
                  label={"بیمه های طرف قرارداد "}
                  className={"w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  name={"insurances"}
                  tabIndex={12}
                />
                <FormikErrorMessage name={"insurances"} />
              </div>
              <FormikTextArea
                name={"address"}
                className={"w-[500px]"}
                inputClassName={"min-h-[300px] p-5"}
                placeholder={"آدرس دقیق"}
                tabIndex={13}
              />{" "}
              <FormikTextArea
                name={"shortDescription"}
                className={"w-[500px]"}
                inputClassName={"min-h-[300px] p-5"}
                placeholder={"خلاصه رزومه خود را بنویسید"}
                tabIndex={14}
              />
            </fieldset>
            <div className={"flex justify-end px-7"}>
              <BaseButton
                size={"md"}
                color={"blue"}
                type={"submit"}
                onClick={() => handleSubmit()}
              >
                ثبت
              </BaseButton>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default RegisterDoc;
