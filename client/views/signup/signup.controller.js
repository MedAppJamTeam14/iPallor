'use strict';

angular.module('ipallor')
  .controller('SignupCtrl', function ($rootScope, $location) {

    var vm = this;

    angular.extend(vm, {
      name: 'SignupCtrl',

      signup: function () {
        var newUser = vm.signupState;
        $rootScope.users.push(newUser);
        $rootScope.user = newUser;

        $location.path('/upload');
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
        'AL AK AZ AR CA CO CT DE FL GA HI IA ID IL IN KS KY ' +
        'LA MA MD ME MI MN MO MS MT NE NH NJ NM NV NY NC ND ' +
        'OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY').split(' '),

      gender: ['Male', 'Female']
    });

  });
