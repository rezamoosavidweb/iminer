import React from "react";

export default function Section3({ title, subtitle, dark, id }) {
  return (
    <div className="section" >
      <div className="section-content section3" id={id}>
        <div 
           data-aos="zoomIn "
           data-aos-offset="10"
           data-aos-delay="50"
           data-aos-duration="2000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
           className="content4">
          <p className="p6 ">درباره آی‌ماینر</p>
          <p className="p7 ">نخستین سامانه اجاره ماینر</p>
          <p className="p8 ">همانطور که می‌دانید استخراج بیت‌کوین و سایر ارزهای دیجیتال راهی جدید و مدرن برای کسب درآمد در عصر تکنولوژی است که در بسیاری از کشورهای مطرح دنیا به عنوان یک صنعت شناخته می‌شود. اما خب استخراج ارزدیجیتال به همین راحتی ها هم نیست و نیازمند به سخت افزار قدرتمند و گران قیمت و همچنین دانش فنی جهت کانفیگ و استفاده از ماینر و علاوه بر آن صرف وقت جهت قراردادن ماینر در بهترین حالت ممکن و مانیتورینگ آن است. آی‌ماینر در واقع راه حلی برای تمام مشکلات فوق است، با استفاده سرویس اجاره ماینر شما قادر خواهید بود تا بدون هیچگونه دانش فنی و صرف وقت به استخراج بیت کوین بپردازید و با قابلیت اجاره ماینر از یک روز تا یک سال شما با حداقل سرمایه یک دلار می‌توانید استخراج و کسب درآمد خود را آغاز کنید !</p>
        </div>
        <div className="image4" ></div>
      </div>
    </div>
  );
}
