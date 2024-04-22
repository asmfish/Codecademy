# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Expense Tracker
This project—a budgeting and expense tracking app—allows you to practice refactoring with Redux Toolkit. The app allows you to set budgets for various categories, such as food and transportation, and track transactions in those categories. It then sums your spending in each category to calculate the amount of money that remains to be spent.

To help you to understand how the data of the application works, consider an example of the Redux store’s state:

{
  budgets: [ 
    { category: 'housing', amount: 400 },
    { category: 'food', amount: 100 },
    ...
  ],
  transactions: {
    housing: [ 
      { 
        category: 'housing', 
        description: 'rent', 
        amount: 400, 
        id: 123 
      }
    ],
    food: [ 
      { 
        category: 'food', 
        description: 'groceries on 1/12/2021', 
        amount: 50, 
        id: 456 
      },
      { 
        category: 'food', 
        description: 'dinner on 1/16/2021', 
        amount: 12, 
        id: 789 
      },
    ]
  }


}

You will work primarily in budgetsSlice.js and transactionsSlice.js where reducers and action creators are currently programmed by hand. Your task will be to refactor this project using a slice-based approach to produce the app’s actions and reducers.

Before you get started, spend some time using the app in its current implementation to ensure you understand how it’s supposed to work. Set a budget of $300 for food, create a $20 food transaction, and then check the food budget again to see how much you have left to spend. As you progress through the project, take note of the ways that Redux Toolkit simplifies your code.


