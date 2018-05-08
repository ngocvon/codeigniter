function StarDataModel(){
	var self = this;
	self.tagline = ko.observable("cha me");
	self.hint = ko.observable("la bien khoi");
	self.fullTagline = ko.computed(function(){
		return self.tagline() + ""+self.hint();
	});
	
	self.starList = ko.observableArray([
		{name:"me"},
		{name:"you"},
		{name:"her"},
		{name:"him"}
	]);
}
ko.applyBindings(new StarDataModel);