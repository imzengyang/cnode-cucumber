
let { defineSupportCode } = require('cucumber')
const report = require('multiple-cucumber-html-reporter');

let path = require('path')

defineSupportCode(function ({ Before, After }) {
    Before(async function () {
        await this.driver.manage().window().maximize();
    })

    After(async function () {
        await this.driver.quit();
    })
})


defineSupportCode(function ({ AfterAll, BeforeAll }) {

    // AfterAll(function () {
    //     let reporterdirPath = path.join(__dirname, "../report")
    //     console.log("reportDir : ", reporterdirPath)

    //     report.generate({
    //         jsonDir: "/Users/zack-zhao/Desktop/20171029/cnode-cucumber/report",
    //         reportPath: "/Users/zack-zhao/Desktop/20171029/cnode-cucumber/report",
    //         metadata: {
    //             browser: {
    //                 name: 'chrome',
    //                 version: '62'
    //             },
    //             device: 'mac',
    //             platform: {
    //                 name: 'Mac',
    //                 version: '10.12.6'
    //             }
    //         }
    //     });

    //     return Promise.resolve();
    // })
})