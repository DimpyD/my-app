import React, {useState} from "react";

const categories = [
    
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
];

const allProducts = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      category: 'electronics',
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      category: "men's clothing",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      category: "men's clothing",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: 'Womens Dress',
      price: 15.99,
      category: "women's clothing",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      category: 'jewelery',
      rating: { rate: 4.6, count: 400 },
    },
];

export default function ProductList(props)
{
    const [selectedCategories, setSelectedCategories] = useState([]);

       const SelectCategory = (e) => {
        var category=e.target.value;
        if(!selectedCategories.includes(category)){
            setSelectedCategories(prev => ([...prev, category]))
        }
        else{
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }     
      }
    
      
       const filteredProducts =
        selectedCategories.length === 0
           ? allProducts
        : allProducts.filter((item)=>(selectedCategories.includes(item.category)));
        
       const ViewAllCategory = (e) => {
        if(e.target.checked===true){
            setSelectedCategories([]);
        }
       }
     
       const clearCategory = (e) => {
            setSelectedCategories([]);
       }

    return(
        <div>
        <div className="d-flex justify-content-evenly">
          {categories.map((elm, index) => {
             return (
                <div className="form-check ms-2" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={elm}
                    id={`flexCheckDefault-${index}`}
                    onChange={(e) => SelectCategory(e)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`flexCheckDefault-${index}`}
                  >
                    {elm}
                  </label>
                </div>
              );
          })}
           <div className="form-check ms-2" key="View All">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value="View All"
                    id="View All"
                    onChange={(e) => ViewAllCategory(e)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="View All"
                  >
                   View All
                  </label>
                </div>
            <div className="form-check ms-2" key="Clear All">
                  <label
                    className="form-check-label"
                    htmlFor="Clear All"
                    id="Clear All"
                    onClick={(e) => clearCategory(e)}
                  >
                   Clear All
                  </label>
                </div>
        </div>
        <div className="d-flex flex-wrap">
        {filteredProducts.map((prod) => {
          return (
            <div className="card m-3" style={{ width: '400px' }} key={prod.id}>
              <div className="card-body">
                <p className="card-text">Id: {prod.id}</p>
                <h3 className="card-title">Title: {prod.title}</h3>
                <p className="card-text">Price: {prod.price}</p>
                <p className="card-text">Category: {prod.category}</p>
                <p className="card-text">Rating: {prod.rating.rate}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    )
}

