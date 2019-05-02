$("#sideBtn").hide();
$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 150) {
        $("#sideBtn").fadeIn(800);
    }
    else {
        $("#sideBtn").fadeOut(500);
    }
});
$("#sideBtn").click(function () {
    $("body , html").animate({
        scrollTop: 0
    }, 300);
});
// --------------append------------------------
$(function () {
    var postArray =
        [{
            h2: "懶人養生術",
            category: "1809",
            date: "2018年09月10日(一)",
            p: "<p>人人都需要健康，但是大多數人都不健康，為什麼呢？其實基本的養生，大家都懂。然而許多人明知該運動、該注意飲食、該作息正常、該放鬆心情，卻怎麼也做不到。這其實不完全是你們的錯，現代社會步調快、工作壓力大、物質誘惑又多，常常無形中綁架我們的生活習慣。</p><p>懶人樹致力於找出輕鬆又簡單的養生方法，例如：懶人運動法、懶人食譜、懶人調理包、養生資訊懶人包等，及各種安全、營養又方便的食物，希望透過這些努力，讓大家都能輕鬆愉快擊敗惡習，找回健康自主權。</p>",
            img: "images/blog1.png",
        },
        {
            h2: "開幕典禮和新書發表順利完成",
            category: "1702",
            date: "2017年2月12日(日)",
            p: "<p>開幕典禮和新書發表順利結束了！感謝各位親朋好友不畏寒風蒞臨小店。也感謝活動過程中幫助我們的阿姨叔叔、我的朋友、我的家人。<br>因為你們的辛勞。活動才能這麼圓滿。<br>謝謝你們。相信經過大家的加持生意一定能蒸蒸日上！<br>順帶一提，懶人樹唯一僅有的無毒空間購物原木展示架，讓您疼惜嘴巴時也請你不要忘記您的鼻子。</p>",
            img: "images/blog2.jpg"
        },
        {
            h2: "懶人樹與小葉欖仁",
            category: "1808",
            date: "2018年8月9日(三)",
            p: "<p>春三月，此謂發陳，天地俱生，萬物以榮，夜臥早起，廣步於庭，被髮緩形，以使志生，生而勿殺，予而勿奪，賞而勿罰，此春氣之應養生之道也。逆之則傷肝，夏為寒變，奉長者少。夏三月……陰陽四時者，萬物之終始也，死生之本也，逆之則災害生，從之則苛疾不起，是謂得道。《黃帝內經．四氣調神大論》<br>在這條車水馬龍、塵霾飛揚的路上，懶人樹門前是唯一有行道樹的地方，這棵小葉欖仁隨時光流轉展現出不同的姿態。春三月，新芽吐露；夏三月，枝繁葉茂；秋三月，落葉紛飛；冬三月，落葉歸根。四時景緻，提醒行色匆匆的人們，停下腳步去感受季節的交替，觀照自己的身心。<br>小葉欖仁原本有三棵，但之前來隔壁租屋的店家，嫌他們門前那棵擋了自家招牌，便把它砍了。樹大擋招牌，這是一定的，但為了這樣去砍一棵可以遮蔭乘涼、淨化空氣的好鄰居，我們更不願意。於是將店名取欖仁樹的諧音，把這棵樹當成另類的招牌，希望借它的美麗，吸引人駐足。因為環境保護是懶人樹另一個重要的理念。</p>",
            img: "images/blog3.jpg"
        }
        ];

    var postCount = postArray.length;
    for (let $i = 0; $i < postCount; $i++) {
        $(".postCard").append(
            `<div class="main_post ${postArray[$i].category}" data-n="${[$i]}">
    <div class="postHead">
        <h2 class="blog"><span>${postArray[$i].h2}</span></h2>
        <span class="date">${postArray[$i].date}</span>
    </div>
    <div class="postBody">
        ${postArray[$i].p}
        <img src="${postArray[$i].img}" alt="">
    </div>
    <div class="postFooter flex">
        <a href=""><img src="images/facebook-logo-button.svg" alt=""></a> 
        <a href=""><img src="images/instagram-logo.svg" alt=""></a> 
    </div>
</div>`
        )
    };
});
// ---------------filiter---------------------
$(function () {
    $(".main_post:first-of-type").fadeIn().siblings().hide();
});

$(".listCheck").click(function () {
    let listType = $(this).attr("data-list");
    console.log(listType);
    $(".main_post").hide();
    if (listType.length == 0) {
        $("Btn").hide()
        $(".noPost").fadeIn(500)
    } else {
        $(listType).fadeIn(500);
        $("Btn").show();
    };
    if (listType == "all") {
        $(".noPost").hide();
        $("Btn").show();
        $(".main_post").fadeIn(500);
    }
});
$(function () {
    $("#previous").click(function () {
        if ($(`.main_post:visible`).next() == $(`.main_post:visible`)) {
            $("#previous").style.cursor = "auto";
        } else {
            $(`.main_post:visible`).next().fadeIn().siblings().hide();
        }
    });
    
    $("#next").click(function () {
        if ($(`.main_post:visible`).prev() == $(`.main_post:visible`)) {
            $("#previous").style.cursor = "auto";
        } else {
            $(`.main_post:visible`).prev().fadeIn().siblings().hide();
        }
    });
});