import dashboard from './dashboard';
import websites from './websites';
import contacts from './contacts';
import training from './training';

let routes = [];
/******
 * Usage 1: Standard menu rendering from provided routes
 */

export default routes.concat(dashboard, websites, contacts, training);

/*******
 * Usage 2: Injecting dividers and/or subheaders between provided routes
 */

// export default routes.concat(dashboard, [{divider: true}], [{subheader: true, label: 'Websites'}], websites, [{divider: true}], [{subheader: true, label: 'Contacts/Followups'}], contacts, training);