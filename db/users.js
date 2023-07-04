var records = [
    { id: 1, username: 'jack', token: '123456789', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', token: 'abcdefghi', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findByToken = function(token, cb) {
  console.log(11,token)
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      console.log(12,record)
      if (record.token === token) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
