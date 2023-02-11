import { Formik } from "formik";
import FormikInput from "../../../components/formik/FomrikInput";
import FormikErrorMessage from "../../../components/base/FormikErrorMessage";
import Modal, { ModalProps } from "../../../components/base/Modal";

type Props = Pick<ModalProps, "visible" | "onClose">;

const RegisterDoctor = (props: Props) => {
  const { visible, onClose } = props;

  return (
    <Formik initialValues={{}} onSubmit={() => console.log()}>
      {() => {
        return (
          <Modal
            visible={visible}
            closable={false}
            onSubmit={() => console.log("asdf")}
            onClose={onClose}
            className={"flex"}
          >
            <div>
              <FormikInput
                name={"firstName"}
                inputClassName={"border-0 hover:border-0 border-b-7"}
                labelProps={{
                  variant: "mini-caption",
                  required: true,
                }}
              />
              <FormikErrorMessage name={"firstName"} />
            </div>
            <div>
              <FormikInput
                name={"lastName"}
                inputClassName={"border-0 hover:border-0 border-b-7"}
                labelProps={{
                  variant: "salesLabel",
                  required: true,
                }}
              />
              <FormikErrorMessage name={"lastName"} />
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};
export default RegisterDoctor;
