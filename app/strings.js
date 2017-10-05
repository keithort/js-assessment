exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  // you should be able to reduce duplicate characters to a desired minimum
  reduceString: function(str, amount) {

  },

  // you should be able to wrap lines at a given number of columns, without breaking words
  wordWrap: function(str, cols) {
    
  },

  // you should be able to reverse a string
  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
