$(document).ready(function() {
	//each();
	map();
	//forEach();
	//Hfor();
});
// _.each
//_.map
//_.find()
//_.filter()

var reduce =()=>{
	var number =[1,2,3];
	var sum = _.reduce(number,function(total,item,index,number){
		if(index == 1){
			//show lui lai phia sau 1 gia tri
			console.log(number[0]);
		}
		//console.log(item);
		return total + item;
	});
	//console.log(sum);
}


var arrayMap=[
	{
	"one":1,
	"one1":22,
	"one2":33,
	"ft351": [
		{
			"lang": "vi",
			"tv360": "yyy",
			"tv361": "yyyyyyy",
			"id": "5aff99da3c93e1f51ae7edb8"
		}
	]
	},
	{one:2},
	{three:3}
];

var obj={
	one: 1,
	two: 2,
	three: 3
}

var array1=[1,2];
var array2=[4,5];

var map =()=>{
	_.map(array1,array2,_.first);

}

var each=()=>{
	_.each(arrayMap,function(value,key){
		console.log('value',value.one);
	});
}

var forEach =()=>{
	arrayMap.forEach(function(value,key){
		console.log('abc',value.one);
		_.each(value.ft351,function(val,key){
			//console.log('def',val.id);
		});
	})
}

var Hfor=()=>{
	for(var i=0;i<arrayMap.length;i++){
		console.log(arrayMap[0].one);
		console.log(arrayMap[1].two);
		console.log(arrayMap[2].three);
	}	
}