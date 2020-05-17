# Running tests with codeceptjs

## Run tests
- Istall dependencies: `npm install`
- Install selenium server: `node_modules/selenium-standalone/bin/selenium-standalone install`
- Start selenium server: `node_modules/selenium-standalone/bin/selenium-standalone start`
- Run tests with mochawesome: `npm run test:mochawesome`
- Generate allure folder: `allure generate -o allure-results`
- Run tests with allure: `npm run test:allure`
- Serve allure report: `npm run report`