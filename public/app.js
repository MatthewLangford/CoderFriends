angular.module('coderApp', ['ui.router'])
.config(function ( $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

        $stateProvider
            .state('home',{
                templateUrl: 'templates/home.html',
                url: '/home'
            })
            .state('friend',{
                templateUrl: 'templates/friend.html',
                url:'/friend/:github_username'
            })
            .state('/',{
                template: '<button ui-sref="/auth/github">Log in with Github</button>',

            })
});