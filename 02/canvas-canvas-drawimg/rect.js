/**
 * Created by Administrator on 2016/10/7.
 */
function Rect(option){
    this._init(option);
}
Rect.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.strokeStyle = option.strokeStyle || 'red';
        this.fillStyle = option.fillStyle || 'yellow';
        this.rotateAngle = option.rotateAngle || 0;
        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
    },
    render: function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotateAngle);
        ctx.scale(this.scaleX,this.scaleY);

        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(0,0,this.w,this.h);

        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
        ctx.restore();
    }
}
