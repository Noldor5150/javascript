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

// function triangle(num) {
//   var output = "";
//   for (var i = 1; i <= num; i++) {
//     for (var j = 1; j <= i; j++) {
//       output += j + " ";
//     }
//     output += "<br/>";
//   }
//   document.getElementById("result").innerHTML = output;
// };

// let btnTriangle = document.getElementById("triangle");
//     btnTriangle.addEventListener("click", function(event){
//     triangle (10);
//     });

// function pyramid(n) {
//     var src = "";
//     var space = "&nbsp;";

//   for (var i = 0; i < n; i++) {
//     for (var j = 1; j < n-i; j++) {
//       src += space + space;
//     }
//     for (var k = 1; k <= (2*i+1); k++) {
//       src += "*" ;
//     }
//     src += "<br/>";
//   }
//   document.getElementById("result").innerHTML = src;
// }

// let btnPyramid = document.getElementById("pyramid");
//     btnPyramid.addEventListener("click", function(event){
//       pyramid (5);
//     });

    
// function reversePyr(n) {
//     var src = "";
//     var space = "&nbsp;";
//     var z = n + 1;
//   for (var i = 0; i < z; i++) {
//     src += space;
    
//     for (var k = 1; k <= (2*i+1); k++) {
//       src += space;
//     }
//     for (var j = 1; j < z-i; j++) {
     
//       src += space + j + space;
//     }
//     src += "<br/>";
//   }
//   document.getElementById("result").innerHTML = src;
// }

// let btnRevPyramid = document.getElementById("reversePyr");
//     btnRevPyramid.addEventListener("click", function(event){
//       reversePyr (6);
//     }); 
// let Nickname = document.getElementById("nickname");
// function clearDiv (){
//   let div = document.getElementById("safeplace");
//   //isstrinam divo vidu, bet pats  divas lieka;
//   div.innerHTML = null;
  
// };

// function paint(obj){
//   let container = document.createElement ("div");
//   let nicknameP = document.createElement ("p");
//   let nameP  = document.createElement ("p");
//   nicknameP.textContent = obj.nickName;
//   nameP.textContent = obj.name;
//   container.appendChild(nicknameP);
//   container.appendChild(nameP);
//   document.getElementById("safeplace").appendChild(container);
// };

// let submitButton = document.getElementById("submit");
// submitButton.addEventListener ("click", function(event){
// //  let Nickname = document.getElementById("nickname").value;
//  let Name = document.getElementById("lastname").value;
//  let credentialsObj = {nickName:Nickname.value,name:Name};
//  localStorage.setItem('credentials', JSON.stringify(credentialsObj));
//  clearDiv();
//  paint(credentialsObj);
//  console.log(Nickname.value);
// });

// window.addEventListener("load" , function(event){
//   let usersdata = JSON.parse(localStorage.getItem('credentials'))||{};
//   Nickname.value = usersdata.nickName;
//   document.getElementById("lastname").value = usersdata.name;
//   paint(usersdata);
//   console.log(Nickname.value);
// });

// let clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", function(event){
//   Nickname.value = "";
//   document.getElementById("lastname").value = "";
//   localStorage.clear();
//   clearDiv();
//   console.log(Nickname.value);
// })

// console.log(Nickname.value);

// let myAge = 39;
// let myLuckyNumber = 777;
// let myAgeString = myAge.toString();
// console.log(myAgeString); 
// console.log(Number.isNaN(myAgeString));

// let add = myAgeString + myLuckyNumber; 
// console.log(add); 

// let addNumber = Number(add);
// console.log(addNumber); 

// let addNumberString = addNumber.toString();
// console.log(addNumberString.length);

// let array = addNumberString.split(""); 
// console.log(array);

// let carrot = addNumberString.replace(/7/g, '6');
// console.log(carrot);

// carrot = carrot.replace(/39/, myLuckyNumber); 
// console.log(carrot);
// carrot = carrot.replace(/7/g, '👼🏽').replace(/6/g, '🤘'); 
// console.log(carrot);

// array = Array.from(array  , val=>val.repeat(3));
// console.log(array);
// console.log(array[2]);

// let name = document.getElementById("name");

// // name.addEventListener("change", function(event){

// // }) 
// let listEndButton = document.getElementById("listend");
// let listStartButton = document.getElementById("liststart");
// let listRemoveFirstButton = document.getElementById("removefirst");
// let listRemoveLastButton = document.getElementById("removelast");
// let listReverseButton = document.getElementById("reverse");
// let listSortAzButton = document.getElementById("sortAZ");
// let listSortZaButton = document.getElementById("sortZA");
// let arrayOfNames = [];
// listEndButton.addEventListener ("click", function(event){
//     let _name = document.getElementById("name").value;
//      arrayOfNames.push(_name );
//      localStorage.setItem('list', JSON.stringify(arrayOfNames));
//      clearDiv()
//      paint(arrayOfNames); 
//      console.log(arrayOfNames); 
// });
// listStartButton.addEventListener ("click", function(event){
//     let _name = document.getElementById("name").value;
//      arrayOfNames.unshift(_name );
//      localStorage.setItem('list', JSON.stringify(arrayOfNames));
//      clearDiv()
//      paint(arrayOfNames);  
//      console.log(arrayOfNames); 
// });
// listRemoveFirstButton.addEventListener ("click", function(event){
//     let _name = document.getElementById("name").value;
//      arrayOfNames.shift(_name ); 
//      localStorage.setItem('list', JSON.stringify(arrayOfNames));
//      clearDiv()
//      paint(arrayOfNames); 
//      console.log(arrayOfNames); 
// });
// listRemoveLastButton.addEventListener ("click", function(event){
//     let _name = document.getElementById("name").value;
//      arrayOfNames.pop(_name );
//      localStorage.setItem('list', JSON.stringify(_name)); 
//      clearDiv()
//      paint(arrayOfNames); 
//      console.log(arrayOfNames); 
// });
// listReverseButton.addEventListener ("click", function(event){
//     let _name = document.getElementById("name").value;
//      arrayOfNames.reverse(_name); 
//      localStorage.setItem('list', JSON.stringify(_name));
//      clearDiv()
//      paint(arrayOfNames); 
//      console.log(arrayOfNames); 
// });
// listSortZaButton.addEventListener("click", function(event){
//   let _name = document.getElementById("name").value;
//    arrayOfNames.sort(); 
//    arrayOfNames.reverse(arrayOfNames); 
//    localStorage.setItem('list', JSON.stringify(_name));
//    clearDiv()
//    paint(arrayOfNames); 
//    console.log(arrayOfNames); 
// });
// listSortAzButton.addEventListener("click", function(event){
//   let _name = document.getElementById("name").value;
//    arrayOfNames.sort(); 
//    localStorage.setItem('list', JSON.stringify(arrayOfNames));
//    clearDiv()
//    paint(arrayOfNames); 
//    console.log(arrayOfNames); 
// });
// function paint(arr){
// let container = document.createElement ("div");
// arr.forEach((name) => {
//     let element = document.createElement('p');
//      element.textContent = name;
//      container.appendChild(element);
// });
// document.getElementById("safeplace").appendChild(container);
// };
// function clearDiv(){
//   let div = document.getElementById("safeplace");
//   //isstrinam divo vidu, bet pats  divas lieka;
//   div.innerHTML = null;
// };
// let clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", function(event){
//   name.value = "";
//   localStorage.clear();
//   clearDiv();
// });
// window.addEventListener("load" , function(event){
//   let usersdata = JSON.parse(localStorage.getItem('list'))||{};
//   document.getElementById("name").value = name;
//   paint(usersdata);
//   console.log(Nickname.value);
//   console.log(usersdata);
// });

// const array = ['1','2','3','1','1'];

// function replaceName(arr , string1 , string2){
//   Array.from(arr , (name, index)=>{
//     if (name == string1){
//       arr.splice(index, 1, string2)
//     }
//   })
//   return arr;
// }

// console.log(replaceName(array , '1', 'alio'));


// let addressBook= [];
// let searchValue = "";
// let submitButton = document.getElementById("submit");

// submitButton.addEventListener('click', event => {
//   let name = document.getElementById("name");
//   let phone = document.getElementById("phone");
//   let object = {name: name.value,  phone: phone.value, isEdit: false, isFav: false};
//   addressBook.push(object);
//   console.log(addressBook);

//   clearList();
//   document.getElementById("safeplace").appendChild(render());
//   window.localStorage.setItem ("list", JSON.stringify(addressBook));
//   console.log(addressBook);
// });



// window.addEventListener("load", (event)=>{
//   let data = window.localStorage.getItem("list");
//   if(data != null) {
//     data = JSON.parse(data)
//     addressBook = data;
   
//     render();
//   }
// });

// function render() {
//   let paragraph = document.createElement ("ul");

//   addressBook.filter(obj => obj.name.includes(searchValue)).forEach((obj, index)=>{
//     let listItem = document.createElement("li");
//     let nameParagraph = document.createElement (obj.isEdit ? "input" : "span");
//     let phoneParagraph  = document.createElement (obj.isEdit ? "input" : "span");
//     if(obj.isEdit){
//       nameParagraph.type= "text";
//       phoneParagraph.type= "text";
//     }

//     nameParagraph[obj.isEdit ? "value" : "textContent"] = obj.name;
//     listItem.appendChild(nameParagraph);

//     phoneParagraph[obj.isEdit ? "value" : "textContent"] = obj.phone;
//     listItem.appendChild(phoneParagraph);

//     let editButton = document.createElement("button");
//     if(obj.isEdit) {
//       editButton.textContent ="Save";
//     } else {
//       editButton.textContent ="Edit";
//     }
//     editButton.type = "button";
//     editButton.id = "edit";

//     editButton.addEventListener("click", event => {
//       if (addressBook[index].isEdit) {
//         addressBook[index].name = nameParagraph.value;
//         addressBook[index].phone = phoneParagraph.value;
//       }

//       addressBook[index].isEdit = !addressBook[index].isEdit;
//       clearList();
//       render();
//       console.log(`${index} Edit`);
//       window.localStorage.setItem("list", JSON.stringify(addressBook));
//     });

//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.type = "button";

//     deleteButton.addEventListener("click", event => {
//       addressBook.splice(index, 1);
//       console.log(addressBook);
//       clearList();
//       render();
//       window.localStorage.setItem("list", JSON.stringify(addressBook));
//     });

//     let favButton = document.createElement("button");
//     favButton.textContent = obj.isFav ? "remove Fav": "make Fav";
//     favButton.type = "button";

//     favButton.addEventListener("click", event => {
//      addressBook[index].isFav = !addressBook[index].isFav;
//      clearList();
//      render();
//       window.localStorage.setItem("list", JSON.stringify(addressBook));
//     });

//     listItem.appendChild(editButton);
//     listItem.appendChild(deleteButton);
//     listItem.appendChild(favButton);
//     paragraph.appendChild(listItem);
//   });

//   return document.getElementById("safeplace").appendChild(paragraph);
// };

// // const userInput = selector =>{
// //   return document.querySelector(selector).value;
// // }

// function clearList() {
//   document.getElementById("safeplace").innerHTML = " ";
// }
// let searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("input", event => {
//   searchValue = event.target.value;
//   clearList();
//   render();
// });


function evenOrOdd(x){
  if (isNaN(x)){
    return NaN;
  }
  if( x % 2 === 0){
    return 'is even';
   }
  else if(x % 2 === 1){
   return 'is odd ';
   }
  else{
     return 'not an integer';
   }
};
console.log(evenOrOdd("alio"));

function generate(x){
return x.split("").map((letter, index)=>{
  return (letter.repeat(index));
 }).join("-");
};

console.log(generate("1234"));

function myFilter(arr, type){
  return arr.filter(function(el) {
    return typeof el == type;
  })
};

const arejus = ['apple', 'banana', 1, 5, 10];

console.log(myFilter(arejus , 'float'));


const stringuArejus = ['1', '2', '15', '5', '10'];

function stringToNumber (arr){
  return arr.map(function(el) {
    return parseInt(el);
})
};

console.log(stringToNumber(stringuArejus));