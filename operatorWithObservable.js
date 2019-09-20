
const btn1 = $('#btn1');
const fstInput = $('#fstInput');
const outPutDiv = $('#outPutDiv');


// const dataSource$ = Rx.Observable.interval(1000)
// .take(5);

// dataSource$.subscribe(
// 	res => {
// 	console.log(res);
// });


// const dataSource$ = Rx.Observable.range(5, 10);

// dataSource$.subscribe(
// 	res => {
// 	console.log(res);
// });



// const dataSource$ = Rx.Observable.interval(1000)
// .take(10)
// .map(v => v * 2);


// dataSource$.subscribe(v => {
// 	console.log(v);
// });


// const dataSource$ = Rx.Observable.from(['IMRAN', 'hossain', 'babu'])
// .map(v => v.toUpperCase())
// .map(v => 'I am '+v);

// dataSource$.subscribe(v => {
// 	console.log(v);
// });


function getGitBubUser(userName){
	return $.ajax({
		url:'https://jsonplaceholder.typicode.com/posts',
		dataType: 'jsonp'
	});
}

//console.log(getGitBubUser('bradtraversy'))

// Rx.Observable.fromPromise(getGitBubUser('bradtraversy'))
// 		.map(res => res)
// 		.subscribe(data => {
// 			console.log(data);
// 		});


// const source1$ = Rx.Observable.interval(2000).map(v => 'Merge 1');
// const source2$ = Rx.Observable.interval(3000).map(v => 'Merge 2');

// Rx.Observable.merge(source1$, source2$)
// //.take(5)
// .subscribe(val => {
// 	console.log(val)
// });


const myInterVal$ = Rx.Observable.interval(1000);

const dataSource$ = new Rx.Observable(myInterVal => {
	console.log("Observable just Create");

	myInterVal$.subscribe(val => {
		if(val%2==0){
			myInterVal.next(val);
		}
	});

	

});

dataSource$.subscribe(val => {
	console.log(val)

});


		











