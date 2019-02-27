## Risk First Calendar Component

I created this app using create-react-app: https://github.com/facebook/create-react-app. The app uses React, Redux (https://redux.js.org/introduction/getting-started) for state management, Lodash (https://lodash.com/) for functionality and Prettier (https://prettier.io/) for consistent formatting.

To run the app use `yarn start`.


## Limitations

The component is not perfect and has some limitations due to time constraints:

- Information about the length of the month (no of days, last day and first day) is hardcoded for one example month. With more time I would have calculated this data based on which month was selected, which would also have allowed for multiple months.
- I have used vanilla CSS to save time. With a bit more time I would have used styled components.
- The add/update reminder component is currently a hidden component; with more time I would have liked to have made this a small modal component.

