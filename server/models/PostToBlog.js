const keystone = require('keystone');
const { Types } = keystone.Field;

const PostToBlog = new keystone.List('PostToBlogs',{
  map: { name: 'title' },
  nocreate: true,
  nodelete: true
});

PostToBlog.add({
  title: { type: Types.Text, required: true, initial: true, index: true },
  text: { type: Types.Text, initial: true, required: true }
});

PostToBlog.register();