import React from 'react'
import user from '../images/user.png'

const ContactCard = ({ contacts, clickHandler }) => {
  // const {id, name, email} = props.contact
  return (
    <>
      {contacts.map((contact) => (
        <div className="item" key={contact?.id}>
          <img className="ui avatar image" src={user} alt="user" />
          <div className="content">
            <div className="header">{contact?.name}</div>
            <div>{contact?.email}</div>
          </div>
          <i
            className="trash alternate outline icon"
            style={{ color: 'red', marginTop: '7px', marginLeft:"10px" }}
            onClick={() => clickHandler(contact?.id)}
          ></i>
          <link to="/edit"></link>
          <i
            className="edit alternate outline icon"
            style={{ color: 'blue', marginTop: '7px' }}
            onClick={() => clickHandler(contact?.id)}
          ></i>
        </div>
      ))}
    </>
  )
}

export default ContactCard
