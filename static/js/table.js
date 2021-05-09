console.log("loading tableData.js");
// from flask route  
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var selector = d3.select('#selDataset');

// Displaying entire dataset as default
function searchData(dropdownSel) {
    console.log(dropdownSel);
    //clear any prev. values in the table
    tbody.html("");

    if (dropdownSel === "Business Analyst") {


    d3.json("/tabledict").then(function (tableData) {
        //console.log(tableData[0]);

        var job_category = tableData.job_category;
        

        //console.log(job_category);

        for (i = 0; i <= 3; i++) {
        //    console.log(tableData[i]);


            var row = tbody.append("tr");


            Object.entries(tableData).forEach(function (key) {
                // console.log(key[1]);
                var row = tbody.append("tr");

                Object.entries(key[1]).forEach(function ([key, value]) {
                    // console.log(key, value);

                    var cell = row.append("td").text(value);


                });
            })
            break;
         }

        });
    }


if (dropdownSel === "Data Analyst") {


    d3.json("/tabledict_dataAnalyst").then(function (tableData) {
        //console.log(tableData[0]);

        var job_category = tableData.job_category;
        

        //console.log(job_category);

        for (i = 0; i <= 3; i++) {
        //    console.log(tableData[i]);


            var row = tbody.append("tr");


            Object.entries(tableData).forEach(function (key) {
                // console.log(key[1]);
                var row = tbody.append("tr");

                Object.entries(key[1]).forEach(function ([key, value]) {
                    // console.log(key, value);

                    var cell = row.append("td").text(value);


                });
            })
            break;
         }

        });
    }

    if (dropdownSel === "Data Engineer") {


        d3.json("/tabledict_dataEngineer").then(function (tableData) {
            //console.log(tableData[0]);
    
            var job_category = tableData.job_category;
            
    
            //console.log(job_category);
    
            for (i = 0; i <= 3; i++) {
            //    console.log(tableData[i]);
    
    
                var row = tbody.append("tr");
    
    
                Object.entries(tableData).forEach(function (key) {
                    // console.log(key[1]);
                    var row = tbody.append("tr");
    
                    Object.entries(key[1]).forEach(function ([key, value]) {
                        // console.log(key, value);
    
                        var cell = row.append("td").text(value);
    
    
                    });
                })
                break;
             }
    
            });
        }

        if (dropdownSel === "Data Science") {


            d3.json("/tabledict_dataScience").then(function (tableData) {
                //console.log(tableData[0]);
        
                var job_category = tableData.job_category;
                
        
                //console.log(job_category);
        
                for (i = 0; i <= 3; i++) {
                //    console.log(tableData[i]);
        
        
                    var row = tbody.append("tr");
        
        
                    Object.entries(tableData).forEach(function (key) {
                        // console.log(key[1]);
                        var row = tbody.append("tr");
        
                        Object.entries(key[1]).forEach(function ([key, value]) {
                            // console.log(key, value);
        
                            var cell = row.append("td").text(value);
        
        
                        });
                    })
                    break;
                 }
        
                });
            }
    
}

//searchData();

function InitTable() {

            var sampleNames = [ 'Business Analyst', 'Data Analyst', 'Data Engineer', 'Data Science']
            // console.log(sampleNames)

            sampleNames.forEach(sampleId => {
                selector.append('option')
                    .text(sampleId)
                    .property('value', sampleId);
            });

        }

InitTable();