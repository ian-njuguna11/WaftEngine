import DashboardPage from '../containers/AdminDashboard/Loadable';
import RoleManagePage from '../containers/AdminRoleManagePage/Loadable';
import RoleManageEditPage from '../containers/AdminRoleManagePage/AddEditPage';
import ModuleManagePage from '../containers/AdminModuleManagePage/Loadable';
import ModuleManageEditPage from '../containers/AdminModuleManagePage/AddEditPage/Loadable';
import ModuleAccessManagePage from '../containers/AdminModuleManagePage/AccessManagePage/Loadable';
import ContentManagePage from '../containers/ContentListingPage/Loadable';
import ContentManageAddEdit from '../containers/ContentListingPage/AddEditPage';

const routes = [
  {
    path: '/admin/dashboard',
    component: DashboardPage,
  },
  {
    path: '/admin/role-manage',
    component: RoleManagePage,
    exact: true,
  },
  {
    path: '/admin/role-manage/edit/:id',
    component: RoleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/role-manage/add',
    component: RoleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/content-manage/edit/:id',
    component: ContentManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/content-manage/add',
    component: ContentManageAddEdit,
    exact: true,
  },
  {
    path: '/admin/module-manage',
    component: ModuleManagePage,
    exact: true,
  },
  {
    path: '/admin/module-manage/edit/:id',
    component: ModuleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/module-manage/add',
    component: ModuleManageEditPage,
    exact: true,
  },
  {
    path: '/admin/module-manage/access/:id',
    component: ModuleAccessManagePage,
    exact: true,
  },
  {
    path: '/admin/content-manage/edit/:id',
    component: ContentManageAddEdit,
  },
  {
    path: '/admin/content-manage',
    component: ContentManagePage,
    exact: true,
  },
];

export default routes;
