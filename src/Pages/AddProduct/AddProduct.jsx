

const AddProduct = () => {

    const handleAddProduct = (e) =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const des = form.des.value;
        const url = form.url.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        
        const product = {name,des,url,price,brand,type,rating};
        console.log(product);

        fetch("http://localhost:3000/data",{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className=" mx-auto container my-24">
            
<form onSubmit={handleAddProduct}>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="des" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short description</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="url" name="url" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product image url</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="price" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="float" name="rating" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <select name="brand" className="block py-2.5 px-0 w-full text-sm text-gray-900   border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required>
            <option className=" p-4" value="">Select Brand</option>
            <option className=" p-4" value="gucci">Gucci</option>
            <option className=" p-4" value="varsace">Varsace</option>
            <option className=" p-4" value="louisvuitton">LouisVuitton</option>
            <option className=" p-4" value="prada">Prada</option>
            <option className=" p-4" value="chanel">Chanel</option>
            <option className=" p-4" value="dior">Dior</option>
        </select>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <select name="type" className="block py-2.5 px-0 p-4 w-full text-sm text-gray-900   border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required>
            <option className=" p-4" value="">Select type</option>
            <option className=" p-4" value="perfume">Perfume</option>
            <option className=" p-4" value="clothing">Clothing</option>
            <option className=" p-4" value="eyeware">Eyeware</option>
            <option className=" p-4" value="shoes">Shoes</option>
            <option className=" p-4" value="shirts">Shirts</option>
            <option className=" p-4" value="pants">Pants</option>
        </select>
    </div>
  </div>
  <input type="submit" className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Add Product"></input>
</form>

        </div>
    );
};

export default AddProduct;