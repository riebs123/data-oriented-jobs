console.log('app.js loaded')

function optionChanged(newSampleId) {
    console.log(`user selected  ${newSampleId}`);

    //drawLeafMap(newSampleId);
    reCircleForSelected(newSampleId);
    reFilterBoxChar(newSampleId);
    reDrawScatterPlot(newSampleId);
    // DrawBubblechart(newSampleId);
    // ShowMetadata(newSampleId);
}

function InitDashboard() {

    var selector = d3.select('#selDataset');

    d3.json('/superdict').then(function(data) {
        console.log(data)

        // var sampleNames = data[0].job_category;
        var sampleNames = ['All', 'Business Analyst', 'Data Analyst', 'Data Engineer', 'Data Science']
        console.log(sampleNames)

        sampleNames.forEach(sampleId => {
            selector.append('option')
            .text(sampleId)
            .property('value', sampleId);
    });
    
    var id = sampleNames[0];

    drawLeafMap();//drawing map assumes everything, dont' need to pass value
    dropBoxPlot();
    dropScatterPlot();

    // ShowMetadata(id);

});

    //update demographic info

}

InitDashboard();