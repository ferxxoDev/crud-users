import React from 'react'

const UserCard = ({user, deleteUserById, setUpdateInfo}) => {

const handleEdit = () => {
  setUpdateInfo(user)
}

  return (
    <article>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email: </span> {user.email}</li>
            <li><span>Birthday: </span> {user.birthday}</li>
        </ul>
        <footer>
        <i onClick={() => deleteUserById(user.id)} className="fa-solid fa-trash-can"></i>
        <i onClick={handleEdit} className="fa-solid fa-pen-to-square"></i>
        </footer>
    </article>
  )
}

export default UserCard