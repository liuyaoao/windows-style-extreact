
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// var {connect} = require('react-redux');
// var {bindActionCreators} = require('redux');
import { Container,Sheet,TitleBar,Button,SegmentedButton, Label,FormPanel, Panel } from '@extjs/ext-react';

import FileStationPageMobile from './fileStation/FileStationPageMobile';
import NetworkPageMobile from './network/NetworkPageMobile';
import VlanPageMobile from './vlan/VlanPageMobile';
import LocalNetworkPageMobile from './localNetwork/LocalNetworkPageMobile'; //本地网络
import InternetPageMobile from './Internet/InternetPageMobile'; //互联网
import ParentalCtrlPageMobile from './parentCtrl/ParentalCtrlPageMobile'; //家长控制
import SecurityPageMobile from './security/SecurityPageMobile'; //安全性
import NoticeSettingPageMobile from './noticeSetting/NoticeSettingPageMobile'; //通知设置
import ManagementPageMobile from './management/ManagementPageMobile'; //管理

class MainContentMobile extends Component{
  state = {
      bodyHeight:500,
      bodyWidth:'100%',
  }
  componentDidMount(){
    this.setState({
      bodyHeight:document.documentElement.clientHeight,
      bodyWidth:document.documentElement.clientWidth
    });
  }

  componentWillUnmount () {
  }

  render () {
    let {contentId,displayed} = this.props;
    return (
      <div className="main_content">

        {contentId=="FileStationWindow"||contentId==""?
          <FileStationPageMobile
            toggleSidebar={this.props.toggleSidebar}/> : null
        }
        {contentId=="NetworkCenterWindow"?
          <NetworkPageMobile
            toggleSidebar={this.props.toggleSidebar} /> : null
        }
        {contentId=="VlanWindow"?
          <VlanPageMobile
            toggleSidebar={this.props.toggleSidebar} /> : null
        }

        {contentId=="LocalNetworkPage"?
          <LocalNetworkPageMobile
            toggleSidebar={this.props.toggleSidebar} /> : null
        }

        {contentId=="InternetPage"?
          <InternetPageMobile toggleSidebar={this.props.toggleSidebar} /> : null
        }

        {contentId=="ParentCtrlPage"?
          <ParentalCtrlPageMobile
            toggleSidebar={this.props.toggleSidebar} /> : null
        }

        {contentId=="SecurityPage"?
          <SecurityPageMobile
            toggleSidebar={this.props.toggleSidebar}/> : null
        }

        {contentId=="NoticeSettingsPage"?
          <NoticeSettingPageMobile
            toggleSidebar={this.props.toggleSidebar}/> : null
        }

        {contentId=="ManagementPage"?
          <ManagementPageMobile
            toggleSidebar={this.props.toggleSidebar}/> : null
        }
      </div>
    );
  }

}

export default MainContentMobile;
