/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import { Form as AntdForm, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form } from 'formik';
import { NormalizedErrorMap } from '@abb/controller';
import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

const FormView = (props: Props & FormikProps<FormValues>) => {
  return (
    <Form style={{ display: "flex" }}>
      <div style={{ width: 400, margin: "auto" }}>
        <Field 
          name="email" 
          placeholder="Email" 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          component={InputField}
        />
        <AntdForm.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Reset password
          </Button>
        </AntdForm.Item>
      </div>
    </Form>
  );
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = props.submit && await props.submit(values);
    if (errors) setErrors(errors);
  }
})(FormView);
