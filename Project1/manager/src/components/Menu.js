import React from 'react';
import { Menu, Icon } from 'antd';
import {NavLink} from 'dva/router';
import {injectIntl} from 'react-intl';

const { SubMenu } = Menu;

const MenuList = props => {
  console.log('menu props...', props);
  return (
    <Menu
    theme="dark"
    defaultOpenKeys={['sub1']}
    defaultSelectedKeys={["1"]}
    mode="inline"
  >
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="mail" />
          <span>{props.intl.formatMessage({id: 'router.questions'})}</span>
        </span>
      }
    >
      <Menu.Item key="1">
        <NavLink to="/main/addQuestions">{props.intl.formatMessage({id: 'router.questions.add'})}</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/main/viewQuestions">{props.intl.formatMessage({id: 'router.questions.view'})}</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/main/classifyQuestions">{props.intl.formatMessage({id: 'router.questions.type'})}</NavLink>
      </Menu.Item>
    </SubMenu>
  </Menu>
  );
};

export default injectIntl(MenuList);
