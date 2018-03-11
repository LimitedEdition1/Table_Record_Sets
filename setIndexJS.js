
/*
File: setIndexJS.js
Function: add_rec_set_col
Version: 1.0
Date: 3/11/2018
This function inserts a column in a HTML table that identifies rows
with related information, forming sets of records.
You can call this function and pass arguments. Parameters defined 
below.
*/
function add_rec_set_col (tbl_id, set_col, comp_col){
    // ---------------------------------------------------------------
    // Parameter definitions:
    // tbl_id = html table id value
    // set_col = column index for inserted SET numbers
    // comp_col = column index to use for set comparisons
    // comp_col can not be the same as set_col
    // ---------------------------------------------------------------
    // set default values for function parms IE compat method ---------
    tbl_id = typeof tbl_id !== 'undefined' ? tbl_id : 'myTable1';
    set_col = typeof set_col !== 'undefined' ? set_col : 0;
    comp_col = typeof comp_col !== 'undefined' ? comp_col : 1;
    // ---------------------------------------------------------------
    var gdv = document.getElementById(tbl_id);
    if (gdv != null) {
        // Varibles --------------------------------------------------
        var recs_in_set = 0;
        var comp_val = 'zzz';
        var comp_val_old = 'zzz';
        var row_for_span = 0;
        var row_for_span_old = 0;
        var set_number = 0;
        var tds;
        // -----------------------------------------------------------
    for (var i = 0; row = gdv.rows[i]; i++) { 
            row.insertCell(set_col); // insert new cell for set column on all rows
            if (i != 0){
                comp_val = row.cells[comp_col].innerHTML;
                if (comp_val != comp_val_old){
                    // New Record Set Begins Here
                    set_number ++;
                    row_for_span_old = row_for_span;
                    row_for_span = i;
                    row.cells[set_col].id = tbl_id + '_set_' + i;
                    row.cells[set_col].innerHTML = set_number;
                    // Make sure we're not on initalized value
                    if (row_for_span_old > 0){
                        document.getElementById(tbl_id + '_set_' + row_for_span_old).rowSpan = recs_in_set;
                        tds = document.getElementById(tbl_id + '_set_' + row_for_span_old);
                        tds.style.textAlign = "center";
                        tds.style.verticalAlign = "middle";
                    } 
                    recs_in_set = 0; // reset records in set counter
                } else {
                    // Remove extra cells in column since we span rows
                    row.deleteCell(set_col);
                }
                recs_in_set ++
            } else {
                // Add column header
                row.cells[set_col].innerHTML = 'SET';
                row.cells[set_col].style.fontWeight = "bold";
            }
            comp_val_old = comp_val;
        }
        // Process final set -------------------------------------------
        document.getElementById(tbl_id + '_set_' + row_for_span).rowSpan = recs_in_set;
        tds = document.getElementById(tbl_id + '_set_' + row_for_span);
        tds.style.textAlign = "center";
        tds.style.verticalAlign = "middle";
        // -------------------------------------------------------------
    }
};

