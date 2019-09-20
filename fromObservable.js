
const btn1 = $('#btn1');
const fstInput = $('#fstInput');
const outPutDiv = $('#outPutDiv');

const numberArr = [11, 33, 53, 33, 22, 67];




const numberArr1$ = Rx.Observable.from(numberArr);
numberArr1$.subscribe(
	function (v) {
		console.log(v);
	},
	function (err) {
		console.log("Error:", err);
	},
	function () {
		console.log("Complete");
	});


const numberArr$ = Rx.Observable.from(numberArr);
numberArr$.subscribe(v => {
	console.log(v);
    },
	err => {
		console.log("Error: ", err);
	},
	() => {
		console.log("Complete Done");
	});

