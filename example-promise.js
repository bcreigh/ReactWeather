function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    } else {
      reject('there was an error');
    }
  });
}

addPromise(4,2).then(function (res){
  console.log('cool ', res);
}, function (err) {
  console.log('Fuck me ', err);
});

addPromise(1,'x').then(function (res){
  console.log('cool ', res);
}, function (err) {
  console.log('Fuck me ', err);
});