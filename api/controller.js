"use strict";

var properties = require("../package.json");
var distance = require("../service/distance");

var controllers = {
  about: (req, res) => {
    var aboutInfo = {
      name: properties.name,
      version: properties.version,
    };
    res.json(aboutInfo);
  },
  getDistance: (req, res) => {
    distance.find(req, res, (err, dist) => {
      if (err) {
        res.send(err);
      }
      res.json(dist);
    });
  },
};

module.exports = controllers;
