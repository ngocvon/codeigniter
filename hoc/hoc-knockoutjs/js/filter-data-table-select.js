function ViewModel() {
    var self = this;
    
    self.selectedColorId = ko.observable();
	self.optionsText = ko.observable();
    self.colors = ko.observableArray([
		{
			Id: "w0",
			Title: "Red",
			Desc: "Some text.."
		}, 
		{
			Id: "w1",
			Title: "Green",
			Desc: "Other text.."
		}, 
		{
			Id: "w2",
			Title: "Blue",
			Desc: "More text.."
		}
	]);
    
    self.selectedColor = ko.computed(function (obj,key) {
		
        //return self.colors()[self.selectedColorId()];
		console.log('obj',obj);
    });
}

ko.applyBindings(new ViewModel());