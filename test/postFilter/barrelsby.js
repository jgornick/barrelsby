module.exports = {
	directory: ['./output'],
	noSemicolon: true,
  postFilter: (locations) => {
    return locations.filter(({ name }) => name !== 'file.ts')
  }
}
