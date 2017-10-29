Feature: register function Test
    注册功能测试。 
    负责人： zack
    时间： 2017-10-22

    Scenario: 两次输入密码不一致
    如果注册的时候，两次输入密码不一致，那么会有 密码不一致的提示
        Given 导航到注册页面
        When 在注册用户信息中填入注册信息
        Then 点击注册按钮，注册失败,得到错误提示信息。

    @email
    Scenario: email 格式不正确
        * 导航到注册页面
        When 注册信息中 email 输入"abc"
        Then 错误提示信息为"邮箱不合法。"
    
    Scenario: email 格式不正确
        Given 导航到注册页面
        When 注册信息中 email 输入"abc"
        Then 错误提示信息为"邮箱不合法。"

    
    Scenario: email 格式不正确
        Given 导航到注册页面
        When 注册信息中 email 输入"abcdsdefddds"
        Then 错误提示信息为"邮箱不合法。"

    Scenario: email 格式不正确
        Given 导航到注册页面
        When 注册信息中 email 输入"#$%&*(@ssd.com"
        Then 错误提示信息为"邮箱不合法。"

    @onlyrun
    Scenario Outline: 不同注册场景
        Given 导航到注册页面
        When 用户名输入"<username>",密码输入"<pass>",重复密码输入"<repass>",邮箱输入"<email>"
        Then 点击提交，应该收到"<tipmessage>"
        Examples:
        |username|pass|repass|email|tipmessage|
        |        |123 | 123  |123@123.com|信息不完整。|   
        # |imhello |1234|4321| 123@123.com|两次密码输入不一致。|
        # |imhello |1234|4321| 123@123.com|两次密码输入不一致。|

    
    

    