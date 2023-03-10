const Menu = [
  { is_header: true, title: "Navigation" },
  { path: "/admindashboard", icon: "bi bi-cpu", title: "Dashboard" },
  { is_divider: true },
  // {
  //   path: "/createadmin",
  //   icon: "bi bi-envelope",
  //   title: "Marketing Forms",
  //   children: [
  //     { path: "/createadmin", title: "CREATE ADMIN" },
  //     { path: "/createuser", title: "CREATE USER" },
  //     { path: "/createtask", title: "CREATE DOWNLOADABLE CONTENT" },
  //   ],
  // },
  { path: "/alladmins", icon: "bi bi-bar-chart", title: "ALL ADMINS" },
  { is_divider: true },

  { path: "/updateprofile", icon: "bi bi-bar-chart", title: "UPDATE PROFILE" },
  { is_divider: true },
  { path: "/allusers", icon: "bi bi-bar-chart", title: "ALL USER" },
  { is_divider: true },
  { path: "/createuser", icon: "bi bi-bar-chart", title: "CREATE USER" },

  { is_divider: true },
  { path: "/createadmin", icon: "bi bi-bar-chart", title: "CREATE ADMIN" },

  { is_divider: true },
  {
    path: "/createtask",
    icon: "bi bi-bar-chart",
    title: "CREATE DOWNLOADABLE CONTENT",
  },
  { is_divider: true },

  { path: "/useractivity", icon: "bi bi-bar-chart", title: "USER ACTIVITY" },
  { is_divider: true },

  { is_divider: true },
  {
    path: "/downloadactivity",
    icon: "bi bi-bar-chart",
    title: "Download Activity",
  },

  // { is_divider: true },
  // {
  //   path: "/downloadactivity",
  //   icon: "bi bi-bar-chart",
  //   title: "Operations Forms (Space/Raw Space Exhibitors)",
  // },

  // { is_divider: true },
  // {
  //   path: "/downloadactivity",
  //   icon: "bi bi-bar-chart",
  //   title: "Operations Forms (Shell Scheme Exhibitors)",
  // },

  // { is_divider: true },
  // {
  //   path: "/downloadactivity",
  //   icon: "bi bi-bar-chart",
  //   title: "Optional Forms ( All Exhibitors)",
  // },
  // { path: "/alltasks", icon: "bi bi-bar-chart", title: "ALL CONTENT" },
  // {
  //   path: "/email",
  //   icon: "bi bi-envelope",
  //   title: "Email",
  //   children: [
  //     { path: "/email/inbox", title: "Inbox" },
  //     { path: "/email/compose", title: "Compose" },
  //     { path: "/email/detail", title: "Detail" },
  //   ],
  // },
  // { is_divider: true },
  // { is_header: true, title: "Components" },
  // { path: "/widgets", icon: "bi bi-columns-gap", title: "Widgets" },
  // {
  //   path: "/pos",
  //   icon: "bi bi-bag-check",
  //   title: "POS System",
  //   highlight: true,
  //   children: [
  //     { path: "/pos/customer-order", title: "Customer Order" },
  //     { path: "/pos/kitchen-order", title: "Kitchen Order" },
  //     { path: "/pos/counter-checkout", title: "Counter Checkout" },
  //     { path: "/pos/table-booking", title: "Table Booking" },
  //     { path: "/pos/menu-stock", title: "Menu Stock" },
  //   ],
  // },
  // {
  //   path: "/ui",
  //   icon: "fa fa-heart",
  //   title: "UI Kits",
  //   children: [
  //     { path: "/ui/bootstrap", title: "Bootstrap" },
  //     { path: "/ui/buttons", title: "Buttons" },
  //     { path: "/ui/card", title: "Card" },
  //     { path: "/ui/icons", title: "Icons" },
  //     { path: "/ui/modal-notifications", title: "Modal & Notifications" },
  //     { path: "/ui/typography", title: "Typography" },
  //     { path: "/ui/tabs-accordions", title: "Tabs & Accordions" },
  //   ],
  // },
  // {
  //   path: "/form",
  //   icon: "bi bi-pen",
  //   title: "Forms",
  //   children: [
  //     { path: "/form/elements", title: "Form Elements" },
  //     { path: "/form/plugins", title: "Form Plugins" },
  //     { path: "/form/wizards", title: "Wizards" },
  //   ],
  // },
  // {
  //   path: "/table",
  //   icon: "bi bi-grid-3x3",
  //   title: "Tables",
  //   children: [
  //     { path: "/table/elements", title: "Table Elements" },
  //     { path: "/table/plugins", title: "Table Plugins" },
  //   ],
  // },
  // {
  //   path: "/chart",
  //   icon: "bi bi-pie-chart",
  //   title: "Charts",
  //   children: [
  //     { path: "/chart/chart-js", title: "Chart.js" },
  //     { path: "/chart/chart-apex", title: "Apexcharts.js" },
  //   ],
  // },
  // { path: "/map", icon: "bi bi-compass", title: "Map" },
  // {
  //   path: "/layout",
  //   icon: "bi bi-layout-sidebar",
  //   title: "Layout",
  //   children: [
  //     { path: "/layout/starter-page", title: "Starter Page" },
  //     { path: "/layout/fixed-footer", title: "Fixed Footer" },
  //     { path: "/layout/full-height", title: "Full Height" },
  //     { path: "/layout/full-width", title: "Full Width" },
  //     { path: "/layout/boxed-layout", title: "Boxed Layout" },
  //     { path: "/layout/collapsed-sidebar", title: "Collapsed Sidebar" },
  //   ],
  // },
  // {
  //   path: "/pages",
  //   icon: "bi bi-collection",
  //   title: "Pages",
  //   children: [
  //     { path: "/pages/scrum-board", title: "Scrum Board" },
  //     { path: "/pages/products", title: "Products" },
  //     { path: "/pages/product-details", title: "Product Details" },
  //     { path: "/pages/orders", title: "Orders" },
  //     { path: "/pages/order-details", title: "Order Details" },
  //     { path: "/pages/gallery", title: "Gallery" },
  //     { path: "/pages/search-results", title: "Search Results" },
  //     { path: "/pages/coming-soon", title: "Coming Soon Page" },
  //     { path: "/pages/error", title: "Error Page" },
  //     { path: "/pages/login", title: "Login" },
  //     { path: "/pages/register", title: "Register" },
  //     { path: "/pages/messenger", title: "Messenger" },
  //     { path: "/pages/data-management", title: "Data Management" },
  //   ],
  // },
  // { is_divider: true },
  // { is_header: true, title: "Users" },
  // { path: "/profile", icon: "bi bi-people", title: "Profile" },
  // { path: "/calendar", icon: "bi bi-calendar4", title: "Calendar" },
  // { path: "/settings", icon: "bi bi-gear", title: "Settings" },
  // { path: "/helper", icon: "bi bi-gem", title: "Helper" },
];

export default Menu;
