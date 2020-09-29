function cpuChart(data, labels, ele) {
    
}

var cdata_cpu = [];
var clabel_cpu = [];

var cdata_mem = [];
var clabel_mem = [];

var cdata_db = [];
var clabel_db = [];

var ctx = document.getElementById("cpu").getContext('2d');
    var myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel_cpu,
            datasets: [{
                label: 'CPU Utilization',
                data: cdata_cpu,
                borderColor: 'rgba(93, 188, 210, 10)',
                backgroundColor: 'rgba(93, 188, 210, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
                pointHitRadius: 20,
            }]
        },
        options: {          
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                        suggestedMax: 100,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage'
                      }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                      }
                }]               
            },
            legend:{
                display: false,
                backgroundColor:false,
                labels:{
                    boxWidth: 40
                }
            },
            title: {
                display: true,
                text: 'CPU Utilization',
                position: 'top',
                fontFamily: 'Open Sans',
            },
            maintainAspectRatio: false,
            responsive:true,
            
        }
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

setInterval(function(){
    date = new Date();
    nlabel = date.getHours()+':'+ (date.getMinutes()<10?'0':'')+date.getMinutes()+':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
    document.getElementById("sysclock").innerText= 'System Time(IST): '+nlabel;
}, 1000)

var ctx = document.getElementById("mem").getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel_mem,
            datasets: [{
                label: 'Memory Consumption',
                data: cdata_mem,
                borderColor: 'rgba(205,157,218, 1)',
                backgroundColor: 'rgba(205,157,218, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
                pointHitRadius: 20,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                        suggestedMax: 100,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage'
                      }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                      }
                }]                 
            },
            legend:{
                display: false
            },
            title: {
                display: true,
                text: 'Memory Consumption',
                position: 'top'
            },
            maintainAspectRatio: false,
            responsive:true,
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
                label: 'DB Trend',
                data: cdata_db,
                borderColor: 'rgba(175,215,145, 1)',
                backgroundColor: 'rgba(175,215,145, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
                pointHitRadius: 20,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                        suggestedMax: 100,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage'
                      }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                      }
                }]                 
            },
            legend:{
                display: false
            },
            title: {
                display: true,
                text: 'DB Trend',
                position: 'top'
            },
            maintainAspectRatio: false,
            responsive:true,
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
        
    }, 15000
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
       
        // document.getElementById("a").innerHTML = response.data;
       // console.log("in javascript code")
        console.log(response.data)
        // console.log(typeof respone.data);
        var str_a = response.data

        var arr = str_a.split("?")
        var arr_fin = []
        
        for(var i = 1; i < arr.length; i++){
            // console.log("in for loop \n");
           // console.log(arr[i]);
           // console.log(arr[i+1]);
           // console.log(typeof arr[i])
            arr_fin.push(JSON.parse(arr[i]));

        }
        // console.log("printing arr fin")
        // console.log(arr_fin)
        // array of json objects
        CreateTableFromJSON(arr_fin)
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};

function doRunmaxmem() {
    console.log("executed ls -la");
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/maxmem/',

    // responseType: 'json',
})
    .then(function (response) {
       
        // document.getElementById("topmem").innerHTML = response.data;
        // console.log(response);
        var str_a = response.data

        var arr = str_a.split("#")
        var arr_fin = []
        // // var arr = response.data
        for(var i = 1; i < arr.length; i++){
           //  console.log("in for loop \n");
           // console.log(arr[i]);
           // console.log(arr[i+1]);
           // console.log(typeof arr[i])
            arr_fin.push(JSON.parse(arr[i]));

        }
        // console.log("printing arr fin")
        // console.log(arr_fin)
        // array of json objects
        CreateTableFromJSON1(arr_fin)
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};

// doSomething();
setInterval(doRunmaxcpu, 5000);
setInterval(doRunmaxmem, 5000);



function CreateTableFromJSON(myBooks) {
        console.log(typeof myBooks);
        // var myBooks = [
        //     {
        //         "Book ID": "1",
        //         "Book Name": "Computer Architecture",
        //         "Category": "Computers",
        //         "Price": "125.60"
        //     },
        //     {
        //         "Book ID": "2",
        //         "Book Name": "Asp.Net 4 Blue Book",
        //         "Category": "Programming",
        //         "Price": "56.00"
        //     },
        //     {
        //         "Book ID": "3",
        //         "Book Name": "Popular Science",
        //         "Category": "Science",
        //         "Price": "210.40"
        //     }
        // ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];

        console.log(myBooks.length)
        for (var i = 0; i < myBooks.length; i++) {
            console.log(typeof myBooks[i])
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        var header = table.createTHead();
        var tblBody = document.createElement("tbody");
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = header.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {

            tr = tblBody.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }
        table.appendChild(tblBody);

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("topcpu");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }




function CreateTableFromJSON1(myBooks) {
        console.log(typeof myBooks);
        // var myBooks = [
        //     {
        //         "Book ID": "1",
        //         "Book Name": "Computer Architecture",
        //         "Category": "Computers",
        //         "Price": "125.60"
        //     },
        //     {
        //         "Book ID": "2",
        //         "Book Name": "Asp.Net 4 Blue Book",
        //         "Category": "Programming",
        //         "Price": "56.00"
        //     },
        //     {
        //         "Book ID": "3",
        //         "Book Name": "Popular Science",
        //         "Category": "Science",
        //         "Price": "210.40"
        //     }
        // ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];

        console.log(myBooks.length)
        for (var i = 0; i < myBooks.length; i++) {
            console.log(typeof myBooks[i])
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        var header = table.createTHead();
        var tblBody = document.createElement("tbody");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = header.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {

            tr = tblBody.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }
        table.appendChild(tblBody);

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer1 = document.getElementById("topmem");
        divContainer1.innerHTML = "";
        divContainer1.appendChild(table);
    }
