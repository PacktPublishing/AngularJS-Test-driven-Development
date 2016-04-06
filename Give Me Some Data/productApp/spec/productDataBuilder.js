function productDataBuilder() {
    return {
        self: this,
        _mockProduct: { id: 1, name: 'productName' },
        withId: function (id) {
            this._mockProduct.id = id;
            return this;
        },
        withName: function (name) {
            this._mockProduct.name = name;
            return this;
        },
        build: function () {
            return this._mockProduct;
        }
    };
};