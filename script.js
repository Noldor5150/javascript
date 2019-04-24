// const myFridge = ['alus', 'bananas', 'degtine', 'pienas', 'agurkai', 'arbuzas', 'kefyras','ledai'];

// myFridge.forEach(function(item){
//   if(item == 'degtine'){
//     console.log('zj/bs!- turim ' + item)
//   };
// });
  
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i = 0; i < numbers.length; i++)
//   if (numbers[i] % 2 === 0){
//     console.log(numbers[i]);
//   }

// const myName = 'Paulius';
// let i = 0;
// while(i < 5){
//   console.log(myName);
//   i++;
// }
// const myName = 'Paulius';
// let i = 0;
// let repeatTimes = 2;

// do {
// console.log(myName)
// i++;
// }      
// while (i < repeatTimes);

// let firstButton = document.getElementById("click");
// firstButton.addEventListener("click", function(event){
//     document.getElementById("click").textContent = "GOTCHA";
//     console.log(event);
//   });

//   let secondButton = document.getElementById("pull");
//   secondButton.addEventListener("dblclick", function(event){
//     document.getElementById("pull").textContent = "PULLED";
//     console.log(event);
//   });

//   let thirdButton = document.getElementById("fury");
//   thirdButton.addEventListener("mouseover", function(event){
//     event.target.style.color = "orange";
//     document.getElementById("fury").textContent = "EVILLLL";
//     var element = document.getElementById("myDiv");
//     element.classList.add("cyan");
//     console.log(event);
// });


// function sum(firstNumber, secondNumber){
//   return firstNumber + secondNumber;
// }
// function minus(firstNumber, secondNumber){
//   return firstNumber  - secondNumber;
// }
// function division(firstNumber, secondNumber){
//   return firstNumber / secondNumber;
// }
// function multiply(firstNumber, secondNumber){
//   return firstNumber * secondNumber;
// }
// function modulus(firstNumber, secondNumber){
//   return firstNumber % secondNumber;
// }



// let result = document.getElementById("result");
// let firstNumber = ()=> Number(document.getElementById("firstnumber").value);
// let secondNumber = ()=> Number(document.getElementById("secondnumber").value);

// let btnPlius = document.getElementById("plius");
//     btnPlius.addEventListener("click", function(event){
//       console .log(sum (firstNumber() , secondNumber()));
//       document.getElementById("result").textContent = sum (firstNumber() , secondNumber());
//     });

// let btnMinus = document.getElementById("minus");
//     btnMinus.addEventListener("click", function(event){
//       console .log(minus (firstNumber() , secondNumber()));
//       document.getElementById("result").textContent = minus (firstNumber() , secondNumber());
//     });

// let btnMultiply = document.getElementById("multiply");
//     btnMultiply.addEventListener("click", function(event){
//       console .log(multiply (firstNumber() , secondNumber()));
//       document.getElementById("result").textContent = multiply (firstNumber() , secondNumber());
//     });
// let btnDivision = document.getElementById("division");
//     btnDivision.addEventListener("click", function(event){
//       console .log(division (firstNumber() , secondNumber()));
//       document.getElementById("result").textContent = division (firstNumber() , secondNumber());
//     });
// let btnModulus = document.getElementById("mod");
//     btnModulus.addEventListener("click", function(event){
//       console .log(modulus (firstNumber() , secondNumber()));
//       document.getElementById("result").textContent = modulus (firstNumber() , secondNumber());
//     });  
   
// let myDiv = document.getElementById("myDiv");

// myDiv.addEventListener("click", function(event){
//   console.log(event);
//   let elementId = event.target.id;
//   switch (elementId) {
//     case "plius":
//     document.getElementById("result").textContent =sum(firstNumber(),secondNumber());
//       break;
//     case "minus":
//     document.getElementById("result").textContent =minus(firstNumber(),secondNumber());
//       break;   
//     case "multiply":
//     document.getElementById("result").textContent =multiply(firstNumber(),secondNumber());
//       break;
//     case "division":
//     document.getElementById("result").textContent =division(firstNumber(),secondNumber());
//       break;
//     case "mod":
//     document.getElementById("result").textContent =modulus(firstNumber(),secondNumber());
//       break; 
//     case "clear":
//     document.getElementById("result").textContent = "";
//     document.getElementById("firstnumber").value = "";
//     document.getElementById("secondnumber").value = "";
//       break;      
      
//     default:
//       break;
//   }
// });

// function pyramid(){
// for(i = 0; i < 7; i++){
//   for(y = 0; y < i; y++)
//     {
//       document.getElementById("result").innerHTML = "*";
//     };
  
//     document.getElementById("result").innerHTML = "a";
//   }
// };

function triangle(num) {
  var output = "";
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      output += j + " ";
    }
    output += "<br/>";
  }
  document.getElementById("result").innerHTML = output;
};

let btnTriangle = document.getElementById("triangle");
    btnTriangle.addEventListener("click", function(event){
    triangle (10);
    });

function pyramid(n) {
    var src = "";
    var space = "&nbsp;";

  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n-i; j++) {
      src += space + space;
    }
    for (var k = 1; k <= (2*i+1); k++) {
      src += "*" ;
    }
    src += "<br/>";
  }
  document.getElementById("result").innerHTML = src;
}

let btnPyramid = document.getElementById("pyramid");
    btnPyramid.addEventListener("click", function(event){
      pyramid (5);
    });

    
function reversePyr(n) {
    var src = "";
    var space = "&nbsp;";
    var z = n + 1;
  for (var i = 0; i < z; i++) {
    src += space;
    
    for (var k = 1; k <= (2*i+1); k++) {
      src += space;
    }
    for (var j = 1; j < z-i; j++) {
     
      src += space + j + space;
    }
    src += "<br/>";
  }
  document.getElementById("result").innerHTML = src;
}

let btnRevPyramid = document.getElementById("reversePyr");
    btnRevPyramid.addEventListener("click", function(event){
      reversePyr (6);
    });    