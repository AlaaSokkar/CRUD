var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productImage=document.getElementById("productImage");
var rowData=document.getElementById("rowData");
var productCantona=[];
if(localStorage.getItem("products")!==null){
productCantona=JSON.parse(localStorage.getItem("products"));
showData();
}
function addProduct(){
  
   var product={
     proName:productName.value,
     price :productPrice.value,
     category:productCategory.value,
     image:`images/${productImage.files[0]?.name}`
     
   }
  

     productCantona.push(product);
     localStorage.setItem("products",JSON.stringify(productCantona));
     showData();
     clearData();


 }
 function showData(){
   var cartona=``;
   for(var i=0;i<productCantona.length;i++){
      cartona=cartona+`
       <div class="col-md-3 mt-3 dataVeiw  gutter">
       <div class="proImage">
          <img src="${productCantona[i].image}"></div>
                 
                    <h4 class="pt-2">${productCantona[i].proName}</h4>
                    <h5 >${productCantona[i].price}</h5>
                    <h6 >${productCantona[i].category}</h6>
                     <button onclick="deleteProject(${i})" class="btn btn-danger my-2">Delete Project</button><br>
    <button onclick="rafaData(${i})" class="btn btn-warning">Update Project</button>

                </div>`;
              
                
          
   }
   rowData.innerHTML=cartona;
  

 }
function clearData(){
   productName.value=null;
   productPrice.value=null;
   productCategory.value=null;
   productImage.value=null
}
function deleteProject(term){

      productCantona.splice(term,1);
      localStorage.setItem("products",JSON.stringify(productCantona));
      showData();
      clearData();
      console.log(productCantona);

  
   
   console.log("mnj")

}
var numOfTerm;
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn")
function rafaData(term){
   numOfTerm=term;
   productName.value=productCantona[term].proName;
   productCategory.value=productCantona[term].category;
   productPrice.value=productCantona[term].price;
  
   console.log("loo")
   addBtn.classList.add("d-none");

updateBtn.classList.remove("d-none");
}
function upDate(){
  
  productCantona[numOfTerm].proName=productName.value;
  productCantona[numOfTerm].price=productPrice.value;
  productCantona[numOfTerm].category=productCategory.value;
  showData();
   localStorage.setItem("products",JSON.stringify(productCantona));
   
   clearData();
   addBtn.classList.remove("d-none");

   updateBtn.classList.add("d-none");

}
var searchWord=document.getElementById("searchWord");

function search(){
   
   term=searchWord.value;//word that the user enter
   var cartona=``;
   for (var i = 0; i < productCantona.length; i++) {
      
      if(productCantona[i].proName.toLowerCase().includes(term.toLowerCase())===true){
    
         cartona=cartona+`
         <div class="col-md-3  dataVeiw  gutter">
         <div class="proImage">
            <img src="${productCantona[i].image}"></div>
                   
                      <h4 class="pt-2">${productCantona[i].proName}</h4>
                      <h5 >${productCantona[i].price}</h5>
                      <h6 >${productCantona[i].category}</h6>
                       <button onclick="deleteProject(${i})" class="btn btn-danger my-2">Delete Project</button><br>
      <button onclick="rafaData(${i})" class="btn btn-warning">Update Project</button>
  
                  </div>`;
         }
   
   }
   rowData.innerHTML=cartona;
  
}