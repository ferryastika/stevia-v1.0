const express = require('express');
const router = express.Router();

router.get('/test', function(req, res, next) {
  res.render('test/test');
});

router.get('/pulse', function(req, res, next) {
  res.render('test/pulseTest');
});

router.get('/slider', function(req, res, next) {
  res.render('test/sliderTest');
});

router.get('/timeline', function(req, res, next) {
  res.render('test/timelineTest');
});

router.get('/mongo', function(req, res, next) {
  res.render('test/mongo');
});

router.get('/map', function (req, res, next) {
  res.render('test/map')
});

router.get('/history', function (req, res, next) {
  res.render('test/history')
});

router.get('/historyWeekly', function (req, res, next) {
  res.render('test/historyWeekly')
});

router.get('/historyMonthly', function (req, res, next) {
  res.render('test/historyMonthly')
});

router.get('/historyQuery', function (req, res, next) {
  res.render('test/historyQuery')
});

module.exports = router;