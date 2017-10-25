

let { defineSupportCode } = require('cucumber');

let assert = require('assert');

defineSupportCode(function ({ Given, When, Then }) {
    Given('用户{string} 密码{string}成功登录系统', function (string, string2) {
        this.driver.get("http://localhost:3000");
        this.driver.findElement({ css: "a[href='/signin']" }).click();
        this.driver.findElement({ css: "#name" }).sendKeys(string);
        this.driver.findElement({ css: "#pass" }).sendKeys(string2);
        return this.driver.findElement({ css: ".span-primary" }).click();
    });

    Then('导航到用户回复帖子界面', function () {
        return this.driver.get("http://localhost:3000/topic/59ec0dd89c94faea2b215a3d");
    });

    Then('回复贴子内容{string}', async function (string) {
        await this.driver.executeScript(function(){
            document.querySelector("#reply_form .CodeMirror-scroll").scrollIntoView();
        })
        let posttext = await this.driver.findElement({css:"#reply_form .CodeMirror-scroll"})
        posttext.click();
        return this.driver.actions().mouseMove(posttext).sendKeys(string).perform();
    });

    Then('点击回复，回复成功', function () {
        return this.driver.findElement({css:"#reply_form .submit_btn"}).click();
    });

    Then('点击提交按钮', function () {
        this.driver.findElement({css:".submit_btn"}).click();
    });

    Then('发布贴子，板块{string}，标题{string},内容{string}', async function (string, string2, string3) {
        let tab = string;
        switch (tab) {
            case "请选择":
                this.driver.findElement({ css: "#tab-value > option:nth-child(1)" }).click();
                break;
            case "分享":
                this.driver.findElement({ css: "#tab-value > option:nth-child(2)" }).click();
                break;
            case "问答":
                this.driver.findElement({ css: "#tab-value > option:nth-child(3)" }).click();
                break;
            case "招聘":
                this.driver.findElement({ css: "#tab-value > option:nth-child(4)" }).click();
                break;

            default:
                break;
        }
        this.driver.findElement({id:"title"}).sendKeys(string2);
        let textarea = await this.driver.findElement({css:".CodeMirror-scroll"});
        textarea.click();
        return this.driver.actions().mouseMove(textarea).sendKeys(string3).perform();
    });

    Then('导航到用户发帖界面', function () {
        return this.driver.findElement({ id: "create_topic_btn" }).click();
    });


    Given('导航到注册页面', function () {
        this.driver.get("http://localhost:3000");
        return this.driver.findElement({ xpath: "/html/body/div[1]/div/div/ul/li[5]/a" }).click();
    });
});