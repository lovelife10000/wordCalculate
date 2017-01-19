var maxWordLen = 160; //字符总数
var str = ""; //用户输入的字符串
function countWord(textAreaDom, wordLenDisplayDom) {

    str = textAreaDom.val();    
    var inFactLen = 0; //实际的字符数
    for (var i = 0;i < str.length; i++) {

        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
            inFactLen++;
        } else {
            inFactLen += 2;
        }

    }

    if (inFactLen > maxWordLen * 2) {
        wordLenDisplayDom.html(0);
        $('.overflow').show();
        $('.overflow span').html(Math.floor((inFactLen - maxWordLen * 2) / 2));
        
    } else {
        wordLenDisplayDom.html(Math.floor((maxWordLen * 2 - inFactLen) / 2));
        $('.overflow').hide();
        $('.overflow span').html(0);

    }
}

$('textarea').bind('keyup', function() {
    countWord($('textarea'), $("#wordCheck"));
});

