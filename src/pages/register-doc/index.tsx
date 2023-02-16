import FormikInput from "../../components/formik/FomrikInput";
import FormikErrorMessage from "../../components/base/FormikErrorMessage";
import FormikDatePicker from "../../components/formik/FormikDatePicker";
import { Gender, RegisterDoctorDto } from "../../api/ApiGlobals";
import BaseApi from "../../api/Api";
import { Formik } from "formik";
import FormikSelect from "../../components/formik/Select";
import FormikCategoryAutoComplete from "../../components/formik/FormikCategoryAutoComplete";
import FormikCityAutoComplete from "../../components/formik/FormikCityAutoComplete";
import FomrikBimehAutoComplete from "../../components/formik/FomriktBimehAutoComplete";
import FormikTextArea from "../../components/formik/TextArea";
import BaseButton from "../../components/base/BaseButton";

const genderOptions = [
  { label: "خانوم", value: 1 },
  { label: "آقا", value: 2 },
];

const RegisterDoc = () => {
  const registerDoc = (data: RegisterDoctorDto) => {
    BaseApi.registerDoctor.registerDoctorCreate(data).then((res) => res?.data);
  };

  return (
    <Formik<RegisterDoctorDto>
      initialValues={{
        nationalCode: "",
        mobileNumber: "",
        lastName: "",
        firstName: "",
        confirmPassword: "",
        password: "",
        gender: Gender.Value1,
        email: "",
        city: "",
        address: "",
        birthDate: "",
        categoryId: 0,
        insuranceIds: [],
        shortDescription: "",
      }}
      onSubmit={registerDoc}
    >
      {() => {
        return (
          <div className={"mb-9 bg-white p-5 rounded-3"}>
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
                  tabIndex={1}
                  label={"نام خانوادگی"}
                />
                <FormikErrorMessage name={"lastName"} />
              </div>{" "}
              <div>
                <FormikDatePicker
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
                  tabIndex={1}
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
                  tabIndex={1}
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
                  tabIndex={1}
                  label={"کد ملی"}
                />
                <FormikErrorMessage name={"nationalCode"} />
              </div>
              <div>
                <FormikSelect
                  label={"جنسیت"}
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
                  name={"categoryId"}
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
                  label={"رمز ورود"}
                  name={"password"}
                  textClassName={"rounded-2 !pr-[50px]"}
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
                  label={"تکرار رمز ورود"}
                  name={"confirmPassword"}
                  textClassName={"rounded-2 !pr-[50px]"}
                  inputClassName={"w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                />
                <FormikErrorMessage name={"confirmPassword"} />
              </div>{" "}
              <div>
                <FormikCityAutoComplete
                  label={"شهر"}
                  textClassName={"rounded-2"}
                  comboBoxContainerProps={{
                    className: "border-1 rounded-2 w-[312px] shadow-sm",
                  }}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  name={"city"}
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
                  name={"insuranceIds"}
                />
                <FormikErrorMessage name={"insuranceIds"} />
              </div>
              <FormikTextArea
                name={"description"}
                className={"w-[500px]"}
                inputClassName={"min-h-[300px] p-5"}
                placeholder={"خلاصه رزومه خود را بنویسید"}
              />
            </fieldset>
            <div className={"flex justify-end px-7"}>
              <BaseButton size={"md"} color={"blue"}>
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
