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

