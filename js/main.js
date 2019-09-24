document.write("<script src='../js/cookie.js'></script>")
/*top.jpg的滑动*/
var header = document.querySelector('.header');
var body = document.body;
body.addEventListener("wheel",myWheel);
function myWheel(){
    //header.style.backgroundPosition = '0 '+'0';
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }
        if (delta)
            handle(delta);
};
function handle(delta) {
    var key = header.style.backgroundPositionY;
    key = parseInt(key);
    if (delta < 0) {
        if(header.style.backgroundPositionY != '-360px')
        {
            header.style.backgroundPositionY = key - 40 +'px';
        }
    }
    else {
        if(header.style.backgroundPositionY != '-120px')
        {
            if(window.pageYOffset != 0)
            header.style.backgroundPositionY = key + 40 +'px';
        }
    }
}



/*实现网页往下滑动出现特效 */
// 获取浏览器可见区域高度
var window_height = document.documentElement.clientHeight;
// 用户手动修改浏览器可见区域高度时修改变量
window.onresize = function() {
    window_height = document.documentElement.clientHeight;
};
// 获取所需效果元素
var My_dream = document.getElementsByClassName('dream');
// 鼠标滚轮滚动执行方法
window.onscroll = function() {
    // 获取鼠标滚轮滚动距离
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 循环类dream
    for (var k = 0; k < My_dream.length; k++) {
        if (_scrollTop >= getOffsetTop(My_dream[k]) - window_height && _scrollTop <= getOffsetTop(My_dream[k])) {
            My_dream[k].style.animationName = My_dream[k].dataset.animate.split(',')[0];
            My_dream[k].style.animationDuration = My_dream[k].dataset.animate.split(',')[1];
            My_dream[k].style.animationTimingFunction = My_dream[k].dataset.animate.split(',')[2];
        }
    }
};
// 判断元素父集是否有已定位元素
function getOffsetTop(ele) {
    var rtn = ele.offsetTop;
    var o = ele.offsetParent;
    while (o != null) {
        rtn += o.offsetTop;
        o = o.offsetParent;
    }
    return rtn;
}
// 滚动条等于0时执行第一屏效果
function my_animation() {
    var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 效果方法
    for (var k = 0; k < My_dream.length; k++) {
        if (_scrollTop >= getOffsetTop(My_dream[k]) - window_height && _scrollTop <= getOffsetTop(My_dream[k])) {
            My_dream[k].style.animationName = My_dream[k].dataset.animate.split(',')[0];
            My_dream[k].style.animationDuration = My_dream[k].dataset.animate.split(',')[1];
            My_dream[k].style.animationTimingFunction = My_dream[k].dataset.animate.split(',')[2];
        }
    }
}
my_animation();


/*实现鼠标点击出现富强民主文明字样*/
var fnTextPopup = function (arr, options) {
    // arr参数是必须的
    if (!arr || !arr.length) {
        return;    
    }
    // 主逻辑
    var index = 0;
    document.documentElement.addEventListener('click', function (event) {
        var x = event.pageX, y = event.pageY;
        var eleText = document.createElement('span');
        var color = ['burlywood','aqua','crimson','yellowgreen','deeppink','red','blue','rgb(20,20,20)']
        var random = Math.ceil(Math.random() * 7);
        eleText.className = 'text-popup';
        this.appendChild(eleText);
        eleText.style.color = color[random];
        if (arr[index]) {
            eleText.innerHTML = arr[index];
        } else {
            index = 0;
            eleText.innerHTML = arr[0];
        }
        // 动画结束后删除自己
        
        eleText.addEventListener('animationend', function () {
            eleText.parentNode.removeChild(eleText);
        });
        // 位置
        eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
        eleText.style.top = (y - eleText.clientHeight) + 'px';
        // index递增
        index++;
    });    
};

fnTextPopup(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']);

// 判断PC
function isPc(){
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    var flag = true;
    for(var i=0;i<Agents.length;i++){
        if(userAgentInfo.indexOf(Agents[i])>0){
            flag = false;
            break;
        }
    }
    return flag;
}

if(!isPc()){
    var body = document.body;
    var containerFluid = document.querySelector('.container-fluid');
    var textCon = document.querySelectorAll('.text_con');
    var imgCon = document.querySelectorAll('.img_con_1');
    var label = document.querySelectorAll('label');
    containerFluid.style = 'width: 1040px;';
    for(var i=0 ; i<imgCon.length ; i++){
        imgCon[i].style = 'font-size:23px;';
    }
    for(var i=0 ; i<textCon.length ; i++){
    textCon[i].style = 'font-size:23px;';
    }
    for(var i = 0; i<label.length; i++){
        label[i].style = 'width:51px;'
    }
}else if(isPc()){
    document.write("<script type=\"text/javascript\" src=\"js/mouseEffects.js\"></script>");
}

var btn = document.querySelector('button');
var form = document.querySelector('form');
btn.addEventListener('click',function(){
    var stuId = document.querySelector('#stuId').value;
    var stuName = document.querySelector('#stuName').value;
    if(stuId.length>12||stuId.length<8){
        alert('学号输入错误，请重新检查！');
        form.action = 'javascript:;';
    }else if(stuName.length>3||stuName.length<2){
        alert('姓名在2-3位之间，请重新输入！');
        form.action = 'javascript:;';
    }else if(stuName.length>=2&&stuName.length<=3&&stuId.length==12){
        form.action = '/gift/letter';
        this.className = 'btn btn-info btn-block';
        this.disabled = 'disabled';
        this.innerHTML = 'right';
        var requestURL = 'http://192.168.1.111:10086/CORS.student/checkStatus';
        function createRequest(){
            try{
                //创建ajax引擎对象
                request = new XMLHttpRequest();
            } catch (tryMS) {
            try{
                request = new ActiveXObject("Msxm12.XMLHTTP");
            } catch (otherMS) {
                try {
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (failed) {
                    request = null;
                }
            }
            }
            return request;
        }
        createRequest();
        request.open('POST', requestURL);
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        request.send("stuId="+stuId+"&name="+stuName);
        //复写onreadystatechange函数
        request.onreadystatechange=function(){
            //判断request状态码
            if(request.readyState==4){
                //判断响应状态码
                if(request.status == 200){
                    //获取响应内容
                    var result=request.responseText;
                    //处理响应内容
                    let tempResult = JSON.parse(result);
                    if(tempResult != undefined && tempResult.status ){
                        Cookies.set('stuId',stuId)
                        alert("即将进入写信界面！");
                        window.open('../write.html');
                    
                    }else if(tempResult == undefined || !(tempResult.status)){
                        alert(tempResult.error);
                    }
                }
            }
        }
    }
})