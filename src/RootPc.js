import $ from 'jquery';
import _ from 'lodash';
import React, { Component } from 'react';
// import Settings from './settings';
import ManagerModel from './reactWM_lib/models/manager';
import WindowContentTpl from './reactWM_lib/views/WindowContentTpl';
import ReactWM from './reactWM_lib/index';
import desktopIconDatas from './datas/desktopIconData'; //导入桌面图标的配置


var manager = window.m = new ManagerModel(null, null);
manager.allWindows().forEach(function (window) {
  window.setComponent(<WindowContentTpl id={window.id} manager={manager} contentComp={window.contentComp}/>);
});

var save = _.debounce(function () {
  localStorage.windows_icons = manager.toString();
  localStorage.lineUptoGrid = $("#icon_check_lineUptoGrid").length>0 && $("#icon_check_lineUptoGrid")[0].style.display;
}, 500);

manager.on('change', save);
manager.on('change:windows', save);
manager.on('change:icons', save);

var clickBody = function(e){
  if(e.target.id == "desktop" || e.target.id == "icons") {
    // manager.focus(null);
    $(".icons li").removeClass("icons-focus");
  }
  manager.clickDesktopEmit();
  manager.getContextMenu().hideContextMenuEmit();
}

//router icons。  添加PC端的桌面图标
desktopIconDatas.forEach((item,index)=>{
  let cfgs = Object.assign({},item);
  manager.open_icon(item.id, cfgs);
});

//pc端根容器组件
class RootPc extends Component{
  componentDidMount(){
    $('body').on('click', clickBody);
    // $('body').on('mousedown', bodyMousedown);
  }
  render(){
    return (
      <div>
        {/* 桌面主区域组件*/}
        <ReactWM.Manager manager={manager} />
        {/* 桌面任务栏组件*/}
        <ReactWM.Taskbar manager={manager} />
      </div>
    )
  }
}

export default RootPc;
