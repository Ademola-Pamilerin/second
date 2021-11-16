import AddUser from "./component/Users/addUser";
import Users from './component/Users/user.js';
import {useState} from 'react';
function App() {
  const [users,setUser]=useState([])
  const addUser=(data)=>{
    console.log(data)
      setUser(prevState=>[...prevState,data])
  }
  return (
    <div>
      <AddUser onAddUser={(data)=>addUser(data)}/>
      {users.length<0 && null}
      {users.length>0 &&<Users users={users}/>}
    </div>
  );
}

export default App;
