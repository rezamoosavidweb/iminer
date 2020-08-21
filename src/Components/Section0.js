import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function Section0({ title, subtitle, dark, id }) {
  return (
      <div className="section" >
        <div className="section-content section0"  id={id}>
          <div className="right">
            <h1>استخراج ارز دیجیتال</h1>
            <p className="p1">استخراج ارز دیجیتال و کسب درآمد دلاری بدون نیاز به صرف وقت و دانش فنی و با کمترین سرمایه با سرویس اجاره ماینر آی ماینر!

            </p>
            <p className="p2">همین حالا با وارد کردن شماره موبایل خود یک ساعت استخراج رایگان جهت بررسی و آزمایش سامانه دریافت کنید. ویژه کاربران آپارات.

            </p>
            <input className="input" type="text"  placeholder="شماره موبایل : 09123456789" />
              <div className="btn">
                  <Button  style={{boxShadow:'0px 11px 20px 0px rgb(9 50 84',fontFamily:'shabnambold',height:'50px'}}  variant="contained" color="secondary">
                    ثبت نام ودریافت هدیه
                  </Button>
              </div>
          </div>

          <div className="left">
            <span className="image1"></span>
          </div>     
      </div>
    </div>
  );
}
