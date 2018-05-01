/**
 * Sample
 * React
 * Native
 * App
 * https://github.com/facebook/react-native
 * @flow
 * Created
 *     by
 *     Administrator
 *     on
 *     2018/4/18.
 */

import React, { Component,PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import PublicHeader from '../PublicComponents/PublicHeader'
import PublicTopTab from '../PublicComponents/PublicTopTab'
var Spinner = require('react-native-spinkit');

export default class AssetsViewPage extends PureComponent{
  state={
    lazyLoading:true
  }
  componentDidMount() {
      setTimeout(()=>{
          this.setState({
              lazyLoading:false
          })
      },600)
  }
  render() {
    const {goBack}=this.props;
    return (
      <View style={{flex:1}}>
        {
          this.state.lazyLoading
          ?
            <View
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#051843'
                }}
            >
                <Spinner
                    size={100}
                    color='lightslategrey'
                    type='9CubeGrid'
                />
            </View>
          :
            <View
                style={{flex:1}}
            >
                <StatusBar
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true}
                />
                <PublicHeader type='one' Title='资产查看' goBack={goBack}/>
                <PublicTopTab
                    OneTitle={'按分类'}
                    TwoTitle={'按位置'}
                    ThirdTitle={'按状态'}
                    Type={3}
                />
            </View>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
