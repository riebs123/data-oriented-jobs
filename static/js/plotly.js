console.log('plotly js loaded');

dib_select_scatter = document.getElementById('scatter');

function dropScatterPlot(selectedValue) {
d3.json("/salaryvscompanyrating").then((scatter_data) => {

    console.log(scatter_data);

    // min_salary = []
    // rating = []

    total_min_scatter_salary_arr = []
    total_max_scatter_salary_arr = []
    total_avg_scatter_salary_arr = [] 
    total_rating_arr = []

    data_scientest_min_scatter_salary_arr = []
    data_scientest_max_scatter_salary_arr = []
    data_scientest_avg_scatter_salary_arr = [] 
    data_scientest_rating_arr = []
    
    data_analyst_min_scatter_salary_arr = []
    data_analyst_max_scatter_salary_arr = []
    data_analyst_avg_scatter_salary_arr = []  
    data_analyst_rating_arr = []

    data_engineer_min_scatter_salary_arr = []
    data_engineer_max_scatter_salary_arr = []
    data_engineer_avg_scatter_salary_arr = []  
    data_engineer_rating_arr = []

    business_analyst_min_scatter_salary_arr = []
    business_analyst_max_scatter_salary_arr = []
    business_analyst_avg_scatter_salary_arr = []  
    business_analyst_rating_arr = []


    for (var i = 0; i < scatter_data.length; i++) {

        // min_salary.push(scatter_data[i]['min_salary'])

        // rating.push(scatter_data[i]['rating'])

        if (scatter_data[i]['job_category'] === 'Data Science'){
            data_scientest_avg_scatter_salary_arr.push(scatter_data[i]['average_salary'])
            data_scientest_min_scatter_salary_arr.push(scatter_data[i]['min_salary'])
            data_scientest_max_scatter_salary_arr.push(scatter_data[i]['max_salary'])
            data_scientest_rating_arr.push(scatter_data[i]['rating'])

        }
        if (scatter_data[i]['job_category'] === 'Data Analyst'){
            data_analyst_avg_scatter_salary_arr.push(scatter_data[i]['average_salary'])
            data_analyst_min_scatter_salary_arr.push(scatter_data[i]['min_salary'])
            data_analyst_max_scatter_salary_arr.push(scatter_data[i]['max_salary'])
            data_analyst_rating_arr.push(scatter_data[i]['rating'])
        }
        if (scatter_data[i]['job_category'] === 'Data Engineer'){
            data_engineer_avg_scatter_salary_arr.push(scatter_data[i]['average_salary'])
            data_engineer_min_scatter_salary_arr.push(scatter_data[i]['min_salary'])
            data_engineer_max_scatter_salary_arr.push(scatter_data[i]['max_salary'])
            data_engineer_rating_arr.push(scatter_data[i]['rating'])
        }
        if (scatter_data[i]['job_category'] === 'Business Analyst'){
            business_analyst_avg_scatter_salary_arr.push(scatter_data[i]['average_salary'])
            business_analyst_min_scatter_salary_arr.push(scatter_data[i]['min_salary'])
            business_analyst_max_scatter_salary_arr.push(scatter_data[i]['max_salary'])
            business_analyst_rating_arr.push(scatter_data[i]['rating'])
        }
        else {
            total_avg_scatter_salary_arr.push(scatter_data[i]['average_salary'])
            total_min_scatter_salary_arr.push(scatter_data[i]['min_salary'])
            total_max_scatter_salary_arr.push(scatter_data[i]['max_salary'])
            total_rating_arr.push(scatter_data[i]['rating'])
        }

    };

    var allcategoriessalaries_avg = {
        x: total_rating_arr,
        y: total_avg_scatter_salary_arr,
        mode: 'markers',
        type: 'scatter'
    }

    var data = [allcategoriessalaries_avg];

    var layout = {
        title: "Salaries (All Categories) vs Company Rating",
        xaxis: {
            title: "Rating",
            autotick: true,
            ticks: 'outside',
            tick0: 0,
            dtick: 5000,
            ticklen: 8,
            tickwidth: 4,
            tickcolor: '#000'
        },
        yaxis: {
            title: "Salary",
            utotick: true,
            ticks: 'outside',
            tick0: 0,
            dtick: 1,
            ticklen: 8,
            tickwidth: 4,
            tickcolor: '#000'
        }
            }

    Plotly.newPlot('scatter', data, layout);

})};

function reDrawScatterPlot(selectedValue) {
    console.log('selector works for scatter!')

    if (selectedValue == "All") {
        dib_select_scatter.removeChild(dib_select_scatter.firstChild);

        const el = document.getElementById('leaflet');
        
        var allcategoriessalaries_avg = {
            x: total_rating_arr,
            y: total_avg_scatter_salary_arr,
            mode: 'markers',
            type: 'scatter'
        }
    
        var data = [allcategoriessalaries_avg];
    
        var layout = {
            title: "Salaries (All Categories) vs Company Rating",
            xaxis: {
                title: "Rating",
                autotick: true,
                ticks: 'outside',
                tick0: 0,
                dtick: 5000,
                ticklen: 8,
                tickwidth: 4,
                tickcolor: '#000'
            },
            yaxis: {
                title: "Salary",
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

    } else if (selectedValue == "Data Science") {
        dib_select_scatter.removeChild(dib_select_scatter.firstChild);

        const el = document.getElementById('leaflet');
        
        var datascientest_avg = {
            x: data_scientest_rating_arr,
            y: data_scientest_avg_scatter_salary_arr,
            mode: 'markers',
            type: 'scatter'
        }
    
        var data = [datascientest_avg];
    
        var layout = {
            title: "Salaries (Data Science) vs Company Rating",
            xaxis: {
                title: "Rating",
                autotick: true,
                ticks: 'outside',
                tick0: 0,
                dtick: 5000,
                ticklen: 8,
                tickwidth: 4,
                tickcolor: '#000'
            },
            yaxis: {
                title: "Salary",
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
    } else if (selectedValue == "Data Analyst") {
        dib_select_scatter.removeChild(dib_select_scatter.firstChild);

        const el = document.getElementById('leaflet');
        
        var dataanalyst_avg = {
            x: data_analyst_rating_arr,
            y: data_analyst_avg_scatter_salary_arr,
            mode: 'markers',
            type: 'scatter'
        }
    
        var data = [dataanalyst_avg];
    
        var layout = {
            title: "Salaries (Data Analyst) vs Company Rating",
            xaxis: {
                title: "Rating",
                autotick: true,
                ticks: 'outside',
                tick0: 0,
                dtick: 5000,
                ticklen: 8,
                tickwidth: 4,
                tickcolor: '#000'
            },
            yaxis: {
                title: "Salary",
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
        
    } else if (selectedValue == "Business Analyst") {
        dib_select_scatter.removeChild(dib_select_scatter.firstChild);

        const el = document.getElementById('leaflet');
        
        var businessnalyst_avg = {
            x: business_analyst_rating_arr,
            y: business_analyst_avg_scatter_salary_arr,
            mode: 'markers',
            type: 'scatter'
        }
    
        var data = [businessnalyst_avg];
    
        var layout = {
            title: "Salaries (Business Analyst) vs Company Rating",
            xaxis: {
                title: "Rating",
                autotick: true,
                ticks: 'outside',
                tick0: 0,
                dtick: 5000,
                ticklen: 8,
                tickwidth: 4,
                tickcolor: '#000'
            },
            yaxis: {
                title: "Salary",
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

    } else if (selectedValue == "Data Engineer") {
        dib_select_scatter.removeChild(dib_select_scatter.firstChild);

        const el = document.getElementById('leaflet');
        
        var dataengineer_avg = {
            x: data_engineer_rating_arr,
            y: data_engineer_avg_scatter_salary_arr,
            mode: 'markers',
            type: 'scatter'
        }
    
        var data = [dataengineer_avg];
    
        var layout = {
            title: "Salaries (Data Engineer) vs Company Rating",
            xaxis: {
                title: "Rating",
                autotick: true,
                ticks: 'outside',
                tick0: 0,
                dtick: 5000,
                ticklen: 8,
                tickwidth: 4,
                tickcolor: '#000'
            },
            yaxis: {
                title: "Salary",
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
    }  
}