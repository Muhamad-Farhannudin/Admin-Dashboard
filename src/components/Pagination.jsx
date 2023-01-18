import React from 'react'
import Image1 from '../assets/images/sertifikat.png'

export default function Pagination() {
    const imgContainer = document.querySelector('.img-container')
    const pagination = document.querySelectorAll('.pagination span');


    function slide(id) {
        imgContainer.style.left = -100 * id + "%";
        pagination.forEach(pag => {
            pag.classList.remove('active');
        });

        pagination[id].classList.add('active');
    }

    let interval = setInterval(autoSlide, 4000);
    let imgId = 1;

    function autoSlide() {
        if(imgId > pagination.length -1 ) {
            imgId = 0;
        }
        slide(imgId);
        imgId++;
    }

    for(let i = 0; i < pagination.length; i++) {
        pagination[i].addEventListener('click', () => {
            clearInterval(interval);
            slide(i);
            imgId = i + 1;
            interval = setInterval(autoSlide, 4000);
        });
    }

    return (
    <>
    <section className='image-slider'>
        <div className='slider'>
            <div className='img-container'>
                <img src={Image1} alt="" />
                <img src={Image1} alt="" />
                <img src={Image1} alt="" />
            </div>
        </div>
    </section>

    
    <div className='pagination flex justify-center items-center gap-[1em] mx-[2em] my-0'>
    {/* <nav aria-label="Page navigation example">
        <ul class="flex list-style-none">
        <li class="page-item"><a
        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#">1</a></li>
            <li class="page-item active"><a
            class="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
            href="#">2</a></li>
        <li class="page-item"><a
            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#">3</a></li>
            </ul>
        </nav> */}
    <span className='active span'></span>
    <span></span>
    <span></span>
    </div>
    </>
    )
}    