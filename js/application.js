var app = {

	
	
}


const btn1 = $('#btn1');


const btnStream$ = Rx.Observable.fromEvent(btn1, 'click');


btnStream$.subscribe(
function(e){
	console.log("BtnClick");
},
function(err){
	console.log("Error:",err);
},
function(){
	console.log("Complete");
});



