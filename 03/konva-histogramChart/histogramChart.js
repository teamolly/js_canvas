/**
 * Created by Administrator on 2016/10/9.
 */
function HistogramChart(option){
    this._init(option);
}

HistogramChart.prototype = {
    _init: function (option) {
        this.x = option.x;
        this.y = option.y;
        this.w = option.w;
        this.h = option.h;
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
        var rectWidth = this.w / this.data.length;
        this.data.forEach(function (item,index) {
            var rect = new Konva.Rect({
                x:(1/4+index)*rectWidth,
                y:0 -  item.value* self.h,
                width:rectWidth/2,
                height: item.value* self.h,
                fill:item.color,
                cornerRadius:20
            })
            self.picGroup.add(rect);
            var txt = item.value*100+'%';
            var text = new Konva.Text({
                x:(index)*rectWidth,
                y:0 -  item.value* self.h - 16,
                width:rectWidth,
                fontSize:16,
                fill:item.color,
                align:'center',
                text:txt
            })
            self.textGroup.add(text);
            var bottomText = new Konva.Text({
                x:(index)*rectWidth,
                y:10,
                width:rectWidth,
                fontSize:16,
                fill:item.color,
                align:'center',
                text:item.name,
                rotation:15
            })
            self.group.add(bottomText);
        })
    },
    addLayer: function (layer) {
        layer.add(this.group);
    },
    player: function () {
        var self = this;
        this.picGroup.getChildren().forEach(function (item,index){
            item.y(0);
            item.height(0);
            item.to({
                y:-self.data[index].value*self.h,
                height:self.data[index].value*self.h,
                duration:self.data[index].value*2
            })
        })
        this.textGroup.getChildren().forEach(function (item,index){
            item.y(0);
            item.to({
                y:-self.data[index].value*self.h - 16,
                duration:self.data[index].value*2
            })
        })
    }
}
