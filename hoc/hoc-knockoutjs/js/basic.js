var obj ={
	firstName:ko.observable('my first naNme'),
	lastName:ko.observable('My last name'),
	friends:ko.observableArray([new Friends('a'),new Friends('b'),new Friends('c')])
};
obj.firstName.subscribe(function(val){
	console.log('some has changed first Name');
	//su dung khi keyup
	console.log(val);
});

function frnd(){
	return{
		name:'Buddy',
		knowJS:false,
		favLib:'Knockout',
		isWeird:false
	}
}
/*)
function Friends(frnd){
	var map = ko.mapping.fromJS(frnd);
	map.removeFriend=function(){
		obj.friends.remove(map);
	}
	return map;
}*/

function Friends(name){
	this.name=name;
	this.knowJS=ko.observable(false);
	this.favLib=ko.observable('');
	this.removeFriend=function(){
		obj.friends.remove(this);
	}
}

obj.addFriends=function(){
	obj.friends.push(new Friends('new'));
}
ko.applyBindings(obj);

