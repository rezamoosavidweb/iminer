import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Section2({ title, subtitle, dark, id }) {
  AOS.init();

  
  return (
    <div className="section" >
      <div className="section-content section2" id={id}>
        <div
        data-aos="fadeIn"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" 
        className="image2"
        ></div>
        <div className="content">
          <div className="header-1">قدرتمندترین</div>
          <div className="title-2">پنل مدیریت</div>
          <div className="content-1 cotent">
            <p className="paboutus">1. استفاده آسان</p>
            <p className="contentus">پنل مدیریت آی‌ماینر ضمن کامل و قدرتمند بودن به نحوی طراحی شده تا مناسب برای استفاده تمامی کاربران از مبتدی تا حرفه‌ای است.</p>
          </div>
          <div className="content-1 cotent">
            <p className="paboutus">2. مانیتورینگ لحظه‌ای</p>
            <p className="contentus">دسترسی کامل جهت مدیریت و مانیتورینگ لحظه‌ای ماینرهای شما و مشاهده درآمد و کارکرد بصورت کامل در پنل قرارداده شده است.</p>
          </div>
          <div className="content-1 cotent">
            <p className="paboutus">3. تسویه حساب خودکار</p>
            <p className="contentus">تمامی درآمدها و سودهای حاصل از استخراج ماینرهای شما بصورت ثانیه‌ای و کاملا خودکار از طریق واریز بیت کوین انجام می‌شود.</p>
          </div>
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
}
