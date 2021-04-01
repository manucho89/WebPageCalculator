const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

var stringToEvaluate = "";


keys.addEventListener('click', async e => {
 if (e.target.matches('button')) {
   // Do something


   const key = e.target
   const action = key.dataset.action

   if (!action) {
     //console.log('number key!')
     stringToEvaluate += e.target.id;
     document.getElementsByClassName("calculator__display")[0].innerHTML = stringToEvaluate;

   }

   /*if (
     action === 'add' ||
     action === 'subtract' ||
     action === 'multiply' ||
     action === 'divide'
   ) {
     console.log('operator key!')
   }*/

   if (action === 'calculate')
   {
        /*try {
            const response = await fetch('/calculate', {
              method: 'post',
              body: {
                "cadena": stringToEvaluate
              }
            });
            console.log('Completed!', response);
          } catch(err) {
            console.error(`Error: ${err}`);
          }*/

          $.post("http:localhost:8080/calculate",
              {
                cadena: stringToEvaluate
              },
              function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
              });
   }

   if (action === 'decimal') {
     console.log('decimal key!')
   }

   if (action === 'clear') {
     console.log('clear key!')
   }

   if (action === 'calculate') {
     console.log('equal key!')
   }
 }
})