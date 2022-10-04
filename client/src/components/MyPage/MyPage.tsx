import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginUser } from '../../redux/slice/loginUserSlice';
import { RootState } from '../../redux/store';
import { apiTest } from '../../utils/common';
import Card from '../UI/Card';
import ProfileAvatar from '../UI/ProfileAvatar';
import Menu from './Menu';

const MyPage = () => {
  const dispatch = useDispatch();
  const dummyUserData: LoginUserInfoType = {
    id: 'Dummy ID',
    name: 'Dummy Name',
  };

  const reduxUserData = useSelector((store: RootState) => store.loginUserInfo);

  // 최초 1회, 유저데이터를 받아옴
  useEffect(() => {
    if (!reduxUserData.id || !reduxUserData.id) {
      const fetchData = async () => {
        const response = await apiTest(
          `http://testDomain.io/testing/`,
          {},
          dummyUserData,
        );
        dispatch(setLoginUser(response.data));
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      <Card color="bg-white">
        <div className={'flex justify-center my-10'}>
          <ProfileAvatar isBigSize={true}></ProfileAvatar>
          <div className="mx-5 flex flex-col justify-center">
            <h3>{reduxUserData.name}</h3>
            <span className="text-xs">{reduxUserData.id}</span>
          </div>
        </div>
        <Menu />
      </Card>
    </div>
  );
};

export default MyPage;
