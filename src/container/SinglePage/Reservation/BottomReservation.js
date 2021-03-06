import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Rating from 'components/UI/Rating/Rating';
import Button from 'components/UI/Antd/Button/Button';
import Modal from 'components/UI/Antd/Modal/Modal';
import StickyBooking from 'components/StickyBooking/StickyBooking';
import LogoImage from 'assets/images/logo.png';
import Reservation from './Reservation';

const BottomReservation = ({ title, price, rating, ratingCount }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <StickyBooking
        logo={LogoImage}
        title={title}
        price={price}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
        action={
          <Button type="primary" onClick={() => setVisible(true)}>
            Book
          </Button>
        }
      />

      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        maskStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
        wrapClassName="reservation_modal"
        closable={false}
      >
        <Reservation />
        <Button onClick={() => setVisible(false)} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </>
  );
};

export default BottomReservation;
