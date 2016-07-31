var INTERVAL = 4000; //每隔4s图片刷新一次
var index = 1;
var setIntervalId = setInterval(function () {
    index ++;
    if (index === 4) {
        index = 1;
    }
   changeImg(index);
}, INTERVAL);

$('i').bind('click', function (event) {
    clearInterval(setIntervalId);//清除定时器
    var id = $(event.target).attr('id');
    changeImg(id);
});
$('img').hover(function () {
    //滑入清除定时器
    clearInterval(setIntervalId);
}, function () {
    //滑出重置定时器
    setIntervalId = setInterval(function () {
        index ++;
        if (index === 4) {
            index = 1;
        }
       changeImg(index);
    }, INTERVAL);
});

function changeImg (index) {
    var img = $('img');
    img.attr('src', '../imgs/' + index + '.jpg');
    $('#' + index).attr('style', 'color:rgb(209, 209, 209);');
    $('#' + index).siblings('i').attr('style', 'color:#fff;');//siblings()是批量处理
}