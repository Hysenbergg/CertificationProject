import {useState} from 'react';
import axios from 'axios';

function loginPost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login_post = async (url, email, password) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(
        url,
        JSON.stringify({
          email: email,
          password: password,
        }),
        {headers: {'Content-Type': 'application/json'}},
      );
      const token = await responseData.token;
      setData(token);
      console.log('Data: ' + deneme);
      console.log('Response Data: ' + responseData.token);
      setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    };  
  };
  
  return {data, loading, error, login_post};
}

export default loginPost;
