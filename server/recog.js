const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const path = require('path');
var Jimp = require('jimp');
var rimraf = require("rimraf");

function save_img(img) {
    var base64Data = img.replace(/^data:image\/png;base64,/, "");
    var buff = Buffer.from(base64Data,'base64');
    Jimp.read(buff).then((image)=>{image.invert().resize(40,40).grayscale().write("./recog/out.png")});
}
async function recog_img() {
    const cmd = "python ./recog/yolov5/detect.py --weights ./recog/weights.pt --source ./recog/out.png --img-size=40 --conf 0.4 --project recog/ --name res --save-txt --save-conf";
    const { stdout, stderr } = await exec(cmd);
    return stderr;
}
async function post_process() {
    const im =  await Jimp.read('recog/res/out.png');
    return im.invert().resize(320,320);
}

async function get_result() {
    if (fs.existsSync('./recog/res/labels/out.txt')) {
        const res = await readFile('./recog/res/labels/out.txt','utf-8');
        return scaleBoundingBox(res);
    } else {
        console.log('could not recognize');
        return {found:false,l:-1,x:-1,y:-1,w:-1,h:-1,c:-1};
    }
}

function scaleBoundingBox(text) {
    const canvasSize = 320;
    let splits = text.split(' ');
    let l = String.fromCharCode(parseInt(splits[0])+97);
    let x = parseFloat(splits[1]) * canvasSize;
    let y = parseFloat(splits[2]) * canvasSize;
    let w = parseFloat(splits[3]) * canvasSize;
    let h = parseFloat(splits[4]) * canvasSize;
    let c = parseFloat(splits[5]) * 100;
    c = Math.round( (c + Number.EPSILON) * 100 )/100;
    console.log(`${l} ${x-(w/2)}px ${y-(h/2)}px ${w}px ${h}px ${c}%`);
    return {found:true,l:l,x:x-(w/2),y:y-(h/2),w:w,h:h,c:c};
}

module.exports =  async function recog(img) {
    save_img(img);
    const stderr = await recog_img();
    const resp =await get_result();
    //const im = await post_process();
    //const b = await im.getBase64Async(Jimp.AUTO);
    rimraf.sync('./recog/res');
    return resp;

}