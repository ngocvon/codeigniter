function ViewModel() {
    var self = this;
    
    self.selectedColorId = ko.observable();

    self.colors = ko.observableArray([{
        "Id": "0",
            "Title": "Red",
            "Desc": "Some text.."
    }, {
        "Id": "1",
            "Title": "Green",
            "Desc": "Other text.."
    }, {
        "Id": "2",
            "Title": "Blue",
            "Desc": "More text.."
    }]);
    
    self.selectedColor = ko.computed(function () {
        return self.colors()[self.selectedColorId()];
    });
}

ko.applyBindings(new ViewModel());