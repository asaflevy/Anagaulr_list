import * as angular from 'angular';
import { State, StateProvider } from 'angular-ui-router';
import { AboutComponent } from './about.component';


function routeConfig($stateProvider: StateProvider) {
    "ngInject";

    $stateProvider
        .state('app.about', {
            url: '/about',
            component: 'about'
        });

}

const About: ng.IModule = angular
    .module('components.about', [])
    .component('about', new AboutComponent)
    .config(routeConfig)

export default About.name;