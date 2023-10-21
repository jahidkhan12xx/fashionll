import toast, { Toaster } from 'react-hot-toast';
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from 'sweetalert2'

const CartData = ({item,modidiedData,setModiifiedData}) => {
    console.log(item);

    const handleDelete = (id) =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/cart/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remain = modidiedData.filter(newData => newData._id !== id);
        setModiifiedData(remain);
            }
        })
             
            }
          })

        

        
    }
    return (
        <div>
            <div><Toaster
  position="top-right"
  reverseOrder={true}
/></div>
            <div className="relative flex h-[50vh] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
      src={item.url}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {item.name}
    </h4>
    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
      {item.des}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
    <div className="flex items-center -space-x-3">
     
      <div
        data-tooltip="author-2"
        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
       Price: {item.price}$
      </div>
    </div>
    <button onClick={()=>handleDelete(item._id)} className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit hover:scale-150 transition-all duration-500">
      <AiTwotoneDelete className='text-2xl'></AiTwotoneDelete>
    </button>
  </div>
</div>
        </div>
    );
};

export default CartData;