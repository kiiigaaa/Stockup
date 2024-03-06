import React from 'react'
import './Card.css'

interface Props {
    companyName: string;
    ticker: string;
    price: number;
  }
  
  const Card: React.FC<Props> = ({
    companyName,
    ticker,
    price,
  }: Props): JSX.Element =>  
  {  return (
    <div className='card'>

        <img 
        src="https://www.reuters.com/resizer/XJVz16TWhpnCe7iDHC47hNGLMrc=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LR3SFICGYNLAJBKOCE7NMNVUJA.jpg" 
        alt='image'
        />
        <div className='details'>
            <h2>
                {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className='info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos libero blanditiis, quia nisi expedita, nesciunt numquam repudiandae assumenda, sequi reiciendis animi ab voluptates! Enim id sit vero fuga? Voluptate!</p>

    </div>
  )
}

export default Card;