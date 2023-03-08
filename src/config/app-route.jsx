import React from 'react';
import App from './../app.jsx';
import { Navigate } from 'react-router-dom';

import Dashboard from './../pages/dashboard/dashboard.js';
import Analytics from './../pages/analytics/analytics.js';
import EmailInbox from './../pages/email/inbox.js';
import EmailCompose from './../pages/email/compose.js';
import EmailDetail from './../pages/email/detail.js';
import Widgets from './../pages/widgets/widgets.js';
import PosCustomerOrder from './../pages/pos/customer-order.js';
import PosKitchenOrder from './../pages/pos/kitchen-order.js';
import PosCounterCheckout from './../pages/pos/counter-checkout.js';
import PosTableBooking from './../pages/pos/table-booking.js';
import PosMenuStock from './../pages/pos/menu-stock.js';
import UiBootstrap from './../pages/ui/bootstrap.js';
import UiButtons from './../pages/ui/buttons.js';
import UiCard from './../pages/ui/card.js';
import UiIcons from './../pages/ui/icons.js';
import UiModalNotifications from './../pages/ui/modal-notifications.js';
import UiTypography from './../pages/ui/typography.js';
import UiTabsAccordions from './../pages/ui/tabs-accordions.js';
import FormElements from './../pages/form/elements.js';
import FormPlugins from './../pages/form/plugins.js';
import FormWizards from './../pages/form/wizards.js';
import TableElements from './../pages/table/elements.js';
import TablePlugins from './../pages/table/plugins.js';
import ChartJs from './../pages/charts/js.js';
import ChartApex from './../pages/charts/apex.js';
import Map from './../pages/map/map.js';
import LayoutStarter from './../pages/layout/starter.js';
import LayoutFixedFooter from './../pages/layout/fixed-footer.js';
import LayoutFullHeight from './../pages/layout/full-height.js';
import LayoutFullWidth from './../pages/layout/full-width.js';
import LayoutBoxedLayout from './../pages/layout/boxed-layout.js';
import LayoutCollapsedSidebar from './../pages/layout/collapsed-sidebar.js';
import PagesScrumBoard from './../pages/pages/scrum-board.js';
import PagesProducts from './../pages/pages/products.js';
import PagesProductDetails from './../pages/pages/product-details.js';
import PagesOrders from './../pages/pages/orders.js';
import PagesOrderDetails from './../pages/pages/order-details.js';
import PagesGallery from './../pages/pages/gallery.js';
import PagesSearchResults from './../pages/pages/search-results.js';
import PagesComingSoon from './../pages/pages/coming-soon.js';
import PagesError from './../pages/pages/error.js';
import PagesLogin from './../pages/pages/login.js';
import PagesRegister from './../pages/pages/register.js';
import PagesMessenger from './../pages/pages/messenger.js';
import PagesDataManagement from './../pages/pages/data-management.js';
import Profile from './../pages/profile/profile.js';
import Calendar from './../pages/calendar/calendar.js';
import Settings from './../pages/settings/settings.js';
import Helper from './../pages/helper/helper.js';



import AdminLogin from "../ProjectComponents/Admin/Mains/login";
import AdminDashboard from "../ProjectComponents/Admin/Mains/AdminDashboard";
import AdminAllAdmins from "../ProjectComponents/Admin/Mains/AdminAllAdmins";

import AdminAllTasks from "../ProjectComponents/Admin/Mains/AdminAllTasks";
import AdminAllUsers from "../ProjectComponents/Admin/Mains/AdminAllUsers";

import AdminCreateAdmin from "../ProjectComponents/Admin/Mains/AdminCreateAdmin";

import AdminCreateTask from "../ProjectComponents/Admin/Mains/AdminCreateTask";
import AdminCreateUser from "../ProjectComponents/Admin/Mains/AdminCreateUser";

import AdminUpdateAdmins from "../ProjectComponents/Admin/Mains/AdminUpdateAdmins";

import AdminUpdateProfile from "../ProjectComponents/Admin/Mains/AdminUpdateProfile";

import AdminUpdateUser from "../ProjectComponents/Admin/Mains/AdminUpdateUser";
// import AdminUserTaskDetails from "../ProjectComponents/Admin/Mains/AdminUserTaskDetails";

import AdminUserActivity from "../ProjectComponents/Admin/Mains/AdminUserActivity"

import AdminDownloadActivity from "../ProjectComponents/Admin/Mains/Admindownloadactivity"






// User
import UserLogin from '../ProjectComponents/User/Main/login'
import UserDashboard from "../ProjectComponents/User/Main/UserDashboard";
import UserCreateTask from "../ProjectComponents/User/Main/UserCreateTask";

import UserOpenTasks from '../ProjectComponents/User/Main/UserOpenTasks.js';

import UserTasks from "../ProjectComponents/User/Main/UserTasks";

import SignUp from '../ProjectComponents/User/Main/signup'



const AppRoute = [
  {
    path: "*",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="/userlogin" /> },

      // User
      { path: "userlogin", element: <UserLogin /> },
      { path: "usersignup", element: <SignUp /> },
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "usercreatetask", element: <UserCreateTask /> },

      // { path: "usertasks", element: <UserTasks /> },
      { path: "useropentasks", element: <UserOpenTasks /> },

      { path: "adminlogin", element: <AdminLogin /> },
      { path: "admindashboard", element: <AdminDashboard /> },
      { path: "alladmins", element: <AdminAllAdmins /> },

      { path: "alltasks", element: <AdminAllTasks /> },
      { path: "allusers", element: <AdminAllUsers /> },

      { path: "createadmin", element: <AdminCreateAdmin /> },

      { path: "createtask", element: <AdminCreateTask /> },
      { path: "createuser", element: <AdminCreateUser /> },

      { path: "alladmins/updateadmin/:id", element: <AdminUpdateAdmins /> },

      { path: "updateprofile", element: <AdminUpdateProfile /> },

      { path: "alladmins/updateuser/:id", element: <AdminUpdateUser /> },
      { path: "downloadactivity", element: <AdminDownloadActivity /> },
      // { path: "usertaskdetails", element: <AdminUserTaskDetails /> },

      { path: "useractivity", element: <AdminUserActivity /> },

      //   { path: "analytics", element: <Analytics /> },
      //   { path: "dashboard", element: <Dashboard /> },
      //   {
      //     path: "email/*",
      //     children: [
      //       { path: "inbox", element: <EmailInbox /> },
      //       { path: "compose", element: <EmailCompose /> },
      //       { path: "detail", element: <EmailDetail /> },
      //     ],
      //   },
      //   { path: "widgets", element: <Widgets /> },
      //   {
      //     path: "pos/*",
      //     children: [
      //       { path: "customer-order", element: <PosCustomerOrder /> },
      //       { path: "kitchen-order", element: <PosKitchenOrder /> },
      //       { path: "counter-checkout", element: <PosCounterCheckout /> },
      //       { path: "table-booking", element: <PosTableBooking /> },
      //       { path: "menu-stock", element: <PosMenuStock /> },
      //     ],
      //   },
      //   {
      //     path: "ui/*",
      //     children: [
      //       { path: "bootstrap", element: <UiBootstrap /> },
      //       { path: "buttons", element: <UiButtons /> },
      //       { path: "card", element: <UiCard /> },
      //       { path: "icons", element: <UiIcons /> },
      //       { path: "modal-notifications", element: <UiModalNotifications /> },
      //       { path: "typography", element: <UiTypography /> },
      //       { path: "tabs-accordions", element: <UiTabsAccordions /> },
      //     ],
      //   },
      //   {
      //     path: "form/*",
      //     children: [
      //       { path: "elements", element: <FormElements /> },
      //       { path: "plugins", element: <FormPlugins /> },
      //       { path: "wizards", element: <FormWizards /> },
      //     ],
      //   },
      //   {
      //     path: "table/*",
      //     children: [
      //       { path: "elements", element: <TableElements /> },
      //       { path: "plugins", element: <TablePlugins /> },
      //     ],
      //   },
      //   {
      //     path: "chart/*",
      //     children: [
      //       { path: "chart-js", element: <ChartJs /> },
      //       { path: "chart-apex", element: <ChartApex /> },
      //     ],
      //   },
      //   {
      //     path: "layout/*",
      //     children: [
      //       { path: "starter-page", element: <LayoutStarter /> },
      //       { path: "fixed-footer", element: <LayoutFixedFooter /> },
      //       { path: "full-height", element: <LayoutFullHeight /> },
      //       { path: "full-width", element: <LayoutFullWidth /> },
      //       { path: "boxed-layout", element: <LayoutBoxedLayout /> },
      //       { path: "collapsed-sidebar", element: <LayoutCollapsedSidebar /> },
      //     ],
      //   },
      //   {
      //     path: "pages/*",
      //     children: [
      //       { path: "scrum-board", element: <PagesScrumBoard /> },
      //       { path: "products", element: <PagesProducts /> },
      //       { path: "product-details", element: <PagesProductDetails /> },
      //       { path: "orders", element: <PagesOrders /> },
      //       { path: "order-details", element: <PagesOrderDetails /> },
      //       { path: "gallery", element: <PagesGallery /> },
      //       { path: "search-results", element: <PagesSearchResults /> },
      //       { path: "coming-soon", element: <PagesComingSoon /> },
      //       { path: "error", element: <PagesError /> },
      //       { path: "login", element: <PagesLogin /> },
      //       { path: "register", element: <PagesRegister /> },
      //       { path: "messenger", element: <PagesMessenger /> },
      //       { path: "data-management", element: <PagesDataManagement /> },
      //     ],
      //   },
      //   { path: "map", element: <Map /> },
      //   { path: "profile", element: <Profile /> },
      //   { path: "calendar", element: <Calendar /> },
      //   { path: "settings", element: <Settings /> },
      //   { path: "helper", element: <Helper /> },
    ],
  },
];


export default AppRoute;