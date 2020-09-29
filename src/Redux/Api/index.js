import axios from 'axios';
import Constants from '../Constants';

export default class Api {
  static fetchDataByPOST = async (url, data) => {
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          Authorization:
          'Basic NWYzZTdjMDAwMjZmYjBhMjUwYjdiYTkzMDBmNTcyMjU6ZDgwOGM3MzU4MGFjYmVmZDQ1YTBiZTI2MWViZjA3MGQ',
        },
        url: Constants.MainUrl + url,
        data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByGET = async (url) => {
    console.log('Api roll' + url);
    //console.log('Aoi roll' + token);
    console.log('Aoi Roll' + Constants.MainUrl + url);
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          Authorization:
            'Basic NWYzZTdjMDAwMjZmYjBhMjUwYjdiYTkzMDBmNTcyMjU6ZDgwOGM3MzU4MGFjYmVmZDQ1YTBiZTI2MWViZjA3MGQ',
        },
        url: Constants.MainUrl + url,
      });
      return response.data;
    } catch (error) {
      console.log('érror' +JSON.stringify(error));
      throw error;
    }
  };

  static fetchDataByGETHome = async (url) => {
    console.log('Api roll' + url);
    //console.log('Aoi roll' + token);
    console.log('Aoi Roll' +  url);
    try {
      const response = await axios({
        method: 'GET',
        // headers: {
        //   Authorization:
        //     'Basic NWYzZTdjMDAwMjZmYjBhMjUwYjdiYTkzMDBmNTcyMjU6ZDgwOGM3MzU4MGFjYmVmZDQ1YTBiZTI2MWViZjA3MGQ',
        // },
        url: 'https://shopifyapp.westside.com/api/'+url,
      });
      return response.data;
    } catch (error) {
      console.log('érror' +JSON.stringify(error));
      throw error;
    }
  };
}
