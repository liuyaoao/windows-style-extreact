
import React,{Component} from 'react';
import Intl from '../../intl/Intl';

import { TabPanel,Panel, Container, FormPanel,TextField,
  FieldSet, SelectField,Button,Menu,MenuItem,Grid,Column,CheckBoxField,RadioField } from '@extjs/ext-react';
Ext.require('Ext.field.InputMask');
Ext.require('Ext.Toast');
Ext.require('Ext.panel.Collapser');
// Ext.require('layout.center');
// Ext.require('layout.left');

let bootsNodeOptions = [
    { text: '220.168.30.12', value: '220.168.30.12' },
    { text: '220.168.30.1', value: '220.168.30.1' },
    { text: '220.168.30.6', value: '220.168.30.6' }
];
//无线 tab内容块。
export default class WirelessContent extends Component {
    state={
      nameType:'show',
      menuItemVal:'',

      selectedBootsNode:'220.168.30.12',
      selectedVProxyIp:'', //选中的vProxy IP.
    }
    onAddTypeChange = (item)=>{
      this.setState({menuItemVal:item.value});
    }
    dataStore = new Ext.data.Store({
        data: [
          {index:1, name:' Wireless',price:'342.54', priceChange:'mif-wifi-connect icon'},
          {index:2, name:' Internet',price:'342.54', priceChange:'mif-earth icon'}
        ],
        sorters: 'name'
    })
    onBootsNodeSelectChanged = (field, newValue)=>{  //引导节点有改变。
      this.setState({ selectedBootsNode:newValue });
      Ext.toast(`You selected the item with value ${newValue}`);
    }
    onVProxySelectChanged = (field, newValue) => { //vProxy 路由ip有改变。
      this.setState({ selectedVProxyIp:newValue });
      Ext.toast(`You selected the item with value ${newValue}`);
    }
    onNameMenuChange = (item)=>{
        this.setState({nameType:item.value});
    }
    render(){
      let {nameType,menuItemVal,selectedBootsNode} = this.state;

      return (
        <div className='wireless_content' style={{height:'100%'}}>
          <TabPanel cls='tabpanel_pc wireless_tabPanel'
              height={'100%'}
              defaults={{
                  cls: "card",
                  tab: {
                      flex: 0,
                      minWidth: 100
                  }
              }}
              tabBar={{
                  layout: {
                      pack: 'left'
                  }
              }}
          >
            <Container title="Wi-Fi" cls="wifi_tab" scrollable={true}>
              <div className="cnt" style={{margin:'10px'}}>
                <div className="title">5GHz</div>
                <Panel
                  margin='10 0 10 0'
                  layout="vbox"
                >
                    <Container flex={1}>
                      <div style={{'float':'left'}}><CheckBoxField boxLabel={Intl.get('Enable wireless broadcast')}/></div>
                    </Container>
                    <Container layout={{ type: 'hbox', pack:'left',align:'left'}}>
                      <TextField label={Intl.get('Name')+" (SSID)："} labelTextAlign="left" labelAlign="left" value="5G" width="80%"/>
                      <Button ui="menu raised" text={Intl.get('Show')} style={{marginRight:'10px'}}>
                         <Menu defaults={{ handler: this.onNameMenuChange, group: 'buttonstyle' }}>
                             <MenuItem text={Intl.get('Show')} value="show" iconCls={nameType === 'show' && 'x-font-icon md-icon-check'}/>
                             <MenuItem text={Intl.get('Hide')} value="hide" iconCls={nameType === 'hide' && 'x-font-icon md-icon-check'}/>
                         </Menu>
                      </Button>
                    </Container>
                    <SelectField label={Intl.get('Security Level')+':'}
                        labelTextAlign="left" labelAlign="left" value={1}
                        onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                        options={[
                            { text: '高 - WAP2-个人', value: 1 },
                            { text: 'Option 1', value: 2 }
                        ]} />
                    <TextField label={Intl.get('Password')+'：'} labelTextAlign="left" labelAlign="left" value="siteview"/>
                    <SelectField label={Intl.get('Wireless Mode')+'：'}
                        labelTextAlign="left" labelAlign="left" value={1}
                        onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                        options={[
                            { text: 'an+ac', value: 1 },
                            { text: 'Option 1', value: 2 }
                        ]} />
                    <div style={{color:'#07439e'}}>{Intl.get('Advanced Options')}<span className="x-fa fa-chevron-down"></span></div>
                </Panel>

                <div className="title">2.4GHz</div>
                <Panel
                  margin='10 0 10 0'
                  layout="vbox"
                >
                    <Container flex={1}>
                      <div style={{'float':'left'}}><CheckBoxField boxLabel={Intl.get('Enable wireless broadcast')}/></div>
                    </Container>
                    <Container layout={{ type: 'hbox', pack:'left',align:'left'}}>
                      <TextField label={Intl.get('Name')+" (SSID)："} labelTextAlign="left" labelAlign="left" value="" width="80%"/>
                      <Button ui="menu raised" text={Intl.get('Show')} style={{marginRight:'10px'}}>
                         <Menu defaults={{ handler: this.onNameMenuChange, group: 'buttonstyle' }}>
                             <MenuItem text={Intl.get('Show')} value="show" iconCls={nameType === 'show' && 'x-font-icon md-icon-check'}/>
                             <MenuItem text={Intl.get('Hide')} value="hide" iconCls={nameType === 'hide' && 'x-font-icon md-icon-check'}/>
                         </Menu>
                      </Button>
                    </Container>
                    <SelectField label={Intl.get('Security Level')+"："}
                        labelTextAlign="left" labelAlign="left" value={1}
                        onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                        options={[
                            { text: '高 - WAP2-个人', value: 1 },
                            { text: 'Option 1', value: 2 }
                        ]}
                    />
                    <TextField label={Intl.get('Password')+"："} labelTextAlign="left" labelAlign="left" value="siteview"/>
                    <SelectField label={Intl.get('Wireless Mode')+"："}
                        labelTextAlign="left" labelAlign="left" value={1}
                        onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                        options={[
                            { text: 'b+g+n', value: 1 },
                            { text: 'Option 1', value: 2 }
                        ]}
                    />
                    <div style={{color:'#07439e'}}>{Intl.get('Advanced Options')}<span className="x-fa fa-chevron-down"></span></div>
                </Panel>
              </div>
            </Container>

            {/* WPS tab块内容*/}
            <Container title="WPS" cls="wps_tab" scrollable={true}>
                <div className="">
                  <div style={{margin:'10px'}}>
                    <div>{Intl.get('wps_tab_desc')}</div>
                    <div style={{'float':'left'}}>
                      <CheckBoxField boxLabel={Intl.get('Enable')+" WPS"} cls="wps_tab_checkbox"/>
                    </div>
                    <Container layout={{ type: 'hbox', pack:'left',align:'left'}}>
                      <div>{Intl.get('Connection State')}：<span>{Intl.get('Ready')}</span></div>
                      <div style={{marginLeft:'20px'}}>{Intl.get('Connection Type')}：<span>2.4GHz</span></div>
                    </Container>
                  </div>
                  <Container layout={{type:'vbox',pack:'center',align:'left'}}>
                    <Panel
                      title={Intl.get('By Push Button')}
                      width={'100%'}
                      bodyPadding={20}
                      collapsible={{
                          direction: 'top',
                          dynamic: true
                      }}
                      bodyPadding={10}
                    >
                    <Container layout={{ type: 'hbox', pack:'left',align:'left'}}>
                      <Container flex={1}>
                        <p>按 Router 上的WPS按钮。</p>
                        <div style={{padding:'20px'}}><img src='images/network/pushBtn_1.png'/></div>
                      </Container>
                      <Container flex={1}>
                        <p>按下无线设备上的WPS按钮。</p>
                        <div style={{padding:'20px'}}><img src='images/network/pushBtn_2.png'/></div>
                      </Container>
                      <Container flex={1}>
                        <p>这些设备已连接。</p>
                        <div style={{padding:'20px'}}><img src='images/network/pushBtn_3.png'/></div>
                      </Container>
                    </Container>
                    </Panel>
                    <Panel
                      title="设备PIN码"
                      width={'100%'}
                      bodyPadding={20}
                      collapsible={{
                          direction: 'top',
                          dynamic: true
                      }}
                      bodyPadding={10}
                    >
                      <Container>
                        设备PIN码 内容区
                      </Container>
                    </Panel>
                  </Container>
                </div>
            </Container>

            {/*访客网络 tab 内容区*/}
            <Container title={Intl.get('Guest Network')} cls="guest_tab" scrollable={true}>
                <GuestNetworkTab />
            </Container>
            {/*MAc 过滤器 tab的内容区*/}
            <Container title={"MAC "+Intl.get('Filter')} cls="MAC_filter_tab" scrollable={true}>
                <MACFilterTab />
            </Container>
          </TabPanel>
        </div>
    )
  }
}

//访客网络 tab 的内容区 子组件
class GuestNetworkTab extends Component{
  state={
  }
  render(){
    return (
      <div className="cnt" style={{margin:'20px'}}>
        <div className="title">5GHz</div>
        <Panel
          margin='10 0 10 0'
          layout="vbox"
        >
            <Container flex={1}>
              <div style={{'float':'left'}}><CheckBoxField boxLabel="启用访客网络"/></div>
            </Container>
            <TextField label="名称(SSID)：" labelTextAlign="left" labelAlign="left" value="RouterGuest" />
            <SelectField label="安全级别："
                labelTextAlign="left" labelAlign="left" value={1}
                onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                options={[
                    { text: '高 - WAP2-个人', value: 1 },
                    { text: 'Option 1', value: 2 }
                ]}
            />
            <TextField label="密码：" labelTextAlign="left" labelAlign="left" value="siteview"/>
            <SelectField label="有效："
                labelTextAlign="left" labelAlign="left" value={1}
                onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                options={[
                    { text: '1 周', value: 1 },
                    { text: '2 周', value: 2 },
                    { text: '永久有效', value: 3 },
                ]}
            />
            <div style={{'clear':'both'}}>
              <div style={{width:'100px','float':'left',textAlign:'left','lineHeight':'46px'}}>AP隔离：</div>
              <span style={{'float':'left'}}>
                <FormPanel layout={{type: 'hbox', align: 'left'}}>
                  <RadioField name="ap_5GHz" boxLabel="已启用" value="checked" checked style={{marginRight:'10px'}}/>
                  <RadioField name="ap_5GHz" boxLabel="已停用" value="unchecked"/>
                </FormPanel>
              </span>
            </div>
        </Panel>

        <div className="title">2.4GHz</div>
        <Panel
          margin='10 0 10 0'
          layout="vbox"
        >
            <Container flex={1}>
              <div style={{'float':'left'}}><CheckBoxField boxLabel="启用无线广播"/></div>
            </Container>
            <TextField label="名称(SSID)：" labelTextAlign="left" labelAlign="left" value="RouterGuest_2.4GHz" />
            <SelectField label="安全级别："
                labelTextAlign="left" labelAlign="left" value={1}
                onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                options={[
                    { text: '高 - WAP2-个人', value: 1 },
                    { text: 'Option 1', value: 2 }
                ]}
            />
            <TextField label="密码：" labelTextAlign="left" labelAlign="left" value="siteview"/>
            <SelectField label="有效："
                labelTextAlign="left" labelAlign="left" value={1}
                onChange={(field, newValue) => Ext.toast(`You selected the item with value ${newValue}`)}
                options={[
                    { text: '1 周', value: 1 },
                    { text: '2 周', value: 2 },
                    { text: '永久有效', value: 3 },
                ]}
            />
            <div style={{'clear':'both'}}>
              <div style={{width:'100px','float':'left',textAlign:'left','lineHeight':'46px'}}>AP隔离：</div>
              <span style={{'float':'left'}}>
                <FormPanel layout={{type: 'hbox', align: 'left'}}>
                  <RadioField name="ap_5GHz" boxLabel="已启用" value="checked" checked style={{marginRight:'10px'}}/>
                  <RadioField name="ap_5GHz" boxLabel="已停用" value="unchecked"/>
                </FormPanel>
              </span>
            </div>
        </Panel>

        <div className="title">本地网络访问</div>
        <Panel
          margin='10 0 10 0'
          layout="vbox"
        >
        本地网络访问 内容区。。
        </Panel>

      </div>
    );
  }
}

//MAC过滤器 tab 的内容区 子组件
class MACFilterTab extends Component{
  state={
    dataStore:[
      {index:1, name:' Wireless',MACAdredss:'00:11:32:53:bd:50', description:'mif-wifi-connect icon'},
      {index:2, name:' Internet',MACAdredss:'00:11:32:53:bd:50', description:'mif-earth icon'}
    ],
  }
  render(){
    return (
      <div className="cnt" style={{margin:'10px'}}>
        <Container
            layout={{ type: 'hbox', pack: 'left'}}
            margin="0 0 10 0"
            defaults={{ margin: "0 10 10 0" }}
          >
          <Button ui="confirm raised" text="新增"/>
          <Button ui="raised" text="编辑"/>
          <Button ui="raised" text="删除"/>
          <Button ui="raised" text="保存"/>
        </Container>
        <Grid store={this.state.dataStore} grouped width={'99%'} height={'320px'} style={{margin:'0 auto',border:'1px solid #73d8ef'}}>
            <Column text="应用" width="100" dataIndex="name"/>
            <Column text="描述" width="120" dataIndex="description"/>
            <Column text="MAC 地址" width="100" dataIndex="MACAdredss"/>
        </Grid>

      </div>
    );
  }
}
