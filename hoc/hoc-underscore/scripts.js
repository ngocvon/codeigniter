$(document).ready(function() {
	var number =[1,2,3];
	var sum = _.reduce(number,function(total,item,index,number){
		if(index == 1){
			console.log(number[0]);
		}
		return total + item;
	});	
});
// _.each
//_.map
//_.find()
//_.filter()
//

$(document).ready(function() {
	var numbers =[1,2,3];
	var found = _.find(numbers,function(num){
		return num % 3==0;
	});
	console.log('find',found);
});

$(document).ready(function() {
	findWhere();
	reject();
	every();
	find();
});

function findWhere(){
	var people=[
		{name:"be",age:21},
		{name:"chi",age:22},
		{name:"nho",age:23}
	];
	var found=_.findWhere(people,{age:21});
	console.log(found.age);
}
function reject(){
	var numbers = [1,2,3,4,5,6];
	var old = _.reject(numbers,function(number){
		return number % 2 ==0;
	});
	console.log(old);
}
function every(){
	// return boolean;
	var numbers = [1,2,3,4,5,6];
	var truth = _.every(numbers,function(number){
		return number > 0;
	});
	console.log(truth);
}
function find(){
	// find return number ;
	// filter return array
	var numbers = [1,2,3,4,5,6];
	var found = _.filter(numbers,function(number){
		return number % 3 ===0;
	});
	console.log(found);
}
function some(){
	// return boolean;
	var numbers = [1,2,3,4,5,6];
	var truth = _.some(numbers,function(number){
		return number>0;
	});
	console.log(truth);
}