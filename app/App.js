import React from 'react';
import StockComponent from './components/StockComponent';

export default class App extends React.Component {

  static propTypes = {
    lastModified: React.PropTypes.string
  };
  static timer = 5000;
  constructor(props) {
    super(props);
    this.state = {
        lastModified: new Date().toString()
    }
  }

  componentDidMount() {
      this.startTicker();
  }

  startTicker = () => {
      setInterval(() => {
          this.setState({
              lastModified: new Date().toString()
          })
      }, App.timer);
  }

  render() {
    return (
      <div>
        <StockComponent symbol='GOOG' lastModified= {this.state.lastModified}/>
        <StockComponent symbol='FB' lastModified= {this.state.lastModified}/>
        <br/>
      </div>
    );
  }
}
