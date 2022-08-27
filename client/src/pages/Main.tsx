import React from 'react';
import { useState } from 'react';
import MainCard from '../components/UI/MainCard';
import Meal from '../components/Main/Meal';
import Modal from '../components/UI/ModalCard';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (value: boolean | ((prevState: boolean) => boolean)) => {
    setIsOpen(value);
  };

  return (
    <>
      <div>
        <MainCard category={<Meal />}></MainCard>
      </div>
    </>
  );
};

export default Main;
