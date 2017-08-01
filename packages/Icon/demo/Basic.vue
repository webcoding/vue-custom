<template>
  <div class="content page-svg">
    <h1>SVG 图标集</h1>
    <div class="panel">
      <h2>Logo</h2>
      <div class="flex">
        <span class="logo-dark flex-center box400">
          <Icon type="devnode_logo" width="280" height="70"></Icon>
        </span>
        <span class="logo-light flex-center box400" style="background: #35405b;">
          <Icon type="devnode_logo" width="280" height="70"></Icon>
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
      <Icon type="menu"></Icon>
      <Icon type="add"></Icon>
      <Icon type="arrow_alt">层级</Icon>
      <Icon type="inbox">收件箱</Icon>
      <Icon type="inbox_active">收件箱</Icon>
      <Icon type="duplicates">重复的</Icon>
      <Icon type="duplicates_active"></Icon>
      <Icon type="trash">废纸篓</Icon>
      <Icon type="trash_active"></Icon>
      <br>
      <Icon type="default_collection"></Icon>
      <Icon type="default_collection_active"></Icon>
      <Icon type="16_default_collection"></Icon>
      <Icon type="new_collection">新的收藏集</Icon>
      <Icon type="new_collection_active"></Icon>
      <Icon type="tag">标签</Icon>
      <Icon type="tag_active"></Icon>
      <Icon type="cloud">全部</Icon>
      <Icon type="cloud_active"></Icon>
      <Icon type="like">最喜爱的</Icon>
      <Icon type="like_active">从最喜爱的删除</Icon>
      <Icon type="like_outline">添加到最喜爱的</Icon>
      <Icon type="micro_tag"></Icon>
      <Icon type="micro_next"></Icon>
      <Icon type="micro_link"></Icon>
      <Icon type="micro_article"></Icon>
      <Icon type="micro_dropdown"></Icon>
      <Icon type="micro_important"></Icon>
      <Icon type="micro_video"></Icon>
      <br>
      <Icon type="check_active">选择</Icon>
      <Icon type="select_all">选择所有</Icon>
      <Icon type="upload">上传照片</Icon>
      <Icon type="upload_active"></Icon>
      <Icon type="close"></Icon>
      <Icon type="fonts"></Icon>
      <Icon type="search"></Icon>
      <Icon type="share"></Icon>
      <Icon type="arrow"></Icon>
      <Icon type="lock"></Icon>
      <Icon type="move_to"></Icon>
      <br>
      <Icon type="open">在浏览器中打开</Icon>
      <Icon type="more_horizontal">右键点击书签或集合文件夹以获得更多功能</Icon>
      <Icon type="view_simple">List</Icon>
      <Icon type="view_list">Headlines</Icon>
      <Icon type="view_grid">Cards</Icon>
      <Icon type="view_gallery">Moodboard</Icon>

      <h4>tabBar</h4>
      <Icon type="24_home"></Icon>
      <Icon type="24_home_active"></Icon>
      <Icon type="24_install"></Icon>
      <Icon type="24_install_active"></Icon>
      <Icon type="24_settings"></Icon>
      <Icon type="24_settings_active"></Icon>

      <h4>install/extension</h4>
      <Icon type="mobile">移动应用</Icon>
      <Icon type="extension">浏览器扩展</Icon>
      <Icon type="extension_active"></Icon>
      <Icon type="apple">macOS | iPhone & iPad</Icon>
      <Icon type="apple_active"></Icon>
      <Icon type="microsoft">Windows</Icon>
      <Icon type="microsoft_active"></Icon>
      <Icon type="android">Android</Icon>
      <Icon type="android_active"></Icon>

      <h4>settings/upgrade</h4>
      <Icon type="diamond">专业版账号</Icon>
      <Icon type="diamond_active"></Icon>
      <Icon type="settings">设置</Icon>
      <Icon type="settings_active"></Icon>
      <Icon type="profile">配置</Icon>
      <Icon type="profile_active"></Icon>
      <Icon type="import">导入书签</Icon>
      <Icon type="import_active"></Icon>
      <Icon type="export">导出书签</Icon>
      <Icon type="export_active"></Icon>
      <Icon type="dropbox">Dropbox备份</Icon>
      <Icon type="dropbox_active"></Icon>
      <Icon type="dev">开发者支持</Icon>
      <Icon type="tools">为下一步要开发的新功能投票</Icon>
      <Icon type="history">帮助</Icon>
      <Icon type="cloud">关于我们</Icon>
      <Icon type="cloud_active"></Icon>
      <Icon type="exit">注销</Icon>
      <Icon type="import_pocket">pocket</Icon>
      <Icon type="import_instapaper">instapaper</Icon>
      <Icon type="import_readability">readability</Icon>
      <h4>排序</h4>
      <Icon type="sort_lastUpdate">按日期</Icon>
      <Icon type="sort_lastUpdate_active"></Icon>
      <Icon type="sort_title">按名称</Icon>
      <Icon type="sort_title_active"></Icon>
      <Icon type="sort_rating">按受欢迎程度</Icon>
      <Icon type="sort_rating_active"></Icon>
      <Icon type="sort_domain">网站</Icon>
      <Icon type="sort_domain_active"></Icon>
      <h4>编辑</h4>
      <Icon type="back"></Icon>
      <Icon type="fullscreen_active"></Icon>
      <Icon type="article"></Icon>
      <Icon type="article_active"></Icon>
      <Icon type="web"></Icon>
      <Icon type="web_active"></Icon>
      <Icon type="info"></Icon>
      <Icon type="info_active"></Icon>
      <h4>register/login</h4>
      <Icon type="email"></Icon>
      <Icon type="user"></Icon>
      <Icon type="lock"></Icon>
      <Icon type="keyword"></Icon>
      <Icon type="qq"></Icon>
      <Icon type="wechat"></Icon>
      <Icon type="github"></Icon>
      <!--<Icon type="title"></Icon>-->
    </div>
    <p>跟设置的字体颜色一致</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scope>
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
    height 400px


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
