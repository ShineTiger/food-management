import React, { useEffect, useState } from 'react';
import { apiTest } from '../../utils/common';

const MyPage = () => {
  interface UserDataType {
    id: string;
    name: string;
  }
  const dummyUserData = {
    id: 'Dummy ID',
    name: 'Dummy Name',
  };

  const [userData, setUserData] = useState<UserDataType>({ id: '', name: '' });

  // 최초 1회, 유저데이터를 받아옴
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiTest(
        `http://testDomain.io/testing/`,
        {},
        dummyUserData,
      );
      setUserData(response.data);
    };
    fetchData();
  }, []);
};

export default MyPage;
