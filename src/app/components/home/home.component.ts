import './home.scss';

export class Home implements ng.IComponentOptions {

    private productsList$: Array<any>;

    constructor() {}

    $onInit() {}

}

const HomeComponent = {
    template: require('./home.html'),
    bindings: <{ [binding: string]: string }> {
        'productsList$': '<productsList'
    },
    controller: Home,
    name: 'home',
    controllerAs: '$pr'
};

export default HomeComponent;