var scopackager = require('simple-scorm-packager');
var path = require('path');

const config = {
  version: '1.2',
  organization: 'S4 NetQuest',
  title: 'My Course',
  language: 'en-US',
  masteryScore: 80,
  startingPage: 'index.html',
  source: path.join(__dirname, 'build'),
  package: {
    version: process.env.npm_package_version,
    appendTimeToOutput: true,
    zip: true,
    author: 'Jay Karlsven',
    outputFolder: path.join(__dirname, 'scorm_packages'),
    description: 'My course description',
    keywords: ['course'],
    typicalDuration: 'PT1H0M0S',
    rights: `©${new Date().getFullYear()} S4 NetQuest. All right reserved.`,
    vcard: {
      author: 'Jay Karlsven',
      org: 'S4 NetQuest',
      tel: '(614) 220-5700',
      address: '580 North 4th Street, Suite 600, Columbus, OH 43215',
      mail: 'jkarlsven@s4netquest.com',
      url: 'https://s4netquest.com'
    }
  }
};

scopackager(config, function(msg){
  console.log(msg);
  process.exit(0);
});