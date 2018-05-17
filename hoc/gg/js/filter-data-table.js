var usersT = [
  { id: 'Jack', name: 'Jack Smith' },
  { id: 'Jill', name: 'Jill Jones' },
  { id: 'Jane', name: 'Jane Chung' }
];

var viewModel = {
  users: ko.observableArray([
  { id: 'Jack', name: 'Jack Smith' },
  { id: 'Jill', name: 'Jill Jones' },
  { id: 'Jane', name: 'Jane Chung' }
]),
// nhan gia tri tu input
  query: ko.observable(''),
  //phuong thuc search
  search2: function(value) {
    viewModel.users.removeAll();

    if (value == '') return;

    for (var user in usersT) {
      if (usersT[user].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        viewModel.users.push(usersT[user]);
      }
    }
  }
  
};

viewModel.query.subscribe(viewModel.search2);
ko.applyBindings(viewModel);