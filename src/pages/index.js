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
   <main className='flex justify-center items-center'>
      <div className='w-full'>
        <Image src={imageTop} width={2000} height={2000} alt='backgroundimage'/>
      </div>

      <section className='bg-gray h-fit w-5/6 absolute top-48 rounded-xl py-16'>
        <div className='px-32'>
          <h1 className='text-text text-3xl font-semibold text-center'>
            Our Collection
          </h1>

          <p className='text-lg text-lightgray my-4 mx-auto text-center max-w-lg'>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
            expertly roasted in small batches and shipped fresh weekly.
          </p>

          <div className='flex justify-center text-center mx-auto max-w-lg mb-12 gap-4'>
            <Button onClick={handleFiltro}>
              All Products
            </Button>

            <Button onClick={handleFiltro}>
              Available Now
            </Button>
          </div>

        </div>

        <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-12 mx-24 flex-wrap'>

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
