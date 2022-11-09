import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { WebApp } from 'meteor/webapp';
import '/ui/App';

const appName = Meteor.settings?.public?.appInfo?.name || process.env.ROOT_URL;
Accounts.emailTemplates.siteName = appName;

Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: 'en' }));
});
