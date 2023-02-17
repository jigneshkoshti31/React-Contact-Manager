import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import './App.css'
import { v4 as uuid } from 'uuid'
import PageNotFoud from '../PageNotFoud'
import { Toaster } from 'react-hot-toast'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setcontacts] = useState(
    // JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [],
    [],
  )

  const addContactHandler = (name, email) => {
    setcontacts([...contacts, { id: uuid(), name, email }])
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
  }, [contacts])

  return (
    <div className="ui container">
      <Toaster />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/*" element={<PageNotFoud />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
