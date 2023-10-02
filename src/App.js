import SwiperCarouser from './components/SwiperCarouser';
import ShapeOne from './components/ShapeOne';
import ShapeTwo from './components/ShapeTwo';
import './App.css';
function App() {
    const userData = [
        {id: 1, name: 'Mohamed', email: 'Mohamed@email.com', age: 15},
        {id: 2, name: 'Ahmed', email: 'Ahmed@email.com', age: 20},
        {id: 3, name: 'Gomaa', email: 'Gomaa@email.com', age: 30},
        {id: 4, name: 'Assayed', email: 'Assayed@email.com', age: 25},
    ];

    return (
        <div className="App">
            <SwiperCarouser items={userData}>
                <ShapeOne/>
            </SwiperCarouser>
            <SwiperCarouser items={userData}>
                <ShapeTwo/>
            </SwiperCarouser>
        </div>
    );
}

export default App;
