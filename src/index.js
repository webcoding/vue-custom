
import XTag from '../vui/XTag'
// import vDebug from '../vui/Debug'
import Page from '../vui/Page'
import Group from '../vui/Group'
import Icon from '../vui/Icon'
import Button from '../vui/Button'
// import Box from '../vui/Box'
import Cell from '../vui/Cell'
// import CellSwipe from '../vui/CellSwipe'
// import XButton from '../vui/XButton'
// import Divider from '../vui/Divider'
import Badge from '../vui/Badge'
import XHeader from '../vui/XHeader'
// import XHeaderItem from '../vui/XHeaderItem'
// import TreeItem from '../vui/TreeItem'

// import Header from '../vui/Header'
import XSwitch from '../vui/XSwitch'
import Field from '../vui/Field'
// import Navbar from '../vui/Navbar'
// import Tabbar from '../vui/Tabbar'
import SearchBar from '../vui/SearchBar'
import Flex from '../vui/Flex'
// import Spinner from '../vui/Spinner'
// import TabItem from '../vui/TabItem'
// import TabContainerItem from '../vui/TabContainerItem'
// import TabContainer from '../vui/TabContainer'
// import Search from '../vui/Search'
// import CheckList from '../vui/CheckList'
// import Radio from '../vui/Radio'
// import LoadMore from '../vui/LoadMore'
// import ActionSheet from '../vui/ActionSheet'
// import Popup from '../vui/Popup'
// import Swipe from '../vui/Swipe'
// import SwipeItem from '../vui/SwipeItem'
// import Range from '../vui/Range'
// import Picker from '../vui/Picker'
// import Progress from '../vui/Progress'
// import Toast from '../vui/Toast'
// import Indicator from '../vui/Indicator'
// import MessageBox from '../vui/MessageBox'
// import InfiniteScroll from '../vui/InfiniteScroll'
// import Lazyload from '../vui/lazyload'
// import DatetimePicker from '../vui/datetime-picker'
// import IndexList from '../vui/index-list'
// import IndexSection from '../vui/index-section'
// import PaletteButton from '../vui/palette-button'
// import './src/assets/font/iconfont.css'
// import locale from './locale'

const vui = {
  // Header,
  XTag,
  // vDebug,
  Page,
  Group,
  Button,
  Icon,
  Badge,
  XSwitch,
  Cell,
  // CellSwipe,
  XHeader,
  // Navbar,
  Field,
  SearchBar,
  Flex,
  FlexItem: Flex.Item,
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

  // Pagination,
  // Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  // Input,
  // InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  // Button,
  // ButtonGroup,
  // Table,
  // TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  // Upload,
  // Progress,
  // Spinner,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // Scrollbar,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // CollapseTransition,
}

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  Object.keys(vui).forEach((key) => {
    // var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(key, vui[key])
  })
  // vui.map(item => {
  //   Vue.component(item.name, item)
  // })

  // Vue.use(Loading.directive)

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification
  // Vue.prototype.$message = Message

  // Vue.use(InfiniteScroll)
  // Vue.use(Lazyload, {
  //   loading: require('./assets/loading-spin.svg'),
  //   try: 3
  // })

  // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox
  // Vue.$toast = Vue.prototype.$toast = Toast
  // Vue.$indicator = Vue.prototype.$indicator = Indicator
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

var version = '1.0.0'
export default Object.assign(vui, {
  install,
  version: version,
})
