var fetch = require('node-fetch');

const stock = {
    fetchPrice(request) {
        let symbol = request.params[0];
        return fetch(`http://finance.google.com/finance/info?client=ig&q=${symbol}`)
            .then(res => res.text())
            .then(body => (body.slice(3)))

        // if(!symbol) return { price: -1, name: '' }
        // let min = 1, max = 1000, name = '';
        // switch(symbol) {
        //     case 'GOOG':
        //         min = 700;
        //         max = 800;
        //         name = 'GOOGLE Inc';
        //         break;
        //     case 'AMZN':
        //         min = 650;
        //         max = 780;
        //         name = 'AMAZON Inc';
        //         break;
        //     case 'FB':
        //         min = 100;
        //         max = 150;
        //         name = 'Facebook Inc';
        //         break;
        //     default:
        //         return { price: -1, name: ''};
        // }
        // return { name: name, price: Math.floor(Math.random() * (max - min)) + min };
    }
}
module.exports = stock;
