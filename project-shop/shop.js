// 首頁大輪播牆
        
    let nowPage = 0 ; //預設什麼都沒按起始位置在[0]

    $('.slider-dots-index li').eq(0) //預設圓點[0]為深灰色
        .css("background", "gray")
        .siblings()
        .css("background", "rgb(209, 209, 209)");


    // 點按哪個圓形就移動照片 + 變色
    $(".slider-dots-index li").click(function () {
        console.log(nowPage);
        nowPage = $(this).index() ;
        trainmove();
    });

    // 往後箭頭
    $('.arrow-right-index').click(function(){
        nowPage++;
        console.log(nowPage);
        trainmove();
    })

    // 往前箭頭
    $('.arrow-left-index').click(function(){
        nowPage--;
        trainmove();
    })



// 這邊壞掉了 Q ___ Q 

    // 火車移動公式
    function trainmove(){
        // 每次移動1152  第一次位置是在-2082
            // const moveX = -2104 + (nowPage) * -1152 + "px";
            // const moveX = -2082 + (nowPage) * -1139 + "px";

            // const moveX = -1200 + (nowPage) * -1139 + "px";
            const moveX = -1200 + (nowPage) * -2020 + "px";
            $("ul.train-index").css('transition','.5s ease').css("transform", `translateX(${moveX})`);
            $('.slider-dots-index li')
                .eq(nowPage)
                .css("background", "gray")
                .siblings()
                .css("background", "rgb(209, 209, 209)");
        }


    function trainmoveWithout(){
        const moveX = -2082 + (nowPage) * -2020  + "px";
        // const moveX = -1200 + (nowPage) * -2020  + "px";
        $("ul.train-index").css("transition", "none").css("transform", `translateX(${moveX})`);

        // nowPage = 0;
        $('.slider-dots-index li')
            .eq(nowPage)
            .css("background", "gray")
            .siblings()
            .css("background", "rgb(209, 209, 209)");
    }

    // 事件監聽器
    $("ul.train-index").on("transitionend", function(){
            console.log('transition end',nowPage);
            if(nowPage>=4){
                nowPage = 0;
                trainmoveWithout();
            }

            if(nowPage<= -1){
                nowPage = 3;
                trainmoveWithout();
            }
        })




// 內文輪播牆：左右箭頭滑動的carousel（＋箭頭會消失）

        // 初始狀態往左arrow隱藏，往右arrow保留
        $(".arrow-left").css("visibility","hidden");
        $(".arrow-left-2").css("visibility","hidden");
        
        $(".arrow-right").css("visibility","visible");
        $(".arrow-right-2").css("visibility","visible");

            $(".arrow-right").click(function () {

                if($("div.train").position().left > -545){
                const k = $("div.train").position().left - 545 + "px"; //紀錄現有x位置
                // 火車移動一個段落
                $("div.train").css("transform", `translateX(${k})`);
                $(".arrow-left").css("visibility","visible");
                }else{
                // 火車移動一個段落
                $("div.train").css("transform", `translateX(-990px)`);
                $(".arrow-right").css("visibility","hidden");
                }

            });

            $(".arrow-right-2").click(function () {

                if($("div.train-2").position().left > -545){
                const k = $("div.train-2").position().left - 545 + "px"; //紀錄現有x位置
                // 火車移動一個段落
                $("div.train-2").css("transform", `translateX(${k})`);
                $(".arrow-left-2").css("visibility","visible");
                }else{
                // 火車移動一個段落
                $("div.train-2").css("transform", `translateX(-990px)`);
                $(".arrow-right-2").css("visibility","hidden");
                }

            });


            $(".arrow-left").click(function () {
            
            if($("div.train").position().left > -990 ){
                
                // 火車移動一個段落
                let k = $("div.train").position().left + 545 + "px"; //紀錄現有x位置
                $("div.train").css("transform", `translateX(${k})`);
                $(".arrow-right").css("visibility","visible");
                $(".arrow-left").css("visibility","hidden");

            }else{
                $("div.train").css("transform", `translateX(-545px)`);
                $(".arrow-right").css("visibility","visible");
            }

            });


            $(".arrow-left-2").click(function () {
            
            if($("div.train-2").position().left > -990 ){
                
                // 火車移動一個段落
                let k = $("div.train-2").position().left + 545 + "px"; //紀錄現有x位置
                $("div.train-2").css("transform", `translateX(${k})`);
                $(".arrow-right-2").css("visibility","visible");
                $(".arrow-left-2").css("visibility","hidden");

            }else{
                $("div.train-2").css("transform", `translateX(-545px)`);
                $(".arrow-right-2").css("visibility","visible");
            }

            });




// 前言灰底小輪播牆
let nowPageforeHead = 0 ; //預設什麼都沒按起始位置在[0]

$('.slider-dots-forehead li').eq(0) //預設圓點[0]為深灰色
    .css("background", "gray")
    .siblings()
    .css("background", "rgb(209, 209, 209)");


// 點按哪個圓形就移動照片 + 變色
$(".slider-dots-forehead li").click(function () {
    nowPageforeHead = $(this).index() ;
    trainmove_forehead();
});

// 往後箭頭
$('.arrow-r-forehead').click(function(){
    nowPageforeHead++;
    trainmove_forehead();
})

// 往前箭頭
$('.arrow-l-forehead').click(function(){
    nowPageforeHead--;
    trainmove_forehead();
})


// 共用finction: 火車移動到x的位置

// nowPage因為是全域變數，所以就算沒寫在function()內也沒關係，沒放呼叫也不要放喔
// 全域變數可以算是公共財，大家都會共用+影響它
function trainmove_forehead(){
    const moveX_forehrad = (nowPageforeHead) * -290 -580 + "px";
    $("div.train-forehead").css('transition','.5s ease').css("transform", `translateX(${moveX_forehrad})`);
    $('.slider-dots-forehead li')
        .eq(nowPageforeHead)
        .css("background", "gray")
        .siblings()
        .css("background", "rgb(209, 209, 209)");
}


function trainmoveWithout_forehead(){
    const moveX_forehrad = (nowPageforeHead) * -290 -580 + "px";
    $("div.train-forehead").css("transition", "none").css("transform", `translateX(${moveX_forehrad})`);

    // nowPage = 0;
    $('.slider-dots-forehead li')
        .eq(nowPageforeHead)
        .css("background", "gray")
        .siblings()
        .css("background", "rgb(209, 209, 209)");
}



// 事件監聽器，當偵測到A動作，自動執行B動作(連帶效應)
// 這邊的前提是 一定要有transition的動作 才能偵測到end
$("div.train-forehead").on("transitionend", function(){
    console.log('transition end',nowPageforeHead);
    if(nowPageforeHead>=5){
        nowPageforeHead = 0;
        trainmoveWithout_forehead();
    }

    if(nowPageforeHead<= -2){
        nowPageforeHead = 3;
        trainmoveWithout_forehead();
    }
})
