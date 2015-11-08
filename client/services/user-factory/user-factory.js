'use strict';

angular.module('ipallor')
  .factory('UserFactory', function () {

    var fac = {};

    var users = [
      {
        firstName: 'Van',
        lastName: 'Nguyen',
        email: 'vnguyen94@gmail.com',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Max',
        lastName: 'Paulus',
        email: 'paulusm@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'John',
        lastName: 'Collins',
        email: 'jfcollin@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Matin',
        lastName: 'Khoshnevis',
        email: 'ge0matin@gmail.com',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Pasha',
        lastName: 'Khosravi',
        email: 'Pashak@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      },
      {
        firstName: 'Lewis',
        lastName: 'Liu',
        email: 'yuxuanl3@uci.edu',
        age: 25,
        city: 'Irvine',
        state: 'CA',
        gender: 'M'
      }
    ];

    angular.extend(fac, {
      users: users,

      user: users[0],

      login: function (user) {
        fac.user = user;
      },

      logout: function () {
        fac.user = {};
      },

      getUser: function () {
        return fac.user;
      }
    });

    return fac;

  });
