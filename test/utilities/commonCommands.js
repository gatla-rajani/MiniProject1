const fs = require(`fs`);
const path = require(`path`);
let number;
const robot = require(`robotjs`);
const jimp = require('jimp');
const date = (new Date()).toString().split(` `, 6);
date.pop();
var dateStamp = (date.join(`_`)).replace(new RegExp(`:`, `g`), ``);

class commonCommands {
	 takeScreenshot(path) {
		// browser.saveScreenshot(`${path.resolve(`${process.env.evidence}${process.env.folder}${process.env.fileName}`)}/${process.env.counter}_${text.replace(/ /g, `_`)}.png`);
	
		const screenWidth =  parseInt(process.env.width);
		const screenHeight = parseInt(process.env.height);

		const screenshot = robot.screen.capture(0, 0, screenWidth, screenHeight).image;
		
		let fixedImg = new Uint8Array(screenshot.length);
			for (let i = 0; i < screenshot.length; i += 4) {
				fixedImg[i] = screenshot[i + 2]; // r
				fixedImg[i + 1] = screenshot[i + 1]; // g
				fixedImg[i + 2] = screenshot[i + 0]; // b
				fixedImg[i + 3] = 255; // a
			}
		new jimp({data: fixedImg, width: screenWidth , height : screenHeight}, (err, fixedImg) => {
			if(err)
				throw err;
		fixedImg.write(path);
		});
  }
  
  takeScreenshotNow(screenShotName){
		let number = parseInt(process.env.counter, 10);
		process.env.counter = `${(number += 1)}`;
		this.takeScreenshot(`${path.resolve(`${process.env.evidence}${process.env.folder}${process.env.fileName}`)}/${process.env.counter}_${process.env.testTitle}_${screenShotName}.png`);	
	   }
	

	waitForElementClose(elem) {
		browser.pause(1000);
		// browser.waitForVisible(`//div[@class='dataCaptureContainer loading']`, 5000, true);
		elem.waitForVisible(10000, true);
	}
}

module.exports = new commonCommands();
