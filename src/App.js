import List from './components/List';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiper.css';


function App() {
    const userData = [
        {id: 1, name: 'Mohamed', email: 'Mohamed@email.com', age: 15},
        {id: 2, name: 'Ahmed', email: 'Ahmed@email.com', age: 20},
        {id: 3, name: 'Gomaa', email: 'Gomaa@email.com', age: 30},
        {id: 4, name: 'Assayed', email: 'Assayed@email.com', age: 25},
    ];

    const data = [
        {
            componentName: ShapeOne,
            date: {id: 1, name: 'Mohamed', email: 'Mohamed@email.com', age: 15},
        }, {
            componentName: ShapeTwo,
            date: {id: 3, name: 'Gomaa', email: 'Gomaa@email.com', age: 30},
        },
    ];
    const child = data.map(el => {
        let ComponentName = el.componentName;
        return <ComponentName item={el.date} key={el.date.id}/>;
    })
    return (
        <div className="App">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;
