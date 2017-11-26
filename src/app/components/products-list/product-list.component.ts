import './product-list.scss'
import ProductService from '../../services/products.srv'
class ProductsList {
    static $inject = ['$scope', '$state'];
    inputFilter$: string;
    filterBy$: string;

    constructor(private $scope, private $state) {
    }

    applyFilter$(): void {
        this.filterBy$ = this.inputFilter$;
    }
}


const ProductsListComponent = {
    template: require('./product-list.html'),
    bindings: <{ [binding: string]: string }> {
        'productsIn$': '<products'
    },
    controller: ProductsList,
    name: 'productsList',
    controllerAs: '$pr'
};

export default ProductsListComponent;
