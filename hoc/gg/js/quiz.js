function StarDataModel(){
	var self = this;
	self.tagline = ko.observable("cha me");
	self.hint = ko.observable("la bien khoi");
	self.fullTagline = ko.computed(function(){
		return self.tagline() + ""+self.hint();
	});
	self.starList = ko.observableArray([]);
	$.ajax({
		'asys':false,
		'global':false,
		'url':'json/stars.json',
		'dataType':"json",
		'success':function(data){
			json = data;

			data[0].stars.forEach(function(currentValue, index, arr){
				console.log(currentValue)
				self.starList.push(currentValue)
			})
		}
	});
	
	self.getImageUrl() =function(){
		var url = null;
		$.ajax({
			'asys':false,
			'global':false,
			'url':name,
			'dataType':"json",
			'success':function(data){
				json = data;
				url= data.items[0].link;
			}
		});
		return url;
	};
	self.imageUrl = ko.observable(self.getImageUrl(starList[0]));
};
ko.applyBindings(new StarDataModel());