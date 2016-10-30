function Cencir(option){
    this._init(option);
}
Cencir.prototype = {
    _init: function (option) {
        this.x = option.x;
        this.y = option.y;
        this.innerRadius = option.innerRadius;
        this.outerRadius = option.outerRadius;
        this.innerStyle = option.innerStyle;
        this.outerStyle = option.outerStyle;
        this.innerOpacity = option.innerOpacity;
        this.outerOpacity = option.outerOpacity;
        this.text = option.text;

        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        })
        var innerCircle = new Konva.Circle({
            x:0,y:0,
            radius:this.innerRadius,
            fill:this.innerStyle,
            opacity:this.innerOpacity
        })
        var outerRing = new Konva.Ring({
            x:0,y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            fill:this.outerStyle,
            opacity:this.outerOpacity
        })
        var innerText = new Konva.Text({
            x:-this.outerRadius,
            y:-9,
            width:this.outerRadius*2,
            align:'center',
            fontSize:18,
            fontFamily:'微软雅黑',
            text:this.text
        })
        this.group.add(innerCircle);
        this.group.add(outerRing);
        this.group.add(innerText);
    },
    render: function (layer) {
        layer.add(this.group);
    }
}