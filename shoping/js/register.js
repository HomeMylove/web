window.onload = function() {

    var phone = document.querySelector('#phone');
    var message = document.querySelector('.check_phone');


    phone.onblur = function() {
        if (this.value.length == 0) {
            message.className = ''
            message.innerHTML = '请输入手机号'
        } else if (this.value.length != 11) {
            message.className = 'error'
            message.innerHTML = '<i class="error_icon"></i> 手机号码格式不正确'
        } else {
            message.className = 'success'
            message.innerHTML = '<i class="success_icon"></i> 手机号码格式正确'
        }
    }



    var pwd = document.querySelector('#pwd');
    var checkPwd = document.querySelector('.check_pwd');
    var pwd2 = document.querySelector('#check');
    var checkSame = document.querySelector('.check_same');

    pwd.onblur = function() {
        if (this.value.length == 0) {
            checkPwd.className = ''
            checkPwd.innerHTML = '输入6~16位的密码'
        } else if (this.value.length < 6 || this.value.length > 16) {
            checkPwd.className = 'error'
            checkPwd.innerHTML = '<i class="error_icon"></i> 密码长度不对'
        } else {
            checkPwd.className = 'success'
            checkPwd.innerHTML = '<i class="success_icon"></i> 密码长度可以的'
        }
    }

    pwd2.onblur = function() {
        if (this.value.length == 0 || pwd.value.length == 0) {
            checkSame.className = 'check_same'
            checkSame.innerHTML = ''
        } else if (this.value != pwd.value) {
            checkSame.className = 'error'
            checkSame.innerHTML = '<i class="error_icon"></i> 两次输入的密码不一致'
        } else {
            checkSame.className = 'success'
            checkSame.innerHTML = '<i class="success_icon"></i> 两次输入的密码一致'
        }
    }

}