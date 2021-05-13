var p = new Parallel('forwards');
                            
 p.spawn(function (data) {
  data = data.split('').reverse().join('');
     return data;
   }).then(function (data) {
   console.log(data) 
  });