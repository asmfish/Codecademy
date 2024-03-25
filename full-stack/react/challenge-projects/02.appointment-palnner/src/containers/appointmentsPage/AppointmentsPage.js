/**
 * Requirements - stateful
 * 1. Recives three props, current list of appointments, current list of contacts, callback function for adding new appointment
 * 2. Keep track of four local state variables, name, contact, date and time entered in the form.
 * 3. Add new appointment on form submission.
 * 4. Clear form data after submission
 * 5. In the Add Appointment section render the AppointmentForm with props, local state variables, local state variables setter functions and handleSubmit callback function.
 * 6. In the Appointments section render a TileList with array of appointments passed as props.
 */
import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointmentsData, addAppointment, contactsData}) => {
  const initialformData = {
    name: "",
    contact: "",
    date: "",
    time: ""
  }
  
  /*
  Define state variables for 
  appointment info
  */
  const [formData, setFormData] = useState(initialformData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add appointment info and clear data  
    */
    addAppointment(formData);
    setFormData(initialformData);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          contactsData={contactsData}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointmentsData}/>
      </section>
    </div>
  );
};