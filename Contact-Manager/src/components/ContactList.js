import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

const Contactlist = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id)
  }

  // const renderContactList = contacts.map((contact) => {
  //   ;<ContactCard
  //     contact={contact}
  //     clickHandler={deleteContactHandler}
  //     key={contact.id}
  //   />
  // })
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">
        {/* {contacts.length > 0 && (
          <ContactCard
            contacts={contacts}
            clickHandler={deleteContactHandler}
          />
        )} */}
        {contacts.map((contact) => (
          <div className="item" key={contact?.id}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
              <div className="header">{contact?.name}</div>
              <div>{contact?.email}</div>
            </div>
            <i
              className="trash alternate outline icon"
              style={{ color: 'red', marginTop: '7px' }}
              onClick={() => deleteContactHandler(contact?.id)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contactlist
