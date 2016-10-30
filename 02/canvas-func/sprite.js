/**
 * Created by Administrator on 2016/10/7.
 */
function Sprite(json){
    this._init(json);
}
Sprite.prototype = {
    _init: function (json) {
        this._imgSrc = json.imgSrc;
        this._dirIndex = 0;
        this.sliceW = json.sliceW || 40;
        this.sliceH = json.sliceH || 65;
        this.x0 = json.x0 = json.x0 === 0 ? 0 : (json.x0 || 100);
        this.y0 = json.y0 = json.y0 === 0 ? 0 : (json.y0 || 100);
        this.w = json.w || 40;
        this.h = json.h || 65;
        this.fps = json.fps || 10;
    },
    render: function (ctx) {
        var img = new Image();
        img.src = this._imgSrc;
        var self = this;
        img.onload = function () {
            var frameIndex = 0;
            setInterval(function () {
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                console.log(ctx.canvas.width);
                ctx.drawImage(img,
                    frameIndex*40,self._dirIndex*65,
                    self.sliceW,self.sliceH,
                    self.x0,self.y0,
                    self.w,self.h
                );
                frameIndex++;
                frameIndex %= 4;
            },1000/self.fps);
        }
    },
    changeDir:function(dir){
        switch(dir){
            case 'forward':
                this._dirIndex = 0;
                break;
            case 'left':
                this._dirIndex = 1;
                break;
            case 'right':
                this._dirIndex = 2;
                break;
            case 'back':
                this._dirIndex = 3;
                break;
        }
    }
}