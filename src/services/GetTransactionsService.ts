import axios from 'axios';

class GetTransactionsService {
    async execute() {
        try {
            const response = await axios.get('https://interview.adpeai.com/api/v2/get-task');

            return response.data;
        } catch (err) {
            throw err;
        }
    }
}
export default GetTransactionsService;


new GetTransactionsService().execute().then((data) => {
    console.log(data);
}
).catch((err) => {
    console.log(err);
}
);








