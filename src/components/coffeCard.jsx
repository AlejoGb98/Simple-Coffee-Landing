import Image from "next/image";
import StarFill from '../images/Star_fill.svg'
import StarEmpty from '../images/Star.svg'

const CoffeeCard = ({coffee}) => {

  const {name, image, price, rating, votes, popular, available} = coffee;

  return (
    <div className="">
      {popular && <p className="py-1 px-2 bg-popular w-fit rounded-full text-gray text-xs font-semibold absolute mt-2 ml-2">Popular</p>}
      
      <Image src={image} width={1000} height={1000} className="rounded-2xl" alt='${name}' />

      <div className="flex justify-between items-center mb-2 mt-4">
        <h5 className=" text-text text-lg font-semibold">{name}</h5>
        <p className="text-sm p-1 text-dark bg-price rounded font-semibold">{price}</p>
      </div>

      <div className="flex justify-between">     
        <div className="flex items-center">
          { rating ? <Image src={StarFill} className='w-6' width={100} height={100} alt='starfill'/> : 
                    <Image src={StarEmpty} className='w-6' width={100} height={100} alt='starempty'/>
                    }

          { votes != 0 ? <p className="font-semibold">{rating}
                          <span className="mx-1 font-normal text-lightgray">{`(${votes} votes)`}</span></p> :
                        <p className="a text-lightgray font-semibold">No ratings</p>
          }
        </div>
      
        {!available && <p className="text-soldout font-semibold text-base">Sold Out</p>}

      </div> 
    </div>
  )

}

export default CoffeeCard
