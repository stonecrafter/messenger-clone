import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders ChatList and ChatWindow', () => {
    const component = shallow(<App />);
    expect(component.find('ChatList').length).toBe(1);
    expect(component.find('ChatWindow').length).toBe(1);
  });
});
