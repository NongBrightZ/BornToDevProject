var rIndex,
    table = document.getElementById("table")
    cal = document.getElementById("Cal");

function checkEmptyCell()
{
    var Empty = false,
        subject = document.getElementById("subject").value,
        grade = document.getElementById("grade").value,
        weight = document.getElementById("weight").value;

    if(subject === "")
    {
        alert("Cannot Be Empty")
        Empty = true
    }
    else if(grade === "")
    {
        alert("Cannot Be Empty")
        Empty = true
    }
    else if(weight === "")
    {
        alert("Cannot Be Empty")
        Empty = true
    }
    return Empty
}

function addHtmlTableRow()
{
    if(!checkEmptyCell()){
    var newrow = table.insertRow(table.length),
        cell1 = newrow.insertCell(0),
        cell2 = newrow.insertCell(1),
        cell3 = newrow.insertCell(2),
        subject = document.getElementById("subject").value,
        grade = document.getElementById("grade").value,
        weight = document.getElementById("weight").value;

    cell1.innerHTML = subject;
    cell2.innerHTML = grade;
    cell3.innerHTML = weight;

    selectedRowToInput();
    }
}

function selectedRowToInput()
{
    for(var i=1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            document.getElementById("subject").value = this.cells[0].innerHTML;
            document.getElementById("grade").value = this.cells[1].innerHTML;
            document.getElementById("weight").value = this.cells[2].innerHTML;
        }
    }
}
selectedRowToInput();

function editHtmlTableSelectedRow()
{
    if(!checkEmptyCell()){
    var subject = document.getElementById("subject").value,
        grade = document.getElementById("grade").value,
        weight = document.getElementById("weight").value;

    table.rows[rIndex].cells[0].innerHTML = subject; 
    table.rows[rIndex].cells[1].innerHTML = grade;
    table.rows[rIndex].cells[2].innerHTML = weight;
    }
}

function removeSelectedRow()
{
    table.deleteRow(rIndex);
    document.getElementById("subject").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("weight").value = "";
}

function GPAcal()
{
    var Gsum = 0,
    Wsum = 0,
    GPA = 0;
    for(var i=1;i < table.rows.length; i++)
    {
        Gsum += parseFloat(table.rows[i].cells[1].innerHTML)*parseFloat(table.rows[i].cells[2].innerHTML);
        Wsum += parseFloat(table.rows[i].cells[2].innerHTML);
    };
    GPA = (Gsum/Wsum).toFixed(2);
    cal.rows[1].cells[0].innerHTML = Wsum;
    cal.rows[1].cells[1].innerHTML = GPA;
}