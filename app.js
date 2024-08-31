//偷了点小懒，把代码全部写在前端里了，不过笨笨是不会看到这个的吧？

// 初始化 EmailJS

(function () {
    emailjs.init({
        publicKey: "TYAd8zPmerB7SRssw",
    });
})();

let userinput = ''; // 保存用户输入的变量

function submitCode() {
    const code = document.getElementById('code').value;
    if (code === '0730') { // 密码校验
        document.getElementById('password').style.display = 'none';
        document.getElementById('instruction').style.display = 'block';
    } else {
        alert('密码不对哦~');
    }
}

function button1() { //了解说明文本
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('textinput').style.display = 'block';
}

function textinput() {
    userInput = document.getElementById('textinput').value; // 保存用户输入的内容
    document.getElementById('textinput').style.display = 'none';
    document.getElementById('reconfirm').style.display = 'block';
}

function button2() { //确认发送
    document.getElementById('reconfirm').style.display = 'none';
    document.getElementById('sending').style.display = 'block';
    confirmEmail()
}

function button3() { //了解说明文本
    document.getElementById('reconfirm').style.display = 'none';
    document.getElementById('textinput').style.display = 'block';
}

function confirmEmail() {
    const emailContent = userinput

    // 使用 EmailJS 发送邮件
    emailjs.send("service_sk7w43j", "template_fsrscsl", {
        message: emailContent,
        user_input: userinput
    })
        .then(function (response) {  //发送状态检查
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('sending').style.display = 'none';
            document.getElementById('end').style.display = 'block';

        }, function (error) {
            console.log('FAILED...', error);
            document.getElementById('sending').style.display = 'none';
            document.getElementById('reconfirm').style.display = 'block';
            alert('邮件发送失败，请重试。');
        });
}