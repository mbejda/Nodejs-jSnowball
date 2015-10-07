var snowball = require('../../');
var sb = new snowball('english');
describe("Result needs to be an array.", function() {
    it("Checking array", function(done) {
        sb.stem('Im an array',function(error,stems){
            expect(Array.isArray(stems) == true).toEqual(true);
            done();
        });
    });
});
describe("Snowball stemmer", function() {
    it("Checks if word is stemmed", function(done) {
        sb.stem('Cats',function(error,stems){
            expect(stems[0] == 'Cat').toEqual(true);
            done();
        });
    });
});