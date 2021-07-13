function initialize() {
    initBitcoinTv();
    initEnvironmentWarning();
}

function initBitcoinTv() {
    var btcTVjson = "https://bitcointv.com/feeds/videos.json?videoChannelId=38";
    $.getJSON( btcTVjson, {})
        .done(function( data ) {
            $.each( data.items, function( i,item) {
                $("iframe.btcTViframe").attr( "src",item.id.replace('watch', 'embed'))
                if ( i === 0 ) {
                    return false;
                }

            });
        });
}

function initEnvironmentWarning() {
    // Site/local javascript
    if ( window.location.href == "https://debitcoinshow.github.io/" ) {
        $("#env").html("GitHub env")
    }
    if ( window.location.href.substring(0,4) == "file" ) {
        $("#env").html("Local dev env")
    }
}
