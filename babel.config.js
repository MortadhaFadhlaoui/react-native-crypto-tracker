module.exports = {
	presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
	env: {
		production: {
			plugins: ['react-native-paper/babel'],
		},
	},
	plugins: [['module:react-native-dotenv'], 'react-native-reanimated/plugin'],
}
