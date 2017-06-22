var box = document.getElementById('display');

function toScreen (x) {
	box.value+=x;
	if(x==='c'){
		box.value='';
	}
}

function answer(){
	x=box.value;
	x=eval(x);
  box.value=x;
}

function power () {
	x=box.value;
	x=eval(x*x);
	box.value=x;

}
