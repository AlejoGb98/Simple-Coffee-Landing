import Image from 'next/image'
import CoffeeCard from '../components/coffeCard';
import imageTop from '../images/bg-cafe.jpg'
import Button from '../components/button';
import { useState } from 'react';



export default function Home({coffees}) {

  const [coffeesToShow, setCoffeesToShow] = useState(coffees);

  const handleFiltro = (e) => {
    if(e.target.textContent == "All Products"){
      setCoffeesToShow(coffees)
    } else{
      const newCoffeeList = coffees.filter((cooffeeState) => cooffeeState.available)
      setCoffeesToShow(newCoffeeList)
    }
  }
  

  return (
   <main className='flex flex-col justify-center items-center bg-dark'>
      <div className='absolute z-0 top-0'>
        <Image src={imageTop} width={2000} height={2000} className='h-full max-w-full bg-contain' alt='backgroundimage'/>
      </div>

      <section className='bg-gray h-fit w-5/6 lg:mt-48 md:mt-24 mt-12 rounded-xl lg:py-16 md:py-12 py-10 mb-12 z-10'>
        <div className='md:px-32 px-6'>
          <h1 className='text-text text-3xl font-semibold text-center'>
            Our Collection
          </h1>

          <p className='text-lg text-lightgray my-4 mx-auto text-center max-w-lg'>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
            expertly roasted in small batches and shipped fresh weekly.
          </p>

          <div className='flex justify-center text-center mx-auto max-w-lg md:mb-12 mb-6 gap-4'>
            <Button onClick={handleFiltro}>
              All Products
            </Button>

            <Button onClick={handleFiltro}>
              Available Now
            </Button>
          </div>

        </div>

        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:mx-24 sm:mx-12 mx-6 flex-wrap'>

          {coffeesToShow?.map(coffee => (
            <CoffeeCard
              coffee={coffee}
              key={coffee.id}
            />
          ))}

        </div>
      </section>

   </main>
  
  )
}

export async function getServerSideProps() {
  const resp = await fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`);
  const coffees = await resp.json();
  
  return{
    props:{
      coffees
    }
  }
}
