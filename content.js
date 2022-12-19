let btn = document.createElement("button");
btn.innerHTML = "Click To Breakdown";
btn.id = "run"
document.body.appendChild(btn);
btn.onclick = fetchData; //create button that runs main function

function fetchData() {
    expenses = {}; //dict with expenses
    for (let i = 1; i < (document.getElementById('voucherExpensesTable').rows.length * 8) - 24; i += 8 ){
        let curr = document.getElementById('voucherExpensesTable').getElementsByTagName('td')[i].innerHTML;
        if (!expenses.hasOwnProperty(curr)){
            expenses[curr] = 0;
        }
        expenses[curr] += parseFloat(document.getElementById('voucherExpensesTable').getElementsByTagName('td')[i + 6].innerHTML.replace(/\$/, ''));
    }
    for (const [key, value] of Object.entries(expenses)) { //length
        let tempVal = value + 0.000001;
        expenses[key] = parseFloat(tempVal).toFixed(2);
    }
    generateTable(expenses);
}

function generateTable(dates) { //appends table to bottom of page
    if (document.getElementById("btmTbl")){
        document.getElementById("btmTbl").remove();
    }
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    for (let i = 0; i < 2; i++) { //height
      const row = document.createElement("tr");
    
      for (const [key, value] of Object.entries(dates)) { //length

        const cell = document.createElement("td");
        if (i%2==0){
            cellText = document.createTextNode(key);
        }else{
            cellText = document.createTextNode(value);
        }
        cell.appendChild(cellText);
        row.appendChild(cell);

      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    tbl.setAttribute("id", "btmTbl");
  }