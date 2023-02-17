import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddContact = ({ addContactHandler }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate()

  const handleaddContact = (e) => {
    toast.dismiss()
    e.preventDefault()
    if (name === '' || email === '') {
      // alert('All the fields are mandatory!')
      toast.error('All fields should be filled', { duration: 1000 })
      return
    } else {
      addContactHandler(email, name)
      setEmail('')
      setName('')
      toast.success('Contact add successfully', { duration: 1000 })
      navigate('/')
    }
  }

  return (
    <>
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={(e) => handleaddContact(e)}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="ui button blue"
            type="submit"
            onClick={(e) => handleaddContact(e)}
          >
            Add
          </button>
        </form>
      </div>
    </>
  )
}

export default AddContact
