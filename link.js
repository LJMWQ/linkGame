let allImg = [];
const MAX_X = 14;
const MAX_Y = 10;
let level = 1;
const life = 6;
const MAX_TIME = 200;
let tiemCount = MAX_TIME;//剩余时间
let hardCount = [];//难度系数

initData(level);

function initData (level) {
    $('.game-body').html('');
    initImg(level);
}
function initImg (level) {
    for (let i = 0; i < MAX_Y; i ++) {
        let oneRow = [];
        for (let j = 0; j < MAX_X; j ++) {
            oneRow[j] = getRandom(level);
            let $img = $('<img src="./0.jpeg" class="game-img"/>');
            console.log($img);
            $('.game-body').html('');
        }
        allImg[i] = oneRow;
    }
    
    console.log(allImg);
}
function getRandom (level) {
    return 1;
}


