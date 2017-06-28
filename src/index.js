
import XTag from './packages/XTag'
// import vDebug from './packages/Debug'
import Page from './packages/Page'
import Group from './packages/Group'
import Icon from './packages/Icon'
import Button from './packages/Button'
// import Box from './packages/Box'
import Cell from './packages/Cell'
// import CellSwipe from './packages/CellSwipe'
// import XButton from './packages/XButton'
// import Divider from './packages/Divider'
// import Switch from './packages/Switch'
import Badge from './packages/Badge'
import XHeader from './packages/XHeader'
// import XHeaderItem from './packages/XHeaderItem'
// import TreeItem from './packages/TreeItem'

// import Header from './packages/Header'
import Switch from './packages/Switch'
import Field from './packages/Field'
// import Navbar from './packages/Navbar'
// import Tabbar from './packages/Tabbar'
import SearchBar from './packages/SearchBar'
// import Spinner from './packages/Spinner'
// import TabItem from './packages/TabItem'
// import TabContainerItem from './packages/TabContainerItem'
// import TabContainer from './packages/TabContainer'
// import Search from './packages/Search'
// import CheckList from './packages/CheckList'
// import Radio from './packages/Radio'
// import LoadMore from './packages/LoadMore'
// import ActionSheet from './packages/ActionSheet'
// import Popup from './packages/Popup'
// import Swipe from './packages/Swipe'
// import SwipeItem from './packages/SwipeItem'
// import Range from './packages/Range'
// import Picker from './packages/Picker'
// import Progress from './packages/Progress'
// import Toast from './packages/Toast'
// import Indicator from './packages/Indicator'
// import MessageBox from './packages/MessageBox'
// import InfiniteScroll from './packages/InfiniteScroll'
// import Lazyload from './packages/lazyload'
// import DatetimePicker from './packages/datetime-picker'
// import IndexList from './packages/index-list'
// import IndexSection from './packages/index-section'
// import PaletteButton from './packages/palette-button'
// import './src/assets/font/iconfont.css'


// Object.keys(components).forEach((key) => {
//     var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
//     Vue.component(`v${name}`, components[key])
// })

const install = function install(Vue) {
  if (install.installed) return

  Vue.component(XTag.name, XTag)
  // Vue.component(vDebug.name, vDebug)
  Vue.component(Page.name, Page)
  Vue.component(Group.name, Group)
  // Vue.component(Header.name, Header)
  Vue.component(Badge.name, Badge)
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(Switch.name, Switch)
  Vue.component(Cell.name, Cell)
  Vue.component(XHeader.name, XHeader)
  // Vue.component(CellSwipe.name, CellSwipe)
  Vue.component(Field.name, Field)
  Vue.component(SearchBar.name, SearchBar)
  // Vue.component(Spinner.name, Spinner)
  // Vue.component(TabItem.name, TabItem)
  // Vue.component(TabContainerItem.name, TabContainerItem)
  // Vue.component(TabContainer.name, TabContainer)
  // Vue.component(Navbar.name, Navbar)
  // Vue.component(Tabbar.name, Tabbar)
  // Vue.component(Search.name, Search)
  // Vue.component(Checklist.name, Checklist)
  // Vue.component(Radio.name, Radio)
  // Vue.component(Loadmore.name, Loadmore)
  // Vue.component(Actionsheet.name, Actionsheet)
  // Vue.component(Popup.name, Popup)
  // Vue.component(Swipe.name, Swipe)
  // Vue.component(SwipeItem.name, SwipeItem)
  // Vue.component(Range.name, Range)
  // Vue.component(Picker.name, Picker)
  // Vue.component(Progress.name, Progress)
  // Vue.component(DatetimePicker.name, DatetimePicker)
  // Vue.component(IndexList.name, IndexList)
  // Vue.component(IndexSection.name, IndexSection)
  // Vue.component(PaletteButton.name, PaletteButton)
  // Vue.use(InfiniteScroll)
  // Vue.use(Lazyload, {
  //   loading: require('./assets/loading-spin.svg'),
  //   try: 3
  // })

  // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
  // Vue.$toast = Vue.prototype.$toast = Toast
  // Vue.$indicator = Vue.prototype.$indicator = Indicator
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version: '1.0.5',
  // Header,
  XTag,
  // vDebug,
  Page,
  Group,
  Button,
  Icon,
  Badge,
  Switch,
  Cell,
  // CellSwipe,
  XHeader,
  // Navbar,
  Field,
  SearchBar,
  // Spinner,
  // TabItem,
  // TabContainerItem,
  // TabContainer,
  // Tabbar,
  // Search,
  // Checklist,
  // Radio,
  // Loadmore,
  // Actionsheet,
  // Popup,
  // Swipe,
  // SwipeItem,
  // Range,
  // Picker,
  // Progress,
  // Toast,
  // Indicator,
  // MessageBox,
  // InfiniteScroll,
  // Lazyload,
  // DatetimePicker,
  // IndexList,
  // IndexSection,
  // PaletteButton,
}
