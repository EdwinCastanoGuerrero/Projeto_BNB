import React from 'react';

//importação do Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//importação do css
import './css/Categorias.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


//imporatação dos dados
import { categorias } from '../../backend/dados.js';

export default function Categorias() {
    return (
        //container-fluid é um container que ocupa toda a largura da tela, e o border-danger é uma borda vermelha para facilitar a visualização do container
        <div className='container-fluid border border-danger'>
            <div className='container-airbnb border border-info row'>
                <div className='col-sm-11 border border-warning'>
                    <Swiper
                        slidesPerView={14}
                        spaceBetween={7}
                        slidesPerGroup={13}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            categorias.map((dados, index) => (
                                <SwiperSlide key={dados.id} virtualIndex={index}>
                                    <img src={dados.imagem} alt={dados.titulo} />
                                    <span>{dados.titulo}</span>
                                </SwiperSlide>
                            ))
                        }
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-sm-1'>
                    filtros
                </div>
            </div>
        </div>
    )
}
