var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET chi tiet. */
router.get('/san-pham', function(req, res, next) {
  res.render('san-pham.ejs', );
});
/* GET chi tiet san pham. */
router.get('/chi-tiet-san-pham/*.:idsanpham', function(req, res, next) {
  res.render('chi-tietsp', { idsanpham:req.params.idsanpham});
});
/* GET gio hang. */
router.get('/gio-hang', function(req, res, next) {
  res.render('gio-hang.ejs',);
});
/* GET dang nhap. */
router.get('/dang-nhap', function(req, res, next) {
  res.render('dang-nhap.ejs',);
});

module.exports = router;
