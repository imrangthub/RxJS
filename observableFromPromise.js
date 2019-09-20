
const btn1 = $('#btn1');
const fstInput = $('#fstInput');
const outPutDiv = $('#outPutDiv');


finalEvent = function () {
	console.log("This is my Final Event");
}

yourNextEvent = function () {
	console.log("This is my next Event");
}

const myPromise = new Promise((resolve, reject) => {
	console.log("Promise just Create");
	setTimeout(() => {
		resolve("Hello from Promise");
	}, 2000);
});

// myPromise.then(val => {
// 	console.log(val);
// 	yourNextEvent();
// });

// const suructPromise$ = Rx.Observable.fromPromise(myPromise);
// suructPromise$.subscribe(val => {
//   console.log(val);
// });


// function getGithubUser(userName){
// 	return $.ajax({
// 		url:'https://api.github.com/user/'+userName,
// 		dataType: 'jsonp'
// 	});
// }
// console.log(getGithubUser('imrangthub'));


function getGithubUser(userName){
	return $.ajax({
		url:'http://dummy.restapiexample.com/api/v1/employees',
		dataType: 'jsonp'
	});
}
console.log(getGithubUser('imrangthub'));


// function getGithubUser(userName){
// 	return $.ajax({
// 		url:'http://dummy.restapiexample.com/api/v1/employees',
// 		dataType: 'jsonp'
// 	}).promise();
// }

// Rx.Observable.fromPromise(getGithubUser('imrangthub'))
// .subscribe(res =>{
// 	console.log(res);
// })









