import React, {useState, useEffect} from 'react';
import { Table, Button, Modal, Form, Input, message, Spin } from 'antd';
import {connect} from 'dva';
import styles from './Index.scss'

function AddQuestions(props){
  // 设置表头
  const columns = [{
    title: '类型ID',
    dataIndex: 'questions_type_id',
    key: 'id'
  }, {
    title: '类型名称',
    dataIndex: 'questions_type_text',
    key: 'text'
  }, {
    title: '操作',
    dataIndex: '',
    key: 'action'
  }]

  // 创建state，控制窗口的显示何隐藏
  let [showModal, updateModal] = useState(false);

  // 获取所有试题类型
  useEffect(()=>{
    props.getQuestionsType();
  }, []);

  // 添加试题类型
  function handleSubmit(){
    // props.form.validate();
    props.form.validateFields((err, values) => {
      console.log('err...', err);
      if (!err) {
        console.log('Received values of form: ', values);
        props.addQeutionsType({
          text: values.type,
          sort: props.questionsType.length+1
        })
        updateModal(false)
      }else{
        message.error(err.types.errors[0].message);
      }
    });
  }
  console.log(showModal)

  const {getFieldDecorator} = props.form;
  return <div>
    <h1>试题分类</h1>
    <div>
      <Button onClick={()=>updateModal(true)}>+ 添加类型</Button>
      <Table columns={columns} dataSource={props.questionsType} rowKey="questions_type_id"></Table>
    </div>

    <Modal
      visible={showModal}
      title="添加考试类型"
      onCancel={()=>updateModal(false)}
      onOk={()=>handleSubmit()}
      >
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('type', {
            rules: [{ required: true, message: '请输入试题类型!' }],
          })(
            <Input
              placeholder="请输入类型名称"
            />,
          )}
        </Form.Item>
      </Form>
    </Modal>
    {props.global?<div className={styles.loading}><Spin/></div>: null}
  </div>
}

const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    questionsType: state.questions.questionsType,
    global: state.loading.global
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    getQuestionsType: payload=>{
      dispatch({
        type: 'questions/getQuestionsType',
        payload
      })
    },
    addQeutionsType: payload=>{
      dispatch({
        type: 'questions/addQuestionsType',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddQuestions));
