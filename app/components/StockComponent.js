import React from 'react';
import styles from '../sass/main.scss';

export default class StockComponent extends React.Component {

    static propTypes = {
        price: React.PropTypes.number,
        symbol: React.PropTypes.string,
        name: React.PropTypes.string,
        lastModified: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            symbol: props.symbol,
            name: '',
            lastModified: props.lastModified
        }
    }

    componentDidMount() {
        this.fetchPrice();
    }

    componentWillReceiveProps(props) {
        this.fetchPrice();
        this.setState({
            lastModified: props.lastModified
        });
    }

    fetchPrice = () => {
        fetch(`/api/stocks/${this.props.symbol}`)
          .then(res => res.json())
          .then(response => {
              this.setState({
                  price: response[0].l,
                  name: response[0].t
              });
          });
    }

    render() {
        return <table className={styles.app}>
                <th> {this.state.name}: {this.state.symbol}</th>
                 <tr>
                    <td> {this.state.price} </td>
                </tr>
                <span> {this.state.lastModified} </span>
            </table>;
    }
}
