var obj ={
	friends:ko.observableArray([new Friends(new Frnd())])
};
// from db
function Frnd(){
	return{
		name:'Buddy',
		knowJS:false,
		favLib:'Knockout',
		isWeird:false,
		noLib:3
	}
}
function Friends(frnd){
	var map = ko.mapping.fromJS(frnd);
	map.removeFriend=function(){
		obj.friends.remove(map);
	}
	map.styleFriend = ko.computed(function(){
		var lib = map.noLib();
		if(lib >35){
			map.removeFriend();
		}
		if(lib > 5){
			return 'red';
		}
		if(lib > 10){
			return 'white';
		}
	})
	return map;
}

obj.addFriends=function(){
	obj.friends.push(new Friends(new Frnd()));
}
ko.applyBindings(obj);

