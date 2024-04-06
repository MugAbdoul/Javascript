// var myName = "MJohn Deo";

// console.log(typeof myName);

// const x = 22;
// {
//     const x = 90;
//     console.log(x);

//     {
//         const x = 77;
//         console.log(x);
//     }
//     {
//         const x = 45;
//         console.log(x);
//     }
// }
// console.log(x);

// const arr1 = ["pankaj", "sumit", "chandan", "ajay"];

// console.log(arr1);

// arr1[2] = "Narayan"; // possible

// console.log(arr1.toString());

// let test = 12;
// function foo(){
//     let test = 100;
//     console.log(test);

// }
// foo();
// console.log(test);


// function* abd(){
//     yield "a";
//     yield "b";
//     yield "c";
// }
// const generator = abd();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// function* map(array, mapFn) {
//     for(let item of array){
//         yield mapFn(item);
//     }
// }


// const array = [1,2,3,4,5,6,7,8,9];
// const gen = map(array, (item)=> item**2);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// function* generatora() { 
// 	const value = yield 1; 
// 	const values = yield 2; 
// 	console.log(value); 
// 	console.log(values); 
// } 

// const iter = generatora(); 

// iter.next(); 
// iter.next('Mugisha', 'abdoul'); 
// iter.next('Mugisha', 'abdoul'); 
// // iter.next(); 
// // iter.next('hello');
// // iter.next('Mugisha');
// // iter.next('Abdoull');


// function Func1() { 
// 	// console.log('one'); 
// 	return 'one'; 
// } 
// function Func2() { 
// 	// console.log('two'); 
// 	return 'two'; 
// } 
// function Func3() { 
// 	// console.log('three'); 
// 	return 'three'; 
// } 

// // Three expressions are 
// // given at one place 
// let dx = (Func1(), Func2(), Func3()); 

// console.log(dx);


function gfg() {
	// Illustration of in operator 
	const array = ['geeks', 'for',
		'geeks']

	// Output of the indexed number 
	console.log(0 in array);

	// Output of the Value 
	console.log('for' in array);

	// output of the Array property 
	console.log('length' in array);
}
gfg();
