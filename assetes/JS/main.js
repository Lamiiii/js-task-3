


// task

// function myNumber(a,b){
//     if(a>b){
//         console.log("a b-den boyukdur");
        
//     }else if(a,b){
//         console.log("a b-ye beraberdir");
        
//     }else{
//         console.log("a b-den kicikdir");
        
//     }
// }


// myNumber(10,8);



let students = [

    { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

    { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

    { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

    { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

    { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

    { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

    { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

    { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

    { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 }

];

//first
// function myEven(array){     
//     let newArray=[];
//     for(let i=0;i<array.length;i+=2){
//     newArray.push(array[i])
   
    
//     }
   
//     return newArray;
// }

// console.log(myEven(students));


// second
// function myOddId(array){
//         let newArray=[];
//     for(let i=0;i<array.length;i++){
//        if( array[i].id % 2 !==0){

//            newArray.push(array[i].name) 
//        }
//    }
   
//     return newArray;
//     }



// console.log(myOddId(students));


// third

// function myLet(array){
//     let newArray=[];
//   for(let i=0;i<array.length;i++){
//    if(array[i].age>20){
//     newArray.push(array[i].age)  
//    }
//   }
//   return newArray;
// }

// console.log(myLet(students));


//fourth


// function myEvenArray(array){
//    let newarray=[];
//     for(let i=1;i<array.length;i++){
//      if(array[i].grade>90 && array[i].id %2===0){
//       newarray.push(array[i]);

//      }
//     }
//     return newarray;
// }
// console.log(myEvenArray(students));




// fifth


// function myNewArray(array){
//     let newArray=[]
//     for(let i=0;i<array.length;i++){
//         if(array[i].grade===95 || array[i].grade===100){
//             newArray.push(array[i].name)
            
//         }
//     }
//     return newArray;
// }

// console.log(myNewArray(students));




// sixth

// let newArray=[];
// let A=prompt("Bir eded daxil edin");
// for(i=1;i<=1000;i++){
//     if(i%A===0){
//         newArray.push(i)
//        }            
// }
// console.log(newArray);


// ninth

function fibonacci(N) {
    if (N < 0) {
        return "N müsbət ədəd olmalıdır.";
    } else if (N === 0) {
        return 0;
    } else if (N === 1) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i <= N; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

let N = parseInt(prompt("N ədədini daxil edin: "));
console.log(`${N}-ci Fibonaççi ədədi: ${fibonacci(N)}`);


