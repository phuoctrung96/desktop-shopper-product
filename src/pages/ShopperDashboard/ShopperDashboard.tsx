import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Carousel ,Modal, Button } from 'antd';
import { Images } from "../../utils";
import './styles.scss';
import { Input } from "../../components";
import { Box } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Icons, LibraryIcons } from "../../utils";
import { PaymentItem } from "./components";
import { ProductItem } from "./components/ProductItem";
import { walletData, creditCardData, TProductItem, compltedOrderData } from "./ShopperDashboard.data";
import LockIcon from '@mui/icons-material/Lock';

const ShopperDashboard = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPayModalVisible, setIsPayModalVisible] = useState(false);
  const [isDesModal, setIsDesModal] = useState<boolean>(false);
  const [isCheckoutStartModal, setIsCheckoutStartModal] = useState<boolean>(false);
  const [isCheckoutEndModal, setIsCheckoutEndModal] = useState<boolean>(false);

  const renderStartInput = () => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Images.flat} width={24} height={24} alt="" />
        <LibraryIcons.KeyboardArrowDownIcon sx={{ fontSize: "18px" }} />
      </Box>
    );
  };

  const showModal = () => {
    setIsCheckoutStartModal(false);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showPayModal = () => {
    setIsPayModalVisible(true);
    handleCancel();
  };

  const handlePayCancel = () => {
    setIsPayModalVisible(false);
  };

  const handleDesModal = () => {
      setIsDesModal(true)
  };
  
  const checkoutStartModal = () => {
    setIsCheckoutStartModal(true)   
    setIsDesModal(false)
  }

  const checkoutEndModal = () => {
    setIsCheckoutEndModal(true) 
    setIsPayModalVisible(false)
  }

  return (
    <div className="shopperDashboard row  text-center">
      <div className="col-md-4 text-muted" style={{fontSize: "13px"}}>
        ADVERTISEMENT
      </div>
      
      <div className="col-md-8">
        <hr></hr>
        <div className="row">
          <div className="col-md-2">
            <p className="shopperDashboard__adver" style={{fontFamily: "Ebrima"}}>2</p>
            <p className="shopperDashboard__adver_txt" style={{fontFamily: "Ebrima"}}><b>The Best<br/>Luxury<br/>Massage Oil<br/>For<br/>Aromatherapy</b></p>
          </div>
          <div className="col-md-10">
            
            <div className="row">
              <div className="col-md-6">
                <img src={Images.massageOil} width={350} height={350} alt="" />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 shopperDashboard__left">
                    <p className="shopperDashboard-tag">Flash Deal</p>
                  </div>
                  <div className="col-md-6 shopperDashboard__right row">
                    <div style={{ fontSize: 12, color: "gray", margin: "-1px"}} className="col-md-6">Ends In</div>
                    <div style={{ fontSize: 15, color: "gray" }} className="col-md-6">
                      <div className="row" style={{display: "ruby-text"}}>
                        <p className="shopperDashboard-tag-small">02</p>:
                        <p className="shopperDashboard-tag-small">30</p>:
                        <p className="shopperDashboard-tag-small">18</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ fontSize: 38, color: "black", textAlign: "left"}}>
                  <p style={{fontFamily: "Gulim", lineHeight: "35px", marginTop: "16px", marginLeft: "-8px"}}>Spa Of The World<br/>French Lavener<br/>Massage Oil 170ml</p>
                </div>
                <div className="row" style={{backgroundColor: "rgba(148, 141, 141, 0.1)", width: '200px', textAlign: "left", marginLeft: "-4px"}}>
                  <div style={{fontSize: "12px", color: "rgba(212, 12, 12, 0.8)", lineHeight: "20px"}}>50K Voucher</div>
                  <div style={{display: "inherit", lineHeight: "14px"}}>
                    MNCAPR50
                    <div>
                      <p className="shopperDashboard-tag-copy" style={{padding: "3px 10px", marginLeft: "50px", marginTop: "-4px"}}>copy</p>
                    </div>
                  </div>
                  <div style={{fontSize: "10px"}}><a href="#">View Detail</a></div>
                </div>
                <div className="row">
                  <div className="col-md-6" style={{paddingTop: "12px", textAlign: "left", fontSize: "14px"}}>
                    <p>Rp 299.000</p>
                    <p style={{lineHeight: "0px", color: "tomato"}}>Rp 279.200</p>
                  </div>
                  <div className="col-md-6" style={{backgroundColor: "tomato", color: "white", height: "50px", paddingTop: "10px", marginTop: "10px"}} onClick={handleDesModal}>
                    View Product
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{fontSize: "20px", textAlign: "left"}}>
              A massage therapisl favorite, this Elemis De Stress Massage Oil is a super
              luxurious way to case both muscular and mental/emotional tension. Pretty 
              much all the chill-inclucing essential oils make appearances in this 
              formular, like lavener, chamomile, rosemary, and geranium, but reviewers 
              say that the scent isn't too overpowering. Just a heas up: Sweet almond oil 
              is the base oil, so make sure you (or your partner) isn't allergic to nuts
              before you spring for it! 
              <br/>
              <p></p>
              A word on this oil from an expert: "I am a professional massage therapist
              and esthetician. I've tried many combinations of essential oils and added
              them into my massage, but Elemis Destress is always the best. My clients
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={1000}
        footer={null}
        style={{top: 15}}
      >
        <div className="row">
          <div className="col-md-6" style={{backgroundColor: "white"}}>
            <div className='productDetail__productDetailContainer'>
              <div className="row">
                <div className="col-md-6" style={{textAlign: "left"}}>
                  <img src={Images.bodyShop} width={50} height={50}></img><b>THE BODY SHOP</b>
                </div>
                <div className="col-md-6" style={{textAlign: "right"}}>
                  <img src={Images.burket} width={40} height={40}></img><b>RP 270.600</b>
                </div>
              </div>
              <div className="row">
                <Input
                  label="Phone Number"
                  variant="standard"
                  size="small"
                  startInput={renderStartInput()}
                  placeholder="0821 2345 6789"
                  containerStyle={{ marginTop: 18 }}
                />
              </div>
              <div className="row">
                <Input
                  label="Email"
                  variant="standard"
                  size="small"
                  placeholder="helloo.lauramartin@gmail.com"
                  containerStyle={{ marginTop: 18 }}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    label="First Name"
                    variant="standard"
                    size="small"
                    placeholder="Laura"
                    containerStyle={{ marginTop: 18 }}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    label="Second Name"
                    variant="standard"
                    size="small"
                    placeholder="Martin"
                    containerStyle={{ marginTop: 18 }}
                  />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-6" style={{textAlign: "left"}}>
                  <b>Shipping Address</b>
                </div>
                <div className="col-md-6" style={{textAlign: "right"}}>
                  <b>Ship to me</b>
                  <Checkbox defaultChecked></Checkbox>
                </div>
              </div>
              <div className="row">
                <Input
                  label="Shipping Address"
                  variant="standard"
                  size="small"
                  startInput={renderStartInput()}
                  placeholder="The Olivia Apartments"
                  containerStyle={{ marginTop: 18 }}
                />
              </div>
              <div className="row">
                <Input
                  label="Apartment, Unit, Floor, etc. (Optional)"
                  variant="standard"
                  size="small"
                  placeholder="23"
                  containerStyle={{ marginTop: 18 }}
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Input
                    label="Province"
                    variant="standard"
                    size="small"
                    placeholder="DKI Jakarta"
                    containerStyle={{ marginTop: 18 }}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    label="City"
                    variant="standard"
                    size="small"
                    placeholder="Jakarta St"
                    containerStyle={{ marginTop: 18 }}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    label="Postal Code"
                    variant="standard"
                    size="small"
                    placeholder="12345"
                    containerStyle={{ marginTop: 18 }}
                  />
                </div>
              </div>
              <p></p>
              <div className="row">
                <div className="col-md-6" style={{textAlign: "left"}}>
                  <b>Payment</b>
                </div>
                <div className="col-md-6" style={{textAlign: "right"}}>
                  <b><a href="#">Choose Payment</a></b>
                </div>
              </div>
              <div className="row">
                {creditCardData.map((item, index) => (
                  <PaymentItem
                    data={item} 
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{backgroundColor: "white"}}>
            <div className='productDetail__productDetailContainer' style={{backgroundColor: "rgba(219, 214, 214, 0.425)"}}>
              <div className='productDetail__productDetailContainer-headerContainer'>
                <h3 className='productDetail__productDetailContainer-headerContainer-title'>Order Summary</h3>
                <h3 className='productDetail__productDetailContainer-headerContainer-button'>Edit</h3>
              </div>

              {compltedOrderData.map((item: TProductItem, index: number) => (
                <ProductItem isSeccondView data={item} className="productDetail__productDetailContainer-productItem" />
              ))}
              
              <div className='productDetail__productPriceContainer'>
                <div className='productDetail__productPriceContainer-content'>
                  <p className='productDetail__productPriceContainer-content-key'>Subtotal</p>
                  <p className='productDetail__productPriceContainer-content-value'>Rp 498.100</p>
                </div>
                <div className='productDetail__productPriceContainer-content'>
                  <p className='productDetail__productPriceContainer-content-key'>Shipping Fee</p>
                  <p className='productDetail__productPriceContainer-content-value'>Rp 17.000</p>
                </div>
                <div className='productDetail__productPriceContainer-content'>
                  <p className='productDetail__productPriceContainer-content-key'>Admin Fee</p>
                  <p className='productDetail__productPriceContainer-content-value'>Rp 103.800</p>
                </div>
                <div className='productDetail__productPriceContainer-content'>
                  <p className='productDetail__productPriceContainer-content-key-total'>Total</p>
                  <p className='productDetail__productPriceContainer-content-value-total'>Rp 377.300</p>
                </div>
              </div>
              
              <div className='productDetail__productButtonContainer' style={{textAlign: "center", color: "rgba(179, 174, 174, 0.2)", paddingTop: "112px"}}>
                <Button type="primary" onClick={showPayModal}><LockIcon></LockIcon> Confirm & Pay</Button>
                <p className='productDetail__productPriceContainer-content-key'>By clicking the button above, you agree </p>
                <p className='productDetail__productPriceContainer-content-key'>Fix's <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        visible={isPayModalVisible} 
        onCancel={handlePayCancel}
        width={1000}
        footer={null}
        style={{top: 15}}
      >
        <div className="row">
          <div className="col-md-6" style={{backgroundColor: "white"}}>
            <div className='productDetail__productDetailContainer'>
              <div className="row">
                <div className="col-md-6" style={{textAlign: "left"}}>
                  <img src={Images.bodyShop} width={50} height={50}></img><b>THE BODY SHOP</b>
                </div>
                <div className="col-md-6" style={{textAlign: "right"}}>
                  <img src={Images.burket} width={40} height={40}></img><b>RP 270.600</b>
                </div>
              </div>
              <div className="row" style={{textAlign: "center", marginTop: "114px"}}>
                <div>
                  <img src={Images.visa} style={{width: "70px", height: "20px"}}></img>
                </div>
                <b>
                  <p style={{fontFamily: "Gulim", fontSize: "20px"}}>Authenticate Using</p>
                  <p style={{fontFamily: "Gulim", fontSize: "20px", lineHeight: "0px"}}>One Time Password(OTP)</p>
                </b>
                <div className='productDetail__productDetailContainer' style={{backgroundColor: "rgba(219, 214, 214, 0.425)", height: "128px", fontSize: "12px", marginLeft: "41px", marginRight: "30px", width: "337px"}}>
                  A verification code has been sent to your mobile<br/>
                  phone +6282123456789. Enter the authorization code<br/>
                  to approve this transaction before the transaction<br/>
                  timer runs out<br/>
                </div>
                <div> confirm your transaction in 04:50 </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" style={{backgroundColor: "white"}}>
            <div className='productDetail__productDetailContainer' style={{backgroundColor: "rgba(219, 214, 214, 0.425)", paddingTop: "180px", paddingLeft: "50px", paddingRight: "50px"}}>
              <div className="row">
                <div className="col-md-6"><b>OTP Authentication</b></div>
                <div className="col-md-6"></div>
              </div>
              <div className="row">
                <div className="col-md-6">Merchant Name</div>
                <div className="col-md-6"><b>Flik</b></div>
              </div>
              <div className="row">
                <div className="col-md-6">Amount</div>
                <div className="col-md-6"><b>Rp 270.600</b></div>
              </div>
              <div className="row">
                <div className="col-md-6">Transaction Date</div>
                <div className="col-md-6"><b>Friday, Feb 18 2022 12:45:35<br/>GMT+8</b></div>
              </div>
              <div className="row">
                <div className="col-md-6">Visa Number</div>
                <div className="col-md-6"><b>4321 5678 9012 0488</b></div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{paddingTop: "21px"}}>Authorization Code</div>
                <div className="col-md-6">
                  <Input
                    variant="standard"
                    size="small"
                    placeholder="0821"
                    containerStyle={{ marginTop: 18 }}
                  />
                </div>
              </div>
              <div className="row" style={{textAlign: "center", paddingTop: "20px"}}>
                <div className="col-md-6" style={{textAlign: "center"}}><Button style={{width: "150px"}}>Cancel</Button></div>
                <div className="col-md-6" style={{textAlign: "center"}}><Button type="primary" style={{width: "150px"}} onClick={checkoutEndModal}>Proceed</Button></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        visible={isDesModal}
        width={1000}
        centered
        footer={null}
        onCancel={() => setIsDesModal(false)}
      >
        <div className="desModal">
          <div className="desModal__w40">
            <Carousel autoplay>
              <div>
                <img className="desModal__w40__imagesize" src={Images.backimg1} />
              </div>
              <div>
                <img className="desModal__w40__imagesize" src={Images.backimg2} />
              </div>
              <div>
                <img className="desModal__w40__imagesize" src={Images.backimg3} />
              </div>
            </Carousel>

            <div className="images">
                <img src={Images.backimg1} />
                <img src={Images.backimg2} />
                <img src={Images.backimg3} />
              </div>
              <div className="description">
                <h4>Description</h4>
                <h5>Body moisturizer for normal skin, creamy texture has a sweet and refreshing strawberry aroma. Enriched with Community</h5>
            </div>
          </div>
          <div className="desModal__w60">
            <div className="flashdeal">
              <div><span>Flash Deal</span></div>
              <div>end in<span>02</span>:<span>30</span>:<span>18</span></div>
            </div>
            <div className="subtitlebolb">
              <span>The Body Shop</span>
            </div>
            <div className="title">
              <h4>Spa Of The World French<br />Lavender Massage Oil 170ml</h4>
            </div>
            <div className="subtitle">
              <span>SKU Code: 983980034</span>
            </div>
            <div className="voucherstyle"> 
              <div className="card">
                <span>Voucher 15% off up to Rp 30.000</span>
                <div className="paypart">                  
                  <p className="cardtype"><img src={Images.card} /><span>Credit Card</span></p>
                  <span className="cardstatus">Applied</span>
                </div>
              </div>
              <div className="gopay">                
                <span>Voucher 15% off up to Rp 30.000</span>
                <div className="paypart">                  
                  <p className="cardtype"><img src={Images.card} /><span>GoPay</span></p>
                  <span className="cardstatus">Applied</span>
                </div>
              </div>
            </div>
            <div className="price">
              <span className="discount">Rp 299.000</span><h5>Rp 279.200</h5><span className="discountper">15%</span>
            </div>
            <div className="size">
              <span className="smalltext">Size</span>
              <div className="box">50ml</div>
              <div className="box">70ml</div>
              <div className="selected">170ml</div>
            </div>
            <div className="color">
              <span className="smalltext">Color</span>
              <div className="box">Rosewater</div>
              <div className="box">Cherry Blossom</div>
              <div className="selected">Peony</div>
            </div>
            <div className="quantity">
              <span className="smalltext">Quantity</span>
              <div className="count">
                <button>-</button>
                <input className="counttext" id="countChange" type='text' value="1" />
                <button>+</button>
              </div>
              <div className="items">500 items Solid</div>
            </div>
            <div className="button">
              <div className="messagebutton"><img src={Images.message} /></div>
              <div className="checkoutbutton" onClick={checkoutStartModal}><span>checkout with</span><img src={Images.logo1} /></div>
            </div>
          </div>          
        </div>
      </Modal>

      <Modal className="checkoutstartModal" visible={isCheckoutStartModal} width={1000} centered okText={'Checkout'} onOk={showModal} onCancel={() => setIsCheckoutStartModal(false)}>
        <div className="checkoutstart">
          <div className="logo"><img src={Images.logo1} /></div>
          <div className="title"><h3>Hi Laura!</h3></div>
          <div className="content"><span>We’re placing your order. <br />With Flik, you can always edit <br />your order after.</span></div>
        </div>
      </Modal>

      <Modal className="checkoutendModal" visible={isCheckoutEndModal} width={1000} centered cancelText={'View Order'} onCancel={() => setIsCheckoutEndModal(false)}>
        <div className="checkoutend">
          <div className="title"><h3>Thank you for <br />your shopping with us!</h3></div>
          <div className="content"><span>The amount of Rp 270.600 has been deducted<br /> from your Credit Card Balance</span></div>
          <div className="view"><span>View your order on useflik.com</span></div>
        </div>
      </Modal>
    </div >
  );
};

export default ShopperDashboard;