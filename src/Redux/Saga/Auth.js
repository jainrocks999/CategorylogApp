import React,{Component} from 'react';
import {Alert} from 'react-native';
import {takeEvery,put,call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import Constants from '../../Config/storage';
import { StackActions ,NavigationActions} from 'react-navigation';
import qs from 'qs';


//get key
function* DoMainKey(action){
    console.log('copy saga'+action.url)
    console.log('copy saga'+action.url)
    const p = yield call(Api.fetchDataByGET)
    console.log('saga'+ p)
    console.log('copy'+JSON.stringify(p))
    console.log('copy'+ p)
    yield put({
        type:'User_Main_Success',
        payload:p
    })

    //Alert.alert(p)
     yield put({
     type:'User_Main_Error',
        }) 

}
function* DoHomePage(action){
    console.log('kakakakakakak'+action.url)
    const p =yield call(Api.fetchDataByGETHome,action.url)
    console.log('GOOD back'+JSON.stringify(p))
    if (p.success == true) {
console.log('kakakakakakakakaka'+p.image_path)
        AsyncStorage.setItem(Constants.ImageUrl,p.image_path);
    yield put({
        type:'User_Home_Page_Success',
        payload:p.data,
    })
}else{
    yield put({
        type:'User_Home_Page_Failure'
    })
}
}
//res.data.product
function* DoProductdetails(action){
    const p =yield call(Api.fetchDataByGET)
    yield put({
        type:'User_Product_Details_Request',
        payload:p.data.product,
    })
}

export default function* authSaga(){
      yield takeEvery('User_Main_Request',DoMainKey);
      yield takeEvery('User_Product_Details_Request',DoProductdetails);
      yield takeEvery('User_Home_Page_Request',DoHomePage);

   // yield takeEvery('User_Login_Request',DoDetailsItem)
  
}         
