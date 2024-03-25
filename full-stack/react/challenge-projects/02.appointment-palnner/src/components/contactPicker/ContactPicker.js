/**
 * Stateless - renders dropdown list of all contact names
 * 1. Recives 4 props, array of contacts, a callback function to handle onChange, value and name
 * 2. Render select with onChange set to the callbackfunction, value=value and name=name from the props
 * 3. Add default option with text "No Contact Selected" and a value=""
 * 4. Iteratively add option element for each contact in the contacts array passed via props
 */
import React from "react";

export const ContactPicker = ({
  name,
  value,
  contactsData,
  handleChange
}) => {
  return (
    <>
      <select value={value} name={name} onChange={handleChange}>
        <option value="">No Contact Selected</option>
        {
            contactsData.map((contact, idx) =>{
              return <option value={contact.name} key={idx}>{contact.name}</option>
            })
        }
      </select>
    </>
  );
};