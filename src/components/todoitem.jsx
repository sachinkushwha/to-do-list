function Todoitme1({todo}){
return  <div className="container">
   {todo.map((item,index)=>(<div key={index} className="row">
  <div className="col-6">{item.task}</div>
  <div className="col-4">{item.date}</div>
  <div className="col-2"><button type="button" className="btn btn-danger sbtn">delete</button></div>
</div>))} 
</div>
}
export default Todoitme1;