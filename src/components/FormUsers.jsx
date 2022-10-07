import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues ={
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo}) => {

    // console.log(updateInfo);

    useEffect(() => {
        if(updateInfo){
            reset(updateInfo)
        }
    }, [updateInfo])
    

    const {handleSubmit, register, reset} = useForm()

    const submit = data => {
        if(updateInfo){
            // Update
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else{
            // Create
            createNewUser(data)
        }
        reset(defaultValues)
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>{updateInfo ? 'Edit User': 'New User'}</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email')}/>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password')}/>
        </div>

        <div>
            <label htmlFor="firt_name">First Name</label>
            <input type="text" id="firt_name" {...register('first_name')}/>
        </div>
        
        <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" {...register('last_name')}/>
        </div>

        <div>
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" {...register('birthday')}/>
        </div>
        <button>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers