import React, { Component } from 'react';

export class ChatList extends Component {

  /**
   * When a friend is clicked. Call the parent method to update
   * if it is a different friend than the current one
   */
  handleFriendClick = (friendName) => {
    if (friendName !== this.props.activeFriend) {
      this.props.changeActiveFriend(friendName)
    }
  }

  render() {
    return (
      <div className="ChatList">
        <header className="ChatList__header">
          Messenger
        </header>

        {
          this.props.friendList.map((friend, idx) => {
            return (
              // This could also be a separate component
              <div key={idx}
                className={'ChatList__friend ' + (this.props.activeFriend === friend.name ? 'ChatList__friend--active' : '')}
                onClick={() => this.handleFriendClick(friend.name)}
                >
                {friend.name}
              </div>
            )
          })
        }
      </div>
    );
  }
}

