var java = require('java');
java.classpath.push(__dirname);
module.exports = function (language) {
    var self = this;
    self.language = language || 'english';
    var valid = [
        'danish',
        'dutch',
        'english',
        'finnish',
        'german',
        'hungarian',
        'italian',
        'norwegian',
        'romanian',
        'russian',
        'spanish',
        'swedish',
        'porter',
        'portuguese',
        'romanian',
        'spanish',
        'turkish'
    ];
    if (valid.indexOf(self.language) == -1) {
        return
        throw('Language not detected');
    }
    self.stem = function (sentence,cb) {
        if(sentence == null || sentence.length == "" ){
            cb({errror:'missing sentence'});
        }
        var stems = [];
        java.newInstance('org.tartarus.snowball.ext.' + self.language + 'Stemmer', function (error, stemmer) {
          if(error){
              return cb(error);
          }
            var txtArray = sentence.split(' ');
            for (var i = 0; i < txtArray.length; i++) {
                if(txtArray[i] != "") {
                    stemmer.setCurrentSync(txtArray[i]);
                    stemmer.stemSync();
                    stems.push(stemmer.getCurrentSync());
                }
            }
            cb(null,stems);
        });
    };
    return {
        stem: self.stem
    }
};