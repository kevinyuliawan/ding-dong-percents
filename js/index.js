$(document).ready(function() {
    $('#main-table').DataTable({
        data: dataSet,
        columns: [
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

    $('.dark-mode-toggle').click(function(){
        var body = $('body');
        var toggle = $('.dark-mode-toggle');
        body.toggleClass('dark-mode');
        if(body.hasClass('dark-mode')){
            toggle.html('<i class="fa fa-sun-o" aria-hidden="true"></i>')
        }else{
            toggle.html('<i class="fa fa-moon-o" aria-hidden="true"></i>');
        }
    });

    $('.text-up-toggle').click(function(){
        var table = $('#main-table');
        var size = parseFloat(table.css('font-size'));
        size += 1;
        table.css('font-size', size+'px');
    });

    $('.text-down-toggle').click(function(){
        var table = $('#main-table');
        var size = parseFloat(table.css('font-size'));
        size -= 1;
        table.css('font-size', size+'px');
    });
});