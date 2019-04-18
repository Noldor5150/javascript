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

let firstButton = document.getElementById("click");
firstButton.addEventListener("click", function(event){
    document.getElementById("click").textContent = "GOTCHA";
    console.log(event);
  });

  let secondButton = document.getElementById("pull");
  secondButton.addEventListener("dblclick", function(event){
    document.getElementById("pull").textContent = "PULLED";
    console.log(event);
  });

  let thirdButton = document.getElementById("fury");
  thirdButton.addEventListener("mouseover", function(event){
    event.target.style.color = "orange";
    document.getElementById("fury").textContent = "EVILLLL";
    var element = document.getElementById("myDiv");
    element.classList.add("cyan");
    console.log(event);
});
  