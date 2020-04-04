import { useEffect, useState } from 'react';

import api from '../../api/api.config';

 const useDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      const result = await api.get('');

      result && result.data && setData(result.data);
    };

    retrieveData();
  }, []);

  return { countries: data };
};

 export default useDashboard;
