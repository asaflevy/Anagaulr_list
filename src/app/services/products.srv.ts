import {IProduct, ICategory} from '../Enums/IProduct'
import {IPromise} from "angular";
export default class MovieService {
    static _name = 'productsService';
    static $inject = ['$http', '$window', '$q'];
    sessionStorage;

    constructor(private $http, private $window, private  $q) {
        this.sessionStorage = $window.sessionStorage;
    }


    GetProductsList() {
        if (!this.sessionStorage.getItem('Fieldin-products')) {
            return this.getCategory().then((category: Array<ICategory>) => {
                return this._getProducts().then((productsListRespone: Array<IProduct>) => {
                    const products = productsListRespone,
                        mergeList = this._margeProductsCategories(products, category);
                    this._setItemsInSession('Fieldin-products', mergeList);
                    return mergeList;
                })
            })
        }
        return this.$q((resolve) => {
            resolve(JSON.parse(this.sessionStorage.getItem('Fieldin-products')))
        });
    }

    getCategory(): IPromise<ICategory[]> {
        return this.$http.get(`/categories.json`).then((response: any) => {
            if (!response.data) {
                return false;
            }
            return response.data.Categories;
        })
    }

    removeProduct(productItem) {
        return this.GetProductsList().then((d) => {
            const newProductList = d.filter(el => el.Id !== productItem.Id);
            return this._setItemsInSession('Fieldin-products', newProductList);
        })
    }

    updateProduct(productItem) {
        return this.GetProductsList().then((d) => {
            const newProductList = d.map(obj =>
                obj.Id === productItem.Id ? productItem : obj
            );
            return this.getCategory().then((category: Array<ICategory>) => {
                return this._setItemsInSession('Fieldin-products', this._margeProductsCategories(newProductList, category));
            })

        })
    }

    private _getProducts(): IPromise<IProduct[]> {
        return this.$http.get(`/products.json`).then((response: any) => {
            if (!response.data) {
                return false;
            }
            return response.data.Products;
        })
    }

    private _margeProductsCategories(products, categories) {
        return products.map((item) => {
            item.Category = categories.find(function (cat) {
                return cat.Id === item.CategoryId
            });
            return item;
        })
    }

    private _setItemsInSession(sessionName: string, items: Array<any>) {
        this.sessionStorage.setItem(sessionName, JSON.stringify(items))
        return items;
    }
}