// import the data from the data.js file
const tableData = data;

//reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {

    //clearing out any existing data
    tbody.html("");

    //loop through each object in the data and append a row andcells for each value in the row

    data.forEach((dataRow) => {
        let row = tbody.append("tr");


        //loop through each field in the datarow and add each value as a table cell

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");

            cell.text(val);


        }



    );



});

}
//adding filters

function handleClick() {

    // grabbing the datetime valye from the filter

    let date = d3.select("datetime").property("value");

    let filteredData = tableData;

    // checking to see if date was entered and filtered the data using that data

    if (date) {

        filteredData = filteredData.filter(row => row.datetime === date);

    }


    // rebuild the table using filtered data and if no date was entered, the filtereddata will just be the original tabledata

    buildTable(filteredData);

}

// Attach an event to listen for the form button

d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads

buildTable(tableData);

