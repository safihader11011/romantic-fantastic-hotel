import React from 'react';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { MdLockOpen } from 'react-icons/md';
import { AntInput, AntSwitch } from 'components/UI/Antd/AntdInputWithFormik';
import Button from 'components/UI/Antd/Button/Button';

import FormWrapper, {
  FieldWrapper,
  SwitchWrapper,
  Label,
} from './SiginFormStyle';

const RenderBasicInfoForm = props => {

  const { values, submitCount, handleSubmit, forgetPasswordLink } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Field
          component={AntInput}
          name="email"
          type="email"
          size="large"
          placeholder="Enter Email..."
          defaultValue={values.email}
          submitCount={submitCount}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="password"
          type="password"
          size="large"
          placeholder="Enter Password..."
          submitCount={submitCount}
          hasFeedback
        />
        <FieldWrapper className="field-container">
          <SwitchWrapper>
            <Field
              component={AntSwitch}
              name="rememberMe"
              submitCount={submitCount}
              defaultValue={values.rememberMe}
            />
            <Label>Remember Me</Label>
          </SwitchWrapper>
          <Link to={forgetPasswordLink}>Forget Password ?</Link>
        </FieldWrapper>

        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          <MdLockOpen />
          Login
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default RenderBasicInfoForm;
