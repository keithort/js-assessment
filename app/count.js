exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  // should count from start number to end number, one per 1/10th of a second
  count: function (start, end) {
    let counter = start
    setInterval(() => {
      counter++
      console.log(counter)
    }, 100)
  }
};
