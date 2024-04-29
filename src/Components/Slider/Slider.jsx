import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Slider = () => {
    return (
        <div>
            <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        >
            <SwiperSlide className='lg:mt-0 mt-16'>
                    
                    <div className="text-white relative text-center brightness-40 rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Angkor-Wat.png)] lg:mb-[50px] lg:ml-[110px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 lg:w-[1320px] lg:h-[600px] md:w-[745px] flex items-center justify-center ">
                    {/* bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('../src/images/icon-bg.jpg')] */}
                    <div>
                    <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Cambodia</p>
                    <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Angkor Wat</p>
                    </div>
                    
                </div>
                
                
                </SwiperSlide>

            <SwiperSlide className='lg:mt-0 mt-16'>
                
                <div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/bankok.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] md:w-[745px] lg:p-0 p-2 ml-3 flex items-center justify-center">
                    

<div>
    <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Thailand</p>
    <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Bangkok</p>
    </div>
    
    </div>
                
                </SwiperSlide>

            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Borobudur-Temple.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] md:w-[745px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-5 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 mt-5 text-[#FFF] text-5xl font-bold'>Indonesia </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Borobudur-Temple</p>
                </div>
           
                
                </div></SwiperSlide>
            
            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/HaLongBay.png)] mb-[50px] lg:mb-[50px] lg:ml-[110px] md:w-[745px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Vietnam </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>HaLondBay</p>
                </div>
           
                
                </div></SwiperSlide>
            
            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/kualalampur.png)] lg:mb-[50px] lg:ml-[110px] md:w-[745px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold mt-10'>Malaysia  </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Kuala Lumpur</p>
                </div>
           
                
                </div></SwiperSlide>
           
            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/sundabarns-.png)] lg:mb-[50px] lg:ml-[110px] md:w-[745px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Bangladesh </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Sundarban</p>
                </div>
           
                
                </div></SwiperSlide>

        </Swiper>
        </div>
    );
};

export default Slider;