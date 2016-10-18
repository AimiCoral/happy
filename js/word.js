var text="我们从相识到相知，有各种各样的回忆。| "+ " "+"从8年前开始因找到同年同月同日生|的人而喜悦。到现在成无话不说的好朋| "+ " "+"友、好知己。不知不觉已在心中占|"+ "        "+"据了不少的份量。| "+ "            "+"祝我们生日快乐，|"+ "                "+"永远快乐。| "+ "                    "+"zx"
 var arr = text.split("|");
 var line = 0;
 var timer = 0;
 var i = 0;
 var newText = "";
 function Typing(id) {
    var cavas = document.getElementById(id);
    if (cavas == null) {
        return false;
    }
    scrollit();
 }
 function scrollit() {
    newText = arr[line].slice(0, i++) + "_";
    var context = cavas.getContext("2d");
    // 擦除文字
    context.clearRect(0, 20 + line * 30, 600, 20 + 60 * (line + 1));
    var gradient = context.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    context.fillStyle = gradient;
    context.font = "20px Verdana";
    context.textBaseline = "hanging";
    if (i > arr[line].length) {
        newText = arr[line].slice(0, arr[line].length);
        context.fillText(newText, 30, 20 + 30 * line);
        // 换行
        i = 0;
        line++;
        if (line < arr.length) {
            clearTimeout(timer);
            scrollit();
        };
    } else {
        context.fillText(newText, 30, 20 + 30 * line);
        timer = setTimeout(scrollit, 200);
    }
 }

//方案二
// (function($) {
//     $.fn.typewriter = function() {
//         this.each(function() {
//             var $ele = $(this), str = $ele.html(), progress = 0;
//             $ele.html('');
//             var timer = setInterval(function() {
//                 var current = str.substr(progress, 1);
//                 if (current == '<') {
//                     progress = str.indexOf('>', progress) + 1;
//                 } else {
//                     progress++;
//                 }
//                 $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
//                 if (progress >= str.length) {
//                     clearInterval(timer);
//                 }
//             }, 75);
//         });
//         return this;
//     };
// })(jQuery);

// function adjustCodePosition() {
//     $('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
// }