import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Section1({ title, subtitle, dark, id }) {

  AOS.init();


  return (
    <div className="aboutus">
        <div className="section" >
          <div className="section-content section1" id={id}>
            <p className="p3">چرا آی ماینر؟</p>
            <p 
               data-aos="zoom-in"
               data-aos-offset="0"
               data-aos-delay="48"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center"
            className="p4"
            >آی‌ماینر نخستین و معتبرترین سامانه اجاره ماینر</p> 
            <p className="p5">با سرویس‌های ما شما قادرخواهید بود تا با کمترین هزینه ماینر موردنظرتان را اجاره و اقدام به استخراج و کسب درآمد دلاری نمایید.</p>
          </div>
        </div>

        <div className="a4t">
              <div className="top">
                  <div className="tr">
                    <div
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" 
                    className="circle circletr"
                    ></div>
                    <p className="title">برند معتبر و مطمئن</p>
                    <p className="p">تاکنون بیش از 130 هزار مشتری خرسند از سرویس‌های ما در کشورهای ایران، ترکیه، روسیه و اوکراین استفاده کرده‌اند.</p>
                  </div>
              <div className="tl">
              <div
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center" 
              className="circle circletl"
              ></div>
                <p className="title">درآمد سریع و مشخص</p>
                <p className="p">میزان سود و درآمد تمامی ماینرهای ما کاملا مشخص است که شما را در سریعترین زمان به درآمد دلاری خواهد رساند.</p>
              </div>
            </div>
            <div className="bottom">
              <div className="br">
              <div className="circle circlebr"></div>
                <p className="title">ماینرهای مختلف و متنوع</p>
                <p className="p">تعداد و انواع مختلفی از ماینرها در فارم های اختصاصی ما متناسب با هر میزان سرمایه تهیه گردیده و آماده استفاده هستند.</p>
              </div>
              <div className="bl">
              <div className="circle circlebl"></div>
                <p className="title">پشتیبانی قدرتمند و پاسخگو</p>
                <p className="p">کارشناسان ما در ۲۴ ساعت شبانه روز و ۷ روز هفته آماده پاسخگویی و ارائه پشتیبانی به مشتریان آی ماینر خواهد بود.</p>
              </div>
            </div>
        </div>
        
    </div>    
  );
}
