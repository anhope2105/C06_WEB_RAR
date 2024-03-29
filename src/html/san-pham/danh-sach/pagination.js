// https://examples.bootstrap-table.com/index.html#methods/get-visible-hidden-columns.html#view-source

var $table = $("#table");
var $remove = $("#remove");
var selections = [];

function getIdSelections() {
  return $.map($table.bootstrapTable("getSelections"), function (row) {
    return row.id;
  });
}

function responseHandler(res) {
  $.each(res.rows, function (i, row) {
    row.state = $.inArray(row.id, selections) !== -1;
  });
  return res;
}

function detailFormatter(index, row) {
  var html = [];
  $.each(row, function (key, value) {
    html.push("<p><b>" + key + ":</b> " + value + "</p>");
  });
  return html.join("");
}

function operateFormatter(value, row, index) {
  return [
    '<button class="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bx bx-dots-vertical-rounded"></i></button>',
    '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item detail" href="#">Xem chi tiết</a><span class="dropdown-item edit" href="#">Sửa</span><span class="dropdown-item remove" href="#">Xóa</span></div>',
  ].join("");
}

window.operateEvents = {
  "click .detail": function (e, value, row, index) {
    console.log(123);
  },
  "click .remove": function (e, value, row, index) {
    console.log(row);
    $table.bootstrapTable("remove", {
      field: "phone",
      values: [row.phone],
    });
  },
};

function showStt(value, row, index) {
  return index + 1;
}

function switchFormatter(value, row, index) {
  // Tạo switch với giá trị ban đầu là value
  return `<div class="form-check form-switch">
  <input class="switch  form-check-input" id="switch" type="checkbox"  role="switch" ${
    value === true ? "checked" : ""
  }
  }} />
</div>`;
}

window.displayWebsiteEvents = {
  "click .switch": function (e, value, row, index) {
    console.log(row);
  },
};

var $table = $("#table");

(function () {
  console.log('vao');
  var data = [
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: true,
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: true,
      unit: "343",
      community: "Cameron",
      address:
        "3848 Michael Street 3848 Michael Street 3848 Michael Street 3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "true",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
  ];

  $table.bootstrapTable({
    data: data,
    height: window.innerHeight * 0.615,
    totalRows: 100,
    pageSize: 20,
  });
  $table.bootstrapTable(
    "updateFormatText",
    "formatShowingRows",
    "Showing",
    "formatRecordsPerPage"
  );
})();

// Events

$(document).ready(function () {
  var seachHtml = "";

  var checkBoxIdNoPart = 0;
  $("table.table-bordered thead tr th div.th-inner").each(function () {
    checkBoxIdNoPart++;
    seachHtml +=
      '<input class="checkBoxClass"  value=' +
      checkBoxIdNoPart +
      ' type="checkbox">' +
      '<label for="<%= abbreviation %>">' +
      $(this).html() +
      "</label><br>";
  });

  $(".dropdown-list").append(seachHtml);

  var checkBoxValArray = [];
  $(".checkBoxClass").click(function () {
    checkBoxValArray.push($(this).val());
  });
});
