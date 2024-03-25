/**
 * Requirement - stateless that renders a web form to collect appointment information
 * 1. Render a form with
 *  A. OnSubmit set to the callback function to add new appointment, which was passed from Appointmentpage component.
 *  B. Add three input controlled components for name, date and time
 *  C. Add comobobox with contacts list passed through props
 * 2. Use getTodayString() to set the min attribute of the date input.
 * 
 */
import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  formData,
  setFormData,
  handleSubmit,
  contactsData
}) => {
  const handleChange = (e) =>{
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} /> <br/>

        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" value={formData.date} onChange={handleChange}  min={getTodayString()}/> <br/>

        <label htmlFor="time">Time:</label>
        <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} /> <br/>

         <label htmlFor="contact">Contact:</label>
         <ContactPicker 
            name="contact"
            value={formData.contact}
            contactsData={contactsData} 
            handleChange={handleChange}
         />
          <br/>

        <input type="submit" value="Add Contact" />
      </form>
    </>
  );
};
