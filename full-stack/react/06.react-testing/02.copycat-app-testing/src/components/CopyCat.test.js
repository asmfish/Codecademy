import { CopyCat } from "./CopyCat";
import React from 'react';//in order to use JSX syntax in our tests
import { render, screen } from '@testing-library/react';//in order render and query DOM
import '@testing-library/jest-dom'; //to use DOM matcher using expect()

//Verify that the CopyCat component correctly accepts the name prop and render it in the DOM.
it("Displays the provided name", () => {
  //Render the CopyCat component so that it will be avilable to our test
  render(
   <CopyCat
    name="Mack"
    value=""
    handleChange={() => {}}
    toggleTape={() => {}}
    isCopying={true}
   />);

   //Now verify that the header component displays the text 'Copy Cat Mack'
   //1. Arrange
   const headerText = 'Copy Cat Mack';

   //2. Act
   const header = screen.getByText(headerText);

   //3. Verify
   expect(header).toBeInTheDocument();
});

it("Should display input text in paragraph when isCopying is set to true", () => {
   render(
   <CopyCat
    name="Mack"
    value="Here is an input"
    handleChange={() => {}}
    toggleTape={() => {}}
    isCopying={true}
   />);
   //Arrange
   const inputValue = "Here is an input";

   //Act
   const inputText = screen.getByRole('textbox');
   const copyParagraph = screen.getByText(inputValue);//throws an error if text isn't found and test fails
   
   //Verify
   expect(inputText).toHaveValue(inputValue);//check if the text value has same value passed to the prop
   expect(copyParagraph).toBeInTheDocument();//check the copyParagrapg with same text is avialable in the document
});

it("Should not display input text in paragraph when isCopying is set to false", () => {
  render(
   <CopyCat
    name="Mack"
    value="Here is an input"
    handleChange={() => {}}
    toggleTape={() => {}}
    isCopying={false}
   />);
   //Arrange
   const inputValue = "Here is an input";
   
   //Act
   const inputText = screen.getByRole('textbox');
   const copyParagraph = screen.queryByText(inputValue);//returns null if text not found and test continues executing to the next steps
   //const copyParagraph = screen.queryByText(/Here is an input/i);

   //Verify
   expect(inputText).toHaveValue(inputValue);//check if the text value has same value passed to the prop
   expect(copyParagraph).not.toBeInTheDocument();//check the copyParagrapg with same text is not avialable in the document

});
