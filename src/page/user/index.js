import React from 'react';
import { Table, Input, Button,Icon } from 'antd';
import { TopWrap,MainWrap } from './style';
import http from '@/utils/http';

const columns = [{
  title: 'ID',
  dataIndex: 'userId',
  key:'userId',
  align:'center'
}, {
  title: '登录名',
  dataIndex: 'nickname',
  key:'nickname',
  align:'center'
}, {
  title: '手机',
  dataIndex: 'username',
  key:'username',
  align:'center'
},{
  title: '角色',
  dataIndex: 'isAdmin',
  key:'isAdmin',
  align:'center',
  //text:当前数据
  //record：当前这条数据的所有信息（这个对象）
  //index：该数据的下标
  render:(text, record, index) => {
    if(text) {
      return <>管理员</>
    }else{
      return <>员工</>
    }
    //console.log(text, record, index);
  }
},{
  title: '加入时间',
  dataIndex: 'beginTime',
  key:'beginTime',
  align:'center'
},{
  title: '状态',
  dataIndex: 'state',
  key:'state',
  align:'center',
  render:(text, record, index) => {
    if(text) {
      return (
        <span className="open">已启用</span>
      )
    }else{
      return (
        <span className="off">已停用</span>
      )
    }
    //console.log(text, record, index);
  }
}
,{
  title: '操作',
  dataIndex: 'action',
  key:'action',
  render:() => {
     return (
       <>
       <Icon type="interation" />
       <Icon type="edit" />
       <Icon type="delete" />
       </>
     )
  },
  align:'center'
}];

class UserPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userList:[]
    }
  }

  render () {
    return (
      <>
        <TopWrap>
          <Input.Search
            placeholder="请输入用户名"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <Button type="primary">搜索</Button>
        </TopWrap>
        <MainWrap>
        <Table
          columns={columns}
          dataSource={this.state.userList}
          bordered
          rowKey="userId"
          pagination={{defaultPageSize:6}}
        />
        </MainWrap>
      </>
    )
  }

  componentWillMount(){
    http.get('/data.json')
      .then(res => {
        this.setState(() => ({
          userList:res
      }))
   })
  }
}

export default UserPage;
