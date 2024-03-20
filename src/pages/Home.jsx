import PostItem from '../components/PostItem'
import allData from '../allData'
import Title from './navPage/Title'



const Home = () => {

  return (
    <div className='w-full '>

      <div className='w-full '>
      <Title title={'Welcome to Our Blog'} subTitle={'Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. we offer everything you need to get started, from helpful tips and tutorials.'} />

        {
          allData.length > 0 ?
        <div  className=' mt-16  w-[100%] md:w-[95%]  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-y-16 
        lg:px-[10%]'>
          { 
            allData.map((data) =>

              (<PostItem key={data.id} data={data} />)
              )
          }
        </div>:
        <div>
          <h2 className='w-full  text-2xl font-bold flex justify-center'>Data Not Found</h2>
          </div>
       
      }
      </div>

    </div>
  )
}

export default Home