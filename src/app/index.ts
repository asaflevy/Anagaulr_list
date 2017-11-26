import * as angular from 'angular';
import routeConfig from './app.routing'
import {AppComponent} from './app.component';
import Components from './components';
import './app.scss';

const App: ng.IModule = angular
    .module('app', [
        'ui.router',
        'ngMessages',
        'ngMaterial',
        'ngAria',
        'ngAnimate',
        Components
    ])
    .config(routeConfig)
    .component('app', new AppComponent);

export default App.name;