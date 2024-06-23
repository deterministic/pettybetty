import Image from 'next/image'

import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import ProductSize from './components/ProductSize'
import Video from 'next-video';
import sexyMan from '/videos/SexyMan.mp4';

export default function Home() {
  return (
    <div className='flex gap-6'>
      <div className='flex-1'>
        <h2 className='text-lg font-bold uppercase'>
          Mr. Sexy Man
        </h2>
        <Video src={sexyMan} />
      </div>
    </div>
  )
}
