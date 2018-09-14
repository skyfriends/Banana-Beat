import React, { PureComponent } from 'react';

class App extends PureComponent {
  state = { data: '' };
  setStateAsync = state =>
    new Promise((resolve) => {
      this.setState(state, resolve);
    });

  async componentDidMount() {
    const res = await fetch('https://someapi');
    const { data } = await res.json();
    await this.setStateAsync(...data);
  }
  render = () => <div>{this.state.data}</div>;
}

export default App