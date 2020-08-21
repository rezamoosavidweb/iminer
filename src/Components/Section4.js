import React from "react";

export default function Section4({ title, subtitle, dark, id }) {
  return (
    <div className="section" >
      <div className="section-content section4" id={id}>
        <div className="content5">
          <p className="p9">از کجا شروع کنم؟</p>
          <p className="p10">فقط ۲ دقیقه تا درآمد دلاری فاصله دارید</p>
        </div>
        <div className='paper1'>
          <div className="circle6">3</div>
          <p className="p11">ثبت نام</p>
          <p className="p12">در آی‌ماینر بدون نیاز به احراز هویت ثبت نام کنید</p>

        </div>
        <div className="paper2">
          <div className="circle7">2</div>
          <p className="p13">اجاره ماینر</p>
          <p className="p14">ماینر موردنظر خود را با پرداخت بیت‌کوین اجاره کنید</p>
        </div>
        <div className="paper3">
          <div className="circle8">1</div>
          <p className="p15">کسب درآمد !</p>
          <p className="p16">درآمد ثانیه‌ای شما از همین لحظه قابل برداشت است</p>
        </div>
      </div>
    </div>
  );
}
