
import { sendMessage } from '@/api/index'

  const messages=ref<any>([])
  const isLoading=ref(false)


  const initializeChat=()=>{
    const systemMessage = {
      role: 'system',
      content: '你是一个法律专家，拥有强大的法律知识库'
    }
    const welcomeMessage = {
      role: 'assistant',
      content: '嗨，我今天可以帮到你什么吗？'
    }
    messages.value=[systemMessage,welcomeMessage]
  }

  const addMessage=async(content:string)=>{
    if(!messages.value.length){
      initializeChat()
    }
    isLoading.value=true
    const newMessage = {
      role: 'user',
      content
    }
    messages.value = [...messages.value, newMessage]
    const res= await sendMessage(messages.value)
    isLoading.value=false;
    const reply = res.choices[0].message
    messages.value=[...messages.value,reply]
  }

  export const useMessage = (): any => ({
    initializeChat,
    addMessage,
    messages,
    isLoading 
  });