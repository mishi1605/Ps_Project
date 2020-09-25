function cpuChart(data, labels, ele) {
    
}

var cdata_cpu = [10,15,12,1];
var clabel_cpu = ["12:00", "12:01", "12:02", "12:03"];

var cdata_mem = [10,15,12,1];
var clabel_mem = ["12:00", "12:01", "12:02", "12:03"];

var cdata_db = [10,15,12,1];
var clabel_db = ["12:00", "12:01", "12:02", "12:03"];

var ctx = document.getElementById("cpu").getContext('2d');
    var myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel_cpu,
            datasets: [{
                data: cdata_cpu,
                borderColor: 'rgba(93, 188, 210, 1)',
                backgroundColor: 'rgba(93, 188, 210, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                        suggestedMax: 100,
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    }
                }]               
            },
            legend:{
                display: false
            },
        },
    });
    function updateCpu(){
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/cpu/',

    // responseType: 'json',
})
    .then(function (response) {
        date = new Date();
        nlabel = date.getHours()+':'+ (date.getMinutes()<10?'0':'')+date.getMinutes()+':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        myChart1.data.datasets[0].data.push(response.data);
        myChart1.data.labels.push(nlabel);
        myChart1.update();
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};


var ctx = document.getElementById("mem").getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel_mem,
            datasets: [{
                data: cdata_mem,
                borderColor: 'rgba(205,157,218, 1)',
                backgroundColor: 'rgba(205,157,218, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                        suggestedMax: 100,
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    }
                }]                 
            },
            legend:{
                display: false
            },
        },
    });
    function updateMem(){
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/mem/',

    // responseType: 'json',
})
    .then(function (response) {
        date = new Date();
        nlabel = date.getHours()+':'+ (date.getMinutes()<10?'0':'')+date.getMinutes()+':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        
        myChart2.data.datasets[0].data.push(response.data);
        myChart2.data.labels.push(nlabel);
        myChart2.update();
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};

var ctx = document.getElementById("dbtrend").getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel_db,
            datasets: [{
                data: cdata_db,
                borderColor: 'rgba(175,215,145, 1)',
                backgroundColor: 'rgba(175,215,145, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                        suggestedMax: 100,
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    }
                }]                 
            },
            legend:{
                display: false
            },
        },
    });
    function updateDB(){
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/db/',

    // responseType: 'json',
})
    .then(function (response) {
        date = new Date();
        nlabel = date.getHours()+':'+ (date.getMinutes()<10?'0':'')+date.getMinutes()+':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        myChart3.data.datasets[0].data.push(response.data);
        myChart3.data.labels.push(nlabel);
        myChart3.update();
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};
 function initDate()
 {
        date = new Date();
        nlabel = date.getHours()+':'+ (date.getMinutes()<10?'0':'')+date.getMinutes()+':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        myChart1.data.datasets[0].data.unshift(0);
        myChart1.data.labels.unshift(nlabel);
        myChart1.update();
        myChart2.data.datasets[0].data.unshift(0);
        myChart2.data.labels.unshift(nlabel);
        myChart2.update();
        myChart3.data.datasets[0].data.unshift(0);
        myChart3.data.labels.unshift(nlabel);
        myChart3.update();
 };

    initDate();
   setInterval(function() {
    updateCpu();
  updateMem();
 updateDB();
        
    }, 60000
        );

function doRunmaxcpu() {
    console.log("executed ls");
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/maxcpu/',

    // responseType: 'json',
})
    .then(function (response) {
       
        document.getElementById("topcpu").innerHTML = response.data;
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
}
function doRunmaxmem() {
    console.log("executed ls -la");
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/maxmem',

    // responseType: 'json',
})
    .then(function (response) {
       
        document.getElementById("topmem").innerHTML = response.data;
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
}
// doSomething();
setInterval(doRunmaxcpu, 5000);
setInterval(doRunmaxmem, 5000);




