"use strict";
import users from './data.json' assert {type: 'json'};

console.log(users);




var header = document.getElementsByClassName("left-graph-link")[0];
var b1 = header.querySelectorAll('button');
for (var i = 0; i < b1.length; i++) {
  b1[i].addEventListener("click", function () {
    var current1 = document.getElementsByClassName("active1");
    current1[0].className = current1[0].className.replace(" active1", "");
    this.className += " active1";
  });
}
var heeader = document.getElementsByClassName("right-graph-link")[0];
var b2 = heeader.getElementsByTagName('button');
for (var i = 0; i < b2.length; i++) {
  b2[i].addEventListener("click", function () {
    var current2 = document.getElementsByClassName("active2");
    current2[0].className = current2[0].className.replace(" active2", "");
    this.className += " active2";
  });
}
var heeaderr = document.getElementsByClassName("right-graph-link")[1];
var br2 = heeaderr.getElementsByTagName('button');
for (var i = 0; i < br2.length; i++) {
  br2[i].addEventListener("click", function () {
    var current3 = document.getElementsByClassName("activer2");
    current3[0].className = current3[0].className.replace(" activer2", "");
    this.className += " activer2";
  });
}


var HomeBoxChart1 = document.getElementById('home-box-chart-1').getContext("2d");
var Homechart1 = new Chart(HomeBoxChart1, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#72b3b3",
        borderColor: "#017171",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },
})

var HomeBoxChart2 = document.getElementById('home-box-chart-2').getContext("2d");
var Homechart2 = new Chart(HomeBoxChart2, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#7ab4e8",
        borderColor: "#147ad6",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },



})

var HomeBoxChart3 = document.getElementById('home-box-chart-3').getContext("2d");
var Homechart3 = new Chart(HomeBoxChart3, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#ffb76e",
        borderColor: "#ff9a31",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },



})

var HomeBoxChart4 = document.getElementById('home-box-chart-4').getContext("2d");
var Homechart4 = new Chart(HomeBoxChart4, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#70d0b4",
        borderColor: "#2fb58d",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },



})

var HomeBoxChart5 = document.getElementById('home-box-chart-5').getContext("2d");
var Homechart5 = new Chart(HomeBoxChart5, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#f7db6e",
        borderColor: "#f3c92a",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },



})

var HomeBoxChart6 = document.getElementById('home-box-chart-6').getContext("2d");
var Homechart6 = new Chart(HomeBoxChart6, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#ca84d4",
        borderColor: "#b24cc2",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },



})

var HomeBoxChart7 = document.getElementById('home-box-chart-7').getContext("2d");
var Homechart7 = new Chart(HomeBoxChart7, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#ec8784",
        borderColor: "#e14b4b",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },



})

var HomeBoxChart8 = document.getElementById('home-box-chart-8').getContext("2d");
var Homechart8 = new Chart(HomeBoxChart8, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        fill: true,
        backgroundColor: "#6ecb82",
        borderColor: "#34b752",
        lineTension: 0.4,
        pointBackgroundColor: "white",
        pointRadius: 2.5,
        data: [],
      }
    ],
  },


  options: {
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },

  },
})
let s = 0;
setInterval(() => {
  Homechart1.data.labels.push("");
  Homechart1.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart1.update();
  });
  Homechart2.data.labels.push("");
  Homechart2.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart2.update();
  });
  Homechart3.data.labels.push("");
  Homechart3.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart3.update();
  });
  Homechart4.data.labels.push("");
  Homechart4.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart4.update();
  });
  Homechart5.data.labels.push("");
  Homechart5.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart5.update();
  });
  Homechart6.data.labels.push("");
  Homechart6.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart6.update();
  });
  Homechart7.data.labels.push("");
  Homechart7.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart7.update();
  });
  Homechart8.data.labels.push("");
  Homechart8.data.datasets.forEach((dataset) => {
    dataset.data.push(0);
    Homechart8.update();
  });
  if (s > 9) {
    Homechart2.data.labels.shift();
    Homechart2.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart2.update();
    });
    Homechart1.data.labels.shift();
    Homechart1.data.datasets.forEach((dataset) => {
      dataset.data.shift(); Homechart1.update();
    });
    Homechart3.data.labels.shift();
    Homechart3.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart3.update();
    });
    Homechart4.data.labels.shift();
    Homechart4.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart4.update();
    });
    Homechart5.data.labels.shift();
    Homechart5.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart5.update();
    });
    Homechart6.data.labels.shift();
    Homechart6.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart6.update();
    });
    Homechart7.data.labels.shift();
    Homechart7.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart7.update();
    });
    Homechart8.data.labels.shift();
    Homechart8.data.datasets.forEach((dataset) => {
      dataset.data.shift();
      Homechart8.update();
    });
    s--;
  }
  s++;
}, 1800);


var MainGraph = document.getElementById('main-graph').getContext("2d");
let maingraphlabel = [];
var maindata1 = [];
var maindata2 = [];
var maindata3 = [];
var maindata4 = [];
users.vaccinationDoneByTimeToday.forEach(e => {
  maingraphlabel.push(e.label.slice(6, 11))
  maindata1.push(e.count)
  maindata2.push(e.dose_one)
  maindata3.push(e.dose_two)
  maindata4.push(e.dose_pd)
})




var maingraph = new Chart(MainGraph, {
  type: "line",
  data: {
    labels: maingraphlabel,
    datasets: [
      {
        label: "Total Doses",
        pointBackgroundColor: "#f54394",
        borderColor: "#f54394",
        backgroundColor: "#feecf4",
        data: maindata1,
      },
      {
        label: "Dose 1",
        pointBackgroundColor: "#fe9a05",
        borderColor: "#fe9a05",
        backgroundColor: "#fff4e5",
        data: maindata2,
      },
      {
        label: "Dose 2",
        pointBackgroundColor: "#21c694",
        borderColor: "#21c694",
        backgroundColor: "#ebf1fa",
        data: maindata3,
      },
      {
        label: "Precaution Dose",
        pointBackgroundColor: "#12a907",
        borderColor: "#12a907",
        backgroundColor: "#f4fcfa",
        data: maindata4,
      }
    ],
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})
let btn = document.getElementsByClassName('right-graph-link')[0].querySelectorAll('button');
Array.from(btn).forEach(e => {
  e.addEventListener('click', () => {
    console.log(e.className)
    maingraph.data.labels = [];
    maingraph.data.datasets[0].data = [];
    maingraph.data.datasets[1].data = [];
    maingraph.data.datasets[2].data = [];
    maingraph.data.datasets[3].data = [];
    if (e.innerHTML === "Last 30 days" && e.className === "b2 active2") {
      users.last30DaysVaccination.forEach(ele => {
        maingraph.data.labels.push(ele.vaccine_date.slice(8, 10))
        maingraph.data.datasets[0].data.push(ele.total);
        maingraph.data.datasets[1].data.push(ele.dose_1);
        maingraph.data.datasets[2].data.push(ele.dose_2);
        maingraph.data.datasets[3].data.push(ele.dose_pd);
      })
      maingraph.update();
    }
    else if (e.innerHTML === "Today" && e.className === "b2 active2") {
      users.vaccinationDoneByTimeToday.forEach(ele => {
        maingraph.data.labels.push(ele.label.slice(6, 11))
        maingraph.data.datasets[0].data.push(ele.count);
        maingraph.data.datasets[1].data.push(ele.dose_one);
        maingraph.data.datasets[2].data.push(ele.dose_two);
        maingraph.data.datasets[3].data.push(ele.dose_pd);
      })
      maingraph.update();
    }
  })
})

var registrationMaindata1 = [];
var registrationMaindata2 = [];
var registrationMaindata3 = [];
var registrationMaindata4 = [];
var registrationMaindata5 = [];
var registrationMaindata6 = [];
let btn1 = document.getElementById('registration-graph-data').getElementsByClassName('right-graph-link')[0].querySelectorAll('button');
var registrationMainGraphlabel = [];
users.registrationDoneByTimeToday.forEach(e => {
  registrationMainGraphlabel.push(e.ts.slice(11, 13));
  registrationMaindata1.push(e.total);
  registrationMaindata2.push(e.age12);
  registrationMaindata3.push(e.age15);
  registrationMaindata4.push(e.age18);
  registrationMaindata5.push(e.age45);
  registrationMaindata6.push(e.age60);
})

var piegraph = document.getElementById('piegraph').getContext("2d");
var piegraphs = new Chart(piegraph, {
  type: 'pie',
  data: {
    labels: [
      'Male',
      'Female',
      'Others'
    ],
    datasets: [{
      data: [1006169550, 967488787, 0],
      backgroundColor: [
        '#5439fc',
        '#f54394',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})

var donutgraph = document.getElementById('donutgraph').getContext("2d");
var donutgraphs = new Chart(donutgraph, {
  type: 'doughnut',
  data: {
    labels: [
      'Covishield',
      'Covaxin',
      'Sputnik V',
      'Corbevax',
      'Covovax',
      'iNCOVACC',
      'GEMCOVAC®-OM'
    ],
    datasets: [{
      data: [1749417978, 363930701, 0, 73818756, 0, 0, 0],
      backgroundColor: [
        '#007bff', '#fd7e14', '#23c896', '#f54394', '#b24cc2', '#5cba18', '#25c4ac'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})

var stackedgraph = document.getElementById('stackedgraph').getContext("2d");
var stackedgraphs = new Chart(stackedgraph, {
  type: 'bar',
  data: {
    labels: [""],
    datasets: [
      {
        label: "12-14",
        backgroundColor: "#01020d",
        data: [users.vaccinationByAge.vac_12_14],
      },
      {
        label: "15-17",
        backgroundColor: "#32489e",
        data: [users.vaccinationByAge.vac_15_17],
      },
      {
        label: "18-44",
        backgroundColor: "#565a8f",
        data: [users.vaccinationByAge.vac_18_45],
      },
      {
        label: "45-60",
        backgroundColor: "#0263ff",
        data: [users.vaccinationByAge.vac_45_60],
      },
      {
        label: "Above 60",
        backgroundColor: "#649af1",
        data: [users.vaccinationByAge.above_60],
      }
    ]
  },
  options: {
    scales: {
      x: {

        stacked: true,
        ticks: {
          display: false
        },
        grid: {
          display: false
        },

      },
      y: {
        stacked: true,
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})

var RegistrationMainGraph = document.getElementById('registration-main-graph').getContext("2d");
var registrationMainGraph = new Chart(RegistrationMainGraph, {
  type: "line",
  data: {
    labels: registrationMainGraphlabel,
    datasets: [
      {
        label: "Total",
        pointBackgroundColor: "#21cc98",
        borderColor: "#21cc98",
        backgroundColor: "#dff2ed",
        data: registrationMaindata1,
      },
      {
        label: "12-14",
        pointBackgroundColor: "#b24cc2",
        borderColor: "#b24cc2",
        backgroundColor: "#f7edf9",
        data: registrationMaindata2,
      },
      {
        label: "15-17",
        pointBackgroundColor: "#21c694",
        borderColor: "#21c694",
        backgroundColor: "#f2fbff",
        data: registrationMaindata3,
      },
      {
        label: "18-44",
        pointBackgroundColor: "#ff9800",
        borderColor: "#ff9800",
        backgroundColor: "#fff4e5",
        data: registrationMaindata4,
      },
      {
        label: "45-60",
        pointBackgroundColor: "#5439fc",
        borderColor: "#5439fc",
        backgroundColor: "#eeebff",
        data: registrationMaindata5,
      }, {
        label: "Above 60",
        pointBackgroundColor: "#f54394",
        borderColor: "#f54394",
        backgroundColor: "#fdd9ea",
        data: registrationMaindata6,
      }
    ],
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})

Array.from(btn1).forEach(e => {
  e.addEventListener('click', () => {
    registrationMainGraph.data.labels = [];
    registrationMainGraph.data.datasets[0].data = [];
    registrationMainGraph.data.datasets[1].data = [];
    registrationMainGraph.data.datasets[2].data = [];
    registrationMainGraph.data.datasets[3].data = [];
    registrationMainGraph.data.datasets[4].data = [];
    registrationMainGraph.data.datasets[5].data = [];
    if (e.innerHTML === "Last 30 days" && e.className === "br2 activer2") {
      users.last30DaysRegistration.forEach(ele => {
        registrationMainGraph.data.labels.push(ele.reg_date.slice(8, 10))
        registrationMainGraph.data.datasets[0].data.push(ele.total);
        registrationMainGraph.data.datasets[1].data.push(ele.age12);
        registrationMainGraph.data.datasets[2].data.push(ele.age15);
        registrationMainGraph.data.datasets[3].data.push(ele.age18);
        registrationMainGraph.data.datasets[4].data.push(ele.age45);
        registrationMainGraph.data.datasets[5].data.push(ele.age60);
      })
      registrationMainGraph.update();
    }
    else if (e.innerHTML === "Today" && e.className === "br2 activer2") {
      users.registrationDoneByTimeToday.forEach(ele => {
        registrationMainGraph.data.labels.push(ele.ts.slice(11, 13))
        registrationMainGraph.data.datasets[0].data.push(ele.total);
        registrationMainGraph.data.datasets[1].data.push(ele.age12);
        registrationMainGraph.data.datasets[2].data.push(ele.age15);
        registrationMainGraph.data.datasets[3].data.push(ele.age18);
        registrationMainGraph.data.datasets[4].data.push(ele.age45);
        registrationMainGraph.data.datasets[5].data.push(ele.age60);
      })
      registrationMainGraph.update();
    }
  })
})



let Aefigraphlebel = [];
let Aefigraphdata = [];
users.last30DaysAefiReported.forEach(e => {
  Aefigraphlebel.push(e.vaccine_date.slice(8, 10) + " Dec");
  Aefigraphdata.push(e.aefi);
})
var Aefigraph = document.getElementById('aefi-garph').getContext('2d');
var Aefigraphs = new Chart(Aefigraph, {
  type: 'line',
  data: {
    labels: Aefigraphlebel,
    datasets: [
      {
        label: "Total",
        borderColor: "#21cc98",
        pointBackgroundColor: "#21cc98",
        pointRadius: 3,
        data: Aefigraphdata,
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        min: 0,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})


let ruralurbanlabel = [];
users.last30DaysVaccination.forEach(e => {
  ruralurbanlabel.push(e.vaccine_date.slice(8, 10) + " Dec")
})
let RuralUrbanChart = document.getElementById('rural-urban-graph').getContext('2d');
let ruralurbanchart = new Chart(RuralUrbanChart, {
  type: 'bar',
  data: {
    labels: ruralurbanlabel,
    datasets: [
      {
        label: 'Urban',
        backgroundColor: '#5439fc',
        barThickness: 10,
        grouped: false,
        data: [],
      }
      ,
      {
        label: 'Rural',
        backgroundColor: '#ff7723',
        barThickness: 10,
        grouped: false,
        data: [],
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {

        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          font: {
            size: 12
          },
        },
      }
    }
  }
})
users.last30DaysVaccination.forEach(e => {

  ruralurbanchart.data.datasets[0].data.push(e.urban);
  ruralurbanchart.data.datasets[1].data.push(e.rural);
})



// Map of india

const projection = d3.geoMercator().center([25, 17]).scale(1000);
const pathgenerator = d3.geoPath().projection(projection);

const svg = d3.select('#map');
const g = svg.append('g');

let Tooltip = d3.select('body')
  .append('div')
  .attr('class', 'MapTooltip')
  .style("opacity", 0)
  .style("background-color", "white")
  .style("padding", "5px 10px")

var mouseover = function (d) {
  Tooltip.style("opacity", 1)
}
var mousemove = function (event, d) {
  let h = d.id;

  users.stateWiseVaccination.forEach(e => {
    if (e.id === h) {
      Tooltip
        .html(e.state_name + "<br>" + "<span>" + "Dose One" + "<br>" + e.partial_vaccinated + "</span>" + "<br>" + "<span>" + "Dose Two" + "<br>" + e.totally_vaccinated + "</span>" + "<br>" + "<span>" + "Precaution Dose" + "<br>" + e.precaution_dose + "</span>")
        .style("left", (event.pageX + 10) + "px") // Corrected the left position
        .style("top", (event.pageY - 10) + "px"); // Corrected the top position
    }
  });
}
var mouseleave = function (d) {
  Tooltip.style("opacity", 0)
}


d3.json('./js/map_data.json').then(data => {
  const state = topojson.feature(data, data.objects.states)
  g.selectAll('path').data(state.features).enter().append('path').attr('d', d => pathgenerator(d)).attr('class', 'statepath');
  g.selectAll('circle').data(state.features).enter().append('circle').attr('class', 'state-circle').attr('cx', d => projection(d3.geoCentroid(d))[0]).attr('cy', d => projection(d3.geoCentroid(d))[1]).attr('r', '12')
    .on('mouseover', mouseover).on('mousemove', mousemove).on('mouseleave', mouseleave)
})


let stateBox = document.getElementsByClassName('state-box');
let rightRegionBox = document.getElementsByClassName('right-region-box')[0];
let stateBoxDetail;
let creatediv;
for (let i = 0; i < 36; i++) {
  creatediv = stateBox[0].cloneNode(true); 
  rightRegionBox.appendChild(creatediv);
}

for (let i = 0; i < stateBox.length; i++) {
  stateBox[i].getElementsByClassName('state-box-heading')[0].querySelector('h5').innerText = users.stateWiseVaccination[i].state_name;
  stateBoxDetail = stateBox[i].getElementsByClassName('state-box-detail')[0];
  stateBoxDetail.getElementsByTagName('div')[0].querySelector('span').innerText = users.stateWiseVaccination[i].today;
  stateBoxDetail.getElementsByTagName('div')[1].querySelector('span').innerText = users.stateWiseVaccination[i].total;
  stateBoxDetail.getElementsByTagName('div')[2].querySelector('span').innerText = users.stateWiseVaccination[i].partial_vaccinated;
  stateBoxDetail.getElementsByTagName('div')[3].querySelector('span').innerText = users.stateWiseVaccination[i].totally_vaccinated;
  stateBoxDetail.getElementsByTagName('div')[4].querySelector('span').innerText = users.stateWiseVaccination[i].precaution_dose;
}


