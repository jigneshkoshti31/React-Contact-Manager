import React from 'react'
import ContactCard from './ContactCard';

const Contactlist = (props) => {
  // console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id)
  }

  const contacts =  [
    {
      id: "1",
      name: "Jignesh",
      email: "jk@gmail.com",
    }
  ]

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    )
  })

  return (
    <div className='ui celled list'>
      {renderContactList}
    </div>
  )
}

export default Contactlist