/**
 * Created by Administrator on 2016/10/10.
 */
function PieChart(option){
    this._init(option);
}
PieChart.prototype = {
    _init: function (option) {
        this.x = option.x;
        this.y = option.y;
        this.r = option.r;
        this.data = option.data;

        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        })
        this.picGroup = new Konva.Group({
            x:0,
            y:0
        })
        this.textGroup = new Konva.Group({
            x:0,
            y:0
        })
        this.group.add(this.picGroup);
        this.group.add(this.textGroup);

        var self = this;
        var tempAngle = -90;
        this.data.forEach(function (item,index) {
            var angle = item.value*360;
            var wedge = new Konva.Wedge({
                x:0,
                y:0,
                radius:self.r,
                angle:angle,
                fill:item.color,
                rotation:tempAngle
            })
            self.picGroup.add(wedge);

            var txt = item.value*100+'%';
            var text = new Konva.Text({
                x:(self.r + 20)*Math.cos(Math.PI/180*(tempAngle + angle/2)),
                y:(self.r + 20)*Math.sin(Math.PI/180*(tempAngle + angle/2)),
                fontSize:16,
                align:'right',
                fill:item.color,
                text:txt
            })
            if((tempAngle + angle/2)>90 && (tempAngle + angle/2) < 270){
                text.x(text.x()-text.getWidth());
            }
            self.textGroup.add(text);
            tempAngle += angle;
        })
        this.ani_index = 0;
    },
    addLayer:function(layer){
        layer.add(this.group);
    },
    player: function () {
        var self = this;
        if(this.ani_index == 0){
            this.picGroup.getChildren().forEach(function (item,index) {
                item.angle(0);
            })
        }
        var item = this.picGroup.getChildren()[this.ani_index];
        item.to({
            angle:self.data[self.ani_index].value * 360,
            duration:self.data[self.ani_index].value * 3,
            onFinish: function () {
                self.ani_index++;
                if(self.ani_index > self.data.length-1){
                    return self.ani_index = 0;
                }
                self.player();
            }
        })
    }

      
}