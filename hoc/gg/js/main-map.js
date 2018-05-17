var obj ={
	friends:ko.observableArray([new Friends(new Frnd())])
};
// from db
function Frnd(){
	return{
		name:'Buddy',
		knowJS:false,
		favLib:'Knockout',
		isWeird:false
	}
}
function Friends(frnd){
	var map = ko.mapping.fromJS(frnd);
	map.removeFriend=function(){
		obj.friends.remove(map);
	}
	return map;
}

obj.addFriends=function(){
	obj.friends.push(new Friends(new Frnd()));
}
ko.applyBindings(obj);

