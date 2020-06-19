/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import * as Antd from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@abb/common';
import { InputField } from "../../shared/InputField";

const { Form: AntdForm, Button, Checkbox } = Antd;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues > | null>;
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
        <Field 
          name="password" 
          type="password"
          placeholder="Password" 
          prefix={<LockOutlined className="site-form-item-icon" />} 
          component={InputField}
        />
        <AntdForm.Item>
          <AntdForm.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </AntdForm.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </AntdForm.Item>
        <AntdForm.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button> Or <a href="">login now!</a>
        </AntdForm.Item>
      </div>
    </Form>
  );
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = props.submit && await props.submit(values);
    if (errors) setErrors(errors);
  }
})(FormView);
