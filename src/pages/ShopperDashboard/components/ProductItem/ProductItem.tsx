import classNames from 'classnames';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Images } from '../../../../utils';
import { TProductItem } from '../../ShopperDashboard.data'
import './styles.scss'

type TProductItemProps = {
  data?: TProductItem;
  onClick?: () => {};
  className?: string;
  isSeccondView?: boolean;
  onBuyAgainClick?: any;
  orderItem?: boolean;
}

export const ProductItem: React.FC<TProductItemProps> = ({ data, onClick, className, isSeccondView = false, orderItem, onBuyAgainClick }) => {
  const isTabletOrMoblie = useMediaQuery({ query: '(max-width: 512px)'});
  return (
    <>
      {!isSeccondView ?
        <div className={classNames('productItem', className)}>
          {isTabletOrMoblie? (<img src={data?.image} alt="" width={120} height={120} />): (<img src={data?.image} alt="" width={144} height={144} className="productItem__image"  />)}
          <h4 className='productItem__title'>{data?.shop_name}</h4>
          <p className='productItem__description'>{data?.title}</p>
          <p className='productItem__price'>Rp {data?.price}</p>
        </div> :
        <div className={classNames('productItemView2', className)}>
          <div className='productItemView2__body'>
          {isTabletOrMoblie? (<img src={data?.image} alt="" width={50} height={50} />): (<img src={data?.image} alt="" width={88} height={88} />)}
            <div className='productItemView2__body-infor'>
              <div className='productItemView2__body-infor-top'>
                <div>
                  <h4 className='productItemView2__body-infor-top-title'>{data?.title}</h4>
                  <p className='productItemView2__body-infor-top-totalAmount'>200ml</p>
                  <p className='productItemView2__body-infor-top-totalAmount'></p>
                  <p className='productItemView2__body-infor-top-code'>(200ml, Peony)</p>
                </div>
                <p className='productItemView2__body-infor-top-price'>RP {data?.total}</p>
              </div>

              <div className='productItemView2__body-infor-bottom'>
                <p className='productItemView2__body-infor-bottom-text'>Quantity: {data?.quantity}</p>
              </div>

            </div>
          </div>
        </div>
      }
    </>
  )
}
