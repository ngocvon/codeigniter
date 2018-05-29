function ViewModel() {
	
	var self = this
    self.stringValue= ko.observable("Hello");
    self.passwordValue= ko.observable("mypass");
    self.booleanValue= ko.observable(true);
    self.optionValues= ["Alpha", "Beta", "Gamma"];
    self.selectedOptionValue= ko.observable("Gamma");
    self.multipleSelectedOptionValues= ko.observable(["Alpha"]);
    self.radioSelectedOptionValue= ko.observable("Beta");
};
ko.applyBindings(new ViewModel());