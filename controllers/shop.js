const Product = require('../models/products');
const Cart = require('../models/cart');


exports.getproducts = (req, res, next) => {
    Product.findAll().then(result => {
        res.render('shop/product_list',
            {
                doctittle: 'All Products',
                prods: result,
                path: '/products'
            });
    })
        .catch(err => console.log(err));
}

exports.getproduct = (req, res, next) => { 
    const prodid = req.params.productid;
    Product.findAll({
        where: {
            id: prodid
        } 
    }).then(result => {
        res.render('shop/product_details',
            {
                doctittle: 'Product Details',
                prods: result[0],
                path: '/products_details'
            });
    }).catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.findAll().then(result => {
        res.render('shop/index',
            {
                doctittle: 'Shop',
                prods: result,
                path: '/'
            })
    })
    .catch(err => console.log(err));

}

exports.getCart = (req, res, next) => {
    Cart.getCart().then((cartdata) => {
        res.render('shop/cart',
            {
                doctittle: 'Your Cart',
                path: '/cart',
                products: cartdata[0]
            });
    }).catch(err => console.log(err));
}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    cart.getCart().then(cart => {
        return cart.getproducts({ where: { id: productId } });
    })
        .then(products => {
            let product;
            if (products.length > 0) {
                product = products[0];
            }
        })
        .catch(err => console.log(err));
    /*  Product.findById(productId).then(([productrows]) => {
          Cart.getCartById(productId).then(([cartrows]) => {
              Cart.addProduct(productId, productrows[0], cartrows).then(() => {
                  res.redirect('/cart');
              });
  
          })
      }).catch(err => console.log(err));*/
}
exports.postDeleteCart = (req, res, next) => {
    const productId = req.body.productId;
    Cart.deleteProduct(productId).then(() => {
        res.redirect('/cart');
    }).catch(err => console.log(err));
    /* Product.findById(productId, (prdData) => {
         Cart.deleteProduct(productId, prdData.price);
         res.redirect('/cart');
     })*/
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',
        {
            doctittle: 'Your Orders',
            path: '/orders'
        });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        doctittle: 'Your Checkout',
        path: '/checkout'
    });
}
