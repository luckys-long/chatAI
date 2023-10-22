import request from './request';


// 创建会议
export async function createMeetingApi(data) {
    return request(
      {
        url: 'http://172.16.100.125:9980/meeting/createMeeting',
        method: 'post',
        data
      }
    );
  }

//  会议列表

  export async function getMeetingList(data) {
    return request(
      {
        url: 'http://172.16.100.125:9980/meeting/list',
        method: 'GET',
        params: {
            ...data
          },
      }
    );
  }

  
  export async function endMeeting(data) {
    return request(
      {
        url: 'http://172.16.100.125:9980/meeting/closeMeeting',
        method: 'post',
        data
      }
    );
  }

  //  针对预定会议
  /*
  * oldId string
  * newId string
  **/
  export async function changeMeetingId(data) {
    return request(
      {
        url: 'http://172.16.100.125:9980/meeting/changeMeetingId',
        method: 'post',
        params:{
          ...data
        }
      }
    );
  }


  // 获取人员组织树
  export async function getPersonnelInfo () {
    return request(
      {
        url: 'http://172.16.100.125:9980/department/phoneList',
        method: 'GET',
      }
    );
  }


    // 获取话机列表
    export async function getPhoneList () {
      return request(
        {
          url: 'http://172.16.100.125:9980/phone/phoneList',
          method: 'GET',
          params: {
            pageNum:'1',
            pageSize:'9999',
          },
        }
      );
    }