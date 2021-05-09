console.log("loading tableData.js");

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

d3.json("/tabledict").then(function (tableData) {
    console.log(tableData[0]);

    var job_category = tableData.job_category;
    

    console.log(job_category);
    
    for (i = 0; i <= tableData.length; i++) {
        console.log(tableData[i].job_category);


        var row = tbody.append("tr");
       

         Object.entries(tableData).forEach(function (key) {
             console.log(key[1]);
             var row = tbody.append("tr");
           
            Object.entries(key[1]).forEach(function ([key, value]) {
                        console.log(key, value);
                        
                         var cell = row.append("td").text(value);

                         
                    });
        })
        break;
    }

    

});





