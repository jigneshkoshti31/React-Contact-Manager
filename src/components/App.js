import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./App.css"
import { v4 as uuid } from "uuid"

function App () {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] =  useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    )

  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, {id: uuid(), ...contacts}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })

    setcontacts(newContactList)

  }

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (retriveContacts) setcontacts(retriveContacts)
  // },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  return (
    <div className="ui container">
    <Router>
      <Header/>
        <Routes>
          
            <Route path="/add" element={AddContact} />
            <Route path="/" component={ContactList} />
            {/* <AddContact addContactHandler={addContactHandler}/> */}
            {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
        </Routes>
    </Router>
    </div>
  )
}

export default App
