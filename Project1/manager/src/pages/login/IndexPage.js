import React, {useState, useEffect}  from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './IndexPage.scss';

function LoginPage(props) {
  console.log('props...', props);

  // 模拟componentDidMount
  useEffect(()=>{
    console.log('执行useEffect');
    props.login({user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!'});
  }, [])

  // 处理表单提交
  let handleSubmit = ()=>{
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({user_name: values.username, user_pwd: values.password});
        console.log('Received values of form: ', values);
      }
    });
  }

  // 从Form高阶组件中拿到校验组件
  const { getFieldDecorator } = props.form;

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <p className={styles.title}>登陆页面</p>
      <Form.Item>
        {getFieldDecorator('username', {
          validateTrigger: 'onBlur',
          rules: [
            { required: true, message: 'Please input your username!' },
            { min: 6, max: 15, message: 'Please input your correct username!' }
          ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          validateTrigger: 'onBlur',
          rules: [
            { required: true, message: 'Please input your password!' },
            { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: 'Please input your correct password!' }
          ],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
       <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  )
}

LoginPage.propTypes = {
};

const mapStateToProps = state=>{
  return {...state.login}
}
const mapDispatchToPorps = dispatch=>{
  return {
    login: payload=>{
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPorps)(Form.create()(LoginPage));
