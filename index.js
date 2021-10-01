function getEl(id) {
    return document.getElementById(id);
}

const canvas = getEl('canvas'),
    ctx = canvas.getContext('2d'),
    leftBtn = getEl('left'),
    rightBtn = getEl('right'),
    upBtn = getEl('up'),
    downBtn = getEl('down');


let posX = canvas.width / 2,
    posY = canvas.height / 2;

var activeBtns = [false, false, false, false];

function setListeners(el, idx) {
    el.addEventListener('mousedown', () => {
        activeBtns[idx] = true;
        draw(calculateDirection());
    });

    el.addEventListener('mouseup', () => {
        activeBtns[idx] = false;
    });
}

function calculateDirection() {
    let incrX = 0, incrY = 0;
    var [left, right, up, down] = activeBtns;

    if (left) incrX--;
    if (right) incrX++;
    if (up) incrY--;
    if (down) incrY++;

    return [incrX, incrY];
}

function draw([incrX, incrY]) {
    ctx.beginPath();
    ctx.moveTo(posX, posY)        
    ctx.lineTo(posX + incrX, posY + incrY)
    ctx.stroke();
    
    posX += incrX;
    posY += incrY;
}

[leftBtn, rightBtn, upBtn, downBtn].forEach((btn, i) => setListeners(btn, i));