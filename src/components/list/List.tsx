import  { Component } from 'react'
import "./list.css"
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/ChatList'


export class List extends Component {
  render() {
    return (
      <div className='list'>
        <UserInfo/>
         <ChatList/>
      </div>
    )
  }
}

export default List