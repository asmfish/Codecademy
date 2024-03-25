import { CopyCatContainer } from "./CopyCatContainer";
//import "regenerator-runtime";
import React from 'react';//in order to use JSX syntax in our tests
import { render, screen, waitFor } from '@testing-library/react';//in order render and query DOM
import '@testing-library/jest-dom'; //to use DOM matcher using expect()
import userEvent from '@testing-library/user-event';//to mimic user interactions with the textbox and clicking the image to mute and unmute the cat.

it("Should display copied text", async () => {
  render(<CopyCatContainer />);//renders the copy cat with empty text, isCopying = true by default

  //Act
  const inputTextBox = screen.getByRole('textbox');//grab the input element
  await userEvent.type(inputTextBox, 'Hello World!');//mimic user typing in the textbox

  //The paragraph text appears after some delay, so use asynchrounous code to find the paragraph containing the copied text
  const copiedParagraph = await screen.findByText('Hello World!');
  //const copiedParagraph = await screen.findByText(/Hello World!/i);

  //Verify
  expect(copiedParagraph).toBeInTheDocument();
  
});

it("Should remove copied text after putting on tape", async () => {
  //clicking the cat toggles the text in the paragraph, so this action is asynchronous operation, which happens independently from the main program flow.
   render(<CopyCatContainer />);

  //Act
  const inputTextBox = screen.getByRole('textbox');
  await userEvent.type(inputTextBox, 'My mouth is shut');

  const copyParagraph = await screen.findByText(/My mouth is shut/i);//we use await because text appears eventually

  //Assert that paragraph is shown with the typed text
  expect(copyParagraph).toBeInTheDocument();

  //Now lets mimic the clicking the copycat image
  const copyCatImage = screen.getByRole('button', { name: /copycat/i });//grab the button
  userEvent.click(copyCatImage);

  //Assert the paragraph that will eventually appear 
  await waitFor(() => {
    const copyParagraph = screen.queryByText(/My mouth is shut/i);
    expect(copyParagraph).not.toBeInTheDocument();
  });

});

it("Should display copied text after removing tape", async () => {
 //clicking the cat toggles the text in the paragraph, so this action is asynchronous operation, which happens independently from the main program flow.
   render(<CopyCatContainer />);

  //Act
  const inputTextBox = screen.getByRole('textbox');
  await userEvent.type(inputTextBox, 'Eventually this will appear');

  const copyCatImage = screen.getByRole('button', { name: /copycat/i });//accessibility text from alt attribute
  userEvent.click(copyCatImage);

  //Find the quite cat image button
  const quietCatImage = await screen.findByRole("button", { name: /quietcat/i })//accessibiliy from alt
  //simulate click event
  userEvent.click(quietCatImage);
  //Find and wait so that eventually the copied text will appear in the paragraph
   const copiedParagraph = await screen.findByText("Eventually this will appear");

   //Verify
   expect(copiedParagraph).toBeInTheDocument();
});

