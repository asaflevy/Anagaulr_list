import * as angular from 'angular';
import {State, StateProvider, Ng1StateDeclaration} from 'angular-ui-router';
import HomeComponent, {Home as HomeController} from './home.component';
import ProductsListComponent from '../products-list/product-list.component'
import ProductBoxComponent from '../product-box/product-box.component'
import ProductDetailsComponent from '../product-details/product-details.component'
import ProductsService from '../../services/products.srv'

function routeConfig($stateProvider: StateProvider) {
    "ngInject";

    $stateProvider
        .state('products', {
            url: '/',
            component: HomeComponent.name,
            resolve: {
                productsList: [ProductsService._name, (productsService) => {
                    return productsService.GetProductsList();
                }]
            }
        })
        .state('editProduct', {
            url: '/product/:productId',
            component: ProductDetailsComponent.name,
            resolve: {
                product: ['$transition$', ProductsService._name, ($transition$, productsSerive) => {
                    return productsSerive.GetProductsList().then((res) => {
                        let productId = $transition$.params().productId;
                        return res.find(product => product.Id == productId);
                    })
                }],
                categories: [ProductsService._name, (productsService) => {
                    return productsService.getCategory().then(res => res);
                }]
            }
        });

}

const Home: ng.IModule = angular
    .module('components.home', [])
    .component(HomeComponent.name, HomeComponent)
    .component(ProductsListComponent.name, ProductsListComponent)
    .component(ProductBoxComponent.name, ProductBoxComponent)
    .component(ProductDetailsComponent.name, ProductDetailsComponent)
    .service(ProductsService._name, ProductsService)
    .config(routeConfig);

export default Home.name;