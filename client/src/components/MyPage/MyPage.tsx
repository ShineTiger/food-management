import React, { useEffect, useState } from 'react';
import { apiTest } from '../../utils/common';
import Card from '../UI/Card';
import ProfileAvatar from '../UI/ProfileAvatar';
import Menu from './Menu';

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

  return (
    <div>
      <Card color="bg-white">
        <div className={'flex justify-center my-10'}>
          <ProfileAvatar isBigSize={true}></ProfileAvatar>
          <div className="mx-5 flex flex-col justify-center">
            <h3>{userData.name}</h3>
            <span className="text-xs">{userData.id}</span>
          </div>
        </div>
        <Menu />
      </Card>
    </div>
  );
};

export default MyPage;
