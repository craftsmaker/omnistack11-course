const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate unique ID',()=>{
	it('should generate an unique ID', ()=>{
		expect(generateUniqueId()).toHaveLength(8);
	});
});