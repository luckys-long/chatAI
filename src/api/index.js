import request from './request';


export  const sendMessage = async (messages=[{role:'user',content:'你好'},{role:'system',content:'你是一个法律专家，拥有强大的法律知识库'}]) => {
  // 你是一个法律专家，拥有强大的法律知识库
  
  const body = JSON.stringify({
    messages,
    model: 'gpt-3.5-turbo',
    stream: false,
    // temperature:0.7 //0-2 控制输出的发散程度
  })
  const apiKey = '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'
  try {
   return request(
    {
      url: 'https://api.openai.com/v1/chat/completions',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
     data:body
    }
  )
  } catch (error) {
    console.log(error)
  }
}



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

