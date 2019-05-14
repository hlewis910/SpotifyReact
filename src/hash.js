const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = '';
console.log('checking hash', hash);


// hash.access_token='BQDxLyUFPK1JKw7rENThkvKrqkaEMESEo3w7w1C7qydR6K7FLB6mrC6Puhh1hW2PyOXI_i0QTn5dNx6uUuIFoV89ND0Gbpxq043rL4p3FSnlTlX1rNq7hb-4VcfzYsOE8wXzxD8xPHfvSG4dCbre'


export default hash;
