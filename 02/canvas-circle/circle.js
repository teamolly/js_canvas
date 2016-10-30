/**
 * Created by Administrator on 2016/10/7.
 */
function Circle(option){
    this._init(option);
}
Circle.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.r = option.r || 100;
        this.startAngle = option.startAngle || -Math.PI/2;
        this.endAngle = option.endAngle || -Math.PI/2;
        this.direction = option.direction || false;//flase 表顺时针转动
        this.scaleX = option.scaleX;
        this.scaleY = option.scaleY;
        this.rotateAngle = option.rotateAngle;
        this.fillStyle = option.fillStyle;
        this.strokeStyle = option.strokeStyle;
    },
    render: function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotateAngle);
        ctx.scale(this.scaleX,this.scaleY);
        ctx.moveTo(0,0);
        ctx.arc(0,0,this.r,this.startAngle,this.endAngle,this.direction);
        ctx.closePath();// 画圆弧所必须的三条语句；
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
        ctx.restore();
    }
}