// import the data from the data.js file
const tableData = data;

//reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
  
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


 // grabbing the datetime valye from the filter
function handleClick() {
  let date = d3.select("#datetime").property("value");
   

let filteredData = tableData;

    // checking to see if date was entered and filtered the data using that data

    if (date) {

      filteredData = filteredData.filter(row => row.datetime === date);

    };


    // rebuild the table using filtered data and if no date was entered, the filtereddata will just be the original tabledata

    buildTable(filteredData);

  };

// Attach an event to listen for the form button

  d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads

  buildTable(tableData);

