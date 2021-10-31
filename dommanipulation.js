var noofrows
var noofcolumns

function getInputFromUser(){
    noofrows=prompt('Please enter the no of rows')
    noofcolumns=prompt('Please enter the no of columns')
}

function getTableHtml(noofrows,noofcolumns){
    var rows=''
    for(var i=0;i<noofrows;i++){
        var columns=''
        for(var j=0;j<noofcolumns;j++){
            columns+=`<td>Cell (${i}${j})</td>`
        }
        rows+=`<tr>${columns}</tr>`
    }
}
<table>
    <tr>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>