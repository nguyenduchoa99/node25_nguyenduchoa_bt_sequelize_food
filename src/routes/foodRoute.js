const express = require('express');
const foodRoute = express.Router();
const { getLike,
    getUserLike,
    getReslike,
    createLikeUnlike,
    addRate,
    getUserRate,
    getResRate,
    createUserOrder
} = require('../controllers/foodControllers');
// Lấy like của user và nhà hàng
foodRoute.get('/getLike', getLike);
// Lấy like của user
foodRoute.get('/getUserlike', getUserLike);
// Lấy like của nhà hàng
foodRoute.get('/getResLike', getReslike);
// Xử lí like và unlike
foodRoute.post('/createLikeUnlike', createLikeUnlike);
// Xử lí đánh giá
foodRoute.post('/addRate', addRate);
// Lấy đánh giá của user
foodRoute.get('/getUserRate', getUserRate);
// Lấy đánh giá của nhà hàng
foodRoute.get('/getResRate', getResRate);
// User order thêm
foodRoute.post('/createUserOrder', createUserOrder)


module.exports = foodRoute;