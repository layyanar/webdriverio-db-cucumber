# Webdriverio Test Framework

This is a webdriverio test automation using tools such as Browserstack, Allure reporting, MySQL DB connection established and cucumber/chai(assert) framework. This framework is using Async function as Node v16 and above accepts only Async. Hence, there is a need to use Async function everywhere with await keyword.

To run test on browserStack, configure your creds in wdio.conf):

> npx wdio run ./wdio.conf_bs.js

To run the DB test:

> npx wdio run ./wdio.conf_local.js --cucumberOpts.tagExpression='@dbtest'
