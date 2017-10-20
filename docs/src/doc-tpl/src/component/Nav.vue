<template>
  <div class="kit-doc-nav">
    <ul>
      <li class="kit-doc-nav__item" v-for="(item, index) in navConfig" :key="index">
        <doc-nav-link :item="item" :base="base" />
        <ul v-if="item.children">
          <li class="nav-item" v-for="(navItem, index) in item.children" :key="index">
            <doc-nav-link :item="navItem" :base="base" />
          </li>
        </ul>
        <template v-if="item.groups">
          <div v-for="(group, index) in item.groups" :key="index">
            <div class="kit-doc-nav__group-title">{{ group.title }}</div>
            <ul>
              <li :key="index" class="kit-doc-nav__subitem" v-for="(navItem, index) in group.list" v-if="!navItem.disabled">
                <doc-nav-link :item="navItem" :base="base" />
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import DocNavLink from './NavLink.vue'

export default {
  name: 'doc-nav',

  components: {
    DocNavLink,
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus">
@import '../style/var';

.kit-doc-nav {
  padding: 20px 0;
  min-width: 240px;
  max-width: 240px;
  border-right: 1px solid $kit-doc-border-color;

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;
  }

  &__item,
  &__subitem {
    a {
      margin: 0;
      display: block;
      color: #455a64;
      font-size: 16px;
      padding: 8px 20px;
      line-height: 24px;
      transition: all .3s;

      &.active {
        color: $kit-doc-blue;
        background-color: #f5f7fa;
      }
    }
  }

  &__subitem {
    a {
      font-size: 14px;
      padding-left: 34px;

      &:hover {
        color: $kit-doc-blue;
        background-color: #f5f7fa;
      }
    }

    small {
      opacity: .6;
      font-size: 80%;
    }
  }

  &__group-title {
    font-size: 13px;
    line-height: 40px;
    padding-left: 22px;
    color: $kit-doc-text-light-blue;
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
        padding-left: 30px;
      }
    }
  }
}
</style>
