exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  // you should be able to determine the location of an item in an array
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  // you should be able to sum the items of an array
  sum: function(arr) {
    return arr.reduce((a, b) => {
      return a + b
    })
  },

  // you should be able to remove all instances of a value from an array
  remove: function(arr, item) {
    let filtered = arr.filter((val) => {
      return val !== item
    })
    return filtered
  },

  // you should be able to remove all instances of a value from an array, returning the original array
  removeWithoutCopy: function(arr, item) {
    let len = arr.length
    for ( let i = 0; i <= len; i++ ) {
      if ( arr[i] == item ) {
        arr.splice(i, 1)
        len--
        i--
      }
    }
    return arr
  },

  // you should be able to add an item to the end of an array
  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  // you should be able to remove the last item of an array
  truncate: function(arr) {
    arr.pop()
    return arr
  },

  // you should be able to add an item to the beginning of an array
  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  // you should be able to remove the first item of an array
  curtail: function(arr) {
    arr.shift()
    return arr
  },

  // you should be able to join together two arrays
  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  // you should be able to add an item anywhere in an array
  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  // you should be able to count the occurences of an item in an array
  count: function(arr, item) {
    const arr1 = arr.filter((index) => {
      return item == index
    });
    return arr1.length
  },

  // you should be able to find duplicates in an array
  duplicates: function(arr) {

  },

  // you should be able to square each number in an array
  square: function(arr) {
    let squared = [] 
    arr.forEach((item) => {
      squared.push(item * item)
    })
    return squared
  },

  // you should be able to find all occurrences of an item in an array
  findAllOccurrences: function(arr, target) {
    let occur = []
    arr.forEach((item, index) => {
      if ( item === target ) {
        occur.push(index)
      }
    })
    return occur
  }
};
