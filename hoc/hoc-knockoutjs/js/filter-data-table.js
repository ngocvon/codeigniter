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
  query: ko.observable(''),
  search: function(value) {
    viewModel.users.removeAll();

    if (value == '') return;

    for (var user in usersT) {
      if (usersT[user].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        viewModel.users.push(usersT[user]);
      }
    }
  }
};

viewModel.query.subscribe(viewModel.search);
ko.applyBindings(viewModel);