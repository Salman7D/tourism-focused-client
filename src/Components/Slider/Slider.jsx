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
                    <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Experience the pulse of the city at Urban Rhythms Gallery.</p>
                    <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Through vibrant street art, gritty urban landscapes, and dynamic cityscapes, this gallery reflects the energy and diversity of urban life. From bustling metropolises to hidden alleyways, each artwork tells a story of the human experience in an urban environment.</p>
                    </div>
                    
                </div>
                
                
                </SwiperSlide>

            <SwiperSlide className='lg:mt-0 mt-16'>
                
                <div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/bankok.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] md:w-[745px] lg:p-0 p-2 ml-3 flex items-center justify-center">
                    

<div>
    <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Experience versatility and convenience at the Metroplex Expo Center.</p>
    <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Our flexible event spaces and modern amenities cater to a wide range of events, from trade shows and conventions to concerts and community gatherings.</p>
    </div>
    
    </div>
                
                </SwiperSlide>

            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Borobudur-Temple.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] md:w-[745px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-5 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 mt-5 text-[#FFF] text-5xl font-bold'>Healing Haven Hospital, where compassionate care meets cutting-edge medicine. </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Our dedicated team of healthcare professionals is committed to providing personalized treatment and support to every patient. From routine check-ups to advanced surgical procedures, trust us to guide you on your journey to wellness.</p>
                </div>
           
                
                </div></SwiperSlide>
            
            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/HaLongBay.png)] mb-[50px] lg:mb-[50px] lg:ml-[110px] md:w-[745px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Welcome to Academia Prime, where excellence thrives. </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Our elite school campus boasts state-of-the-art facilities, world-class faculty, and a vibrant community dedicated to nurturing the leaders of tomorrow. Join us on a journey of academic discovery and personal growth.</p>
                </div>
           
                
                </div></SwiperSlide>
            
            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/kualalampur.png)] lg:mb-[50px] lg:ml-[110px] md:w-[745px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold mt-10'>Step into a realm of spiritual transcendence at Divine Sanctuary  </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Nestled amidst serene surroundings, this hallowed ground is a haven for seekers of inner peace and divine wisdom. From ancient rituals to modern contemplation, immerse yourself in the timeless traditions and profound spirituality of this sacred space.</p>
                </div>
           
                
                </div></SwiperSlide>
           
            <SwiperSlide className='lg:mt-0 mt-16'><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/sundabarns-.png)] lg:mb-[50px] lg:ml-[110px] md:w-[745px] lg:w-[1320px] lg:h-[600px] w-[400px] h-[500px] lg:p-0 p-2 ml-3 flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Welcome to the Central Transit Nexus ensures that every journey is smooth, efficient, and unforgettable. </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Embark on a journey of seamless travel experiences at the Central Transit Nexus, the beating heart of connectivity. Serving as a pivotal hub for transportation, this dynamic center effortlessly connects travelers to their destinations via a network of trains, buses, and other transit options. With modern amenities, efficient services, and convenient access</p>
                </div>
           
                
                </div></SwiperSlide>

        </Swiper>
        </div>
    );
};

export default Slider;