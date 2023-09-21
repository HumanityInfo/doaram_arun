/**
 *
 */

$(document).ready(function () {
  var cause_DonationTable = $("#cause_DonationTable")
    .DataTable({
      destroy: true,
      responsive: false,
      ordering: false,
      searching: false,
      scrollY: "40vh",
      scrollX: true,
      scroller: false,
      scrollCollapse: true,
      paging: false,
      filter: false,
      columnDefs: [],
      dom: '<<"top" ip>flt>',
      columnDefs: [
        { width: "20px", targets: [0, 1] },
        {
          className: "dt-head-center text-center",
          targets: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26,
          ],
          orderable: false,
          searchable: false,
        },
      ],
      fnDrawCallback: function (oSettings) {
        if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
        }
      },
    })
    .draw();
});
