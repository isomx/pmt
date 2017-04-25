export default [{
  path: '',
  icon: 'home',
  primaryText: 'Dashboard',
},{
  path: 'websites',
  icon: 'important devices',
  primaryText: 'Websites',
  nestedItems: [{
    path: 'manage',
    primaryText: 'Manage',
  },{
    path: 'reports',
    primaryText: 'Reports',
  }],
},{
  path: 'contacts',
  icon: 'people',
  primaryText: 'Contacts',
  nestedItems: [{
    path: 'lists',
    primaryText: 'Lists',
  },{
    path: 'campaigns',
    primaryText: 'Campaigns',
  },{
    path: 'templates',
    primaryText: 'Templates',
  }],
},{
  path: 'training',
  primaryText: 'Training',
  icon: 'library books',
}];