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

  return (
    <Form className="login-form">
      <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
      </Form.Item>
      <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
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

export default connect(mapStateToProps, mapDispatchToPorps)(LoginPage);
