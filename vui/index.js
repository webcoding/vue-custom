
import XTag from '@packages/XTag'
// import vDebug from '@packages/Debug'
import Page from '@packages/Page'
import Layout from '@packages/Layout'
import Icon from '@packages/Icon'
import Flex from '@packages/Flex'
import Grid from '@packages/Grid'
// import BackTop from '@packages/BackTop'
import Group from '@packages/Group'
import Button from '@packages/Button'
// import Box from '@packages/Box'
import Cell from '@packages/Cell'
// import CellSwipe from '@packages/CellSwipe'
// import XButton from '@packages/XButton'
// import Divider from '@packages/Divider'
import Badge from '@packages/Badge'
import XHeader from '@packages/XHeader'
// import XHeaderItem from '@packages/XHeaderItem'
// import TreeItem from '@packages/TreeItem'

// import Header from '@packages/Header'
import XSwitch from '@packages/XSwitch'
import Field from '@packages/Field'
// import Navbar from '@packages/Navbar'
// import Tabbar from '@packages/Tabbar'
import SearchBar from '@packages/SearchBar'
import Alert from '@packages/Alert'
import Spin from '@packages/Spin'
// import Spinner from '@packages/Spinner'
// import TabItem from '@packages/TabItem'
// import TabContainerItem from '@packages/TabContainerItem'
// import TabContainer from '@packages/TabContainer'
// import Search from '@packages/Search'
// import CheckList from '@packages/CheckList'
// import Radio from '@packages/Radio'
// import LoadMore from '@packages/LoadMore'
// import ActionSheet from '@packages/ActionSheet'
// import Popup from '@packages/Popup'
// import Swipe from '@packages/Swipe'
// import SwipeItem from '@packages/SwipeItem'
// import Range from '@packages/Range'
// import Picker from '@packages/Picker'
// import Progress from '@packages/Progress'
// import Toast from '@packages/Toast'
// import Indicator from '@packages/Indicator'
// import MessageBox from '@packages/MessageBox'
// import InfiniteScroll from '@packages/InfiniteScroll'
// import Lazyload from '@packages/lazyload'
// import DatetimePicker from '@packages/datetime-picker'
// import IndexList from '@packages/index-list'
// import IndexSection from '@packages/index-section'
// import PaletteButton from '@packages/palette-button'
// import './src/assets/font/iconfont.css'
// import locale from './locale'

const packages = {
  // Header,
  XTag,
  // vDebug,
  Page,
  Flex,
  FlexItem: Flex.Item,
  Grid,
  // Row: Grid.Row,
  // Col: Grid.Col,
  Layout,
  Group,
  Button,
  Icon,
  IconFont: Icon.Font,
  IconSvg: Icon.Svg,
  IconCustom: Icon.Custom,
  Badge,
  XSwitch,
  Cell,
  // CellSwipe,
  // BackTop,
  XHeader,
  // Navbar,
  Field,
  SearchBar,
  Alert,
  Spin,
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

  Object.keys(packages).forEach((key) => {
    // var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(key, packages[key])
  })
  // packages.map(item => {
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
export default Object.assign(packages, {
  install,
  version: version,
})
