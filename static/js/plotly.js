console.log('plotly js loaded');


d3.json("/salaryvscompanyrating").then((scatter_data) => {

    console.log(scatter_data);

    // min_salary = []
    // rating = []

    data_scientest_min_salary_arr = []
    data_scientest_max_salary_arr = []
    data_scientest_avg_salary_arr = [] 
    data_scientest_rating_arr = []
    
    data_analyst_min_salary_arr = []
    data_analyst_max_salary_arr = []
    data_analyst_avg_salary_arr = []  
    data_analyst_rating_arr = []

    data_engineer_min_salary_arr = []
    data_engineer_max_salary_arr = []
    data_engineer_avg_salary_arr = []  
    data_engineer_rating_arr = []

    business_analyst_min_salary_arr = []
    business_analyst_max_salary_arr = []
    business_analyst_avg_salary_arr = []  
    business_analyst_rating_arr = []


    for (var i = 0; i < scatter_data.length; i++) {

        // min_salary.push(scatter_data[i]['min_salary'])

        // rating.push(scatter_data[i]['rating'])

        if (scatter_data[i]['job_category'] === 'Data Science'){
            data_scientest_avg_salary_arr.push(scatter_data[i]['average_salary'])
            data_scientest_min_salary_arr.push(scatter_data[i]['min_salary'])
            data_scientest_max_salary_arr.push(scatter_data[i]['max_salary'])
            data_scientest_rating_arr.push(scatter_data[i]['rating'])

        }
        if (scatter_data[i]['job_category'] === 'Data Analyst'){
            data_analyst_avg_salary_arr.push(scatter_data[i]['average_salary'])
            data_analyst_min_salary_arr.push(scatter_data[i]['min_salary'])
            data_analyst_max_salary_arr.push(scatter_data[i]['max_salary'])
            data_analyst_rating_arr.push(scatter_data[i]['rating'])
        }
        if (scatter_data[i]['job_category'] === 'Data Engineer'){
            data_engineer_avg_salary_arr.push(scatter_data[i]['average_salary'])
            data_engineer_min_salary_arr.push(scatter_data[i]['min_salary'])
            data_engineer_max_salary_arr.push(scatter_data[i]['max_salary'])
            data_engineer_rating_arr.push(scatter_data[i]['rating'])
        }
        if (scatter_data[i]['job_category'] === 'Business Analyst'){
            business_analyst_avg_salary_arr.push(scatter_data[i]['average_salary'])
            business_analyst_min_salary_arr.push(scatter_data[i]['min_salary'])
            business_analyst_max_salary_arr.push(scatter_data[i]['max_salary'])
            business_analyst_rating_arr.push(scatter_data[i]['rating'])
        }

    };

    var datascientest_min = {
        x: data_scientest_min_salary_arr,
        y: data_scientest_rating_arr,
        type: 'scatter'
    }

    var dataanalyst_min = {
        x: data_analyst_min_salary_arr,
        y: data_analyst_rating_arr,
        type: 'scatter'
    }

    var data = [datascientest_min, dataanalyst_min];

    var layout = {
        xaxis: {
            autotick: true,
            ticks: 'outside',
            tick0: 0,
            dtick: 5000,
            ticklen: 8,
            tickwidth: 4,
            tickcolor: '#000'
        },
        yaxis: {
            autotick: true,
            ticks: 'outside',
            tick0: 0,
            dtick: 1,
            ticklen: 8,
            tickwidth: 4,
            tickcolor: '#000'
        }
            }

    Plotly.newPlot('scatter', data, layout);

});