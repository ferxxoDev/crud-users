import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import './components/styles/userCars.css'
import './components/styles/formUsers.css'

const baseURL = 'https://users-crud1.herokuapp.com'


function App() {

  const [users, setUsers] = useState()
  //Estro para pasar info desde UserCard hasta Form User
  const [updateInfo, setUpdateInfo] = useState()

  const [formIsClose, setformIsClose] = useState(true)

  // Para hacer el get de todos los users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  // Para crear un nuevo usuario
  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  // Para eliminar un usuario especifico
  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  // Para actulizar un usuario en especifico
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenFomr = () => {
    setformIsClose(false)
  }

  return (
    <div className="App">
      <div className='App__container-title'>
        <h1 className='App__title'>Users CRUD</h1>
        <button onClick={handleOpenFomr} className='App__btn'>Create a New User</button>
      </div>
      <div className={`form-container ${formIsClose && 'disable__form'}`}>
      <FormUsers 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setformIsClose={setformIsClose}
      />
      </div>

      <div className='users-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setformIsClose={setformIsClose}
            />
          )) 
        }
      </div>
    </div>
  )
}

export default App
