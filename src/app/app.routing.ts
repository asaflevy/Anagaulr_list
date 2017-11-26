import {UrlRouterProvider, StateProvider} from 'angular-ui-router';
routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

function routeConfig($locationProvider: ng.ILocationProvider,
                     $urlRouterProvider: UrlRouterProvider,
                     $stateProvider: StateProvider) {
    "ngInject";

    $stateProvider
        .state('app', {
            redirectTo: 'app.home',
            abstract: true,
            component: "app"
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

export default routeConfig;
