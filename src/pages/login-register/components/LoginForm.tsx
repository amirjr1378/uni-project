import { Formik, FormikHelpers, FormikProps } from "formik";
import FormikInput from "../../../components/formik/FomrikInput";
import BaseButton from "../../../components/base/BaseButton";
import FormikErrorMessage from "../../../components/base/FormikErrorMessage";
import { useState } from "react";
import { FormikLoginFormType, UserType } from "../type";
import validateMessages from "../../../components/formik/messages";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BaseApi from "../../../api/Api";
import { useCookies } from "react-cookie";
import RegisterDoctorForm from "./RegisterDoctorForm";

type Props = {
  userType?: UserType;
};

const LoginForm = (props: Props) => {
  const { userType } = props;

  const [cookies, setCookies] = useCookies();
  const [isUserNew, setIsUserNew] = useState<boolean>(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState<boolean>(false);

  const [isShowDoctorForm, setIsShowDoctorForm] = useState<boolean>(false);
  const navigate = useNavigate();

  const onRegister = (formikHelpers: FormikProps<FormikLoginFormType>) => {
    const { values } = formikHelpers;

    if (userType === UserType.PATIENT) {
      setIsShowConfirmPass(true);
      BaseApi.register
        .registerCreate({
          password: values?.password as string,
          confirmPassword: values?.confirmPassword as string,
          username: values?.userName as string,
        })
        .then((res) => {
          console.log("res", res);
          toast.success("ثبت نام با موفقیت انجام شد");
          formikHelpers.resetForm();
        })
        .catch((res) => toast.error(res.error));
    } else {
      navigate("/register-doc");
      setIsShowDoctorForm(true);
    }
  };
  const validate = (values: FormikLoginFormType) => {
    const required: (keyof typeof values)[] = [
      "password",
      "confirmPassword",
      "userName",
    ];
    let errors: any = {};

    required.forEach((node) => {
      if (!values[node]) errors[node] = validateMessages.required;
    });
    if (!isUserNew) delete errors.confirmPassword;

    if (
      isUserNew &&
      values?.confirmPassword &&
      values.password !== values?.confirmPassword
    )
      errors = { ...errors, confirmPassword: "رمز ها با هم مطابقت ندارند" };
    console.log("errors", errors);
    return errors;
  };

  const onLogin = (
    values: FormikLoginFormType,
    formikHelpers: FormikHelpers<FormikLoginFormType>
  ) => {
    BaseApi.login
      .loginCreate({
        password: String(values?.password),
        userName: String(values?.userName),
      })
      .then((res) => {
        formikHelpers.resetForm();
        setCookies("Auth", res?.data);
        console.log("res", res?.data);
        navigate("/");
      })
      .catch((res) => toast.error(res.error));
  };

  return (
    <Formik<FormikLoginFormType>
      validateOnMount={false}
      validateOnBlur={false}
      initialValues={{
        userName: "",
        password: "",
        confirmPassword: "",
        type: "login",
      }}
      onSubmit={onLogin}
      validate={validate}
    >
      {(helpers) => {
        const { values, setFieldValue, handleSubmit } = helpers;

        return (
          <div className={"w-full bg-white p-7 space-y-6 min-h-[400px]"}>
            <div>
              <FormikInput
                name={"userName"}
                textClassName={"outline-0"}
                inputClassName={"border-0 hover:border-0 border-b-7"}
                labelProps={{
                  variant: "salesLabel",
                  required: true,
                }}
                // autoFocus
                tabIndex={1}
                label={"نام کاربری"}
              />
              <FormikErrorMessage checkBlur={false} name={"userName"} />
            </div>
            <div>
              <FormikInput
                name={"password"}
                labelProps={{
                  variant: "salesLabel",
                  required: true,
                }}
                inputClassName={"border-0 hover:border-0 border-b-7"}
                type={"password"}
                tabIndex={2}
                textClassName={"outline-0"}
                label={"رمز"}
              />
              <FormikErrorMessage name={"password"} checkBlur={false} />
            </div>
            {isShowConfirmPass ? (
              <div>
                <FormikInput
                  name={"confirmPassword"}
                  labelProps={{
                    variant: "salesLabel",
                    required: true,
                  }}
                  inputClassName={"border-0 hover:border-0 border-b-7"}
                  type={"password"}
                  tabIndex={2}
                  textClassName={"outline-0"}
                  label={"تکرار رمز"}
                />
                <FormikErrorMessage name={"confirmPassword"} />
              </div>
            ) : null}
            {/*---*/}
            <div className={" space-y-7 pt-5"}>
              <BaseButton
                type={"button"}
                color={"greenBlue"}
                className={"w-full"}
                onClick={() => {
                  setFieldValue("type", "login");

                  setIsUserNew(false);
                  handleSubmit();
                }}
              >
                ورود
              </BaseButton>{" "}
              <BaseButton
                type={"button"}
                color={"greenBlue"}
                className={"w-full"}
                onClick={() => {
                  setFieldValue("type", "register");
                  if (!isUserNew) setIsUserNew(true);
                  if (onRegister) onRegister(helpers);
                }}
              >
                ثبت نام
              </BaseButton>
            </div>
            <RegisterDoctorForm
              onClose={() => setIsShowDoctorForm(false)}
              onSubmit={() => setIsShowDoctorForm(false)}
              visible={isShowDoctorForm}
            />
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
