import React from 'react'


const UserCard = ({user, deleteUserById, setUpdateInfo}) => {

const handleEdit = () => {
  setUpdateInfo(user)
}

  return (
    <article className='user'>
        <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__list'>
            <li className='user__item'><span className='user__span'>Email: </span> {user.email}</li>
            <li className='user__item'><span className='user__span'>Birthday: </span> {user.birthday}</li>
        </ul>
        <footer className='user__footer'>
        <i onClick={() => deleteUserById(user.id)} className="user__trash fa-solid fa-trash-can"></i>
        <i onClick={handleEdit} className="user__edit fa-solid fa-pen-to-square"></i>
        </footer>
    </article>
  )
}

export default UserCard