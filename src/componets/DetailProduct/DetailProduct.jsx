import React, { useEffect, useState } from 'react';
import './DetailProduct.css'
import { Button } from 'react-bootstrap';
import camion from '../../assets/img/camion.png'
import { useParams } from 'react-router-dom';

import data from '../../data/instrumentos.json'
const loadData = () => JSON.parse(JSON.stringify(data));


const DetailProduct = () => {
    const [mounted, setMounted] = useState(false)
    const [products, setProducts] = useState({})
    const [product, setProduct] = useState({})

    const {idProduct} = useParams()

    useEffect(()=>{
        setMounted(true)
        setProducts(loadData.instrumentos)
    }, [mounted])

    return mounted &&(
        <div className='detailProductList'>
            <div className='detailProductSideOne'>
                {/* <div className='detailProductImage'><img src={imagen} alt="" /></div> */}
                <div className='detailProductDescription'>
                    <h5>Descripción</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, neque quae nesciunt, assumenda asperiores incidunt hic, reiciendis cum harum libero eveniet saepe itaque est omnis in esse architecto totam laborum!</p>
                </div>
            </div>
            <div className='detailProductSideTwo'>
                <span className='productSoldOut'>25 vendidos</span>
                <h3 className='productDetailTitle'>Instrumentos de percusión Niños set Musical con estuche</h3>
                <p className='productPrice'>$ 2.649</p>
                <div className='brandInfo'>
                    <p>Marca: GADNIC</p>
                    <p>Modelo: T01</p>
                </div>
                <span className='productShipping free'><img src={camion} alt="" /> Envío gratis</span>
                <div className='mt-4'>
                    <Button variant="outline-primary">Agregar al carrito</Button>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;