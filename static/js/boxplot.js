console.log("boxplot.js is loaded")

var div_select =  document.getElementById('leaflet');

const chart = toastui.Chart;
// avg_boxplot_salary_arr = []
// d3.json('/salarybox').then(function (data) {

//     for (var i = 0; i < data.length; i++) {

//         avg_boxplot_salary_arr.push(data[i]['average_salary'])

//     };

// });

function dropBoxPlot(selectedValue) {

d3.json('/salarybox').then(function (salary_data) {
    const el = document.getElementById('leaflet');

    data_scientest_min_boxplot_salary_arr = []
    data_scientest_max_boxplot_salary_arr = []
    data_scientest_avg_boxplot_salary_arr = [] 
    
    data_analyst_min_boxplot_salary_arr = []
    data_analyst_max_boxplot_salary_arr = []
    data_analyst_avg_boxplot_salary_arr = []  

    data_engineer_min_boxplot_salary_arr = []
    data_engineer_max_boxplot_salary_arr = []
    data_engineer_avg_boxplot_salary_arr = []  

    business_analyst_min_boxplot_salary_arr = []
    business_analyst_max_boxplot_salary_arr = []
    business_analyst_avg_boxplot_salary_arr = []  

    for (var i = 0; i < salary_data.length; i++) {

        if (salary_data[i]['job_category'] === 'Data Science'){
            data_scientest_avg_boxplot_salary_arr.push(salary_data[i]['average_salary'])
            data_scientest_min_boxplot_salary_arr.push(salary_data[i]['min_salary'])
            data_scientest_max_boxplot_salary_arr.push(salary_data[i]['max_salary'])
        }
        if (salary_data[i]['job_category'] === 'Data Analyst'){
            data_analyst_avg_boxplot_salary_arr.push(salary_data[i]['average_salary'])
            data_analyst_min_boxplot_salary_arr.push(salary_data[i]['min_salary'])
            data_analyst_max_boxplot_salary_arr.push(salary_data[i]['max_salary'])
        }
        if (salary_data[i]['job_category'] === 'Data Engineer'){
            data_engineer_avg_boxplot_salary_arr.push(salary_data[i]['average_salary'])
            data_engineer_min_boxplot_salary_arr.push(salary_data[i]['min_salary'])
            data_engineer_max_boxplot_salary_arr.push(salary_data[i]['max_salary'])
        }
        if (salary_data[i]['job_category'] === 'Business Analyst'){
            business_analyst_avg_boxplot_salary_arr.push(salary_data[i]['average_salary'])
            business_analyst_min_boxplot_salary_arr.push(salary_data[i]['min_salary'])
            business_analyst_max_boxplot_salary_arr.push(salary_data[i]['max_salary'])
        }

    };
    
    console.log(data_scientest_max_boxplot_salary_arr);
    
    const data = {
    categories: [
        'Minimum Salary', 'Maximum Salary', 'Average Salary'
    ],
    series: [
        {
            name: 'Business Analyst',
            data: [
                business_analyst_min_boxplot_salary_arr,
                business_analyst_max_boxplot_salary_arr,
                business_analyst_avg_boxplot_salary_arr
            ],
        },
        {
            name: 'Data Analyst',
            data: [
                data_analyst_min_boxplot_salary_arr,
                data_analyst_max_boxplot_salary_arr,
                data_analyst_avg_boxplot_salary_arr
            ],
        },
        {
            name: 'Data Engineer',
            data: [
                data_engineer_min_boxplot_salary_arr,
                data_engineer_max_boxplot_salary_arr,
                data_engineer_avg_boxplot_salary_arr
            ],
        },
        {
            name: 'Data Science',
            data: [
                data_scientest_min_boxplot_salary_arr,
                data_scientest_max_boxplot_salary_arr,
                data_scientest_avg_boxplot_salary_arr
            ],
        }
    ],
    };
    const options = {
    theme: {
        series:{
            colors: ["#F7DC6F", "#DE3163", "#008000", "#0000FF"]
    }},
    chart: { title: 'Salary Ranges by Job Category', width: 700, height: 400 },
    };

    chart.boxPlotChart({ el, data, options });
})};

function reFilterBoxChar(selectedValue) {
    console.log("well this worked for box chart too!.")

    if (selectedValue == "All") {
        div_select.removeChild(div_select.firstChild);
        const el = document.getElementById('leaflet');
        const data = {
            categories: [
                'Minimum Salary', 'Maximum Salary', 'Average Salary'
            ],
            series: [
                {
                    name: 'Business Analyst',
            data: [
                business_analyst_min_boxplot_salary_arr,
                business_analyst_max_boxplot_salary_arr,
                business_analyst_avg_boxplot_salary_arr
            ],
        },
        {
            name: 'Data Analyst',
            data: [
                data_analyst_min_boxplot_salary_arr,
                data_analyst_max_boxplot_salary_arr,
                data_analyst_avg_boxplot_salary_arr
            ],
        },
        {
            name: 'Data Engineer',
            data: [
                data_engineer_min_boxplot_salary_arr,
                data_engineer_max_boxplot_salary_arr,
                data_engineer_avg_boxplot_salary_arr
            ],
        },
        {
            name: 'Data Science',
            data: [
                data_scientest_min_boxplot_salary_arr,
                data_scientest_max_boxplot_salary_arr,
                data_scientest_avg_boxplot_salary_arr
            ],
                }
            ],
            }
            const options = {
                theme: {
                    series:{
                        colors: ["#F7DC6F", "#DE3163", "#008000", "#0000FF"]
                }},
                chart: { title: 'Salary Ranges by Job Category', width: 700, height: 400 },
            };
            
            chart.boxPlotChart({ el, data, options });

    } else if (selectedValue == "Data Science") {
        div_select.removeChild(div_select.firstChild);
        const el = document.getElementById('leaflet');
        const data = {
            categories: [
                'Minimum Salary', 'Maximum Salary', 'Average Salary'
            ],
            series: [
                {
                    name: 'Data Science',
                    data: [
                        data_scientest_min_boxplot_salary_arr,
                        data_scientest_max_boxplot_salary_arr,
                        data_scientest_avg_boxplot_salary_arr
                    ],
                }
            ],
            };
            const options = {
                theme: {
                    series:{
                        colors: ["#0000FF"]
                }},
                chart: { title: 'Salary Ranges by Job Category', width: 700, height: 400 },
            };
            
            chart.boxPlotChart({ el, data, options });

    } else if (selectedValue == "Data Analyst") {
        div_select.removeChild(div_select.firstChild);
        const el = document.getElementById('leaflet');
        const data = {
            categories: [
                'Minimum Salary', 'Maximum Salary', 'Average Salary'
            ],
            series: [
                {
                    name: 'Data Analyst',
                    data: [
                        data_analyst_min_boxplot_salary_arr,
                        data_analyst_max_boxplot_salary_arr,
                        data_analyst_avg_boxplot_salary_arr
                    ],
                }
            ],
            };
            const options = {
                theme: {
                    series:{
                        colors: ["#DE3163"]
                }},
                chart: { title: 'Salary Ranges by Job Category', width: 700, height: 400 },
            };
            
            chart.boxPlotChart({ el, data, options });

    } else if (selectedValue == "Business Analyst") {
        div_select.removeChild(div_select.firstChild);
        const el = document.getElementById('leaflet');
        const data = {
            categories: [
                'Minimum Salary', 'Maximum Salary', 'Average Salary'
            ],
            series: [
                {
                    name: 'Business Analyst',
                    data: [
                        business_analyst_min_boxplot_salary_arr,
                        business_analyst_max_boxplot_salary_arr,
                        business_analyst_avg_boxplot_salary_arr
                    ],
                }
            ],
            };
            const options = {
                theme: {
                    series:{
                        colors: ["#F7DC6F"]
                }},
                chart: { title: 'Salary Ranges by Job Category', width: 700, height: 400 },
            };
            
            chart.boxPlotChart({ el, data, options });

    } else if (selectedValue == "Data Engineer") {
        div_select.removeChild(div_select.firstChild);
        const el = document.getElementById('leaflet');
        const data = {
            categories: [
                'Minimum Salary', 'Maximum Salary', 'Average Salary'
            ],
            series: [
                {
                    name: 'Data Engineer',
                    data: [
                        data_engineer_min_boxplot_salary_arr,
                        data_engineer_max_boxplot_salary_arr,
                        data_engineer_avg_boxplot_salary_arr
                    ],
                }
            ],
            };
            const options = {
                theme: {
                    series:{
                        colors: ["#008000"]
                }},
                chart: { title: 'Salary Ranges by Job Category', width: 700, height: 400 },
            };
            
            chart.boxPlotChart({ el, data, options });

    // } else {
    //     div_select.removeChild(div_select.firstChild);
    //     const el = document.getElementById('leaflet');
    //     const data = {
    //         categories: [
    //             'Minimum Salary', 'Maximum Salary', 'Average Salary'
    //         ],
    //         series: [
    //             {
    //                 name: 'Data Analyst',
    //                 data: [
    //                     data_analyst_min_boxplot_salary_arr,
    //                     data_analyst_max_boxplot_salary_arr,
    //                     data_analyst_avg_boxplot_salary_arr
    //                 ],
    //             },
    //             {
    //                 name: 'Data Science',
    //                 data: [
    //                     data_scientest_min_boxplot_salary_arr,
    //                     data_scientest_max_boxplot_salary_arr,
    //                     data_scientest_avg_boxplot_salary_arr
    //                 ],
    //             },
    //             {
    //                 name: 'Business Analyst',
    //                 data: [
    //                     business_analyst_min_boxplot_salary_arr,
    //                     business_analyst_max_boxplot_salary_arr,
    //                     business_analyst_avg_boxplot_salary_arr
    //                 ],
    //             },
    //             {
    //                 name: 'Data Engineer',
    //                 data: [
    //                     data_engineer_min_boxplot_salary_arr,
    //                     data_engineer_max_boxplot_salary_arr,
    //                     data_engineer_avg_boxplot_salary_arr
    //                 ],
    //             }
    //         ],
    //         };
    //         const options = {
    //             chart: { width: 700, height: 400 },
    //             };
            
    //         chart.boxPlotChart({ el, data, options });
    }
    
  }



// d3.json('/salarybox').then(function (data) {

//     console.log(data);

//     keys = Object.keys(data);
//     values = Object.values(data);

//     const min_sal_data = {
//         categories: [keys],
//         series: [values]
//     }

//     });
