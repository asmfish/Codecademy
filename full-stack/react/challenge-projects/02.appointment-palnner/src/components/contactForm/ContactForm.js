/**
 * Requirements - it is stateless component
 * 1. render a form
 * 2. Set the onSubmit attribute to the callback function handleSubmit passed as prop from ContactsPage
 * 3. 3 controlled <input> elements for each contact data
 * 4. A submit button
 * 5. Validate the phone number using pattern attribute with regex
 */
import React from "react";

export const ContactForm = ({
  formData,
  setFormData,
  handleSubmit
}) => {
  const handleChange = (e) =>{
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  /**
   * phone input has US telephone pattern, we can change this to any.
   * pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
   */

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} /> <br/>

        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{11}"/> <br/>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} /> <br/>

        <input type="submit" value="Add Contact" /> 
      </form>
    </>
  );
};

