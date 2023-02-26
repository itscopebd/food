
// load api data 
const loadData=async()=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
  try{
    const res= await fetch(url);
    const data= await res.json();
    showData(data)
  }
  catch(error){
console.log(error)
  }

}

const showData=(data)=>{
const single__card=document.getElementById("single__card");
const sliceData=data.meals.slice(0,10);

sliceData.forEach(element => {
        const {strMeal,strInstructions,strMealThumb}=element;
        console.log(element)
       const div = document.createElement("div");
       div.classList.add("col-md-6");
       div.classList.add("col-lg-6");
       div.classList.add("col-12")
       div.innerHTML=`
       <div class="card mb-3">
           <div class="row g-0">
               <div class="col-md-5">
                   <img src="${strMealThumb ? strMealThumb:'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMGZvb2QlMjBzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}" class="img-fluid
                       rounded-start" alt="...">
               </div>
               <div class="col-md-7">
                   <div class="card-body">
                       <h5 class="card-title">${strMeal}</h5>
                       <p class="card-text">This is
                           a wider card with
                           supporting text below as
                           a natural lead-in to
                           additional content. This
                           content is a little bit
                           longer.</p>
                       <a href="" class="text-warning boder-0 text-decoration-none">View Details</a>
                   </div>
               </div>
           </div>
   </div>
       
       `;
       single__card.appendChild(div)
    });

}

loadData();