'use strict';

angular.module('ipallor')
  .controller('SignupCtrl', function ($rootScope, $location, UserFactory) {

    var vm = this;

    angular.extend(vm, {
      name: 'SignupCtrl',

      signup: function () {
        var newUser = vm.signupState;
        UserFactory.addUser(newUser);
        UserFactory.login(newUser);

        $location.path('/upload');
      },

      cancelSignup: function () {
        $location.path('/');
      },

      signupState: {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        state: '',
        gender: ''
      },

      states: (
        'AL AK AZ AR CA CO CT DE FL GA HI IA ID IL IN KS KY '
        + 'LA MA MD ME MI MN MO MS MT NE NH NJ NM NV NY NC ND '
        + 'OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY'
        ).split(' '),

      gender: ['Male', 'Female']
    });

  });
