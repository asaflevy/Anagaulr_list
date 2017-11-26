import './product-details.scss';
import ProductsService from '../../services/products.srv'
class ProductDetail {
    static $inject = ['$state', ProductsService._name];
    private productItemClone = {};
    private product$;

    constructor(private $state, private productSrv) {
        (<any>Object).assign(this.productItemClone, this.product$);
    }

    goBack() {
        this.$state.go('products')
    }

    removeItem$(product) {
        this.productSrv.removeProduct(product).then(() => {
            this.goBack();
        });
    }

    updateItem$(product) {
        this.productSrv.updateProduct(product).then(() => {
            this.goBack();
        });
    }

    cancel$(product) {
        this.product$ = this.productItemClone;
        this.goBack();
    }
}

const ProductsDetailsComponent = {
    template: require('./product-details.html'),
    bindings: <{ [binding: string]: string }> {
        product$: '<product',
        categories$: '<categories'
    },
    controller: ProductDetail,
    name: 'productDetail',
    controllerAs: '$pr'
};

export default ProductsDetailsComponent;