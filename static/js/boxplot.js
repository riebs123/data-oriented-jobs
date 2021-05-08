console.log("boxplot.js is loaded")

const chart = toastui.Chart;
// avg_salary_arr = []
// d3.json('/salarybox').then(function (data) {

//     for (var i = 0; i < data.length; i++) {

//         avg_salary_arr.push(data[i]['average_salary'])

//     };

// });


d3.json('/salarybox').then(function (salary_data) {
    const el = document.getElementById('leaflet');

    data_scientest_min_salary_arr = []
    data_scientest_max_salary_arr = []
    data_scientest_avg_salary_arr = [] 
    
    data_analyst_min_salary_arr = []
    data_analyst_max_salary_arr = []
    data_analyst_avg_salary_arr = []  

    data_engineer_min_salary_arr = []
    data_engineer_max_salary_arr = []
    data_engineer_avg_salary_arr = []  

    business_analyst_min_salary_arr = []
    business_analyst_max_salary_arr = []
    business_analyst_avg_salary_arr = []  

    for (var i = 0; i < salary_data.length; i++) {

        if (salary_data[i]['job_category'] === 'Data Science'){
            data_scientest_avg_salary_arr.push(salary_data[i]['average_salary'])
            data_scientest_min_salary_arr.push(salary_data[i]['min_salary'])
            data_scientest_max_salary_arr.push(salary_data[i]['max_salary'])
        }
        if (salary_data[i]['job_category'] === 'Data Analyst'){
            data_analyst_avg_salary_arr.push(salary_data[i]['average_salary'])
            data_analyst_min_salary_arr.push(salary_data[i]['min_salary'])
            data_analyst_max_salary_arr.push(salary_data[i]['max_salary'])
        }
        if (salary_data[i]['job_category'] === 'Data Engineer'){
            data_engineer_avg_salary_arr.push(salary_data[i]['average_salary'])
            data_engineer_min_salary_arr.push(salary_data[i]['min_salary'])
            data_engineer_max_salary_arr.push(salary_data[i]['max_salary'])
        }
        if (salary_data[i]['job_category'] === 'Business Analyst'){
            business_analyst_avg_salary_arr.push(salary_data[i]['average_salary'])
            business_analyst_min_salary_arr.push(salary_data[i]['min_salary'])
            business_analyst_max_salary_arr.push(salary_data[i]['max_salary'])
        }

    };

    console.log(data_scientest_max_salary_arr);

    const data = {
    categories: [
        'Minimum Salary', 'Maximum Salary', 'Average Salary'
    ],
    series: [
        {
            name: 'Data Analyst',
            data: [
                data_analyst_min_salary_arr,
                data_analyst_max_salary_arr,
                data_analyst_avg_salary_arr
            ],
        },
        {
            name: 'Data Science',
            data: [
                data_scientest_min_salary_arr,
                data_scientest_max_salary_arr,
                data_scientest_avg_salary_arr
            ],
        },
        {
            name: 'Business Analyst',
            data: [
                business_analyst_min_salary_arr,
                business_analyst_max_salary_arr,
                business_analyst_avg_salary_arr
            ],
        },
        {
            name: 'Data Engineer',
            data: [
                data_engineer_min_salary_arr,
                data_engineer_max_salary_arr,
                data_engineer_avg_salary_arr
            ],
        }
    ],
    };
    const options = {
    chart: { width: 700, height: 400 },
    };

    chart.boxPlotChart({ el, data, options });
});

// d3.json('/salarybox').then(function (data) {

//     console.log(data);

//     keys = Object.keys(data);
//     values = Object.values(data);

//     const min_sal_data = {
//         categories: [keys],
//         series: [values]
//     }

//     });
