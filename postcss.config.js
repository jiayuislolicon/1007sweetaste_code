let mediaQuery = {
	'--phone-xl': '(min-width: 600px)',
	'--pad': '(min-width: 768px)',
	'--desktop': '(min-width: 1024px)',
	'--desktop-w': '(min-width: 1280px)',
	'--desktop-hd': '(min-width: 1440px)',
    '--desktop-index': '(min-width: 1540px)',
	'--desktop-fullhd': '(min-width: 1920px)'
}

let variables = {
    'main': '#3F5D45',
    'lg': '#EAF0ED',
    'yellow':'#FFE180',
    'green':'#8DA291',
    'popup':'rgba(100,100,100,0.6)',

    'nav-font-color': '#555555',
    'text-black': '#323232',
    'text-grey': '#5E5E5E',
    'text-lightgrey': '#656565',
    'text-foreword': '#9B9B9B',
    'tag': '#888888',

    'main-border': '1px solid var(--main)',
    'light-border': '2px solid var(--bkg-lightgrey)',
    'dark-border': '1px solid #C0C0C0',

    'serif': '"cwTeXMing","Noto Serif CJK", "LiSong pro", "simsun", sans-serif',
    'sans': '"cwTeXMing","Noto Serif CJK", "LiSong pro", "simsun", sans-serif',
}

let postCSSConfig = {
	plugins: {
		'postcss-import': {},
		'postcss-cssnext': {
			features: {
				customMedia: {
					extensions: mediaQuery
				},
                customProperties: {
                    variables: variables
                }
			}
		},
        'lost': {}
	}
}

module.exports = postCSSConfig;


