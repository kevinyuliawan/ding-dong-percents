$(document).ready(function() {
    $('#main-table').DataTable({
        data: dataSet,
        columns: [
            { "data": "Char #", title: "#" },
            { "data": "Character", title: "Character" },
            { "data": "0% Rage", title: "0% Rage" },
            { "data": "50% Rage", title: "50% Rage" },
            { "data": "100% Rage", title: "100% Rage" },
            { "data": "150% Rage", title: "150% Rage" }
        ],
        "iDisplayLength": 100,
        "bLengthChange": false,
        "sDom": "frt"
    });

    $('.dataTables_filter').addClass('pull-left');
});