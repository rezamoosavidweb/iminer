import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'



export default function Section5({ title, subtitle, dark, id }) {
    
    AOS.init();
    return (
    <div className="section" >
        <div className="section-content section2" id={id}>
            <div className="section5">
                <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"  
                className="image5"
                ></div>
                <div className="content6">
                    <p className="header6">هنوز تمام نشده !</p>
                    <p className="title6">یک ساعت استخراج رایگان هدیه بگیرید</p>
                    <p className="p17">همین حالا با وارد کردن شماره موبایل خود یک ساعت استخراج رایگان جهت بررسی و آزمایش سامانه دریافت کنید.</p>
                    <input className="input2" type="text" placeholder="شماره مبایل : 09123456789" />
                    <Button  style={{  position: "relative",top:"35px",right:"-250px",fontSize:'1.5rem',    boxShadow: 'rgb(63 33 125) 0px 11px 20px 0px',fontFamily:'shabnambold',height:'50px'}} classname="btn3" variant="contained" color="secondary">
                        ثبت نام ودریافت هدیه
                    </Button>
        
                 </div>
                 <footer className="footer">
                    <div className="content7">نماینده رسمی آی‌ماینر در ایران: شرکت بازرگانی افرند شید مهر به شماره ثبت ۵۴۷۶۹۹ و شناسه ملی ۱۴۰۰۸۶۴۱۶۲۷ دارای نماد اعتماد الکترونیک از وزارت صنعت و معدن. تلفن مشاوره و فروش: ۰۲۱ ۸۲۸۰ ۲۵۲۰</div>
                    <div
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"  
                     
                    className="image6"
                    ></div>
                 </footer>
            </div>

        </div>
     </div>    
        );
    }
    