## messenger-clone

This is a clone of a messenger app. I built it as a code sample for some really cool humans.

### Features

1. Write messages in the chat window and see them appear
2. Select a friend in the chat list to see the chat

### Details

There are 3 components.

`App.js` is responsible for keeping track of the overall state, and contains:
`ChatList.js` which keeps track of the list of chats on the left hand side
`ChatWindow.js` which displays the chat for the currently active friend

Most of the styling is inspired by messenger.com

Stuff I wanted to do but didn't get around to:
1. Unit tests. Not super familiar with the best practices around what and how to test in React specifically, started to read a bit on it and realised it was too complicated for 1 day. I got a setup and 1 test though, so I'm on the right track
2. messenger.com has a responsive breakpoint at 700px where things look a bit different, I wanted to do it because I really enjoy testing different screen sizes etc
3. Giving each friend an image - looks nice + is related to ^

### How to run

This project uses [create-react-app-sass](https://github.com/stonecrafter/create-react-app-sass) - the setup I am presently most familiar with.

1. Clone this project
2. `yarn install`
3. Run `yarn watch-css` during development, in addition to the standard `yarn start`
4. Go to http://localhost:3000/