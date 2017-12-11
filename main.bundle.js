webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app row\">\r\n  <app-store></app-store>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_header_header_component__ = __webpack_require__("../../../../../src/app/store/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/store/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_cart_cart_component__ = __webpack_require__("../../../../../src/app/store/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_product_list_product_product_component__ = __webpack_require__("../../../../../src/app/store/product-list/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__store_store_component__["a" /* StoreComponent */],
                __WEBPACK_IMPORTED_MODULE_5__store_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__store_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__store_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__store_product_list_product_product_component__["a" /* ProductComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__cart_service__["a" /* CartService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartService = (function () {
    function CartService() {
        this.onProductAddedToCart$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onProductRemovedFromCart$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onToggleCart$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.productsInCart = [];
        this.cartIsOpen = false;
    }
    CartService.prototype.add = function (product) {
        this.productsInCart.push(product);
        this.onProductAddedToCart$.emit(product);
    };
    CartService.prototype.remove = function (id) {
        this.productsInCart = this.productsInCart.filter(function (p) {
            return id !== p.id;
        });
        this.onProductRemovedFromCart$.emit(id);
    };
    CartService.prototype.getAll = function () {
        return this.productsInCart;
    };
    CartService.prototype.toggleCart = function () {
        this.cartIsOpen = !this.cartIsOpen;
        this.onToggleCart$.emit(this.cartIsOpen);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/store/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cart\" [class.opened]=\"cartIsOpen\">\r\n  <div class=\"cart__overlay\" (click)=\"toggleCart($event)\"></div>\r\n  <div class=\"cart__content\">\r\n    <p><b>Meu carrinho</b></p>\r\n    <div *ngFor=\"let product of productsInCart\" class=\"collection\">\r\n      <a href=\"#\" class=\"collection-item\" (click)=\"removeProductFromCart($event, product.id)\">\r\n        {{ product.name }}\r\n        <span class=\"badge\">qtd: {{ product.quantity }}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div *ngIf=\"totalInCart\">\r\n      <p>Total: {{ totalInCart | currency: 'BRL' }}</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"!totalInCart\">\r\n      <p>Carrinho vazio =(</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/store/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart__content {\n  width: 300px;\n  height: 100vh;\n  padding: 2rem;\n  position: fixed;\n  overflow: auto;\n  z-index: 2;\n  top: 0;\n  right: -100%;\n  opacity: 0;\n  visibility: hidden;\n  background-color: #fff;\n  transition: .3s ease-in-out; }\n  @media (max-width: 768px) {\n    .cart__content {\n      width: 80%; } }\n\n.cart__overlay {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0; }\n\n.cart.opened .cart__content {\n  right: 0;\n  opacity: 1;\n  visibility: visible; }\n\n.cart.opened .cart__overlay {\n  visibility: visible;\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.onToggleCart();
    };
    CartComponent.prototype.removeProductFromCart = function (e, id) {
        e.preventDefault();
        this.cartService.remove(id);
    };
    CartComponent.prototype.toggleCart = function (e) {
        e.preventDefault();
        this.cartService.toggleCart();
    };
    CartComponent.prototype.onToggleCart = function () {
        var _this = this;
        this.cartService
            .onToggleCart$
            .subscribe(function (isOpened) {
            _this.cartIsOpen = isOpened;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "productsInCart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "totalInCart", void 0);
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/store/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__cart_service__["a" /* CartService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h1>Hi Platform Store</h1>\r\n  <button class=\"header__cart-btn btn\" (click)=\"toggleCart($event)\">meu carrinho</button>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/store/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  padding: 2rem;\n  background-color: #ccc;\n  position: relative; }\n  @media (max-width: 768px) {\n    .header {\n      padding: .5rem; }\n      .header h1 {\n        font-size: 1rem; } }\n  .header__cart-btn {\n    position: absolute;\n    right: 2rem;\n    top: 0;\n    bottom: 0;\n    margin: auto 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(cartService) {
        this.cartService = cartService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleCart = function (e) {
        e.preventDefault();
        this.cartService.toggleCart();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/store/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"product__list\">\r\n  <app-product *ngFor=\"let product of productList\" [product]=\"product\"></app-product>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/store/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product__list > * {\n  width: 33.3%;\n  display: inline-block;\n  padding: .5rem; }\n  @media (max-width: 768px) {\n    .product__list > * {\n      width: 100%;\n      display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productList", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/store/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/product-list/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-image\">\r\n    <img src=\"{{ product.picture }}\" alt=\"{{ product.name }}\">\r\n    <span class=\"card-title\">{{ product.name }}</span>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <p>{{ product.price | currency:'BRL' }}</p>\r\n    <input type=\"number\" min=\"1\" placeholder=\"QTD\" [(ngModel)]=\"quantity\"/>\r\n  </div>\r\n  <div class=\"card-action\">\r\n    <div *ngIf=\"addedToCart; then addedLink else addLink\" href=\"#\">Adicionar ao carrinho</div>\r\n    <ng-template #addLink>\r\n      <a href=\"#\" class=\"product__add\" (click)=\"addProductTocart($event)\">Adicionar ao carrinho</a>\r\n    </ng-template>\r\n    <ng-template #addedLink>\r\n      <a href=\"#\" class=\"product__remove\" (click)=\"addDuplicateProduct($event)\">Item Adicionado</a>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/store/product-list/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product__remove {\n  color: #333 !important;\n  cursor: not-allowed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/product-list/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = (function () {
    function ProductComponent(cartService) {
        this.cartService = cartService;
        this.quantity = 1;
        this.addedToCart = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.onRemoveProductFromcart();
    };
    ProductComponent.prototype.addProductTocart = function (e) {
        e.preventDefault();
        this.addedToCart = true;
        this.product.quantity = this.quantity;
        this.cartService.add(this.product);
    };
    ProductComponent.prototype.onRemoveProductFromcart = function () {
        var _this = this;
        this.cartService
            .onProductRemovedFromCart$
            .subscribe(function (id) {
            if (_this.product.id === id)
                _this.addedToCart = false;
        });
    };
    ProductComponent.prototype.addDuplicateProduct = function (e) {
        e.preventDefault();
        window.alert('Você já adicionou este produto!');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/store/product-list/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/product-list/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"store\">\r\n  <div class=\"store__header\">\r\n    <app-header></app-header>\r\n  </div>\r\n  <div class=\"store__list container\">\r\n    <app-product-list [productList]=\"productList\"></app-product-list>\r\n  </div>\r\n  <div class=\"store__cart\">\r\n    <app-cart [productsInCart]=\"productsInCart\" [totalInCart]=\"totalInCart\"></app-cart>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/store/store.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_service__ = __webpack_require__("../../../../../src/app/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreComponent = (function () {
    function StoreComponent(http, cartService) {
        this.http = http;
        this.cartService = cartService;
        this.productsInCart = [];
        this.totalInCart = 0;
    }
    StoreComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.onAddProductTocart();
        this.onRemoveProductFromcart();
    };
    StoreComponent.prototype.getProducts = function () {
        var _this = this;
        this.http.get('assets/api/data.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.productList = data;
        });
    };
    StoreComponent.prototype.onAddProductTocart = function () {
        var _this = this;
        this.cartService
            .onProductAddedToCart$
            .subscribe(function (product) {
            _this.productsInCart = _this.cartService.getAll();
            _this.calcTotalincart();
            _this.cartService.toggleCart();
        });
    };
    StoreComponent.prototype.onRemoveProductFromcart = function () {
        var _this = this;
        this.cartService
            .onProductRemovedFromCart$
            .subscribe(function (id) {
            _this.productsInCart = _this.cartService.getAll();
            _this.calcTotalincart();
        });
    };
    StoreComponent.prototype.calcTotalincart = function () {
        this.totalInCart = this.productsInCart.reduce(function (initial, product) {
            return initial += product.price * product.quantity;
        }, 0);
    };
    StoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-store',
            template: __webpack_require__("../../../../../src/app/store/store.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/store.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__cart_service__["a" /* CartService */]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map