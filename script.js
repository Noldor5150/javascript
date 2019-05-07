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

// const items = [
//   {
//   "name": "Generic Fresh Chair",
//   "id": "GenericFreshChaire0bd6389-14ad-44c7-8811-051f7a3efb6b1557159820043",
//   "selected": true,
//   "description": "Est cum provident sint qui quas. Nam commodi architecto nihil sit aut. Eum et earum magnam placeat ut enim. Dignissimos et facilis in ipsa officia non et et quis. Occaecati voluptatibus illum sed doloremque hic facilis doloribus ad. Nobis et doloribus molestiae alias nihil quos suscipit tempore ut.",
//   "price": "$946.00",
//   "color": "fuchsia",
//   "stock": 3
//   },
//   {
//   "name": "Awesome Concrete Bike",
//   "id": "AwesomeConcreteBikef6659454-30e5-4c26-91bc-22f73d15f2001557159820043",
//   "selected": false,
//   "description": "Unde delectus repudiandae temporibus blanditiis quas. Quasi eius dolores ducimus. Nostrum deserunt maxime corrupti dolor minus dolore. Odit odio voluptatem doloribus iste incidunt ex sint temporibus et.",
//   "price": "$490.00",
//   "color": "indigo",
//   "stock": 4
//   },
//   {
//   "name": "Gorgeous Wooden Shoes",
//   "id": "GorgeousWoodenShoes0b499ebc-cf00-4c0b-b60d-a3a5e69c01271557159820044",
//   "selected": false,
//   "description": "Qui ratione ut dolor dolorum. Deleniti id dolorem eaque dolor. Ut facilis distinctio est error et voluptatem enim repellendus quidem. Dolorem animi rerum id. Dolorum nostrum maiores tenetur explicabo officia eos cupiditate quia magnam.",
//   "price": "$812.00",
//   "color": "blue",
//   "stock": 5
//   },
//   {
//   "name": "Rustic Plastic Chips",
//   "id": "RusticPlasticChips14906e1a-00af-4642-af30-512e7a8836391557159820044",
//   "selected": true,
//   "description": "Dicta labore aliquam id ducimus alias placeat est. Iste voluptatum in illo. Commodi nihil recusandae accusamus neque blanditiis accusamus. Tempore est qui natus animi dolorem. Qui voluptatem occaecati nemo eum.",
//   "price": "$829.00",
//   "color": "silver",
//   "stock": 1
//   },
//   {
//   "name": "Sleek Plastic Cheese",
//   "id": "SleekPlasticCheesec51db953-7eb5-4611-bb24-7b2cd9e620731557159820044",
//   "selected": true,
//   "description": "Aut ipsum cumque nemo non labore dolore omnis tempora. Nesciunt et quos corporis reiciendis. Mollitia doloribus molestiae delectus enim.",
//   "price": "$394.00",
//   "color": "red",
//   "stock": 4
//   },
//   {
//   "name": "Practical Steel Hat",
//   "id": "PracticalSteelHatd957d2f8-8c95-4f39-87d6-38c7d58176ff1557159820044",
//   "selected": true,
//   "description": "Sed non quia. Ea voluptas quis omnis sapiente voluptatem quis excepturi qui. Repellat atque velit quis ipsam. Nulla qui occaecati dicta quibusdam qui odit sed. Est ipsum qui sed explicabo. Aut eos ut eligendi.",
//   "price": "$911.00",
//   "color": "lavender",
//   "stock": 0
//   },
//   {
//   "name": "Fantastic Wooden Chair",
//   "id": "FantasticWoodenChairaef33ef5-cac7-424a-a71e-f549500e492d1557159820044",
//   "selected": false,
//   "description": "Est officia quos explicabo. Et corporis velit voluptas et voluptatem nihil aut. Minima voluptatum eligendi minus nobis vero aut. Eos quas labore quis molestiae debitis in impedit quis dolores.",
//   "price": "$675.00",
//   "color": "azure",
//   "stock": 4
//   },
//   {
//   "name": "Generic Rubber Chips",
//   "id": "GenericRubberChipsee89a921-f501-4ed4-bea9-37f643906ac21557159820044",
//   "selected": true,
//   "description": "Quia et est omnis exercitationem aspernatur tenetur. Corporis nam et et odit sequi debitis sunt provident. Nostrum voluptate occaecati et numquam veritatis officiis. Eos dolorem aut dolor beatae et porro dolorem et corrupti. Ea minus consectetur qui necessitatibus harum harum aspernatur ea sed.",
//   "price": "$591.00",
//   "color": "sky blue",
//   "stock": 1
//   },
//   {
//   "name": "Refined Plastic Car",
//   "id": "RefinedPlasticCarc929f969-1fea-42ea-a720-0f5209165ee51557159820044",
//   "selected": false,
//   "description": "Suscipit velit odit necessitatibus esse odio dolores minus quod. Nobis provident odit consequuntur. Eius maiores quia in occaecati sunt ut veritatis et ut. Quo ipsa adipisci optio dolor quo quo officiis. Et ducimus libero ab perspiciatis nisi quam modi molestiae omnis.",
//   "price": "$487.00",
//   "color": "plum",
//   "stock": 1
//   },
//   {
//   "name": "Incredible Rubber Hat",
//   "id": "IncredibleRubberHatf7b5d00c-4299-47fc-a620-17b54cf480851557159820044",
//   "selected": true,
//   "description": "Illo non deleniti in sit eos dolorem rerum est debitis. Ut rem rerum. Delectus incidunt rerum vitae.",
//   "price": "$937.00",
//   "color": "ivory",
//   "stock": 5
//   },
//   {
//   "name": "Licensed Granite Chair",
//   "id": "LicensedGraniteChair0b7ca159-f7af-4a9a-aee0-4a69b8dd01fb1557159820044",
//   "selected": false,
//   "description": "Perferendis facere sapiente eaque aut repellendus inventore. Culpa sint consequatur labore veniam pariatur perferendis quia ducimus odio. Dolorem voluptatem autem voluptatum eos. Eum harum enim.",
//   "price": "$286.00",
//   "color": "white",
//   "stock": 0
//   },
//   {
//   "name": "Small Steel Ball",
//   "id": "SmallSteelBall23daf2c9-907b-496c-bc02-e1e41521da441557159820044",
//   "selected": true,
//   "description": "Asperiores rerum pariatur et harum quaerat nihil corporis. Magnam beatae eveniet nihil nihil explicabo quia sapiente error aut. Quia consequuntur voluptates. Et soluta nihil blanditiis officiis ut quas pariatur eum. Dignissimos harum eum dolores rem earum et ut enim.",
//   "price": "$338.00",
//   "color": "maroon",
//   "stock": 5
//   },
//   {
//   "name": "Refined Steel Keyboard",
//   "id": "RefinedSteelKeyboard6194ca13-5622-4e82-8307-b6f96a2b79d51557159820045",
//   "selected": true,
//   "description": "Aut quia et quae aut facere natus veritatis tempora repudiandae. Nihil odio est dolor beatae quas est assumenda id ducimus. Animi quo iure ducimus. Impedit eligendi porro harum sit dolores rerum ipsa.",
//   "price": "$985.00",
//   "color": "gold",
//   "stock": 1
//   },
//   {
//   "name": "Unbranded Granite Table",
//   "id": "UnbrandedGraniteTablec273ae01-7361-46ac-8f94-6afe8fd8ea361557159820045",
//   "selected": false,
//   "description": "Assumenda ad error possimus est. Voluptatem sed ipsum quia. In totam molestiae quo officiis neque nostrum alias similique.",
//   "price": "$924.00",
//   "color": "plum",
//   "stock": 2
//   },
//   {
//   "name": "Handcrafted Wooden Soap",
//   "id": "HandcraftedWoodenSoapc15d760f-92d8-4604-a794-820565dfe4031557159820045",
//   "selected": true,
//   "description": "Magni aliquam inventore omnis blanditiis tenetur. Perspiciatis sunt quo et temporibus incidunt quia qui sit sit. Ut molestiae et quod ut enim aspernatur nemo quae. Minus alias dolorem voluptatem voluptas. Magnam dignissimos rerum doloribus alias hic id dolorem quaerat. Harum cumque dolorem ratione.",
//   "price": "$746.00",
//   "color": "blue",
//   "stock": 5
//   },
//   {
//   "name": "Generic Concrete Chicken",
//   "id": "GenericConcreteChicken1b66ebc3-2d6a-48a7-81a0-a2174755bf041557159820045",
//   "selected": true,
//   "description": "Voluptatum voluptate fugiat quasi fugit aperiam ut accusamus. Minus libero aliquam nemo aliquid neque est. Blanditiis est sed voluptatem iste ullam. Error laboriosam autem consequatur.",
//   "price": "$491.00",
//   "color": "blue",
//   "stock": 1
//   },
//   {
//   "name": "Sleek Fresh Car",
//   "id": "SleekFreshCar822d24e8-e7fe-44f2-a173-7d66fc2317fc1557159820045",
//   "selected": true,
//   "description": "Harum magnam placeat corrupti. Voluptatem dolorem sapiente nisi ea et. Ab et et et et ratione animi aperiam et.",
//   "price": "$878.00",
//   "color": "yellow",
//   "stock": 1
//   },
//   {
//   "name": "Fantastic Metal Cheese",
//   "id": "FantasticMetalCheese214affe0-dc6c-49cd-bd01-9a59a53db5ab1557159820045",
//   "selected": true,
//   "description": "Commodi sit amet omnis cupiditate commodi dolorem tempore eligendi dolor. Suscipit sed nihil. Est ut doloribus cupiditate repellat eligendi eveniet aliquam et quas.",
//   "price": "$62.00",
//   "color": "orchid",
//   "stock": 4
//   },
//   {
//   "name": "Licensed Rubber Tuna",
//   "id": "LicensedRubberTuna2825adef-2d53-4862-a230-ef30293f95071557159820045",
//   "selected": false,
//   "description": "Sit ut nesciunt et optio et quasi. Velit consequuntur deleniti dolorum eum voluptatem. Non quas odio et sit accusantium ratione occaecati. Consequatur qui tempora nostrum.",
//   "price": "$752.00",
//   "color": "blue",
//   "stock": 5
//   },
//   {
//   "name": "Ergonomic Wooden Table",
//   "id": "ErgonomicWoodenTablecc1dc45e-35a8-46fd-93f4-647af8036b731557159820045",
//   "selected": false,
//   "description": "Illo velit numquam culpa architecto dolores optio molestiae dicta magni. Occaecati quia occaecati rerum sit quaerat et est. Dolore quis commodi mollitia minima enim eos fuga ipsam cupiditate. Ut quisquam sed consequatur sit voluptas vitae.",
//   "price": "$289.00",
//   "color": "salmon",
//   "stock": 2
//   },
//   {
//   "name": "Fantastic Concrete Shoes",
//   "id": "FantasticConcreteShoes2347e19d-67a1-4ba6-88f9-01dccf12e3631557159820045",
//   "selected": false,
//   "description": "Error provident voluptatum. Molestiae qui quod temporibus sit. Et in amet molestiae rerum iste explicabo qui nostrum. Cum tempore eum est velit ex debitis quos non reprehenderit. Molestiae iste pariatur. Incidunt est quo quod placeat qui ea.",
//   "price": "$627.00",
//   "color": "mint green",
//   "stock": 1
//   },
//   {
//   "name": "Gorgeous Concrete Sausages",
//   "id": "GorgeousConcreteSausages01d86e9b-ab42-4ca4-a4cd-24080b5b892b1557159820045",
//   "selected": true,
//   "description": "Tempora maxime magni est. Aut repudiandae et iste et mollitia illo eveniet quia aut. Ab dolorem dolorum eveniet sed.",
//   "price": "$103.00",
//   "color": "cyan",
//   "stock": 2
//   },
//   {
//   "name": "Gorgeous Soft Chips",
//   "id": "GorgeousSoftChipsecc1dc1b-6720-4c3c-8d6f-f7149201abf11557159820045",
//   "selected": true,
//   "description": "Architecto consequatur vero veniam quis aperiam animi et. Debitis id nihil incidunt qui dolorum. Facere veniam non fuga voluptas.",
//   "price": "$629.00",
//   "color": "indigo",
//   "stock": 3
//   },
//   {
//   "name": "Tasty Fresh Tuna",
//   "id": "TastyFreshTuna6b1718d8-75e3-41b8-a188-d936985dd3771557159820046",
//   "selected": true,
//   "description": "Dolor ea dolor cupiditate alias rerum culpa possimus ut rem. Earum ut doloremque hic. Suscipit debitis aut ducimus soluta dolor aliquid. Dolorem et voluptates voluptatibus ut est dolorem consequatur quia dolorem.",
//   "price": "$920.00",
//   "color": "pink",
//   "stock": 3
//   },
//   {
//   "name": "Intelligent Frozen Salad",
//   "id": "IntelligentFrozenSalad70af1a01-975c-4549-a943-68e2570f50511557159820046",
//   "selected": false,
//   "description": "Assumenda consectetur tempora nihil quia. Dolor soluta consequatur omnis nemo voluptate consequatur. Asperiores optio quia non facilis. Commodi provident est quia dolor repellendus reiciendis et quia ducimus. Accusantium alias distinctio molestiae quae ut aliquid voluptas. Pariatur similique molestiae natus praesentium ipsa ducimus aut quod et.",
//   "price": "$164.00",
//   "color": "turquoise",
//   "stock": 0
//   },
//   {
//   "name": "Rustic Concrete Chair",
//   "id": "RusticConcreteChair85950754-9c7f-4bea-bd4e-e3d125d810b11557159820046",
//   "selected": false,
//   "description": "Dolor doloremque a voluptatibus quia. Atque ipsam quidem nam aliquid aperiam sit non ea. Non velit similique minima. Rerum aut consectetur id. Asperiores sint eos aut aliquam mollitia. Qui ipsa sed sint aperiam voluptatem velit est.",
//   "price": "$594.00",
//   "color": "maroon",
//   "stock": 1
//   },
//   {
//   "name": "Incredible Soft Ball",
//   "id": "IncredibleSoftBalldb492e98-88a6-4f27-8772-e14358674b791557159820046",
//   "selected": false,
//   "description": "Voluptatum minus laboriosam harum hic sed odit eligendi et cumque. Et aperiam deleniti veritatis qui perferendis non in. Consectetur quisquam est vero sed quis ut a. Enim porro ea possimus perspiciatis. Est eos in.",
//   "price": "$946.00",
//   "color": "ivory",
//   "stock": 0
//   },
//   {
//   "name": "Intelligent Wooden Computer",
//   "id": "IntelligentWoodenComputerf4eab055-2417-4c86-acd3-eb266d71233c1557159820046",
//   "selected": true,
//   "description": "Sint eos aut velit aut. Vitae quaerat sunt suscipit aut consequatur non eos cum iure. Hic sint ipsum. Asperiores eos repellat et fuga possimus maiores. Non commodi aut est iusto optio accusamus similique atque. Ipsum quis alias perspiciatis optio eligendi ut distinctio unde temporibus.",
//   "price": "$182.00",
//   "color": "pink",
//   "stock": 1
//   },
//   {
//   "name": "Ergonomic Soft Chair",
//   "id": "ErgonomicSoftChair5e1203a4-10ad-4244-a88b-b6cfdd1e28e61557159820046",
//   "selected": false,
//   "description": "Modi odit aperiam est aspernatur. Temporibus beatae et et veniam non. Porro consectetur nulla molestias ratione voluptatem voluptates. Rerum reiciendis animi id temporibus nobis tempore animi. Et sequi ut.",
//   "price": "$741.00",
//   "color": "olive",
//   "stock": 2
//   },
//   {
//   "name": "Tasty Wooden Fish",
//   "id": "TastyWoodenFishecc89d0f-0757-45f2-b231-668c3518ef391557159820046",
//   "selected": false,
//   "description": "Voluptatum doloribus illum. Quibusdam deserunt voluptate minus sint autem. Molestiae modi non et esse. Porro omnis quia ut necessitatibus consequatur ab inventore repellat dolorem.",
//   "price": "$799.00",
//   "color": "yellow",
//   "stock": 3
//   },
//   {
//   "name": "Intelligent Plastic Hat",
//   "id": "IntelligentPlasticHatb39feb09-7dca-4fc6-ac55-6b48eaaec54a1557159820046",
//   "selected": true,
//   "description": "Est saepe eius dolores cupiditate sed odio at voluptatum. Sit ab deleniti. Non et illum nesciunt ipsa dolorem voluptatibus.",
//   "price": "$175.00",
//   "color": "red",
//   "stock": 4
//   },
//   {
//   "name": "Handcrafted Soft Soap",
//   "id": "HandcraftedSoftSoap8bf54ed6-3f2f-4c04-96d8-2f990d0d090c1557159820046",
//   "selected": true,
//   "description": "Ex quos sit maxime eius quaerat inventore. Id vitae qui qui et aut sit nihil et voluptatem. In voluptate tenetur voluptates minima odit inventore. Facere voluptas esse. Rerum in magnam esse itaque qui autem. Et amet voluptatibus tempora perspiciatis nesciunt voluptatum.",
//   "price": "$457.00",
//   "color": "lavender",
//   "stock": 3
//   },
//   {
//   "name": "Unbranded Fresh Bacon",
//   "id": "UnbrandedFreshBacon6e738129-e89c-4f2a-93b3-383734d856f01557159820046",
//   "selected": false,
//   "description": "Ad incidunt fugit veniam ut veritatis quis. Nesciunt quia dolorum aut laborum commodi ipsa voluptatem cum. Aliquam consequuntur reiciendis molestiae sint hic eos aut. Aspernatur vitae vero voluptate quis voluptas nisi at omnis nihil. Dolorum sed non odio est eveniet minima rerum eius facilis. Ad necessitatibus cupiditate magnam atque explicabo voluptatem.",
//   "price": "$113.00",
//   "color": "salmon",
//   "stock": 2
//   },
//   {
//   "name": "Fantastic Rubber Sausages",
//   "id": "FantasticRubberSausagesc955a10a-8670-4b9b-ad77-d841698fbaeb1557159820046",
//   "selected": true,
//   "description": "Esse eveniet assumenda non. Error enim voluptatibus quis dolorem rerum iure cum quas est. Nulla nobis quis reprehenderit aut voluptas deleniti a porro autem. Non eligendi doloribus quas. Et qui exercitationem nam.",
//   "price": "$522.00",
//   "color": "silver",
//   "stock": 4
//   },
//   {
//   "name": "Refined Concrete Ball",
//   "id": "RefinedConcreteBall43bc5064-4a7e-4cdb-bdba-84c1e0d1db571557159820047",
//   "selected": false,
//   "description": "Eius sit itaque rem amet minus sequi. Atque illum voluptates ut consectetur et in dicta. Reprehenderit ea tenetur. Molestias omnis qui quos dicta. Qui quia expedita a officia delectus.",
//   "price": "$111.00",
//   "color": "magenta",
//   "stock": 3
//   },
//   {
//   "name": "Awesome Metal Bacon",
//   "id": "AwesomeMetalBacon507bb009-ff35-4867-8765-42397270916e1557159820047",
//   "selected": true,
//   "description": "Animi maxime nihil ipsum rerum labore temporibus sit ea sit. Ut nihil sed qui. Rerum accusantium perferendis non. Commodi a minus nihil. Voluptate non tempora autem ipsum eligendi. Qui voluptatibus harum enim.",
//   "price": "$470.00",
//   "color": "salmon",
//   "stock": 0
//   },
//   {
//   "name": "Generic Granite Table",
//   "id": "GenericGraniteTablefa9786fb-4602-46e9-be81-1fb0828f35301557159820047",
//   "selected": true,
//   "description": "Ab totam dignissimos. Ut hic labore quos officia voluptatem. Et voluptatem molestiae impedit tempora. Non architecto vero deleniti sit rerum eos. Officia nulla voluptates aut et voluptatum. Dolor tempora et quam amet aut aut sit.",
//   "price": "$801.00",
//   "color": "blue",
//   "stock": 1
//   },
//   {
//   "name": "Fantastic Wooden Bike",
//   "id": "FantasticWoodenBike09e089a1-4f63-4da9-b2aa-c76e5b0b5ad11557159820047",
//   "selected": false,
//   "description": "Velit est ullam at aspernatur. Sed nisi suscipit aspernatur autem. Atque sint odit at repellat debitis et vero ab maxime.",
//   "price": "$618.00",
//   "color": "plum",
//   "stock": 2
//   },
//   {
//   "name": "Awesome Steel Pants",
//   "id": "AwesomeSteelPantse920c930-7e14-4307-8d84-e2c6bf5970631557159820047",
//   "selected": true,
//   "description": "Et quidem perspiciatis et qui quia. Voluptatem saepe magnam. Provident itaque corrupti rerum rerum laudantium fugit nihil mollitia.",
//   "price": "$628.00",
//   "color": "lime",
//   "stock": 1
//   },
//   {
//   "name": "Ergonomic Cotton Tuna",
//   "id": "ErgonomicCottonTunac7ad4321-ad8b-4ccb-a542-7c6b383c07e11557159820047",
//   "selected": false,
//   "description": "Consequuntur consequuntur sit. Illum explicabo a beatae ratione aut fugiat illo tempore distinctio. Possimus tempore beatae in numquam sed quia. Ipsa consectetur eligendi corporis a reiciendis cumque. Harum voluptate fugiat ipsam labore nesciunt eligendi vitae dolores.",
//   "price": "$789.00",
//   "color": "olive",
//   "stock": 0
//   },
//   {
//   "name": "Licensed Granite Mouse",
//   "id": "LicensedGraniteMousec65e06e7-ab18-4184-a37f-ee4ba97ba4171557159820047",
//   "selected": true,
//   "description": "Ut vitae officiis sit sed voluptatem illum. Molestias incidunt atque aspernatur excepturi repellendus cupiditate quo. Voluptatem nam quia et. Voluptates aut fugit nisi omnis ea autem.",
//   "price": "$290.00",
//   "color": "olive",
//   "stock": 0
//   },
//   {
//   "name": "Fantastic Fresh Tuna",
//   "id": "FantasticFreshTuna53955b54-64a5-4aec-bf6d-5648f1d5994f1557159820047",
//   "selected": false,
//   "description": "Occaecati officia alias beatae ipsa. Aut tenetur vero minima sit in eos nihil ducimus et. Deleniti impedit sed quam eos. Consequatur quia beatae dolor similique.",
//   "price": "$412.00",
//   "color": "olive",
//   "stock": 5
//   },
//   {
//   "name": "Gorgeous Granite Chair",
//   "id": "GorgeousGraniteChair8bc5efdd-8bfd-4fbe-a1b4-f25849ab61bc1557159820047",
//   "selected": true,
//   "description": "Voluptas reiciendis voluptate explicabo hic ad illo saepe quas. Voluptates accusamus soluta eos aut commodi aspernatur sed enim est. Est quia sapiente mollitia quo amet. Id enim blanditiis est cupiditate non sit ut.",
//   "price": "$352.00",
//   "color": "plum",
//   "stock": 0
//   },
//   {
//   "name": "Awesome Rubber Towels",
//   "id": "AwesomeRubberTowels2332a85c-452d-44ba-9e8e-933b8347b6141557159820047",
//   "selected": true,
//   "description": "Molestias sit commodi pariatur dicta enim exercitationem similique est. Sint voluptatum eius necessitatibus autem non qui ea quam eius. A ut dolores quia soluta. Laborum pariatur voluptas quidem sed nemo. Eligendi atque nam aut.",
//   "price": "$394.00",
//   "color": "orange",
//   "stock": 0
//   },
//   {
//   "name": "Practical Metal Chair",
//   "id": "PracticalMetalChairf4fa9420-1757-4932-b457-b6972cd2025b1557159820047",
//   "selected": false,
//   "description": "Vel veniam rerum excepturi maxime. Ipsum rerum quasi veniam maxime. Aut et velit sint hic natus unde. Eius ut est ut tempora et. Possimus qui tempore consequatur quis et labore corrupti consequatur. Qui omnis reiciendis velit tempore vitae adipisci impedit.",
//   "price": "$403.00",
//   "color": "silver",
//   "stock": 1
//   },
//   {
//   "name": "Unbranded Rubber Towels",
//   "id": "UnbrandedRubberTowels467ee6b8-8c0c-40d7-853d-3156d93a7fc11557159820047",
//   "selected": false,
//   "description": "Enim architecto optio sapiente minima. Voluptatum maiores reiciendis commodi voluptatem quisquam. Aut consequatur non aut ut.",
//   "price": "$177.00",
//   "color": "green",
//   "stock": 0
//   },
//   {
//   "name": "Handcrafted Frozen Soap",
//   "id": "HandcraftedFrozenSoap68bb6395-c91a-4c5e-9ea3-fb4f8b68d60b1557159820047",
//   "selected": true,
//   "description": "Animi cumque quaerat porro esse perspiciatis corporis. Ut modi vero voluptatem corrupti quae corrupti velit. Quia natus esse perferendis dolorem quaerat qui non rem. Ullam quia nulla non eos. Incidunt modi voluptas mollitia non id praesentium excepturi tenetur. Recusandae aliquam a dolores reiciendis ex et aut perspiciatis.",
//   "price": "$522.00",
//   "color": "green",
//   "stock": 2
//   },
//   {
//   "name": "Small Wooden Chips",
//   "id": "SmallWoodenChipsca6bc2c7-e4fc-4578-a051-c68580958ec61557159820047",
//   "selected": true,
//   "description": "Consequatur distinctio cum quia consequatur in dolore. Quod et voluptates neque accusamus at dolorem. Voluptatem harum rerum id ut amet fugiat.",
//   "price": "$284.00",
//   "color": "plum",
//   "stock": 1
//   },
//   {
//   "name": "Fantastic Concrete Fish",
//   "id": "FantasticConcreteFish9c4dd3c5-df7d-4ea3-b71d-dd282f19ff161557159820047",
//   "selected": false,
//   "description": "Ad occaecati tempore accusamus veritatis repudiandae dolorem et exercitationem. Ea reiciendis iusto molestiae hic corporis voluptatem et dolorem iusto. Ipsum est aliquid in et occaecati. Consequuntur dignissimos omnis. Nobis repellendus accusantium quas dolore quod quasi consequuntur vero blanditiis.",
//   "price": "$358.00",
//   "color": "yellow",
//   "stock": 5
//   },
//   {
//   "name": "Incredible Fresh Computer",
//   "id": "IncredibleFreshComputerabdc6cae-9b5b-4e85-8909-1037d3a634371557159820047",
//   "selected": true,
//   "description": "Ut voluptates blanditiis reprehenderit magnam numquam facilis unde voluptatem. Voluptate provident maiores iste. Sequi perferendis expedita temporibus dicta dolores accusantium similique. Quia necessitatibus ut.",
//   "price": "$461.00",
//   "color": "olive",
//   "stock": 1
//   }
//   ];

//   let selected = items.filter(value => value.selected === true);

//   // console.log(selected);
//   // console.log(items);

//   let object ={
//     inStock:[],
//     almostOutOfStock:[],
//     outOfStock:[]
//   };

//   selected.reduce(function(result, value){
//     if(value.stock > 2){
//       object.inStock.push(value.id);
//     }
//     else if(value.stock <= 2 && value.stock >0){
//       object.almostOutOfStock.push(value.id);
//     }
//     else{
//       object.outOfStock.push(value.id);
//     }
//     return result;
//   }, object);

  // console.log(object);
const guests =
[
  {
  "name": "Cathy Littel",
  "id": "2755179b-e69c-4bcd-9402-86ba9d77342c",
  "vip": true,
  "attending": true
  },
  {
  "name": "Sylvia Jakubowski",
  "id": "fe2b7674-6db7-4bec-82e6-3271d7a08e28",
  "vip": true,
  "attending": true
  },
  {
  "name": "Aryanna Renner",
  "id": "0d22c44c-20ef-4ab9-a753-4c9a58a77c30",
  "vip": false,
  "attending": false
  },
  {
  "name": "Myrtis Sauer",
  "id": "bd2e7b63-ed73-438d-90ec-7a93af90ac63",
  "vip": true,
  "attending": true
  },
  {
  "name": "Deja Cummings",
  "id": "b1a07236-7314-4136-b768-52455d33db39",
  "vip": true,
  "attending": true
  },
  {
  "name": "Enola Wiegand",
  "id": "fe484ce6-7a00-4fc8-9dbd-4af51a157ba8",
  "vip": false,
  "attending": false
  },
  {
  "name": "Nicholaus Conn",
  "id": "d2744393-84ac-4470-b1e3-93ef1f7023e9",
  "vip": true,
  "attending": true
  },
  {
  "name": "Grady Waters",
  "id": "d2727c97-44b6-4458-80a1-97c7d17cb1b5",
  "vip": true,
  "attending": false
  },
  {
  "name": "Bethel Friesen",
  "id": "7e775112-5cb9-4b6e-b6c2-8b8e43333715",
  "vip": true,
  "attending": true
  },
  {
  "name": "Jerald Rosenbaum",
  "id": "d86e91a3-02c2-41b1-ab65-47bc0e3a91ca",
  "vip": true,
  "attending": false
  },
  {
  "name": "Žygimantas Tveraga",
  "id": "273e582d-1e62-4237-b78b-2ace6feebf72",
  "vip": true,
  "attending": true
  },
  {
  "name": "Verner Schulist",
  "id": "e295a28f-7823-4288-8fdf-ba3676b6c7d0",
  "vip": false,
  "attending": true
  },
  {
  "name": "Leslie McLaughlin",
  "id": "e8c65613-f7af-4933-9029-a75cd41846e2",
  "vip": false,
  "attending": true
  },
  {
  "name": "Gia Bahringer",
  "id": "afe95773-82e7-4c37-bc8e-2e0dba5e337c",
  "vip": false,
  "attending": true
  },
  {
  "name": "Janae Schoen",
  "id": "bbcfbb3a-65c1-4b69-95f2-6327fc371d7a",
  "vip": true,
  "attending": false
  },
  {
  "name": "Percival Williamson",
  "id": "0203d51c-5d69-4952-83e3-fe917e24861b",
  "vip": false,
  "attending": true
  },
  {
  "name": "Catharine Mitchell",
  "id": "19ded5e5-1fc2-4a4e-9a92-a2e308cd8c57",
  "vip": true,
  "attending": false
  },
  {
  "name": "Agustin Lubowitz",
  "id": "0d377a93-a84d-4162-8925-275ae84c4cc3",
  "vip": true,
  "attending": true
  },
  {
  "name": "Emmett Wunsch",
  "id": "7485c09e-b868-4ff2-9f05-5aef0ad0b93e",
  "vip": true,
  "attending": false
  },
  {
  "name": "Caesar Cartwright",
  "id": "92aa5740-0220-4f8e-bd6d-f1319f5ee441",
  "vip": false,
  "attending": true
  },
  {
  "name": "Kristupas Lapeika",
  "id": "2915c199-d322-4178-855e-b6d2b8319307",
  "vip": true,
  "attending": true
  },
  {
  "name": "Hank Glover",
  "id": "555ca930-ec70-48d2-a57f-729073843fd2",
  "vip": true,
  "attending": true
  },
  {
  "name": "Isaac Farrell",
  "id": "ba5124d5-e24c-4a8a-9147-28ca262dd722",
  "vip": false,
  "attending": false
  },
  {
  "name": "Kathryn Hahn",
  "id": "a53185d5-c27b-4a99-84df-3f4ce532f9e5",
  "vip": true,
  "attending": true
  },
  {
  "name": "Napoleon Fay",
  "id": "8d27e0b3-07c7-4f6d-abc9-0766532398f9",
  "vip": false,
  "attending": false
  },
  {
  "name": "Matteo Lind",
  "id": "1f1d3c27-e6a2-4efc-8280-3b61ab8e1ca2",
  "vip": true,
  "attending": false
  },
  {
  "name": "Cleta Swift",
  "id": "c769c845-531b-4ebb-971f-695dba0c165b",
  "vip": true,
  "attending": false
  },
  {
  "name": "Elna Murphy",
  "id": "f9054fa0-3e80-4d39-86d4-ad4399acf894",
  "vip": false,
  "attending": false
  },
  {
  "name": "Richmond Kerluke",
  "id": "278bfa2c-5b01-41a2-8d9f-03eb16eb3d03",
  "vip": false,
  "attending": true
  },
  {
  "name": "Reinhold Bergstrom",
  "id": "85bde615-f56f-4e2b-ae65-573c65d5bcc6",
  "vip": false,
  "attending": true
  },
  {
  "name": "Ernestas Židokas",
  "id": "b3cf206a-2c44-4a93-a5f9-d6713256a9a3",
  "vip": true,
  "attending": true
  },
  {
  "name": "Myah Ebert",
  "id": "e4dc1e0e-be34-46d5-92be-ca38a6a21ab7",
  "vip": true,
  "attending": true
  },
  {
  "name": "Joesph Dickinson",
  "id": "20c51fbe-26e3-4668-a349-f39e2a6c7fff",
  "vip": false,
  "attending": true
  },
  {
  "name": "Rodger Rowe",
  "id": "18f03b1d-337d-4e68-a545-7da7c9a9522a",
  "vip": false,
  "attending": true
  },
  {
  "name": "Lambert Cartwright",
  "id": "69e1603b-032e-4e67-ba88-4eee448a07f3",
  "vip": false,
  "attending": true
  },
  {
  "name": "Carole Reichert",
  "id": "69a74e80-e2e0-4824-861b-6d12d30245a7",
  "vip": true,
  "attending": false
  },
  {
  "name": "Mark Kutch",
  "id": "41b677fb-01ae-4946-bbce-0c30787d1a50",
  "vip": true,
  "attending": true
  },
  {
  "name": "Ricky Stehr",
  "id": "fefdf531-f091-47b4-9033-a4d1f07c556b",
  "vip": true,
  "attending": false
  },
  {
  "name": "Rudolph Graham",
  "id": "f804c7b1-70e9-45a6-89e5-e8218addfa47",
  "vip": false,
  "attending": true
  },
  {
  "name": "Alexzander Morar",
  "id": "611913ce-dfc3-40e6-a064-9ade19166250",
  "vip": true,
  "attending": true
  },
  {
  "name": "Paulius Ruikis",
  "id": "c87c1942-c59c-4951-a038-6a179f1dcd22",
  "vip": true,
  "attending": true
  },
  {
  "name": "Christiana Hessel",
  "id": "9cf435d1-e58b-4663-9ef6-22df822716c1",
  "vip": true,
  "attending": false
  },
  {
  "name": "Name Schulist",
  "id": "3a66d223-b911-4796-b14a-f6e8719a6a73",
  "vip": true,
  "attending": false
  },
  {
  "name": "Velva Lang",
  "id": "c5fe8716-0063-4560-adf4-f854693b9c39",
  "vip": true,
  "attending": false
  },
  {
  "name": "Gia Oberbrunner",
  "id": "c9a27c19-223b-4ff9-b7ef-59a9477954d5",
  "vip": false,
  "attending": false
  },
  {
  "name": "Floy Dach",
  "id": "a2bce0aa-c25a-4230-b805-e8fe5acf679b",
  "vip": false,
  "attending": false
  },
  {
  "name": "Estell Funk",
  "id": "516955ae-d55a-47e9-b190-228d026537cc",
  "vip": false,
  "attending": false
  },
  {
  "name": "Antonio Gerlach",
  "id": "a06e5b42-d2dd-4b64-9a8a-7cbfc4911a57",
  "vip": false,
  "attending": true
  },
  {
  "name": "Rose Roberts",
  "id": "f5235bdc-81af-420f-bc29-dd805d0c88b6",
  "vip": false,
  "attending": false
  },
  {
  "name": "Cameron Johnson",
  "id": "17b3ea6c-d6ea-41e4-bed4-7e133d4b1287",
  "vip": false,
  "attending": true
  },
  {
  "name": "Mantas Barkauskas",
  "id": "e97e26a4-0615-4a3b-bd38-e8fa21b8ea22",
  "vip": true,
  "attending": true
  },
  {
  "name": "Golden Wehner",
  "id": "7d87acb3-33f6-4fbd-bcd5-deef4973187e",
  "vip": true,
  "attending": false
  },
  {
  "name": "Jarred Halvorson",
  "id": "3ca42585-9bd6-4569-b8cf-b5aedb29dbca",
  "vip": true,
  "attending": false
  },
  {
  "name": "Jordon Rosenbaum",
  "id": "6e884657-013d-415e-b46e-9ce837637362",
  "vip": true,
  "attending": false
  },
  {
  "name": "Leon Buckridge",
  "id": "267db560-430e-43a0-81d0-20f03ef5d2ce",
  "vip": false,
  "attending": false
  },
  {
  "name": "Juliana Collins",
  "id": "c478969c-bdad-489d-8461-eaf68e2e6b5c",
  "vip": false,
  "attending": true
  },
  {
  "name": "Hellen Wisozk",
  "id": "e7cd3969-9ab8-4cb0-ad6b-c8c2d0082378",
  "vip": false,
  "attending": true
  },
  {
  "name": "Alisha Heller",
  "id": "d826c24d-a624-405e-84ea-54a5b518fc76",
  "vip": true,
  "attending": true
  },
  {
  "name": "Johathan Leuschke",
  "id": "48fac216-92d2-4fda-8588-c7f06f5ac908",
  "vip": false,
  "attending": true
  },
  {
  "name": "Art VonRueden",
  "id": "eeb8115c-79c2-493d-ab64-ba3a7da8a1b6",
  "vip": false,
  "attending": true
  },
  {
  "name": "Modestas Zauka",
  "id": "eddab916-cb53-4914-bd24-95e4f6392afa",
  "vip": true,
  "attending": true
  },
  {
  "name": "Krystel Cormier",
  "id": "ba5316ae-eeb0-46ba-b925-068ec7821a55",
  "vip": true,
  "attending": false
  },
  {
  "name": "Deborah Jaskolski",
  "id": "05728efc-55bd-4978-acb4-e079aeb66da4",
  "vip": true,
  "attending": false
  },
  {
  "name": "Russel Keeling",
  "id": "03b34e4e-0b43-4b85-8cea-166f573a467d",
  "vip": true,
  "attending": false
  },
  {
  "name": "Gisselle Spencer",
  "id": "ce2d91b2-5613-4c1e-807a-21893f2b5ce4",
  "vip": false,
  "attending": true
  },
  {
  "name": "Nathanael Marquardt",
  "id": "ec5da56c-3e6d-4ca6-aed5-58d6ef3e1281",
  "vip": true,
  "attending": false
  },
  {
  "name": "Maeve Pfeffer",
  "id": "c3440eec-45e5-40c6-9e31-d17bb996dd38",
  "vip": true,
  "attending": false
  },
  {
  "name": "Lelah D'Amore",
  "id": "52ccb909-298d-4f33-b28a-8740d0350204",
  "vip": false,
  "attending": true
  },
  {
  "name": "Kaia Johnston",
  "id": "2503fe95-4586-4bf8-b794-f5b47137c9b9",
  "vip": true,
  "attending": false
  },
  {
  "name": "Tristian Quigley",
  "id": "6ec26608-5534-425b-b8fd-40fffd79cc79",
  "vip": false,
  "attending": true
  },
  {
  "name": "Sandra Saukaite",
  "id": "ea9936cc-5178-44e3-bead-fceb5be19d83",
  "vip": true,
  "attending": true
  },
  {
  "name": "Ward Witting",
  "id": "cfacd1df-8cd5-40da-b7a9-4ecb874465c3",
  "vip": false,
  "attending": true
  },
  {
  "name": "Quincy Kihn",
  "id": "b699291c-5fc8-40d9-a2d0-b8a2802408d9",
  "vip": false,
  "attending": true
  },
  {
  "name": "Teresa Frami",
  "id": "ec443bf3-7810-42f2-873b-cc0e7710656c",
  "vip": false,
  "attending": false
  },
  {
  "name": "Allan Cassin",
  "id": "d868d3e4-28ef-4583-9f9d-e2201967231e",
  "vip": false,
  "attending": true
  },
  {
  "name": "Abdiel Goldner",
  "id": "4bf80e26-3b66-4fa1-9293-0d516646c703",
  "vip": true,
  "attending": true
  },
  {
  "name": "Bruce Fay",
  "id": "de8bd2a8-c3f2-4ce8-bcb2-50922da93d8b",
  "vip": false,
  "attending": true
  },
  {
  "name": "Shea Jacobs",
  "id": "f3b3e3c7-4db1-4d3a-a675-e396b73fe24d",
  "vip": false,
  "attending": false
  },
  {
  "name": "Vada Smitham",
  "id": "8cc8023c-9a94-4899-92fc-06d2492606ff",
  "vip": false,
  "attending": true
  },
  {
  "name": "Itzel Paucek",
  "id": "6e714740-efd2-4860-af3f-07d7d366908c",
  "vip": true,
  "attending": true
  },
  {
  "name": "Vytautas Tenys",
  "id": "73957b82-4840-462f-b52e-d96fb9919a92",
  "vip": true,
  "attending": true
  },
  {
  "name": "Keara Hegmann",
  "id": "5aae7691-5c53-478d-856b-bec1e96b217b",
  "vip": true,
  "attending": true
  },
  {
  "name": "Ethan Roob",
  "id": "3a673709-7836-41de-9ebb-4d9bf2046be3",
  "vip": false,
  "attending": true
  },
  {
  "name": "Maureen Herman",
  "id": "091775c4-b3a4-4f2f-aeac-fca735a3656a",
  "vip": true,
  "attending": false
  },
  {
  "name": "Maci Walter",
  "id": "a589be54-a1c6-4864-8f4a-f50552499fda",
  "vip": true,
  "attending": true
  },
  {
  "name": "Kirstin Schaden",
  "id": "bb530e98-7949-4c21-88c9-1aa95a740aec",
  "vip": false,
  "attending": false
  },
  {
  "name": "Melyna Klocko",
  "id": "82211fdf-ff2d-4ead-b712-968210ab2a2e",
  "vip": false,
  "attending": true
  },
  {
  "name": "Emmanuel Kreiger",
  "id": "1bfb8dab-194a-48cb-8dbb-b062d426902b",
  "vip": false,
  "attending": false
  },
  {
  "name": "Colin Will",
  "id": "170584f8-78a4-4a20-a263-7a60d2432556",
  "vip": true,
  "attending": true
  },
  {
  "name": "Nash Hansen",
  "id": "3e7acfc6-1f8c-47a5-9933-26c8737f81e9",
  "vip": false,
  "attending": false
  },
  {
  "name": "Tautvydas Rudis",
  "id": "e1cb0efd-abcd-43c9-b46f-0d8a6c26e04a",
  "vip": true,
  "attending": true
  },
  {
  "name": "Damian Borer",
  "id": "eb42349e-ad06-4685-89d6-59aa4d444d43",
  "vip": true,
  "attending": false
  },
  {
  "name": "Hobart Christiansen",
  "id": "0d311dfc-cb9c-4f84-9bd5-87db3ccdad27",
  "vip": false,
  "attending": false
  },
  {
  "name": "Morton Mraz",
  "id": "c0554e68-0f9a-49fd-a3d8-fce263be69bc",
  "vip": false,
  "attending": true
  },
  {
  "name": "Elvie Bogisich",
  "id": "5a262f49-ab48-487a-8554-28ae46bf6521",
  "vip": true,
  "attending": false
  },
  {
  "name": "Oleta Johns",
  "id": "05456590-ecd1-4d3b-bfe3-706defa41138",
  "vip": false,
  "attending": true
  },
  {
  "name": "Aleen Mitchell",
  "id": "b6149129-7342-48d7-89df-dff1261d0b3a",
  "vip": false,
  "attending": false
  },
  {
  "name": "Missouri Tromp",
  "id": "085de1d7-8391-4205-ad2b-83bc64c50cc4",
  "vip": false,
  "attending": false
  },
  {
  "name": "Mariane Franecki",
  "id": "6f2ae644-04c2-4495-b961-ec7f4c91e763",
  "vip": false,
  "attending": true
  },
  {
  "name": "Gonzalo Steuber",
  "id": "07459929-de50-4675-ba70-55a06c5a3386",
  "vip": true,
  "attending": false
  },
  {
  "name": "Aistė Vizgirdaitė",
  "id": "6e257380-050a-41c4-87c0-655b98fbaf88",
  "vip": true,
  "attending": true
  },
  {
  "name": "Germaine Treutel",
  "id": "85662fd6-79cf-4dc9-a90c-4b9f1f9df567",
  "vip": true,
  "attending": true
  },
  {
  "name": "Chelsea Braun",
  "id": "5b18c914-d22e-43a1-876f-c45ef1d5c888",
  "vip": false,
  "attending": true
  },
  {
  "name": "Stacey Nolan",
  "id": "7205719e-ae5e-441a-94e0-fa72b7e7876c",
  "vip": false,
  "attending": false
  },
  {
  "name": "Eliseo Roberts",
  "id": "bdd3bbb7-8a3b-45d2-a3d1-03a0219368dd",
  "vip": true,
  "attending": false
  },
  {
  "name": "Clotilde Cummerata",
  "id": "8203ceff-d000-4cf3-a88a-3187331e2b1f",
  "vip": false,
  "attending": false
  },
  {
  "name": "Jonathan Von",
  "id": "d7d09df3-41c9-4500-b928-1411f408e38b",
  "vip": true,
  "attending": true
  },
  {
  "name": "Hermina Gottlieb",
  "id": "ec5948f0-67cc-4c98-b680-8f392f59e42b",
  "vip": false,
  "attending": false
  },
  {
  "name": "Robb Harris",
  "id": "79ab7371-38e0-4d33-91b1-b8bf547395c4",
  "vip": true,
  "attending": false
  },
  {
  "name": "Sedrick Renner",
  "id": "c21a5afd-bb63-41c7-b5de-edcc60dc484c",
  "vip": true,
  "attending": false
  },
  {
  "name": "Agnė Verseckaitė",
  "id": "99f4d90b-6d4f-4b88-813f-a5abcfbf17e6",
  "vip": true,
  "attending": true
  },
  {
  "name": "Madilyn Huels",
  "id": "af5856d1-514b-4688-a84e-549fea83e1c9",
  "vip": false,
  "attending": true
  },
  {
  "name": "Zoila Botsford",
  "id": "beb42573-e183-43be-a3e5-79cb5c245f19",
  "vip": true,
  "attending": true
  },
  {
  "name": "Bret Schroeder",
  "id": "e93d2ab0-4af7-4ed7-be11-333a37bb8477",
  "vip": false,
  "attending": true
  },
  {
  "name": "Marjolaine Sauer",
  "id": "20f539be-e6ff-49dd-ac57-30d039214458",
  "vip": true,
  "attending": true
  },
  {
  "name": "Juston Weissnat",
  "id": "1bd7d4a9-2868-4343-ba72-4ae774c5cc33",
  "vip": false,
  "attending": false
  },
  {
  "name": "Nils Runolfsdottir",
  "id": "3d6a27f3-41ab-4633-9df3-d13823cdb92a",
  "vip": false,
  "attending": true
  },
  {
  "name": "Olin Shields",
  "id": "716f95f1-6b8e-4a2f-86a8-2f3206387660",
  "vip": false,
  "attending": false
  },
  {
  "name": "Russel Howell",
  "id": "b01a247d-b827-4ce3-9e49-862d74af9782",
  "vip": false,
  "attending": false
  },
  {
  "name": "Kobe Boehm",
  "id": "bae48a66-273a-4ede-90de-6ec09d4e4215",
  "vip": true,
  "attending": true
  },
  {
  "name": "Karolina Pečiukonytė",
  "id": "7948870e-bb74-4b75-b4da-cd3155e8c17d",
  "vip": true,
  "attending": true
  },
  {
  "name": "Katarina Corwin",
  "id": "b51d5069-08f6-45c6-9c76-e9aa329022d4",
  "vip": false,
  "attending": true
  },
  {
  "name": "Magdalen Stanton",
  "id": "4fcdf597-66e6-497a-8fcf-91c75511038f",
  "vip": true,
  "attending": true
  },
  {
  "name": "Gertrude Larkin",
  "id": "d6c92dbe-cd85-416e-a3fe-ce457344ac5d",
  "vip": true,
  "attending": true
  },
  {
  "name": "Otilia Walsh",
  "id": "4ce29a1e-c432-4bec-8e43-fe7f51ef2296",
  "vip": false,
  "attending": false
  },
  {
  "name": "Houston Rempel",
  "id": "c085212b-2cae-42f0-9502-327dc7129876",
  "vip": true,
  "attending": true
  },
  {
  "name": "Deontae Kemmer",
  "id": "d26ddc32-03ea-4873-8e35-981e1998ff02",
  "vip": false,
  "attending": true
  },
  {
  "name": "Savanna O'Hara",
  "id": "6a4caf41-3e23-4d9c-9ac5-1775898a5e85",
  "vip": true,
  "attending": true
  },
  {
  "name": "Kendrick Nolan",
  "id": "1256d197-1078-4795-8cb2-e35f033762bc",
  "vip": false,
  "attending": true
  },
  {
  "name": "Rickey Medhurst",
  "id": "b53dfe64-7806-41b0-9cb3-16e7ae4873cd",
  "vip": true,
  "attending": true
  },
  {
  "name": "Simonas Keršulis",
  "id": "289ac377-6e1f-4a5e-ae80-b6f47046abff",
  "vip": true,
  "attending": true
  },
  {
  "name": "Torey Jenkins",
  "id": "fd2e5f47-3a5b-496f-9fd4-5fb64795225f",
  "vip": true,
  "attending": false
  },
  {
  "name": "Jovan Breitenberg",
  "id": "727738f0-6bd6-4a84-a70a-2234ebf37476",
  "vip": false,
  "attending": false
  },
  {
  "name": "Hilbert Fritsch",
  "id": "6d0416b9-f234-4642-995c-bf6a1411e85f",
  "vip": false,
  "attending": true
  },
  {
  "name": "Franz Lakin",
  "id": "50b098f0-7391-44a4-bec3-76f415d1eaa0",
  "vip": true,
  "attending": false
  },
  {
  "name": "Emmitt Murphy",
  "id": "956f1e09-c333-4130-b084-0ccc8ba20b54",
  "vip": false,
  "attending": false
  },
  {
  "name": "Torrey Murray",
  "id": "d20a4149-d632-40d1-af30-5d2861959bf0",
  "vip": false,
  "attending": true
  },
  {
  "name": "Perry Willms",
  "id": "aad37719-ba3c-44bb-82bb-ad32ac7ff390",
  "vip": false,
  "attending": false
  },
  {
  "name": "Ivah Reichel",
  "id": "10771e27-63ea-4080-87de-acc482756365",
  "vip": false,
  "attending": false
  },
  {
  "name": "Faye Rath",
  "id": "7839674b-9aca-4753-b0b0-54ce270897de",
  "vip": false,
  "attending": false
  },
  {
  "name": "Arnas Austinskas",
  "id": "0fc53dfe-58e3-424f-9440-5000dd98c9f0",
  "vip": true,
  "attending": true
  },
  {
  "name": "Evans Moen",
  "id": "d607bb26-5c37-46cc-b9b0-5d56aecacb9d",
  "vip": false,
  "attending": true
  },
  {
  "name": "Vernon Rosenbaum",
  "id": "3eb2e811-347f-4557-b86d-5a5a9920c2c9",
  "vip": true,
  "attending": true
  },
  {
  "name": "Marjolaine Turcotte",
  "id": "4d8b358e-9a6e-4ccc-97f4-33a54d50b152",
  "vip": false,
  "attending": true
  },
  {
  "name": "Makayla Rippin",
  "id": "48894b9a-05a5-4f55-9af7-e7cfbd3e4438",
  "vip": true,
  "attending": false
  },
  {
  "name": "Carolanne Barton",
  "id": "a373a788-ffd6-4cd6-81f5-3ab829277fc8",
  "vip": true,
  "attending": true
  },
  {
  "name": "Aimee Rodriguez",
  "id": "163eb810-f2e9-41c3-8edc-20b74c6a3dec",
  "vip": true,
  "attending": true
  },
  {
  "name": "Tito Gislason",
  "id": "5b89c855-c244-4614-bc9a-fc4a6a93cd83",
  "vip": false,
  "attending": false
  },
  {
  "name": "Reanna Rosenbaum",
  "id": "c7f06af2-2d7c-4451-9974-a0da25aeeb30",
  "vip": true,
  "attending": true
  },
  {
  "name": "Dorthy Franecki",
  "id": "ad30e3d2-ace9-41fb-ba08-7075ba2b5bfa",
  "vip": true,
  "attending": true
  },
  {
  "name": "Pavel Sucharev",
  "id": "58444a23-dc78-4047-a120-81a1f08a6e6e",
  "vip": true,
  "attending": true
  },
  {
  "name": "Norval Simonis",
  "id": "63db522d-db4d-411b-9021-075aca7c5ff3",
  "vip": true,
  "attending": false
  },
  {
  "name": "Colt Schumm",
  "id": "f27954b5-aabb-4c62-bbed-c9df94f6e3c6",
  "vip": false,
  "attending": false
  },
  {
  "name": "Bertrand Considine",
  "id": "b6a2eefd-8712-460d-b6e7-c1a294a622c1",
  "vip": false,
  "attending": true
  },
  {
  "name": "Madeline Schimmel",
  "id": "8b9bd7bd-0f12-4877-a87d-965984c5569f",
  "vip": true,
  "attending": true
  },
  {
  "name": "Durward Mante",
  "id": "77032e98-5105-4ca3-8a1a-a9b0e351366d",
  "vip": true,
  "attending": true
  },
  {
  "name": "Marilyne Conroy",
  "id": "e03b30b2-ec21-461e-af44-9843504fe934",
  "vip": true,
  "attending": false
  },
  {
  "name": "Casey Mante",
  "id": "2889697b-d1e8-4a57-8cd7-f898636142ea",
  "vip": false,
  "attending": false
  },
  {
  "name": "Felton Corkery",
  "id": "c7c8f000-9c1c-4d31-9793-cedf8f8c7565",
  "vip": false,
  "attending": false
  },
  {
  "name": "Cletus Bode",
  "id": "b93eeea4-dc0e-4b96-b373-e924ce423c3c",
  "vip": false,
  "attending": true
  },
  {
  "name": "Lukas Cechanavičius",
  "id": "02259b2a-8260-4a63-bce3-9fd0ec37756b",
  "vip": true,
  "attending": true
  },
  {
  "name": "Efren Kirlin",
  "id": "319a6a31-4551-4144-8385-27097afd4ec3",
  "vip": true,
  "attending": false
  },
  {
  "name": "Bailee Harber",
  "id": "ec932a87-1d8f-4671-9d39-6b40c5d2ece0",
  "vip": false,
  "attending": false
  },
  {
  "name": "Maybelle Berge",
  "id": "38503f92-d1d2-4798-962a-2ba9e993f37a",
  "vip": true,
  "attending": false
  },
  {
  "name": "Nikita Heathcote",
  "id": "d6dadeb8-fcf1-4cde-b912-eed7a76163b6",
  "vip": false,
  "attending": false
  },
  {
  "name": "Dina Emmerich",
  "id": "06b2a18b-2b45-41f6-8f0e-7f0980028130",
  "vip": false,
  "attending": true
  },
  {
  "name": "Katlynn Nitzsche",
  "id": "4b782b11-30c5-4643-81e2-52a1f0eb912d",
  "vip": false,
  "attending": false
  },
  {
  "name": "Jace Hoeger",
  "id": "fc9ab5e5-60c9-4c19-8e13-9ed16c4bf981",
  "vip": true,
  "attending": true
  },
  {
  "name": "Christa Heathcote",
  "id": "ecab89d2-22e1-475d-a492-7c45bb7336e3",
  "vip": false,
  "attending": false
  }
  ];

  //guests

  // console.log(guests.some(guest=>guest.name == 'Paulius Ruikis' && guest.vip ));

  function checkNameAndStatus(array,name){
        if(array.some(guest=>guest.name == name && guest.vip )){
          console.log('you on our list and your status VIP')
        }
        else if(array.some(guest=>guest.name == name && guest.vip===false )){
          console.log('you on our list and your status is not VIP')
        }
        else{
          console.log ('you not on our list')
        }
    }
  
    console.log(checkNameAndStatus(guests,'Christa Heathcote'));


    const list = 
    [
      {
      "name": "Delta Johns",
      "id": "d6ab8943-cc53-423e-bc25-6a1618cc5dda",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Leilani Haag",
      "id": "773e5215-850d-41e5-a49d-1d786abc3dc4",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Vincenzo Doyle",
      "id": "06cd480f-b1fc-4c94-bbcd-b9edcc57892e",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Cielo Bayer",
      "id": "4e4d307c-41a2-4d9b-97f5-7919a10a0844",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Jovani Murazik",
      "id": "38b1fac1-d79b-4f3a-a4cf-bd3e1c33af17",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Brant Stokes",
      "id": "f75dc8ea-29d8-44d0-9dce-38bbe95e139d",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Halle Gleichner",
      "id": "ce9b38ec-0e5f-4b60-8235-9e3578b81f34",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Woodrow Kirlin",
      "id": "26d5a93e-3678-4d76-b0f9-d70805098990",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Kenneth Walker",
      "id": "199575d6-dce6-46da-8e35-b30b48c76479",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Kayleigh Bayer",
      "id": "702d7e20-cb79-4970-a97c-a1d8adec4c8c",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Žygimantas Tveraga",
      "id": "f5e60cd6-4d13-4068-8e3a-8037c4e00223",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Sandra Yost",
      "id": "cc44cace-9e9f-4e08-9fcf-caa38931db05",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Elinor West",
      "id": "cb37c838-1728-4c23-a781-a941ed2f504f",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Leo Leuschke",
      "id": "717c2b30-205d-4367-9bbb-9643ff78b604",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Modesto King",
      "id": "44484515-d0a2-4de9-a15b-d89ebfd5d7f1",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Calista Ratke",
      "id": "ec080b7a-2729-4f10-8827-ce3dbecdc4eb",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Kariane Marquardt",
      "id": "caad676f-2851-493b-a19d-68becf935c28",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Enid MacGyver",
      "id": "2b62d027-38da-4dc1-bd94-aa82508163a4",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Lucas Huels",
      "id": "6d4842e7-5381-45ce-9e4a-1c27fa67376f",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Zoie Prohaska",
      "id": "3e8d4e72-f821-40b3-a784-866cf0c3a527",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Kristupas Lapeika",
      "id": "2029ad8a-a92b-4075-8c9f-6bb8fb7a0c37",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Vance Klein",
      "id": "2d3c21b2-8c74-4f70-a48d-6b6b21659ecb",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Fae Swaniawski",
      "id": "d614b91f-331c-4db5-9f86-1f13509cbd28",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Dudley Runte",
      "id": "87b4e862-8da2-4e8d-adb3-5cf5b6940b83",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Sophia McDermott",
      "id": "f5f4abed-69fd-4b0b-922c-cad83e89fef0",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Cameron King",
      "id": "124db89a-6ffc-49a6-a0ce-03f20a565e7c",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Trey Skiles",
      "id": "31e9e12c-477f-44d1-925e-fd74609f82c6",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Demarco Johns",
      "id": "50ba2a2b-7bac-45a3-895d-815834e4e455",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Samir Price",
      "id": "87a6b3c5-c27e-402d-a52b-ea2146565182",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Marlon Wunsch",
      "id": "0a5981c2-bad2-46e9-99ce-befb5d5780ce",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Ernestas Židokas",
      "id": "0e543696-d971-48a3-b251-12711010eddf",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Mckayla Torphy",
      "id": "ae5f5c70-d404-4905-bdac-e7036fca9cb6",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Robyn Raynor",
      "id": "27bbdc7c-ddb9-4349-a225-c7941e2caebd",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Brian Morissette",
      "id": "6a690ceb-0f7e-4761-88fd-c8f1d20ed2be",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Scot Wolf",
      "id": "77d84a17-da69-4ab6-b70d-b1b19502e0c4",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Dayne Conroy",
      "id": "015ea29b-527a-4bf8-84a3-839139d00c50",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Uriah Schmidt",
      "id": "4664c8b6-00ae-4421-9319-8e1e5ae70567",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Ford Daugherty",
      "id": "4d41a0bc-cc6c-4598-96a1-8db9f16520fb",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Max Lubowitz",
      "id": "dee25e71-80f9-4d7f-a6cf-54f609fac223",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Milan Ruecker",
      "id": "f3812a82-9e6e-4504-ace1-ab0dad85e460",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Paulius Ruikis",
      "id": "0dee41c2-077d-48b1-aa45-84667bbe81bf",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Itzel Grant",
      "id": "3f027c94-2a51-4947-aeff-230add296859",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Gordon Durgan",
      "id": "fb4ece34-9746-468a-b06c-f5d07143ed40",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Ramon Kutch",
      "id": "cdf7955d-7386-420a-a46e-1ae3a20df867",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Harmon Rohan",
      "id": "28db6f66-0f78-4ee9-a4ea-a08001af81c5",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Gabrielle Swaniawski",
      "id": "c3cd0b02-7ea4-44d3-b7d1-10ffa92ea12a",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Alden Abbott",
      "id": "cd06885b-f1b4-4217-8bcc-61d0bd0aaa1d",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Leon Roob",
      "id": "038be58f-62ab-4a01-91b6-7abf5dba535a",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Christop Armstrong",
      "id": "b0b54b92-844c-4411-a8a1-fe64687082d8",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Winfield Howe",
      "id": "c423c2ce-7449-4100-b245-445477ddcce6",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Mantas Barkauskas",
      "id": "a130ba34-84b0-4c2d-af5f-5f1969c908c9",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Chelsie Kihn",
      "id": "f3c93c8a-7a53-4023-afef-ddbdba295591",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Lillie Ondricka",
      "id": "9d6a351b-03f4-4db5-9130-26369a745c03",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Joanie Harber",
      "id": "3a456352-febc-4022-903b-d6225c0bea5c",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Fredy Littel",
      "id": "71fd23a5-e312-4cc3-a6b0-ed1a258dad06",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Horace Kuhlman",
      "id": "be90a6a9-d151-4eba-8ab5-cfe69868ac0a",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Kathleen Yundt",
      "id": "82ff673f-3c36-43c2-9f3b-1fa41918c4da",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Marcelo Effertz",
      "id": "7478c3fb-58ed-47b8-a080-2d71df387c69",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Ephraim Prosacco",
      "id": "563f5705-fd23-42f6-b612-fbeb4ea19cf1",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Jan Boehm",
      "id": "8e3f9d8c-90e1-4c56-a6f7-8f7540cf851b",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Modestas Zauka",
      "id": "c2d4c9d2-030a-478d-9255-65334254ac26",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Lloyd O'Reilly",
      "id": "9a860c60-5410-4b86-83da-806035533e12",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Malinda Ferry",
      "id": "0239ef85-66d8-4c0a-8ad8-7f6aa428c3f5",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Cornell Bradtke",
      "id": "1054874d-73cc-4acf-8413-e6dea77f23aa",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Dallin Bruen",
      "id": "56118537-439f-4fda-8e6c-5759567639e2",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Thad Barton",
      "id": "7abe0119-77b8-4077-b62a-e21458713a21",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Jerel Mayer",
      "id": "dcdd0fe8-12ef-4b45-ab43-9e9e1cdf72f2",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Richie Berge",
      "id": "31974ceb-bd4f-468a-a9cc-0e8b0475bc06",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Filomena Watsica",
      "id": "e57ee541-af83-4fc8-b932-0fa73d445612",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Nicklaus Kunde",
      "id": "56639c0f-7e67-466f-9943-4359b4734054",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Sandra Saukaite",
      "id": "6771358b-bff0-4c26-9920-016445d544d6",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Aiyana Rowe",
      "id": "fa360dd9-7ad6-411f-8f10-479a803385e5",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Monserrate Stroman",
      "id": "39b651c9-33cf-4047-a9b6-6f893b2f747b",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Bruce VonRueden",
      "id": "942668a8-9284-45e6-8f94-398aef8cbbca",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Jairo Greenholt",
      "id": "936abf78-9691-4aa7-ae61-82c154890d37",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Kiel Howe",
      "id": "0f0d6cd2-1f24-4f57-9ceb-23e90da327eb",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Destiny Becker",
      "id": "dfb2a1ca-e6b3-4efc-b340-8b8ed23cfc64",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Clifford Ernser",
      "id": "51078da7-4015-4850-8a36-93fb37695e22",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Stacey Franecki",
      "id": "5e959915-3b4b-4065-9a5a-6c18d80f8e36",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Gretchen Wolff",
      "id": "5b1a5cc9-6481-423b-87c8-57fdfbd3cec5",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Vytautas Tenys",
      "id": "1b85bef2-f6f9-4932-b34a-5ecd99fa1b5a",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Bertha Champlin",
      "id": "efc89764-a2f6-44bb-ae36-fa9e7f468f2d",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Zella Conn",
      "id": "d1b93dda-db90-47d6-941a-f114ef07a1f8",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Maxine Homenick",
      "id": "09563dd5-172c-46b5-8d42-24d6abadb9aa",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Aida Schulist",
      "id": "b70db2f5-2d24-4861-8918-3f201b912509",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Emmanuel Okuneva",
      "id": "1a0e3f95-bad1-41a1-b049-4ddf31147c0c",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Willis Klocko",
      "id": "992556df-28be-4c11-96cb-8f30a142dc6e",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Jadyn Bailey",
      "id": "7e439b30-7479-481a-bcbd-a776723e2024",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Brad Pollich",
      "id": "012477c5-0cfe-447d-95c6-cfd10a6c5111",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Johnathon Funk",
      "id": "d9fe152f-6650-4881-b081-a4307cbeec1a",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Tautvydas Rudis",
      "id": "fa145615-d00f-4186-bf87-e2e0cf213fc6",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Naomi Wunsch",
      "id": "49595ef8-ccbb-425e-89b1-cbc32501819c",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Janet Yost",
      "id": "cdc913b9-4f34-4489-8034-0420f5b13a83",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Carlee Borer",
      "id": "30ca44a0-700e-4721-9742-cc4d94e2103b",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Braeden O'Keefe",
      "id": "9f5022e8-1541-4356-84fa-baa0539e9ee6",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Mathew Schulist",
      "id": "bc713cf5-5bc5-4c01-a09a-e412ee719209",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Kallie Ritchie",
      "id": "3fc55c9d-a464-4d28-9634-ce5ca8232aa5",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Octavia Borer",
      "id": "90e5b50e-16b2-4f39-94c0-976d3fd5a360",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Leda Ryan",
      "id": "d4c6f645-3115-4723-b05c-9b17ea7acce2",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Teagan Goodwin",
      "id": "22f6b808-dbbc-42e8-899f-b06004f2ed1a",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Aistė Vizgirdaitė",
      "id": "4391dd9c-fc10-4aae-bdad-ea3b101f1e19",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Kyler Rippin",
      "id": "f5ffae33-8b45-44a1-a6f1-4655fc71d0ec",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Samanta Mante",
      "id": "b834472a-6e69-4ebd-9b97-5efa770cf171",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Camryn Hettinger",
      "id": "a980d33d-acb1-4ae7-9a41-e2e8ec09313a",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Carmel Lemke",
      "id": "b02dc62c-ea41-4334-a07e-9a5520e553fc",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Tristin Crist",
      "id": "8ab841da-e360-457d-8c01-dc4448903f9f",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Martine Torp",
      "id": "b0aff419-e952-4e80-8b6f-cd4f7aaec328",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Ardith Rippin",
      "id": "48b62d8e-20bc-4015-b8a5-69124b601b2f",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Jazmyn Spinka",
      "id": "5ddff510-85a2-4f82-b543-a1b1161ecd42",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Alexandro Satterfield",
      "id": "750e0354-43f0-4f26-bc7c-d87249c800d3",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Agnė Verseckaitė",
      "id": "43354a79-759f-4a53-9bdc-244856a0bf0d",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Anita Gislason",
      "id": "85dd9edb-bdab-4976-8134-7a12e1791fc2",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Lauretta Nienow",
      "id": "dc33007a-fcc6-4ef3-92ad-c4a95f43563b",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Yoshiko Quitzon",
      "id": "6a519e2b-5073-4850-bdb3-d709cabf09d4",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Adella Mohr",
      "id": "805412e1-41ce-46c5-8fb8-5cb3b05bf6bb",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Kaleb Goldner",
      "id": "99d2f43a-e96b-4a3e-b457-8fdfae8b5b71",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Rodrick Pollich",
      "id": "4c4bc988-6291-4e82-a713-c417944782d9",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Andres Considine",
      "id": "7d7ce3dc-56c6-4fdc-a1ea-3bca36728155",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Antonietta Brekke",
      "id": "a22e0608-2cf0-4992-9af4-f9cc603dd43d",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Onie Fahey",
      "id": "854bddfb-ddfc-42c4-8c78-210424463518",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Karolina Pečiukonytė",
      "id": "a41a64e9-8eac-43e7-85e5-6948e4b7b9db",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Mason Mayer",
      "id": "b984928a-b2ab-469d-bba2-0540826f494a",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Delpha Thompson",
      "id": "879716b3-6409-494f-8cf1-7c732a98ed23",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Michale Kris",
      "id": "e2c4079f-c129-4ddc-864d-c414eb1df191",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Estrella O'Hara",
      "id": "4328df52-acc4-471d-a20c-e99f0539ac20",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Gardner O'Kon",
      "id": "dce6e550-e031-402c-b7c1-e8cae2515d58",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Buck Schmitt",
      "id": "d0e03502-63b5-4c6a-916f-9684b605d9d8",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Audra Schaefer",
      "id": "cddc6340-b8d0-44c5-bbc8-2768b368a9d4",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Omari Kuphal",
      "id": "373d8d7f-7358-4ece-9585-f4dd4f6f7cbf",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Jewel Huels",
      "id": "4539e5b8-dadf-407a-a675-ab7da0dbd6df",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Simonas Keršulis",
      "id": "6bfcb4ed-fff1-4101-bb74-226ac0ca2233",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Kiarra Hayes",
      "id": "35e3e670-e098-4dfb-a9a9-4a3cc1c2a3f0",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Domenico Champlin",
      "id": "e4d7c36e-5135-4f9d-9786-1c3f2e55ea7b",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Novella Hoeger",
      "id": "0fe82eee-1ec2-467a-8b7b-eb6b7a5f23c7",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Elvis Streich",
      "id": "cc615755-3e5c-4762-a1e6-39dc5d6a4303",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Austyn Wunsch",
      "id": "3804b4aa-d547-4d5a-89b9-0dc10aab3bb9",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Adrien Botsford",
      "id": "be277e23-1554-443b-b8e6-6c9e1791e4f6",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Barton Smitham",
      "id": "bdd78c50-cce9-4ec4-946e-00bdad1c55b4",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Flo Mills",
      "id": "6f7d65f4-81f5-4290-a974-83732e3bbc48",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Augustine Littel",
      "id": "8f2325f4-50f8-4c30-97b8-a51cc0ad2051",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Arnas Austinskas",
      "id": "c8f9f4f8-6be9-480b-a0aa-494bd2d3617f",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Shemar Bartell",
      "id": "c63a3df8-4237-4fa1-94ba-6866bf57df2c",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Paxton Walker",
      "id": "38b53473-7ac7-4760-941d-1d0f04b33028",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Berniece Ferry",
      "id": "c51788a1-ea76-4874-a93f-18c5082f8e63",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Grayson Kovacek",
      "id": "0464383a-9bc6-404f-a966-28f518f71c40",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Bryce Ondricka",
      "id": "8b1e09db-e708-4611-a9cf-00d2931fd314",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Jules Donnelly",
      "id": "986543f4-bf26-4a33-b8a4-3192a3be2022",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Jazmyne Altenwerth",
      "id": "efe297a9-3641-464c-801e-801e7d2caaac",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Sydnie Rath",
      "id": "5909e478-919e-4b0c-8cff-a4141c7e10c4",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Marietta Bogisich",
      "id": "e06c286f-040e-4f36-bc99-9bc3fa8beb26",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Pavel Sucharev",
      "id": "bd863f5a-40ec-42ba-b4d8-17c7cd26596d",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Elizabeth Dietrich",
      "id": "f97a5b11-849c-4e07-9d2f-14187be4d155",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Marta Heathcote",
      "id": "19cfc843-91fc-41e1-825c-f461cdc26ba9",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Dominique Collier",
      "id": "0ed09a08-5d39-4300-a16e-e10a456afb70",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Noble Kiehn",
      "id": "dbe0ff47-3814-4030-90eb-f371a9bc9245",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Palma Hermiston",
      "id": "2a5ee0c0-4517-4eae-98db-936088c91822",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Dena Koss",
      "id": "812f53af-3f15-4c54-8433-ae81df4f756c",
      "plusOne": false,
      "attending": true
      },
      {
      "name": "Tavares Larkin",
      "id": "7f4d25c2-35fc-4302-95a0-25cf06c5b223",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Cecile Eichmann",
      "id": "dc6b2ba1-3ee4-4312-81b8-455e334efe2c",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Abdiel Hauck",
      "id": "71e4cb09-26c7-4a62-8810-a29d44f849f0",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Lukas Cechanavičius",
      "id": "c6c0a7b9-2dfb-4487-be1b-a994a463dd41",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Veronica Fahey",
      "id": "afbed578-07e9-479c-8224-ff0fb5a2ec1b",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Providenci Mohr",
      "id": "4cb87d4e-ab64-4207-a3c5-af42189aa61c",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Landen Kunde",
      "id": "3ac12ab7-50dc-408a-8189-a00bd68b7565",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Gerry Rowe",
      "id": "fb227d0a-96e9-47c6-a270-18298ea21c8f",
      "plusOne": true,
      "attending": true
      },
      {
      "name": "Ewell Gislason",
      "id": "88693d7f-af1b-4854-bc98-96a5f88d2bd7",
      "plusOne": false,
      "attending": false
      },
      {
      "name": "Rosalyn Beer",
      "id": "fcbe1e0f-8d14-41db-9dc6-2dbc2b83951d",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Emerald Zboncak",
      "id": "a7c5e2e6-49f6-458d-8f3d-e00a8e05888e",
      "plusOne": true,
      "attending": false
      },
      {
      "name": "Noel Lehner",
      "id": "5864c36a-d092-436f-8faa-c3459638e2c4",
      "plusOne": false,
      "attending": true
      }
      ]; 

      let attending = list.filter(value => value.attending);
      console.log(attending);
      console.log(list);
      console.log(attending.every(guest=>guest.plusOne));
      console.log(list.some(guest=>guest.attending));
