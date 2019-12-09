module.exports = {
	plugins: {
		'postcss-preset-env': {
			/* use stage 3 features + css nesting rules */
			stage: 0,
			features: {
				'nesting-rules': true
			}
		},
		autoprefixer: {}
	}
}