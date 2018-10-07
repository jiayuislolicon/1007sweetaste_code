const fbShare = () => {

    if( FB )
        FB.ui({
                method: 'share',
                href: 'https://shaggy.froggy.tw'
            },
            function(response){
                if( window.ga !== undefined )
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'fbshare',
                        eventAction: 'fbshare',
                        eventLabel: 'fbshare'
                    })
            }
        )
}

export default fbShare
