//function cheesygraph(url) {
//  var req;
//  if (window.XMLHttpRequest) {
//    // Firefox, Opera, IE7, and other browsers will use the native object
//    req = new XMLHttpRequest();
//  } else {
//    // IE 5 and 6 will use the ActiveX control
//    req = new ActiveXObject("Microsoft.XMLHTTP");
//  }
//
//  req.onreadystatechange = function () {
//    if (req.readyState == 4) {
//      if (req.status === 200 || // Normal http
//        req.status === 0) { // Chrome w/ --allow-file-access-from-files
//        return(req.responseText);
//      }
//    }
//  };
//
//  req.open("GET", url, true);
//}

var colorSets = [
  [
    '#cccccc', // Days since March 0
    '#505050', // Non-OSU
    '#c00000', // OSU
    '#007db7', // CSCC
    '#00c000' // Total
  ],
  [
    '#cccccc', // Days since March 0
    '#505050', // Non-OSU
    '#c00000', // OSU
    '#00c000' // Total
  ],
  null
];
var g = new Dygraph(document.getElementById("dygraph"),
  "data.csv", {
    rightGap: 5,
    hideOverlayOnMouseOut: false,
    labelsDiv: "dygraph-labels",
    labelsSeparateLines: true,
    labelsShowZeroValues: true,
    legend: "always",
    colors: colorSets[0],
    visibility: [false, true, true, true, true],
    drawXGrid: false,
    axes: {
      includeZero: true,
      y: {
        valueFormatter: function (y) {
          return '';
        },
        axisLabelFormatter: function (y) {
          return '';
        },
        axisLineWidth: 0,
        axisLineColor: '#ffffff',
        yAxisLabelWidth: 0,
        axisLabelWidth: 0,
        drawYAxis: false,
        drawGrid: false
      },
      y2: {
        axisLabelFormatter: function (y) {
          return Math.round(y * 0.1) / 0.1;
        },
        valueFormatter: function (y) {
          return y;
        },
        axisLineColor: '#ffffff',
        axisLabelColor: '#555555',
        drawGrid: true,
        gridLineColor: '#999999',
        independentTicks: true
      },
      x: {
        axisLineColor: '#777777',
        axisLabelColor: '#777777'
      }

    },
    'Non-OSU': {
      axis: {

      }
    },
    'OSU': {
      axis: 'Non-OSU'
    },
    'CSCC': {
      axis: 'Non-OSU'
    },
    'Total': {
      axis: 'Non-OSU',
      strokeWidth: 2
    },
    'Days since March 0': {
      axis: 'Non-OSU'
    }

    /*,
        showRangeSelector: true,
        rangeSelectorHeight: 30,
        rangeSelectorPlotStrokeColor: 'yellow',
        rangeSelectorPlotFillColor: 'lightyellow'*/
    // Commented, but useul in event of future data increases
  });

var sum_x;
// redefine the getValue prototype to check for column, then modify value by subtracting sum of previous values. Sneaky, neh?

//var N = function () {};
//N.prototype = Dygraph.prototype;
//N.prototype.loadedEvent_ = function (data) {
//  this.rawData_ = this.parseCSV_(data);
//  console.log(this.rawData_);
//  for (var i = 0; i < this.rawData_.length; i++) {
//
//  }
//  // while loop modifying this.rawData_ values for rows >1 by subtracing previous from current
//  // probably using this.getValue
//  this.predraw_();
//};
//n.prototype.getValue = function(row, col) {
//
//  if (row < 0 || row > this.rawData_.length) return null;
//  if (col < 0 || col > this.rawData_[row].length) return null;
//  var x = this.rawData_[row][col];
//  if (col == 3) {
//    var y = x - sum_x;
//    sum_x = sum_x + x;
//    return y;
//  } else {
//    return x;
//  }
//};
var h = new Dygraph(document.getElementById("dy2"),
  "data-delta.csv", {
    rightGap: 5,
    hideOverlayOnMouseOut: false,
    labelsDiv: "dy2-labels",
    labelsSeparateLines: true,
    labelsShowZeroValues: true,
    legend: "always",
    colors: colorSets[1],
    visibility: [false, true, true, true, true],
    drawXGrid: false,
    stepPlot: true,
    axes: {
      includeZero: true,
      y: {
        valueFormatter: function (y) {
          return '';
        },
        axisLabelFormatter: function (y) {
          return '';
        },
        axisLineWidth: 0,
        axisLineColor: '#ffffff',
        yAxisLabelWidth: 0,
        axisLabelWidth: 0,
        drawYAxis: false,
        drawGrid: false
      },
      y2: {
        axisLabelFormatter: function (y) {
          return Math.round(y * 0.1) / 0.1;
          //return y;
        },
        valueFormatter: function (y) {
          return y;
        },
        axisLineColor: '#ffffff',
        axisLabelColor: '#555555',
        drawGrid: true,
        gridLineColor: '#999999',
        independentTicks: true
      },
      x: {
        axisLineColor: '#777777',
        axisLabelColor: '#777777'
      }

    },
    'Non-OSU': {
      axis: {

      }
    },
    'OSU': {
      axis: 'Non-OSU'
    },
    'CSCC': {
      axis: 'Non-OSU'
    },
    'Total': {
      axis: 'Non-OSU',
      strokeWidth: 2
    },
    'Days since March 0': {
      axis: 'Non-OSU'
    }

    /*,
        showRangeSelector: true,
        rangeSelectorHeight: 30,
        rangeSelectorPlotStrokeColor: 'yellow',
        rangeSelectorPlotFillColor: 'lightyellow'*/
    // Commented, but useul in event of future data increases
  });
