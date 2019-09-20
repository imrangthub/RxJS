
const btn1 = $('#btn1');
const fstInput = $('#fstInput');
const fstoutPutInput = $('#outPut');


const btnStream$ = Rx.Observable.fromEvent(btn1, 'click');
btnStream$.subscribe(
	function (e) {
		console.log(e.target.innerHTML);
	},
	function (err) {
		console.log("Error:", err);
	},
	function () {
		console.log("Complete");
	});


const fstInputStream$ = Rx.Observable.fromEvent(fstInput, 'keyup');
fstInputStream$.subscribe(
	function (e) {
		console.log(e.target.value);
	},
	function (err) {
		console.log("Error:", err);
	},
	function () {
		console.log("Complete");
	});


const mousemoveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
mousemoveStream$.subscribe(
	function (e) {
		console.log('X:'+e.clientX+' Y:'+e.clientY);
	    outPut.append('<h2> X:'+e.clientX+' Y:'+e.clientY+'</h2>');
	},
	function (err) {
		console.log("Error:", err);
	},
	function () {
		console.log("Complete");
	});




