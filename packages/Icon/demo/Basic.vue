<template>
  <div class="content page-svg">
    <h1>SVG 图标集</h1>
    <div class="panel">
      <h2>Logo</h2>
      <div class="flex">
        <span class="logo-dark flex-center box400">
          <Icon type="devnode_logo" size="280, 70"></Icon>
        </span>
        <span class="logo-light flex-center box400" style="background: #35405b; color: #fff;">
          <Icon type="devnode_logo" size="280, 70"></Icon>
        </span>
      </div>
    </div>
    <div class="panel hover">
      <h2>Icons</h2>
      <span class="preloader">
        <svg viewBox="0 0 40 40" class="preloaderCircular">
          <circle class="preloaderPath" cx="20" cy="20" fill="none" r="12"></circle>
        </svg>
      </span>
      <template v-for="item in list" >
        <br v-if="item[0] === 'title'">
        <Icon v-else :type="item[0]" :key="item.type" />
      </template>
    </div>
    <p>跟设置的字体颜色一致</p>
  </div>
</template>

<script>
const iconList = [
  ['add', ''],
  ['arrow_alt', '层级'],
  ['inbox', '收件箱'],
  ['inbox_active', '收件箱'],
  ['duplicates', '重复的'],
  ['duplicates_active', ''],
  ['trash', '废纸篓'],
  ['trash_active', ''],

  ['title', ''],
  ['default_collection', ''],
  ['default_collection_active', ''],
  ['16_default_collection', ''],
  ['new_collection', '新的收藏集'],
  ['new_collection_active', ''],
  ['tag', '标签'],
  ['tag_active', ''],
  ['cloud', '全部'],
  ['cloud_active', ''],
  ['like', '最喜爱的'],
  ['like_active', '从最喜爱的删除'],
  ['like_outline', '添加到最喜爱的'],
  ['micro_tag', ''],
  ['micro_next', ''],
  ['micro_link', ''],
  ['micro_article', ''],
  ['micro_dropdown', ''],
  ['micro_important', ''],
  ['micro_video', ''],

  ['title', ''],
  ['check_active', '选择'],
  ['select_all', '选择所有'],
  ['upload', '上传照片'],
  ['upload_active', ''],
  ['close', ''],
  ['fonts', ''],
  ['search', ''],
  ['share', ''],
  ['arrow', ''],
  ['lock', ''],
  ['move_to', ''],

  ['title', ''],
  ['open', '在浏览器中打开'],
  ['more_horizontal', '右键点击书签或集合文件夹以获得更多功能'],
  ['view_simple', 'List'],
  ['view_list', 'Headlines'],
  ['view_grid', 'Cards'],
  ['view_gallery', 'Moodboard'],

  ['title', 'tabBar'],
  ['24_home', ''],
  ['24_home_active', ''],
  ['24_install', ''],
  ['24_install_active', ''],
  ['24_settings', ''],
  ['24_settings_active', ''],

  ['title', 'install/extension'],
  ['mobile', '移动应用'],
  ['extension', '浏览器扩展'],
  ['extension_active', ''],
  ['apple', 'macOS | iPhone & iPad'],
  ['apple_active', ''],
  ['microsoft', 'Windows'],
  ['microsoft_active', ''],
  ['android', 'Android'],
  ['android_active', ''],

  ['title', 'settings/upgrade'],
  ['diamond', '专业版账号'],
  ['diamond_active', ''],
  ['settings', '设置'],
  ['settings_active', ''],
  ['profile', '配置'],
  ['profile_active', ''],
  ['import', '导入书签'],
  ['import_active', ''],
  ['export', '导出书签'],
  ['export_active', ''],
  ['dropbox', 'Dropbox备份'],
  ['dropbox_active', ''],
  ['dev', '开发者支持'],
  ['tools', '为下一步要开发的新功能投票'],
  ['history', '帮助'],
  ['cloud', '关于我们'],
  ['cloud_active', ''],
  ['exit', '注销'],
  ['import_pocket', 'pocket'],
  ['import_instapaper', 'instapaper'],
  ['import_readability', 'readability'],

  ['title', '排序'],
  ['sort_lastUpdate', '按日期'],
  ['sort_lastUpdate_active', ''],
  ['sort_title', '按名称'],
  ['sort_title_active', ''],
  ['sort_rating', '按受欢迎程度'],
  ['sort_rating_active', ''],
  ['sort_domain', '网站'],
  ['sort_domain_active', ''],

  ['title', '编辑'],
  ['back', ''],
  ['fullscreen_active', ''],
  ['article', ''],
  ['article_active', ''],
  ['web', ''],
  ['web_active', ''],
  ['info', ''],
  ['info_active', ''],

  ['title', 'register/login'],
  ['email', ''],
  ['user', ''],
  ['lock', ''],
  ['keyword', ''],
  ['qq', ''],
  ['wechat', ''],
  ['github', ''],
]
export default {
  data() {
    return {
      list: iconList,
    }
  },
}
</script>

<style lang="stylus" scope>
.flex
  display flex
.flex-center
  display flex
  align-items center
  justify-content center
.page-svg
  svg
    margin 10px
  // &.hover:hover
  //   svg
  //     color #1988e0
  // .btn.active,
  // .tabs .item.active
  //   color #1988e0
  //   color var(--accentColor, #1988e0)

  .box400
    width 400px
    height 200px


.preloader {
  position: relative;
  margin: 0 auto;
  width: 40px;
  display: inline-block;
  border-radius: 50%
}

.preloader:before {
  content: '';
  display: block;
  padding-top: 100%
}

.preloader .preloaderCircular {
  animation: rotate 1s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.preloader .preloaderPath {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: preloaderDash 1.5s ease-in-out infinite;
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -35px;
  stroke-linecap: square;
  stroke-width: 2px;
  stroke-miterlimit: 10px;
  stroke: #1988e0;
  stroke: var(--accentColor,#1988e0);
  transition: stroke .2s ease-in-out;
}

.preloader.size-small {
  width: 24px
}

.preloader.size-small .preloaderPath {
  stroke-width: 3px
}

.preloader.size-medium {
  width: 30px
}

.preloader.size-big {
  width: 80px
}

.preloader.size-big .preloaderPath {
  stroke-width: 1px
}

.preloaderMax {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center
}

@keyframes rotate {
  to {
    transform: rotate(1turn)
  }
}

@keyframes preloaderAppear {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes preloaderDash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0
  }

  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px
  }

  to {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px
  }
}
</style>
