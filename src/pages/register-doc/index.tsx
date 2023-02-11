import FormikInput from "../../components/formik/FomrikInput";
import FormikErrorMessage from "../../components/base/FormikErrorMessage";
import FormikDatePicker from "../../components/formik/FormikDatePicker";
import { Gender, RegisterDoctorDto } from "../../api/ApiGlobals";
import BaseApi from "../../api/Api";
import { Formik } from "formik";

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
          <fieldset
            className={
              "border border-1 rounded-4 w-full flex flex-wrap gap-x-20  gap-y-[30px] justify-around     overflow-visible box-content"
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
              <FormikDatePicker name={"birthDate"} />
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
                label={"نام"}
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
                label={"نام"}
              />
              <FormikErrorMessage name={"email"} />
            </div>
          </fieldset>
        );
      }}
    </Formik>
  );
};
export default RegisterDoc;
