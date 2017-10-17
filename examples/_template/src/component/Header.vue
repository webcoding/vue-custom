<template>
  <div class="kit-doc-header">
    <div class="kit-doc-header__top">
      <a class="kit-doc-header__logo" href="http://www.youzanyun.com/zanui"></a>
      <ul class="kit-doc-header__top-nav">
        <li v-for="(value, key) in nav" :key="value">
          <a :href="value" :class="{ active: key === active }">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doc-header',

  props: {
    nav: Object,
    active: String,
  },
}
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-header {
  width: 100%;

  &__top {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0 $kit-doc-padding;
    height: $kit-doc-header-top-height;
    line-height: $kit-doc-header-top-height;
    box-shadow: 0 1px 4px rgba(0,0,0,.1);

    &-nav {
      flex: 1;
      text-align: right;

      li {
        display: inline-block;

        &:last-child {
          a {
            margin-right: 5px;
          }
        }
      }

      a {
        margin: 0 20px;
        font-size: 15px;
        display: block;
        letter-spacing: 1px;
        color: $kit-doc-text-color;

        &:hover,
        &.active {
          color: $kit-doc-blue;
        }
      }
    }
  }

  &__logo {
    display: block;
    width: 76px;
    height: 20px;
    background-image: url(https://img.yzcdn.cn/upload_files/2017/04/20/FjwR1mraVIqtHWb8YWDW_YzQ_Kh2.png);
    background-size: contain;
    background-repeat: no-repeat;
  }


  &__bottom {
    height: $kit-doc-header-bottom-height;
    line-height: $kit-doc-header-bottom-height;

    &-nav {
      text-align: center;

      li {
        display: inline-block;
      }

      a {
        color: #fff;
        opacity: .8;
        display: block;
        padding: 0 20px;
        font-size: 14px;

        &.active {
          background-color: rgba(255, 255, 255, .1);
        }

        &:hover,
        &.active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
