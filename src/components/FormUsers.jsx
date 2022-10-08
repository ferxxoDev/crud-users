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
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i className='form__x fa-solid fa-xmark'></i>
        <h2 className='form__title'>{updateInfo ? 'Edit User': 'New User'}</h2>
        <div className='form__div'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form_input' type="email" id="email" {...register('email')}/>
        </div>

        <div className='form__div'>
            <label className='form__label' htmlFor="password">Password</label>
            <input className='form_input' type="password" id="password" {...register('password')}/>
        </div>

        <div className='form__div'>
            <label className='form__label' htmlFor="firt_name">First Name</label>
            <input className='form_input' type="text" id="firt_name" {...register('first_name')}/>
        </div>
        
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name</label>
            <input className='form_input' type="text" id="last_name" {...register('last_name')}/>
        </div>

        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">Birthday</label>
            <input className='form_input' type="date" id="birthday" {...register('birthday')}/>
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers