// const $table = $("#table");

// console.log($table);
// console.log(JSON.stringify($table.bootstrapTable('getData')));


var $table = $('#table')
var $button = $('#button')
var $button2 = $('#button2')

$(function() {
  $button.click(function() {
    alert(JSON.stringify($table.bootstrapTable('getVisibleColumns').map(function (it) {
      return it.field
    })))
  })

  $button2.click(function() {
    alert(JSON.stringify($table.bootstrapTable('getHiddenColumns').map(function (it) {
      return it.field
    })))
  })
})