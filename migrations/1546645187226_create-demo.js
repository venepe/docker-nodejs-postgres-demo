exports.shorthands = undefined;

exports.up = (pgm) => {

  pgm.createSchema('demo');

  pgm.createTable({schema: 'demo', name: 'blog'}, {
    id: 'id',
    post: { type: 'varchar' },
    created_at: {
     type: 'timestamp',
     notNull: true,
     default: pgm.func('current_timestamp')
    }
 });

  pgm.createIndex({schema: 'demo', name: 'blog'}, 'post');

};

exports.down = (pgm) => {

};
