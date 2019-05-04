$("#btn-search").on('click', function() {
	$("#search-span").hide();
		$("#loading-span").removeClass('d-none');
	setTimeout(function() {
		$("#search-span").show();
		$("#loading-span").addClass('d-none');
	}, 2000);
	
});

// Cart 
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
  return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        30,
        30,
        40,
      ],
      backgroundColor: [
        "#F7464A",
        "#46BFBD",
        "#FDB45C"
      ],
      label: 'Expenditures'
    }],
    labels: [
      "Paslon 1",
      "Paslon 2",
      "Paslon 3"
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue/total) * 100)+0.5);         
          return percentage + "%";
        }
      }
    }
  }
};



var ctx = document.getElementById("myChart").getContext("2d");
window.myDoughnut = new Chart(ctx, config); {
}