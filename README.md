# Task Review 

Initially I created a fresh react typescript app as the base for displaying the accommodation data. I reorganised the structure so a header and body were my two initial components. From there I could map out which components were needed to create a list view for the available accommodations. I created these components spending time making sure my typescript interfaces were correct to what the json file types would return. After this I could pass the list of accommodations down into my list component and render them on the page. I spent time in the stylesheets making sure desktop and mobile styles were applied correctly. After this I worked on the sort which I decided would be a dropdown of the accommodation types. I wrote a function and a variable which was stored in a context and I could use throughout the react app. 

# Further improvements

If I had more time I would have further improved the app by adding further filters i.e a search input which filtered by names of the accommodation. I would also add further tests as I only had time to briefly test my accommodationItem component. I would also go back and integrate Storybook into the app which would allow me to write ui stories for my created components.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
