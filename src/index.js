module.exports = function getZerosCount(number) {
  let count =0;
  for(let i = 5 ; i<=number ; i=i*5){
    let a = Math.floor(number/i);
    count += a;
  }
    return count;
}
