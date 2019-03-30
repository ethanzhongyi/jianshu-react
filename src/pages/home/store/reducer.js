import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    "id": 1,
    "title": "社会热点",
    "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
}, {
    "id": 2,
    "title": "手手绘",
    "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
}],
"articleList": [{
  "id": 1,
  "title": "胡歌12年后首谈车祸",
  "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
  "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
}, {
  "id": 2,
  "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
  "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
  "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
}, {
  "id": 3,
  "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
  "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
  "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
}, {
  "id": 4,
  "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
  "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
  "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
}],
"recommendList": [{
  "id": 1,
  "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
}, {
  "id": 2,
  "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png"
}, {
  "id": 3,
  "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
}, {
  "id": 4,
  "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
}, {
  "id": 5,
  "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
}, {
  "id": 6,
  "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
}],
'writerList': [{
  'id': 1,
  'title': '徐林Grace',
  'desc': '写了713.9k字 · 5.8k喜欢',
  'imgUrl': '//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
}, {
  'id': 2,
  'title': '无限猴子',
  'desc': '写了713.9k字 · 5.8k喜欢',
  'imgUrl': '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
}, {
  'id': 3,
  'title': '简书大学堂',
  'desc': '写了713.9k字 · 5.8k喜欢',
  'imgUrl': '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
}, {
  'id': 4,
  'title': '打碎',
  'desc': '写了713.9k字 · 5.8k喜欢',
  'imgUrl': '//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
}, {
  'id': 5,
  'title': '小学堂',
  'desc': '写了713.9k字 · 5.8k喜欢',
  'imgUrl': '//upload.jianshu.io/users/upload_avatars/4802366/4f86b75d-b61b-4126-8be4-87a151c9cd28.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
}, {
  'id': 6,
  'title': '你好学堂',
  'desc': '写了713.9k字 · 5.8k喜欢',
  'imgUrl': '//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
}]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}