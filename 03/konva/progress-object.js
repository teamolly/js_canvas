/**
 * Created by Administrator on 2016/10/8.
 */
function ProgressBar(option){
    this._init(option);
}
ProgressBar.prototype = {
    _init: function (option) {
        this.x = option.x || 100;
        this.y = option.y || 100;
        this.w = option.w || 100;
        this.h = option.h || 50;
        this.fillStyle = option.fillStyle || 'red';
        this.strokeWidth = option.strokeWidth || 4;
        this.strokeStyle = option.strokeStyle || 'yellow';
        this.cornerRadius = option.cornerRadius || 20;
        this.opacity = option.opacity || 1;
        this.duration = option.duration || 2;
        this.val = option.val;
        this.easeWay = option.easeWay

        var innerRect =  new Konva.Rect({
            x:this.x, y:this.y,
            width:this.w,height:this.h,
            fill:this.fillStyle,
            cornerRadius:this.cornerRadius,
            opacity:this.opacity,
            id:'innerRect'
        })
        var outRect = new Konva.Rect({
            x:this.x, y:this.y,
            width:8*this.w,height:this.h,
            stroke:this.strokeStyle,
            cornerRadius:this.cornerRadius,
            strokeWidth:this.strokeWidth,
            opacity:1
        });
        var group = new Konva.Group({
            x:0,y:0
        })
        this.group = group;
        this.group.add(innerRect);
        this.group.add(outRect);
    },
    render: function (layer) {
        layer.add(this.group);
        layer.draw();
    },
    animation: function () {
        if(this.val > 1){
            this.val = this.val/100;
        };
        var width = this.w * 8 *this.val;
        var innerRect = this.group.findOne('#innerRect');
        innerRect.to({
            width:width,
            duration:this.duration,
            easing:this.easeWay
        })
    }


}
