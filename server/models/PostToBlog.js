const keystone = require('keystone');
const { Types } = keystone.Field;
const PostToBlog = new keystone.List('PostToBlogs');

PostToBlog.add({
  title: { type: Types.Text, required: true, initial: true, index: true },
  image: { type: Types.CloudinaryImages, required: true, initial: true }
});

PostToBlog.register();