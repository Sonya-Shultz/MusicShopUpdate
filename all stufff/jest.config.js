module.exports = {
    collectCoverage: true,
    transform: {'\\.js$': 'babel-jest',},
    coveragePathIgnorePatterns:['<rootDir>/node_modules/', '/cssStyle/', '/dist/']
};