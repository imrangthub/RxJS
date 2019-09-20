
const btn1 = $('#btn1');
const fstInput = $('#fstInput');
const outPutDiv = $('#outPutDiv');


const dataSource$ = new Rx.Observable(myObserver => {
	console.log("Observable just Create");

	myObserver.next("First value send");
	myObserver.next("Second value send");

	setTimeout(()=>{
	myObserver.next("Third value send"); 
	myObserver.complete();
	}, 1000);

	setTimeout(()=>{
		myObserver.next("Third .1 value send"); 
		}, 2000);


	// myObserver.error(new Error ("Some Error"));
	

	myObserver.next("Fouth value send");

});


dataSource$.subscribe(
	val => {
		console.log(val);
	},
	err => {
		console.log("Error: ", err);
	},
	complete => {
		console.log("Complete !");
	});







