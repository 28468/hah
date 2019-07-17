import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'dva/router';
import {injectIntl} from 'react-intl';

import AddQuestions from '@/pages/index/questions/addQuestions/Index';
import styles from './Index.scss';

// 引入菜单列表
import MenuList from '@/components/Menu';
const { Header, Sider, Content } = Layout;

function MainPage(props){
  return  <Layout className={styles.layout}>
    {/* 头部 */}
    <Header>Header
      <button onClick={()=>props.changeLocale(props.intl.locale=='en'?'zh':'en')}>{props.intl.locale=='en'?'英文':'中文'}</button>
    </Header>
    <Layout>
      {/* 侧边栏 */}
      <Sider>
        <MenuList />
      </Sider>
      {/* 二级路由区域 */}
      <Content>
        <Switch>
          <Redirect from="/main" exact to="/main/addQuestions"/>
          <Route path="/main/addQuestions" component={AddQuestions} />
          <Route path="/main/viewQuestions" component={null} />
          <Route path="/main/classifyQuestions" component={null} />
        </Switch>
      </Content>
    </Layout>
  </Layout>
}

const mapDispatchToProps = dispatch=>{
  return {
    changeLocale: payload=>{
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    }
  }
}
export default injectIntl(connect(null, mapDispatchToProps)(MainPage));
