var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'todo',
    connection: 'disk',
    attributes: {
        datum: {
            type: 'date',
            defaultsTo: function () { return new Date(); }
        },
        kinek: 'string',
        leiras: 'string',
        kesz: {
            type: 'boolean',
            defaultsTo: false
        },
        user: {
            model: 'user'
        }
    }
});