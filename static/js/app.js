console.log('app.js loaded')

function optionChanged(newSampleId) {
    console.log(`user selected  ${newSampleId}`);

    drawLeafMap(id);
    // DrawBubblechart(newSampleId);
    // ShowMetadata(newSampleId);
}

function InitDashboard() {

    var selector = d3.select('#selDataset');

    d3.json('/superdict').then(function(data) {
        console.log(data)

        // var sampleNames = data[0].job_category;
        var sampleNames = ['Data Science', 'Data Analyst', 'Data Engineer', 'Business Analyst']
        console.log(sampleNames)

        sampleNames.forEach(sampleId => {
            selector.append('option')
            .text(sampleId)
            .property('value', sampleId);
    });
    
    var id = sampleNames[0];

    drawLeafMap(id);


    // ShowMetadata(id);

});

    //update demographic info

}

InitDashboard();