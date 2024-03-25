/**
 * App is stateful componemt, which handles routing between ContactsPage and AppointmentPage
 * 1. Keep track contacts and appointments data (array of objects)
 * 2. Define a callback function to add new contact to the contacts array
 * 3. Define a callback function to add new appointment to the appointments array
 * 4. Pass lists of contacts and add contact callback as props to ContactsPage
 * 5. Pass array of appointments, contacts and add appointment callback to AppointmentsPage
 */
import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contactsData, setContactsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (contactData) => {
    setContactsData((prev) => [...prev, contactData]);
  }

  const addAppointment = (appointmentData) => {
    setAppointmentsData((prev) => [...prev, appointmentData]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactsData={contactsData} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointmentsData={appointmentsData} addAppointment={addAppointment} contactsData={contactsData}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
