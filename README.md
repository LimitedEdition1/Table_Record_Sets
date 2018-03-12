# Table_Record_Sets
A JS script to insert a column in html table to identify rows with related data (distinct sets of records). 

JS file: setIndexJS.js

This script requires a HTML table with an ID tag. Calling the function and passing arguments as defined. 
Each parameter has a defualt value. If you omit all arguments, the defaults will be used. 
Do not use the same column index for both set_col and comp_col.
The function will return the number of record sets found.

Example 1: 
add_rec_set_col();

This will use all default values for parameters.
Table ID: tbl_id: myTable1.
Column ID: set_col: 0
Column for comparing records: comp_col: 1

Example 2:
add_rec_set_col(myOtherTableId);

This will use your table id, and the other two default values.

Example 3:
add_rec_set_col(myOtherTableId,2);

This will use your table id, and column for sets. Default value for comp_col.
Column for comparing records: comp_col: 1
