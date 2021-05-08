console.log("boxplot.js is loaded")

var min_salary = d3.json('/minsalarybox').then(function (data) {

    console.log(data);

    keys = Object.keys(data);
    values = Object.values(data);

    const min_sal_data = {
        categories: [keys],
        series: [values]
    }

    })
var max_salary = d3.json('/maxsalarybox').then(function (data) {

    console.log(data);

    keys = Object.keys(data);
    values = Object.values(data);

    const min_sal_data = {
        categories: [keys],
        series: [values]
    }

    })

var avg_salary = d3.json('/averagesalarybox').then(function (data) {

    console.log(data);

    keys = Object.keys(data);
    values = Object.values(data);

    const min_sal_data = {
        categories: [keys],
        series: [values]
    }

    })

