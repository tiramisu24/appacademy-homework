function madLib(verb, adj, noun) {
  x = `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
  console.log(x);

}

function isSubstring(searchString, subString){
  return searchString.includes(subString);
}

function fizzBuzz(array){
  var new_arr = [];
  for(i = 0; i < array.length; i++){
    if ((array[i]%3===0 || array[i]%5 ===0) && !(array[i]%15===0)){
        new_arr.push(array[i]);
      }
  }
  return new_arr;
}

function isPrime(number){
  for(i = 2; i < Math.sqrt(number); i++){
    if ((number % i) === 0){
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(n){
  var sum = 0;
  for(i =1; i<=n, i++){
    if isPrime(i){
      sum +=i;
    }
  }
  return sum;
}

function titleize(arr, callBack){
  var new_arr = [];

  new_arr = arr.map(x => x[0].toUpperCase() + w.slice(1) );
  new_arr.forEach(x => callBack(x))
  return new_arr;
}

function Elephant(name, height, tricksArr){
  this.name = name;
  this.height = height;
  this.tricksArr = tricksArr;
}

Elephant.prototype.trumpet = function(){
  x = `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`
}
Elephant.prototype.grow = function(){
  this.height += 12 ;
}
Ele
