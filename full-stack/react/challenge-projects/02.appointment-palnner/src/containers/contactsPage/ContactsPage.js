/**
 * Requirements:- statefull component
 * 1. Recives list of contacts and a callback function to add new contact
 * 2. Keep track of data entered to the form, which are name, email and phone
 * 3. Check if the entered name already exists in the contacts, whenever the name in the form changes
 * 4. Only add a new contact if duplicate name does not exist
 * 5. Clear the form after successful submission
 * 6. In the Add Contact section we render the ContactForm and should pass three props - local state variables (get and set) and a callback function handleSubmit
 * 7. In the Contacts section render TileList with array of contacts as prop 
 */

import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({addContact, contactsData}) => {
  const initialFormData = {
    name: "",
    phone: "",
    email: ""
  }

   /*
  Define state variables for 
  contact info and duplicate check
  */
  const [formData, setFormData] = useState(initialFormData);//we could also create three separate states for name, phone and email.
  const [isContactDuplicate, setIsContactDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!isContactDuplicate){
      addContact(formData);
      setFormData(initialFormData);//clears the form
    }
    else{
      alert('Contact name ' + formData.name + ' already exists.');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() =>{
    var index = contactsData.findIndex(contact => contact.name === formData.name)

    if(index !== -1)//contact exists
      setIsContactDuplicate(true);
    else
      setIsContactDuplicate(false);
  }, [formData.name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contactsData}/>
      </section>
    </div>
  );
};
