const Benchmark = require('benchmark');
const { isWinnerRegex, isWinner } = require('./amazon-fresh-promo');

const suite = new Benchmark.Suite;

// sample data
const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
const shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];

suite
  .add('isWinner (regular expression)', function () {
    isWinnerRegex(codeList, shoppingCart);
  })
  .add('isWinner (two pointers)', function () {
    isWinner(codeList, shoppingCart);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': false });