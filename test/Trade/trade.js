//testing the login function of Hollaex Kit
//Using Selenium webderiver and Mocha/Chai
//given, when and then
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const { expect } = require('chai');
const { Console } = require('console');
const dotenv = require('dotenv');
const { addConsoleHandler } = require('selenium-webdriver/lib/logging');
dotenv.config();
let userName = process.env.ADMIN_USER;
let passWord = process.env.ADMIN_PASS;
let logInPage = process.env.LOGIN_PAGE;



describe('Trade', function() {
	this.timeout(300000);
	let driver;
	let vars;
	function sleep(ms) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	} 
	beforeEach(async function() {
		driver = await new Builder().forBrowser('chrome').build();
		vars = {};
		// Test name: Untitled
		// Step # | name | target | value
		// 1 | open | /account | 
		await driver.get(logInPage);
		await sleep(10000);
		// 2 | type | name=email | USER@bitholla.com
		// await driver.wait(until.elementLocated(await driver.findElement(By.name("email"))), 5000);
		await driver.findElement(By.name('email')).sendKeys(userName);
		// 3 | type | name=password | bitholla@bitholla.com
		//await driver.wait(until.elementLocated(await driver.findElement(By.name("password"))),5000);
		await driver.findElement(By.name('password')).sendKeys(passWord);
		// 4 | click | name=email | 
   
		await sleep(4000);
		// await driver.findElement(By.name("email")).click();
		// // 5 | click | css=.holla-button | 
		await driver.wait(until.elementIsEnabled(await driver.findElement(By.css('.holla-button'))), 50000);
		await driver.findElement(By.css('.holla-button')).click();
	});
	afterEach(async function() {
		await driver.quit();
	});
	it('limit buy', async function() {

		// await driver.manage().window().setRect(1050, 660)
   
		// 3 | click | css=.home_app_bar > .pointer |  | 
		await sleep(4000);
		await driver.findElement(By.css('.app-menu-bar-content:nth-child(2) .edit-wrapper__container')).click();
		// 5 | click | name=Search Assets |  | 
		await driver.findElement(By.name('Search Assets')).click();
		// 6 | type | name=Search Assets | xht | 
		await driver.findElement(By.name('Search Assets')).sendKeys('xht');
		// 7 | sendKeys | name=Search Assets | ${KEY_ENTER} | 
		await driver.findElement(By.name('Search Assets')).sendKeys(Key.ENTER);
		// 8 | click | css=.trade_tab-pair-sub-title |  | 
		await driver.findElement(By.css('.trade_tab-pair-sub-title')).click();
		// 9 | click | name=size |  | 
		await sleep(3000);
		await driver.findElement(By.name('size')).click();
		// 10 | type | name=size | 1 | 
		await driver.findElement(By.name('size')).sendKeys('1');
		// 11 | click | css=.holla-button |  | 
		await driver.findElement(By.css('.holla-button')).click();
		// 12 | click | css=.notification-content-information > .d-flex:nth-child(1) |  | 
		await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(1)')).click();
		// 13 | assertText | css=.text-capitalize | Limit Buy | 
		assert(await driver.findElement(By.css('.text-capitalize')).getText() == 'Limit Buy');
		// 14 | click | css=.d-flex > .holla-button:nth-child(3) |  | 
		await driver.findElement(By.css('.d-flex > .holla-button:nth-child(3)')).click();
		// 15 | click | css=.w-100 .ant-select-selection-item |  | 
		await driver.findElement(By.css('.w-100 .ant-select-selection-item')).click();
		// 16 | click | css=.ant-select-item-option-active > .ant-select-item-option-content |  | 
		await driver.findElement(By.css('.ant-select-item-option-active > .ant-select-item-option-content')).click();
		// 17 | click | name=stop |  | 
	});

	it('Limit Sell', async function() {

		// 2 | setWindowSize | 1050x660 | 
		//   await driver.manage().window().setRect(1050, 660)
		await sleep(4000);
		// 3 | click | css=.home_app_bar > .pointer | 
		//  await driver.findElement(By.css(".home_app_bar > .pointer")).click()
		// 4 | click | css=.app-menu-bar-content:nth-child(2) .edit-wrapper__container | 
		await driver.findElement(By.css('.app-menu-bar-content:nth-child(2) .edit-wrapper__container')).click();
		// 5 | click | name=Search Assets | 
		await driver.findElement(By.name('Search Assets')).click();
		// 6 | type | name=Search Assets | xht
		await driver.findElement(By.name('Search Assets')).sendKeys('xht');
		// 7 | sendKeys | name=Search Assets | ${KEY_ENTER}
		await driver.findElement(By.name('Search Assets')).sendKeys(Key.ENTER);
		// 8 | click | css=.highcharts-background | 
		await driver.findElement(By.css('.trade_tab-pair-sub-title')).click();
		// 9 | click | css=.holla-button-font:nth-child(2) | 
		await sleep(4000);
		await driver.findElement(By.css('.holla-button-font:nth-child(2)')).click();
		// 10 | click | name=size | 
		await driver.findElement(By.name('size')).click();
		// 11 | type | name=size | 1
		await driver.findElement(By.name('size')).sendKeys('1');
		// 12 | click | css=.holla-button | 
		await driver.findElement(By.css('.holla-button')).click();
		// 13 | click | css=.text-capitalize | 
		await driver.findElement(By.css('.text-capitalize')).click();
		// 14 | assertText | css=.text-capitalize | Limit Sell
		assert(await driver.findElement(By.css('.text-capitalize')).getText() == 'Limit Sell');
		// 15 | click | css=.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2) | 
		await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2)')).click();
		// 16 | assertText | css=.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2) | 1 XHT
		assert(await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2)')).getText() == '1 XHT');
		// 17 | click | css=.notification-content-information > .d-flex:nth-child(3) > .f-1:nth-child(2) | 
		await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(3) > .f-1:nth-child(2)')).click();
		// 18 | assertText | css=.notification-content-information > .d-flex:nth-child(3) > .f-1:nth-child(2) | 1 USDT
		assert(await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(3) > .f-1:nth-child(2)')).getText() == '1 USDT');
		// 19 | click | css=.d-flex > .holla-button:nth-child(3) | 
		await driver.findElement(By.css('.d-flex > .holla-button:nth-child(3)')).click();
		// 20 | click | css=.table_body-row:nth-child(1) .action_notification-text | 
		await driver.findElement(By.css('.table_body-row:nth-child(1) .action_notification-text')).click();
	});

	it('Market buy', async function(){
		// await driver.manage().window().setRect(1296, 696)
		await sleep(2000);
		// 3 | click | css=.app-menu-bar-content:nth-child(2) .edit-wrapper__container | 
		await driver.findElement(By.css('.app-menu-bar-content:nth-child(2) .edit-wrapper__container')).click();
		// 4 | click | name=Search Assets | 
		await driver.findElement(By.name('Search Assets')).click();
		// 5 | type | name=Search Assets | xht
		await driver.findElement(By.name('Search Assets')).sendKeys('xht');
		// 6 | sendKeys | name=Search Assets | ${KEY_ENTER}
		await driver.findElement(By.name('Search Assets')).sendKeys(Key.ENTER);
		// 9 | click | css=.highcharts-background | 
		await driver.findElement(By.css('.highcharts-background')).click();
		// 10 | click | css=.text-center:nth-child(1) | 
		await sleep(5000);
		await driver.findElement(By.css('.text-center:nth-child(1)')).click();
		// 11 | click&type 1 | name=size | 
		await driver.findElement(By.name('size')).click();
		await driver.findElement(By.name('size')).sendKeys('1');
		// 12 | click | css=.holla-button | 
		await driver.findElement(By.css('.holla-button')).click();
		// 15 | click | css=.text-capitalize | 
		await driver.findElement(By.css('.text-capitalize')).click();
		// 16 | assertText | css=.text-capitalize | Market Buy
		assert(await driver.findElement(By.css('.text-capitalize')).getText() == 'Market Buy!');
		// 17 | click | css=.d-flex > .holla-button:nth-child(3) | 
		await driver.findElement(By.css('.d-flex > .holla-button:nth-child(3)')).click();
 
	}); 
	it('market sell', async function(){
		await driver.manage().window().setRect(1296, 696);
		await sleep(2000);
		// 3 | click | css=.app-menu-bar-content:nth-child(2) .edit-wrapper__container | 
		await driver.findElement(By.css('.app-menu-bar-content:nth-child(2) .edit-wrapper__container')).click();
		// 4 | click | name=Search Assets | 
		await driver.findElement(By.name('Search Assets')).click();
		// 5 | type | name=Search Assets | xht
		await driver.findElement(By.name('Search Assets')).sendKeys('xht');
		// 6 | sendKeys | name=Search Assets | ${KEY_ENTER}
		await driver.findElement(By.name('Search Assets')).sendKeys(Key.ENTER);
		// 9 | click | css=.highcharts-background | 
		await driver.findElement(By.css('.highcharts-background')).click();
		// 10 | click | css=.text-center:nth-child(1) | 
		await sleep(5000);
		await driver.findElement(By.css('.text-center:nth-child(1)')).click();
		// 4 | click | css=.holla-button-font:nth-child(2) | 
		await driver.findElement(By.css('.holla-button-font:nth-child(2)')).click();
		// 5 | click | css=.trade-col_action_wrapper > .trade_block-wrapper:nth-child(1) | 
		await driver.findElement(By.css('.trade-col_action_wrapper > .trade_block-wrapper:nth-child(1)')).click();
		await sleep(2000);
		// // 11 | click&type 1 | name=size | 
		await driver.findElement(By.name('size')).click();
		await driver.findElement(By.name('size')).sendKeys('1');
		// 6 | click | css=.holla-button | 
		await driver.findElement(By.css('.holla-button')).click();
		// 7 | click | css=.text-capitalize | 
		await driver.findElement(By.css('.text-capitalize')).click();
		// 8 | assertText | css=.text-capitalize | Market Sell
		assert(await driver.findElement(By.css('.text-capitalize')).getText() == 'Market Sell');
		// 9 | click | css=.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2) | 
		await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2)')).click();
		// 10 | assertText | css=.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2) | 1 XHT
		assert(await driver.findElement(By.css('.notification-content-information > .d-flex:nth-child(2) > .f-1:nth-child(2)')).getText() == '1 XHT');
		// 11 | click | css=.d-flex > .holla-button:nth-child(3) | 
		await driver.findElement(By.css('.d-flex > .holla-button:nth-child(3)')).click();

	}); 
  
});
