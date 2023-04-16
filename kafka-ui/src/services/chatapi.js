import Axios from "axios";

const api = Axios.create({
    baseURL: 'http://localhost:8080/chatapi/',
});

const chatAPI = {
    getMessages: (groupId) => {
        console.log('Calling get messages from API');
        return api.get(`messages/${groupId}`);
    },

    sendMessage: (username, text) => {
        let msg = {
            from: username,
            message: text
        }
        return api.post(`sendmessage`, msg);
    }
}


export default chatAPI;
