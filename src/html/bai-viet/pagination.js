var $table = $("#table");
var $remove = $("#remove");
var selections = [];
let listData = {};
let currentModal = "";

const setView = (row) => {
  if (row) return true;
  return false;
};

$(document).ready(function () {
  $("table td").css("border", "none");
});

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
    '<div class="btn-group">',
    '  <button type="button" class="ti ti-dots-vertical rounded border-default p-2 bd-white" data-bs-toggle="dropdown" aria-expanded="false" data-row=\'' +
      JSON.stringify(row) +
      "'></button>",
    '  <ul class="dropdown-menu">',
    "    <li>",
    '      <a class="dropdown-item fw-bold c-black detail" href="#">Xem chi tiết</a>',
    "    </li>",
    "    <li>",
    '      <a class="dropdown-item fw-bold c-black edit" href="#">Sửa</a>',
    "    </li>",
    "    <li>",
    '      <a class="dropdown-item c-red fw-bold remove" href="#">Xóa</a>',
    "    </li>",
    "  </ul>",
    "</div>",
  ].join("");
}

window.operateEvents = {
  "click .detail": function (e, value, row, index) {
    console.log(row);
    currentModal = "detail";
    handleSelect(currentModal, row);
  },
  "click .edit": function (e, value, row, index) {
    console.log(row);
    currentModal = "edit";
    handleSelect(currentModal, row);
  },
  "click .remove": function (e, value, row, index) {
    console.log(row);
    $table.bootstrapTable("remove", {
      field: "phone",
      values: [row.phone],
    });
  },
};

const addNew = () => {
  currentModal = "new";
  handleSelect(currentModal);
};

const handleSelect = (selectedOptionKey, row) => {
  $("#home").addClass("hidden");
  switch (selectedOptionKey) {
    case "detail":
      $("#new").addClass("hidden");
      $("#new").removeClass("unHidden");
      $("#detail").removeClass("hidden");
      $("#detail").addClass("unHidden");
      console.log(row);
      break;
    case "edit":
      toEditAndNew();
      $("#tittle").text("Chỉnh sửa bài viết");
      console.log(row);
      break;
    case "new":
      toEditAndNew();
      $("#tittle").text("Thêm bài viết");
      break;
    default:
      break;
  }
};

const toEditAndNew = () => {
  $("#detail").removeClass("unHidden");
  $("#detail").addClass("hidden");
  $("#new").removeClass("hidden");
  $("#new").addClass("unHidden");
};
// $(document).ready(function () {
//   $("#tittle");
// });

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
  console.log("vao");
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
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
