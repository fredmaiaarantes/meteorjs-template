import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '/ui/App';

Accounts.emailTemplates.siteName =
  Meteor.settings?.public?.appInfo?.name || process.env.ROOT_URL;

Meteor.startup(() => {});
