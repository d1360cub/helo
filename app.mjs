import axios from 'axios';

const getToken = {
  method: 'get',
  url: 'https://api.dev.helo.com.co/verify',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    uid: '',
  },
};

axios(getToken)
  .then((response) => {
    const myToken = response.data.token;
    const getZones = {
      method: 'get',
      url: 'https://api.dev.helo.com.co/zones',
      headers: {
        Authorization: `${myToken}`,
      },
      token: {
        myToken,
      },
    };
    axios(getZones).then((response) => {
      console.log(response.data);
    });
  })
  .catch((error) => {
    console.log('error');
  });
