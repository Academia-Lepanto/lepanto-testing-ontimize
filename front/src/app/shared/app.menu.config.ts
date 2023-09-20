import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'users', name: 'USERS', icon: 'people', route: '/main/users' },
  { id: 'questions', name: 'QUESTIONS', icon: 'info_outline', route: '/main/questions' },
  { id: 'categories', name: 'CATEGORIES', icon: 'filter_list', route: '/main/categories' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
];
