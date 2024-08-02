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
