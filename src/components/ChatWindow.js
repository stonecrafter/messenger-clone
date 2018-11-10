import React, { Component } from 'react';

export class ChatWindow extends Component {

  state = {
    message: ''
  }

  /**
   * Send the message and clear the input field
   */
  sendMessage = () => {
    if (this.state.message) {
      this.props.sendMessage(this.props.currentChat.friend.name, this.state.message);
      this.setState({ message: '' });
    }
  }

  /**
   * Keep the state in sync with what the user is typing in the text box
   */
  messageChange = (e) => {
    this.setState({ message: e.target.value });
  }

  /**
   * Send message when enter is pressed
   * Don't know if this and the above should be combined and S.O. didn't help!
   * https://codereview.stackexchange.com/questions/189920/onchange-vs-onkeypress-for-input-in-react
   */
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  render() {
    // Destructure the props for readability
    const {
      friend: { name, img },
      messages
    } = this.props.currentChat;

    return (
      <div className="ChatWindow">
        <header className="ChatWindow__header">
          {name}
        </header>
        <main className="ChatWindow__main">
          {
            messages.map((message, idx) => {
              return (
                <div key={idx}
                  className="ChatWindow__message"
                  >
                  {message.message}
                </div>
              )
            })
          }
        </main>
        <div className="ChatWindow__input">
          <input
            type="text"
            placeholder="Type a message..."
            value={this.state.message}
            onChange={this.messageChange}
            onKeyPress={this.handleKeyPress}/>
          <button onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
}
