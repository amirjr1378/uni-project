import { Formik } from "formik";
import FormikInput from "../../../components/formik/FomrikInput";
import FormikErrorMessage from "../../../components/base/FormikErrorMessage";
import Api from "../../../api/Api";
import { RegisterDoctorDto } from "../../../api/ApiGlobals";
import Modal, { ModalProps } from "../../../components/base/Modal";

const RegisterDoctorForm = (
  props: Pick<ModalProps, "visible" | "onClose" | "onSubmit">
) => {
  const { visible, onClose, onSubmit } = props;
  const registerDoc = (data: RegisterDoctorDto) => {
    Api.registerDoctor.registerDoctorCreate(data).then((res) => res?.data);
  };
  return (
    <Formik<RegisterDoctorDto>
      onSubmit={registerDoc}
      initialValues={{
        city: "",
        password: "",
        email: "",
        gender: 1,
        firstName: "",
        confirmPassword: "",
        lastName: "",
        mobileNumber: "",
        nationalCode: "",
      }}
    >
      {() => {
        return (
          <Modal
            visible={visible}
            onClose={onClose}
            className={"p-7 !box-content !overflow-visible"}
            closable={false}
          >
            <div
              className={
                "border border-1 rounded-4 max-w-[900px] flex flex-wrap gap-x-20 gap-y-[30px] py-5 justify-center overflow-visible box-content"
              }
            >
              <div>
                <FormikInput
                  name={"firstName"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
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
                <FormikErrorMessage name={"birthDate"} />
              </div>{" "}
              <div>
                <FormikInput
                  name={"firstName"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
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
                  name={"firstName"}
                  textClassName={"outline-0"}
                  inputClassName={" w-[312px]"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  tabIndex={1}
                  label={"نام"}
                />
                <FormikErrorMessage name={"firstName"} />
              </div>
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};
export default RegisterDoctorForm;
