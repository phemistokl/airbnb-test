/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from "react";
import { Form as AntdForm, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@abb/common';
import { NormalizedErrorMap } from '@abb/controller';
import { InputField } from "../../shared/InputField";
import { Link } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
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
          <Link to="/forgot-password">
            Forgot password
          </Link>
        </AntdForm.Item>
        <AntdForm.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button> Or <Link to="/login">login now!</Link>
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
