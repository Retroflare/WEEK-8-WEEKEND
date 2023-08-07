/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EventListeners/addsubItems.ts":
/*!*******************************************!*\
  !*** ./src/EventListeners/addsubItems.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAddButtonListener: () => (/* binding */ addAddButtonListener),\n/* harmony export */   addRemoveButtonListener: () => (/* binding */ addRemoveButtonListener),\n/* harmony export */   addSubButtonListener: () => (/* binding */ addSubButtonListener)\n/* harmony export */ });\n/* harmony import */ var _update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update_function/price_updater */ \"./src/update_function/price_updater.ts\");\n\nfunction addAddButtonListener(button, item, userArray) {\n    button.addEventListener('click', () => {\n        userArray[0].addItem(item);\n        (0,_update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__.updateTotal)(userArray);\n        let cartNumber = document.getElementById(`id${item.id}number`);\n        if (cartNumber != null) {\n            cartNumber.innerHTML = `Number = ${userArray[0].cart[userArray[0].findItem(item.id)].number}`;\n        }\n    });\n}\nfunction addSubButtonListener(button, item, userArray) {\n    button.addEventListener('click', () => {\n        let itemIndex = userArray[0].findItem(item.id);\n        let number = userArray[0].cart[userArray[0].findItem(item.id)].number;\n        userArray[0].removeQuantityFromCart(1, userArray[0].cart[itemIndex]);\n        (0,_update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__.updateTotal)(userArray);\n        if (number == 1) {\n            const element = document.getElementById(`id${item.id}`);\n            element === null || element === void 0 ? void 0 : element.remove();\n        }\n        else {\n            const numbBox = document.querySelector(`#id${item.id}number`);\n            if (numbBox != null) {\n                numbBox.innerHTML = `Number = ${userArray[0].cart[userArray[0].findItem(item.id)].number}`;\n            }\n        }\n    });\n}\nfunction addRemoveButtonListener(button, item, userArray) {\n    button.addEventListener('click', () => {\n        let itemIndex = userArray[0].findItem(item.id);\n        userArray[0].removeFromCart(userArray[0].cart[itemIndex]);\n        const element = document.getElementById(`id${item.id}`);\n        element === null || element === void 0 ? void 0 : element.remove();\n        (0,_update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__.updateTotal)(userArray);\n    });\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/EventListeners/addsubItems.ts?");

    /***/ }),
    
    /***/ "./src/EventListeners/login_form.ts":
    /*!******************************************!*\
      !*** ./src/EventListeners/login_form.ts ***!
      \******************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectLoginForm: () => (/* binding */ connectLoginForm)\n/* harmony export */ });\n/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/user */ \"./src/classes/user.ts\");\n\nfunction connectLoginForm(userArray) {\n    console.log(\"here\");\n    const form = document.querySelector(\"#login\");\n    form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {\n        var _a, _b;\n        e.preventDefault();\n        if (form != null) {\n            const fromData = new FormData(form);\n            const username = (_b = (_a = fromData.get('uname')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : \"undefined\";\n            let initAge = fromData.get('age');\n            let age = 0;\n            if (initAge != null) {\n                age = parseInt(initAge.toString());\n            }\n            let currentUser = new _classes_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"](username, age);\n            console.log(`${currentUser.name} ${currentUser.age}`);\n            userArray.push(currentUser);\n            console.log(`User Array Length: ${userArray.length}`);\n            form.innerHTML = `Hello ${currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1)}`;\n            console.log(userArray);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/EventListeners/login_form.ts?");
    
    /***/ }),
    
    /***/ "./src/EventListeners/shopItems.ts":
    /*!*****************************************!*\
      !*** ./src/EventListeners/shopItems.ts ***!
      \*****************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToCartButtonEventListener: () => (/* binding */ addToCartButtonEventListener)\n/* harmony export */ });\n/* harmony import */ var _update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../update_function/price_updater */ \"./src/update_function/price_updater.ts\");\n/* harmony import */ var _addsubItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addsubItems */ \"./src/EventListeners/addsubItems.ts\");\n\n\nfunction addToCartButtonEventListener(button, item, userArray) {\n    button.addEventListener('click', () => {\n        var _a;\n        if (userArray.length < 1) {\n            console.log(`UserArray.length = ${userArray.length}`);\n            window.alert(\"Please log in before adding any purchases to your cart.\");\n        }\n        else if (document.querySelector(`#id${item.id}`) != null) {\n            let numberElement = document.querySelector(`#id${item.id}number`);\n            if (numberElement != null) {\n                userArray[0].addItem(item);\n                (0,_update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__.updateTotal)(userArray);\n                numberElement.innerHTML = `Number :${userArray[0].cart[userArray[0].findItem(item.id)].number}`;\n            }\n            //find item by itemID\n        }\n        else {\n            userArray[0].addItem(item);\n            (0,_update_function_price_updater__WEBPACK_IMPORTED_MODULE_0__.updateTotal)(userArray);\n            const element = (_a = document.querySelector(\"#cart_container\")) !== null && _a !== void 0 ? _a : document.createElement(\"div\");\n            const subelement = document.createElement('div');\n            subelement.id = \"id\" + item.id;\n            subelement.classList.add(\"card\");\n            const subsubelement = document.createElement(\"div\");\n            let arr = [`Name: ${item.name}`, `Price: $${(item.price / 100).toFixed(2)}`, `Description: ${item.description}`, `Number: ${item.number}`];\n            const name = document.createElement('p');\n            name.innerHTML = arr[0];\n            const price = document.createElement('p');\n            price.innerHTML = arr[1];\n            const description = document.createElement('p');\n            description.innerHTML = arr[2];\n            const number = document.createElement('p');\n            number.innerHTML = arr[3];\n            number.id = `id${item.id}number`;\n            subsubelement.appendChild(name);\n            subsubelement.appendChild(price);\n            subsubelement.appendChild(description);\n            subsubelement.appendChild(number);\n            const addButton = document.createElement('button');\n            subsubelement.append(addButton);\n            addButton.innerHTML = \"Add Item Count\";\n            (0,_addsubItems__WEBPACK_IMPORTED_MODULE_1__.addAddButtonListener)(addButton, item, userArray);\n            const subButton = document.createElement('button');\n            subsubelement.append(subButton);\n            (0,_addsubItems__WEBPACK_IMPORTED_MODULE_1__.addSubButtonListener)(subButton, item, userArray);\n            subButton.innerHTML = \"Subtract Item Count\";\n            const removeButton = document.createElement('button');\n            removeButton.innerHTML = \"Remove from cart?\";\n            (0,_addsubItems__WEBPACK_IMPORTED_MODULE_1__.addRemoveButtonListener)(removeButton, item, userArray);\n            subsubelement.append(removeButton);\n            subelement.appendChild(subsubelement);\n            element.appendChild(subelement);\n            const image = document.createElement('img');\n            image.src = \"https://place-hold.it/100\";\n            image.classList.add(\"shop_image\");\n            subelement.appendChild(image);\n            element.appendChild(subelement);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/EventListeners/shopItems.ts?");
    
    /***/ }),
    
    /***/ "./src/EventListeners/viewShop.ts":
    /*!****************************************!*\
      !*** ./src/EventListeners/viewShop.ts ***!
      \****************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addViewShopListener: () => (/* binding */ addViewShopListener)\n/* harmony export */ });\nfunction addViewShopListener() {\n    const shopLink = document.querySelector(\"#view_shop\");\n    let cart = document.querySelector(\"#cart_page\");\n    let shop = document.querySelector(\"#store_page\");\n    shopLink === null || shopLink === void 0 ? void 0 : shopLink.addEventListener('click', () => {\n        console.log(cart);\n        cart === null || cart === void 0 ? void 0 : cart.remove();\n        console.log(shop);\n        if (shop != null) {\n            document.body.appendChild(shop);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/EventListeners/viewShop.ts?");
    
    /***/ }),
    
    /***/ "./src/EventListeners/viewcart.ts":
    /*!****************************************!*\
      !*** ./src/EventListeners/viewcart.ts ***!
      \****************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addViewCartListener: () => (/* binding */ addViewCartListener)\n/* harmony export */ });\nfunction addViewCartListener(userArray) {\n    const cartLink = document.querySelector(\"#view_cart\");\n    let cart = document.querySelector(\"#cart_page\");\n    let shop = document.querySelector(\"#store_page\");\n    cartLink === null || cartLink === void 0 ? void 0 : cartLink.addEventListener('click', () => {\n        if (userArray.length < 1) {\n            window.alert(\"Please log in, before attempting to view your cart.\");\n            console.log(\"hi\");\n        }\n        else {\n            shop === null || shop === void 0 ? void 0 : shop.remove();\n            if (cart != null) {\n                document.body.appendChild(cart);\n            }\n        }\n    });\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/EventListeners/viewcart.ts?");
    
    /***/ }),
    
    /***/ "./src/item.ts":
    /*!*****************************!*\
      !*** ./src/classes/item.ts ***!
      \*****************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _EventListeners_shopItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventListeners/shopItems */ \"./src/EventListeners/shopItems.ts\");\n\n\nclass Item {\n    get number() {\n        return this._number;\n    }\n    set number(value) {\n        this._number = value;\n    }\n    //Getters and setters \n    get description() {\n        return this._description;\n    }\n    set description(value) {\n        this._description = value;\n    }\n    get price() {\n        return this._price;\n    }\n    set price(value) {\n        this._price = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get id() {\n        return this._id;\n    }\n    itemElement(userArray) {\n        const subElement = document.createElement('div');\n        subElement.classList.add(\"card\");\n        const subsubElement = document.createElement(\"div\");\n        let arr = [`Name: ${this.name}`, `Price: $${(this.price / 100).toFixed(2)}`, `Description: ${this.description}`];\n        for (let string of arr) {\n            const display = document.createElement('p');\n            display.innerHTML = string;\n            subsubElement.appendChild(display);\n        }\n        const button = document.createElement('button');\n        (0,_EventListeners_shopItems__WEBPACK_IMPORTED_MODULE_0__.addToCartButtonEventListener)(button, this, userArray);\n        subsubElement.append(button);\n        button.innerHTML = \"Add to Cart\";\n        subElement.appendChild(subsubElement);\n        const image = document.createElement('img');\n        image.src = \"https://place-hold.it/100\";\n        image.classList.add(\"shop_image\");\n        subElement.appendChild(image);\n        return subElement;\n    }\n    toString() {\n        return \"\\n================\" + `\\nName = ${this.name}` +\n            `\\nID = ${this.id}` +\n            `\\nPrice = $${(this.price / 100).toFixed(2)}` +\n            `\\nDescription = ${this.description}`;\n    }\n    constructor(_name, _price, _description) {\n        this._name = _name;\n        this._price = _price;\n        this._description = _description;\n        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        this._number = 1;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/classes/item.ts?");
    
    /***/ }),
    
    /***/ "./src/shop.ts":
    /*!*****************************!*\
      !*** ./src/classes/shop.ts ***!
      \*****************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Shop)\n/* harmony export */ });\nclass Shop {\n    get merchandise() {\n        return this._merchandise;\n    }\n    set merchandise(value) {\n        this._merchandise = value;\n    }\n    addMerchandise(item) {\n        this._merchandise.push(item);\n    }\n    showItem(userArray) {\n        var _a;\n        const element = (_a = document.querySelector(\"#main_container\")) !== null && _a !== void 0 ? _a : document.createElement(\"div\");\n        for (let item of this.merchandise) {\n            element.append(item.itemElement(userArray));\n        }\n    }\n    constructor(_merchandise = []) {\n        this._merchandise = _merchandise;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/classes/shop.ts?");
    
    /***/ }),
    
    /***/ "./src/user.ts":
    /*!*****************************!*\
      !*** ./src/classes/user.ts ***!
      \*****************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n//The User class. This is capable of adding items to the cart, removing them, as well as totaling and printing the contents of a cart. \nclass User {\n    get age() {\n        return this._age;\n    }\n    set age(value) {\n        this._age = value;\n    }\n    get name() {\n        return this._name;\n    }\n    set name(value) {\n        this._name = value;\n    }\n    get cart() {\n        return this._cart;\n    }\n    set cart(value) {\n        this._cart = value;\n    }\n    get id() {\n        return this._id;\n    }\n    constructor(_name, _age) {\n        this._name = _name;\n        this._age = _age;\n        this._cart = [];\n        this._id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n    ///Non accessor/mutator methods: \n    addItem(item) {\n        let added = false;\n        for (let i = 0; i < this.cart.length; i++) {\n            if (item.id == this.cart[i].id) {\n                this.cart[i].number++;\n                added = true;\n                break;\n            }\n        }\n        if (added == false) {\n            this.cart.push(item);\n            console.log(\"Item added\");\n        }\n    }\n    findItem(id) {\n        for (let i = 0; i < this.cart.length; i++) {\n            if (this.cart[i].id == id) {\n                return i;\n            }\n        }\n        return -1;\n    }\n    cartTotal() {\n        let sum = 0;\n        this.cart.forEach((x) => { sum += x.price * x.number; });\n        return sum;\n    }\n    removeQuantityFromCart(quant, item) {\n        for (let i = this.cart.length - 1; i >= 0; i--) {\n            if (this.cart[i].id == item.id) {\n                if (item.number <= quant) {\n                    this.cart.splice(i, 1);\n                }\n                else {\n                    item.number -= quant;\n                }\n                break;\n            }\n        }\n    }\n    removeFromCart(item) {\n        for (let i = this.cart.length - 1; i >= 0; i--) {\n            if (this.cart[i].id == item.id) {\n                this.cart.splice(i, 1);\n            }\n        }\n    }\n    printCart() {\n        let string = \"\";\n        this.cart.forEach((x) => {\n            string +=\n                \"\\n================\" + `\\nName = ${x.name}` +\n                    `\\nID = ${x.id}` +\n                    `\\nPrice = $${(x.price / 100).toFixed(2)}` +\n                    `\\nDescription = ${x.description}` + `\\nNumber: ${x.number}`;\n        });\n        console.log(string);\n    }\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/classes/user.ts?");
    
    /***/ }),
    
    /***/ "./src/index.ts":
    /*!**********************!*\
      !*** ./src/index.ts ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/item */ \"./src/classes/item.ts\");\n/* harmony import */ var _classes_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/shop */ \"./src/classes/shop.ts\");\n/* harmony import */ var _EventListeners_login_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventListeners/login_form */ \"./src/EventListeners/login_form.ts\");\n/* harmony import */ var _EventListeners_viewcart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventListeners/viewcart */ \"./src/EventListeners/viewcart.ts\");\n/* harmony import */ var _EventListeners_viewShop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventListeners/viewShop */ \"./src/EventListeners/viewShop.ts\");\nvar _a;\n\n\n\n\n\nlet banana = new _classes_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"banana\", 5, \"Just a fruit.\");\nlet book = new _classes_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"The Next Great American Novel\", 2, \"The title speaks for itself.\");\nlet jugglingBalls = new _classes_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Juggling Equipment\", 4, \"I didn't forget about them.\");\nlet match = new _classes_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Matchsticks\", 300, \"The bringer of fire. Prometheus, without the eagle.\");\nlet store = new _classes_shop__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([banana, book, jugglingBalls, match]);\nlet userArray = [];\nstore.showItem(userArray);\n(_a = document.querySelector(\"#cart_page\")) === null || _a === void 0 ? void 0 : _a.remove();\n(0,_EventListeners_login_form__WEBPACK_IMPORTED_MODULE_2__.connectLoginForm)(userArray);\n(0,_EventListeners_viewcart__WEBPACK_IMPORTED_MODULE_3__.addViewCartListener)(userArray);\n(0,_EventListeners_viewShop__WEBPACK_IMPORTED_MODULE_4__.addViewShopListener)();\nconsole.log(userArray);\n/*\n\nconsole.log(\"Inventory test 1\")\nme.addItem(store.merchandise[1])\nconsole.log(store.merchandise[1])\nme.addItem(store.merchandise[2])\nme.addItem(store.merchandise[2])\nme.addItem(store.merchandise[2])\nme.addItem(store.merchandise[0])\nme.addItem(store.merchandise[0])\nconsole.log(me.cartTotal())\nme.printCart()\nme.removeQuantityFromCart(2,jugglingBalls);\nme.printCart()\nme.removeFromCart(banana)\nme.printCart()\nconsole.log(me.cartTotal())\n*/ \n\n\n//# sourceURL=webpack://webpack-project/./src/index.ts?");
    
    /***/ }),
    
    /***/ "./src/update_function/price_updater.ts":
    /*!**********************************************!*\
      !*** ./src/update_function/price_updater.ts ***!
      \**********************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateTotal: () => (/* binding */ updateTotal)\n/* harmony export */ });\nfunction updateTotal(userArray) {\n    let total = document.querySelector(\"#total_price\");\n    if (total != null && userArray.length > 0) {\n        total.innerHTML = `Total Price: $${(userArray[0].cartTotal() / 100).toFixed(2)} `;\n    }\n}\n\n\n//# sourceURL=webpack://webpack-project/./src/update_function/price_updater.ts?");
    
    /***/ }),
    
    /***/ "./node_modules/uuid/dist/esm-browser/native.js":
    /*!******************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
      \******************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://webpack-project/./node_modules/uuid/dist/esm-browser/native.js?");
    
    /***/ }),
    
    /***/ "./node_modules/uuid/dist/esm-browser/regex.js":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
      \*****************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://webpack-project/./node_modules/uuid/dist/esm-browser/regex.js?");
    
    /***/ }),
    
    /***/ "./node_modules/uuid/dist/esm-browser/rng.js":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
      \***************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://webpack-project/./node_modules/uuid/dist/esm-browser/rng.js?");
    
    /***/ }),
    
    /***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
    /*!*********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
      \*********************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://webpack-project/./node_modules/uuid/dist/esm-browser/stringify.js?");
    
    /***/ }),
    
    /***/ "./node_modules/uuid/dist/esm-browser/v4.js":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
      \**************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://webpack-project/./node_modules/uuid/dist/esm-browser/v4.js?");
    
    /***/ }),
    
    /***/ "./node_modules/uuid/dist/esm-browser/validate.js":
    /*!********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
      \********************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://webpack-project/./node_modules/uuid/dist/esm-browser/validate.js?");
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
    /******/ 	
    /******/ })()
    ;