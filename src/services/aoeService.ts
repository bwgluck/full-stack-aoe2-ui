import axios from "axios";

class AoeService {
    executeService() {
        console.log('Executed service.');
        return axios.get('http://localhost:8080/hello-world');
    }
}

export default new AoeService();
