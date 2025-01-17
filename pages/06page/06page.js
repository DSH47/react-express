// pages/06page/06page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    douban: [{
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": ["戏曲"],
      "title": "曹操与杨修",
      "casts": [{
        "alt": "https://movie.douban.com/celebrity/1371573/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520320752.41.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520320752.41.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520320752.41.webp"
        },
        "name": "尚长荣",
        "id": "1371573"
      }, {
        "alt": "https://movie.douban.com/celebrity/1395332/",
        "avatars": {
          "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/pE2tphPQWZigcel_avatar_uploaded1528469094.77.webp",
          "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/pE2tphPQWZigcel_avatar_uploaded1528469094.77.webp",
          "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/pE2tphPQWZigcel_avatar_uploaded1528469094.77.webp"
        },
        "name": "言兴朋",
        "id": "1395332"
      }],
      "collect_count": 74,
      "original_title": "曹操与杨修",
      "subtype": "movie",
      "directors": [{
        "alt": "https://movie.douban.com/celebrity/1399708/",
        "avatars": {
          "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
          "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
          "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
        },
        "name": "滕俊杰",
        "id": "1399708"
      }],
      "year": "2018",
      "images": {
        "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531189407.webp",
        "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531189407.webp",
        "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531189407.webp"
      },
      "alt": "https://movie.douban.com/subject/30238932/",
      "id": "30238932"
    }, {
      "rating": {
        "max": 10,
        "average": 8.1,
        "stars": "40",
        "min": 0
      },
      "genres": ["动作", "惊悚", "冒险"],
      "title": "碟中谍6：全面瓦解",
      "casts": [{
        "alt": "https://movie.douban.com/celebrity/1054435/",
        "avatars": {
          "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p567.webp",
          "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p567.webp",
          "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p567.webp"
        },
        "name": "汤姆·克鲁斯",
        "id": "1054435"
      }, {
        "alt": "https://movie.douban.com/celebrity/1044713/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371934661.95.webp"
        },
        "name": "亨利·卡维尔",
        "id": "1044713"
      }, {
        "alt": "https://movie.douban.com/celebrity/1048129/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8712.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8712.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8712.webp"
        },
        "name": "文·瑞姆斯",
        "id": "1048129"
      }],
      "collect_count": 30536,
      "original_title": "Mission: Impossible - Fallout",
      "subtype": "movie",
      "directors": [{
        "alt": "https://movie.douban.com/celebrity/1276314/",
        "avatars": {
          "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52867.webp",
          "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52867.webp",
          "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p52867.webp"
        },
        "name": "克里斯托弗·麦奎里",
        "id": "1276314"
      }],
      "year": "2018",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.webp"
      },
      "alt": "https://movie.douban.com/subject/26336252/",
      "id": "26336252"
    }, {
      "rating": {
        "max": 10,
        "average": 7.4,
        "stars": "40",
        "min": 0
      },
      "genres": ["剧情", "运动"],
      "title": "苏丹",
      "casts": [{
        "alt": "https://movie.douban.com/celebrity/1017831/",
        "avatars": {
          "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355291691.29.webp",
          "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355291691.29.webp",
          "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355291691.29.webp"
        },
        "name": "萨尔曼·汗",
        "id": "1017831"
      }, {
        "alt": "https://movie.douban.com/celebrity/1045145/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1431791068.5.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1431791068.5.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1431791068.5.webp"
        },
        "name": "安努舒卡·莎玛",
        "id": "1045145"
      }, {
        "alt": "https://movie.douban.com/celebrity/1338529/",
        "avatars": {
          "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423050954.69.webp",
          "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423050954.69.webp",
          "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1423050954.69.webp"
        },
        "name": "马雷塞·克伦普",
        "id": "1338529"
      }],
      "collect_count": 2195,
      "original_title": "Sultan",
      "subtype": "movie",
      "directors": [{
        "alt": "https://movie.douban.com/celebrity/1378742/",
        "avatars": {
          "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502246478.77.webp",
          "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502246478.77.webp",
          "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1502246478.77.webp"
        },
        "name": "阿里·阿巴斯·札法",
        "id": "1378742"
      }],
      "year": "2016",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529570494.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529570494.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529570494.webp"
      },
      "alt": "https://movie.douban.com/subject/26728641/",
      "id": "26728641"
    }, {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": ["纪录片"],
      "title": "藏北秘岭-重返无人区",
      "casts": [{
        "alt": "https://movie.douban.com/celebrity/1396890/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124303.2.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124303.2.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124303.2.webp"
        },
        "name": "蔡宇",
        "id": "1396890"
      }, {
        "alt": "https://movie.douban.com/celebrity/1396889/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124289.64.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124289.64.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124289.64.webp"
        },
        "name": "饶子君",
        "id": "1396889"
      }, {
        "alt": "https://movie.douban.com/celebrity/1396891/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124315.6.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124315.6.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124315.6.webp"
        },
        "name": "土旦巴桑",
        "id": "1396891"
      }],
      "collect_count": 69,
      "original_title": "藏北秘岭-重返无人区",
      "subtype": "movie",
      "directors": [{
        "alt": "https://movie.douban.com/celebrity/1396889/",
        "avatars": {
          "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124289.64.webp",
          "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124289.64.webp",
          "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1531124289.64.webp"
        },
        "name": "饶子君",
        "id": "1396889"
      }],
      "year": "2018",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530299035.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530299035.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530299035.webp"
      },
      "alt": "https://movie.douban.com/subject/30208007/",
      "id": "30208007"
    }]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})