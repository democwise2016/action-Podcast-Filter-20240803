const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: '呱吉 采翎 - 新資料夾',
    feedID: 'new-folder',
    feedURL: 'https://feeds.soundon.fm/podcasts/ecd31076-d12d-46dc-ba11-32d24b41cca5.xml',
    itemFilters: [
      // ItemFiltersPreset.between10minTo120Min,
      (item) => { return (item.title.indexOf('新資料夾') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '法客電台 - 政治歸政治',
    feedID: 'plain-law-politics',
    feedURL: 'https://feed.firstory.me/rss/user/ckudnw7fn4tqg0870axzgirva',
    itemFilters: [
      // ItemFiltersPreset.between10minTo120Min,
      (item) => { return (item.title.indexOf('政治歸政治') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '迷走大學 - 認真講&不能講',
    feedID: 'meisouniv-talk',
    feedURL: 'https://feeds.soundon.fm/podcasts/2a9fb5ca-a9a9-4952-8dec-a42053797b6c.xml',
    itemFilters: [
      // ItemFiltersPreset.between10minTo120Min,
      (item) => { return ((item.title.indexOf('今天認真講') > -1) || (item.title.indexOf('這個不能講') > -1)) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '科技報橘 - 科技早餐',
    feedID: 'TechOrange',
    feedURL: 'https://googlecloudpodcast.libsyn.com/rss',
    itemFilters: [
      // ItemFiltersPreset.between10minTo120Min,
      (item) => { return ((item.title.indexOf('科技早餐') > -1)) }
    ],
    options: {
      maxItems: 20
    }
  },
  
]

// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '萊斯 新Game報',
//     feedID: 'LiceMoo-GameNews',
//     homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
//     thumbnailBorderColor: true,
//     itemFilters: [
//       ItemFiltersPreset.between3minTo30Min,
//       // (item) => { return (item.title.indexOf('《新Game報') > -1) }
//     ],
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
