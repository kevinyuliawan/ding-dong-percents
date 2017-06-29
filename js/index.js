$(document).ready(function() {
    $('#main-table').DataTable({
        data: dataSet,
        columns: [
            { "data": "Char #", title: "#" },
            { "data": "Character", title: "Character" },
            { "data": "0% Rage", title: "0% Rage" },
            { "data": "50% Rage", title: "50% Rage" },
            { "data": "100% Rage", title: "100% Rage" },
            { "data": "150% Rage", title: "150% Rage" },
            { "data": "Weight", title: "Weight"},
            { "data": "Weight Rank", title: "Weight Rank"},
            { "data": "Tier Rank", title: "Tier Rank"},
            { "data": "Tier #", title: "Tier #"}
        ],
        "iDisplayLength": 100,
        language: {
            search: "",
            searchPlaceholder: "Search"
        },
        "dom": "Bfrt",
        buttons: [
            {
                extend: 'colvis',
                text: 'Columns'
            } 
        ]
    });

    // $('.dataTables_filter').addClass('pull-left');
});