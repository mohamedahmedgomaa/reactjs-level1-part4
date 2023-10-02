import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../swiper.css';

const SwiperCarouser = (
    {
        children,
        items,
        navigation= true,
        pagination= false,
        scrollbar= true,
        slidesPerView= 3,
    }) => {
    const cloneItems = items.map(el =>
        <SwiperSlide>
            {React.cloneElement(children, {item: el, key: el.id})}
        </SwiperSlide>
    );
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={navigation}
            pagination={pagination}
            scrollbar={scrollbar}
        >
            {cloneItems}
        </Swiper>
    );
}

export default SwiperCarouser;