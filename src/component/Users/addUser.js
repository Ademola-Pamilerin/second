import { useState } from 'react';
import Shared from '../shared';
import Button from '../UI/Button/button';
import Card from "../UI/card/card";
import classes from "./addUser.module.css"
import Error from '../UI/Error/Error';
const AddUser = (props) => {
  const [data,setData]=useState({
    name:"",
    age:""
  });
  const [error,setError]=useState({
    isError:false,
    message:""
  }) 
  const AddUserHandler = (event) => {
    event.preventDefault();
    if(data.name.length === 0||data.age.length===0){
      setError({isError:true,message:"All field is required "})
      return ;
    }
    if(+data.age < 1){
      setError({isError:true,message:"name must be greater than 1"})
      return ;
    }
    setError({isError:false,message:""})
    props.onAddUser(data)
    setData({
      name:"",
      age:""
    })
  };
  const changeName=(event)=>{
    setData((prevState)=>Shared(prevState,{name:event.target.value}))
  }
  const changeAge=(event)=>{
    setData(prevState=>Shared(prevState,{age:event.target.value}))
  }
  const closeDrop=()=>{
    setError({isError:false,message:""});
  }
  return (<div>
    {error.isError&&<Error title="Error" message={error.message} clicked={closeDrop}/>}
    <Card className={classes.input}>
      <form onSubmit={(event) => AddUserHandler(event)} >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={data.name} onChange={(event)=>changeName(event)}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={data.age} onChange={(event)=>changeAge(event)}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
