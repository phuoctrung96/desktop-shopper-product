import classNames from "classnames";
import React from "react";
import { Tag } from "../../../../components";
import { Images, LibraryIcons } from "../../../../utils";
import "./styles.scss";
import Radio from '@mui/material/Radio';

type TPaymentItemProps = {
  data?: any;
  onMenuClick?: any;
  onButtonClick?: any;
  className?: string;
};

export const PaymentItem: React.FC<TPaymentItemProps> = ({
  data,
  onMenuClick,
  onButtonClick,
  className,
}) => {
  return (
    <div className={classNames("paymentItem", className)}>
      <div className="paymentItem__left">
        <img src={data?.image} alt="" />
        <div className="paymentItem__left-inforContainer">
          <h3 className="paymentItem__left-inforContainer-title">
            {data?.title}
          </h3>
          <p className="paymentItem__left-inforContainer-description">
            {data?.description}
          </p>
        </div>
      </div>
      {!data?.isAdd && !data?.isActivated && (
        <div className="paymentItem__right">
          {data?.isDefault && (
          <Tag
            statusText="Default"
            statusColor="#06B3BA"
            bgColor="rgba(6, 179, 186, 0.1)"
          /> )}
        </div>
      )}
      <Radio defaultChecked></Radio>
    </div>
  );
};
