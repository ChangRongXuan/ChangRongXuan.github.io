var bookdata = "奧菈在草地嬉戲：拉娜・德芮詩集,拉娜・德芮,79折593元,累積超過15億人次追捧的創作能量，寄愛與生命於詩的文學昇華——「迷幻復古女伶」拉娜・德芮（Lana Del Rey）首本全創作影像詩集！,https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/75/0010917565.jpg&v=620e31bc&w=340&h=340 ;交陪美學論：當代藝術面向近未來神祇,龔卓軍,79折435元,五百年前，西方社會幾乎所有人都擁有對神或魔性力量的信仰，至今這種信仰只是眾多選項之一。五百年後，經過西方和日本的殖民、政權交替，臺灣民間信仰與廟宇文化中的交陪組織，至今仍維持活力不墜，影響著庶民社會的文化藝術表現語彙。,https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/092/01/0010920133.jpg&v=62345f31&w=340&h=340 ;古典音樂之愛：指揮家的私房聆聽指南,約翰．莫切里,79折277元,為何聆聽古典音樂？如何從聆賞體驗中得到最多收穫？在本書中，指揮家約翰．莫切里以畢生的經驗、淵博的知識、深刻的理解，以及令人感同身受的鑑賞力，回答了這些問題。,https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/091/99/0010919952.jpg&v=62330dd0&w=340&h=340"

// 小概念: 換行會有影響，文字顏色一樣代表是同一個字串 
// 分號後空一格會有影響 

// step1:把3本書分開  用split轉成陣列
var temp=bookdata.split(";")

// step2:把每一本書資料萃取出來
var books=[]
for (var i=0;i<temp.length;i++){

    var splitdata = temp[i].split(",")
    console.log(splitdata)
  
    var discountdata = 
    splitdata[2].split("折")

    var discount=
    discountdata[0]/100
    // 這邊算是不嚴謹，但因為系統會自動把字串轉為number以計算/100

    var discountprice= parseInt(
    discountdata[1].split("元")[0])
    // 277元用元分割後的第0個->277，parseInt把字串變數字
    // 1*() 等同於 parseInt()的效果

    books[i]={
        name: splitdata[0],
        author:splitdata[1],
        discount: discount,
        price: 
        Math.ceil(discountprice/discount),
        intro: splitdata[3], 
        photo: splitdata[4]
    }

    
    console.log(books[i])


}

