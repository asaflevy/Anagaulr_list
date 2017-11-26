import './product-box.scss';
class ProductBox {
    static $inject = [];
    productItem$: Array<Object>;

    constructor() {
    }
}

const MovieBoxComponent = {
    template: require('./product-box.html'),
    bindings: <{ [binding: string]: string }> {
        productItem$: '<product'
    },
    controller: ProductBox,
    name: 'productBox',
    controllerAs: '$pr'
};

export default MovieBoxComponent;