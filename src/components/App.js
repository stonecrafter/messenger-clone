import React, { Component } from 'react';
import { ChatWindow } from './ChatWindow';
import { ChatList } from './ChatList';

class App extends Component {
  constructor() {
    super();

    // Some starter data to show the structure
    this.state = {
      // The chat currently selected and shown in the chat window
      // Using the friend's name as id. In the real world, we should
      // really have user ids, as many people can have the same name
      activeFriend: 'Halvard',
      // Each item is a different friend's chat
      // Chats should be an array because we care about preserving order
      chats: [
        {
          friend: {
            name: 'Halvard'
          },
          // Each object is a message, from earliest to latest
          messages: [
            {
              sender: 'Halvard',
              // If we had user ids, we could compare user ids to
              // determine selfhood. But this works for now
              isSelf: false,
              message: 'Good luck!'
            },
            {
              sender: 'Halvard',
              isSelf: false,
              message: 'See you on Monday.'
            },
            {
              sender: 'Kirien',
              isSelf: true,
              message: 'Thanks!'
            }
          ]
        },
        {
          friend: {
            name: 'Jasmine'
          },
          messages: [
            {
              sender: 'Jasmine',
              isSelf: false,
              message: 'Hi!'
            },
            {
              sender: 'Kirien',
              isSelf: true,
              message: 'Nice to meet you!'
            }
          ]
        }
      ]
    };
  }

  /**
   * Change the chat of the friend we are currently looking at
   */
  changeActiveFriend = (newFriendName) => {
    this.setState({ activeFriend: newFriendName });
  }

  /**
   * Send a message to a friend
   */
  sendMessage = (friendName, newMsg) => {
    // Construct message to be added
    const msgToAdd = {
      // The current user's name should be a variable somewhere, probably
      sender: 'Kirien',
      isSelf: true,
      message: newMsg
    };

    // When a chat message is sent, we want to:
    // 1. Grab the chat in which it's sent to, by the friend's name
    // 2. Push the message to the end of message array
    // 3. Put this chat at the top of the list of chats
    const { chats } = this.state;

    // Make a copy of the chat array
    const chatsCopy = [...chats];

    // Arrays don't have a built in 'find by predicate and remove' method, like _.remove()
    // so simulating that behaviour here; tho it's a little verbose
    const currentChatIdx = chatsCopy.findIndex((chat) => {
      return friendName === chat.friend.name;
    });
    const currentChat = chatsCopy[currentChatIdx];
    chatsCopy.splice(currentChatIdx, 1);

    currentChat.messages.push(msgToAdd);
    chatsCopy.unshift(currentChat);

    this.setState((prevState) => ({ chats: chatsCopy }));
  }

  render() {
    return (
      <div className="App">
        <ChatList
          activeFriend={this.state.activeFriend}
          friendList={this.state.chats.map((chat) => chat.friend)}
          changeActiveFriend={this.changeActiveFriend}
        />
        <ChatWindow
          currentChat={this.state.chats.find((chat) => this.state.activeFriend === chat.friend.name)}
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

export default App;
