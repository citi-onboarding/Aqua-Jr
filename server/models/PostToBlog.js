const keystone = require('keystone');
const { Types } = keystone.Field;

const PostToBlog = new keystone.List('PostToBlogs',{
  map: { name: 'title' },
  nocreate: false,
  nodelete: false
});

PostToBlog.add({
  title: { type: Types.Text,initial: true, required: true, index: true },
  image:{ type: Types.CloudinaryImage ,initial: true, required: true }
});

PostToBlog.register();