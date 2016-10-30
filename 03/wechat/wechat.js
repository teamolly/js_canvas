/**
 * Created by Administrator on 2016/10/10.
 */
var sceneBuilders = [sceneHTML5,sceneCSS3,sceneJSCRIPT];
var sceneIndex = 0;
function sceneHTML5(option){
    this._init(option);
}
function sceneCSS3(option){
    this._init(option);
}
function sceneJSCRIPT(option){
    this._init(option);
}
addStageEvent();
function addStageEvent(){
    var startY = 0,endY = 0;
    stage.on('contentMousedown contentTouchstart', function (e) {
        if(e.type == 'contentMousedown'){
            startY = e.evt.screenY;
        }
        else{
            startY = e.evt.touches[0].screenY;
        }
    })

    stage.on('contentMousemove contentTouchmove', function (e) {
        if(e.type == 'contentMousedown'){
            endY = e.evt.screenY;
        }
        else{
            endY = e.evt.touches[0].screenY;
        }
    })
    stage.on('contentMouseup contentTouchend', function (e) {
        if(startY > endY){
            sceneIndex = ++sceneIndex > sceneBuilders.length-1 ? sceneBuilders.length-1:sceneIndex;
        }
        else{
            sceneIndex = --sceneIndex < 0 ? 0 :sceneIndex;
        }
    })










/*
function addStageEvent() {
    var startY  = 0;
    var endY = 0;
    stage.on('contentMousedown contentTouchstart', function( e ) {
        if( e.type == 'contentMousedown' ) {
            // console.log(e.evt.screenX + ' ' +  e.evt.screenY);
            startY = e.evt.screenY;

        }else if( e.type == 'contentTouchstart'){
            // console.log(e.evt.touches[0].screenX + ' ' + e.evt.touches[0].screenY);
            startY = e.evt.touches[0].screenY;
        }
        // console.log(e);
    });

    stage.on('contentMousemove contentTouchmove', function( e ) {
        if( e.type == 'contentMousemove' ) {
            // console.log(e.evt.screenX + ' ' +  e.evt.screenY);
            endY = e.evt.screenY;
        }else if( e.type == 'contentTouchmove') {
            // console.log(e.evt.touches[0].screenX + ' ' + e.evt.touches[0].screenY);
            endY = e.evt.touches[0].screenY;
        }
        // console.log(e);
    });

    stage.on('contentMouseup contentTouchend', function( e ) {
        if( endY > startY ) {
            //把当前执行场景的索引-1
            //下滑动 执行上一个场景 的play()
            sceneIndex = sceneIndex <= 0 ? 0 : sceneIndex -1;
        }else {
            //执行下一个场景的 play();
            //把当前执行场景的索引 +1
            // 0 1 2    1 2   length=3
            sceneIndex = sceneIndex >= sceneBuilders.length-1 ? sceneBuilders.length-1 : sceneIndex +1;
        }

        sceneBuilders[ sceneIndex ]().play();
    });
*/
}

//给舞台添加滑动的事件

