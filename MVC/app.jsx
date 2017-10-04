class Model{
  subscribe(render){
    this.callback = render;
  }
  notify() {
    this.callback();
 }

 createLI(){
    
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);  
  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);
  // return li;
   this.callback = render;
   this.callback();
 
}
}


const SubmitGuests = ({model})=>{
  return ( <header>
            <h1>RSVP</h1>
            <p> Registration App </p>
            <form id="registrar" >   
            <input type="text" onChange={e => (model.input = e.target)}/>
            <button type="submit"  name="submit" value="submit" >Submit</button>
            </form>
           </header>);    
}    

const createList=({})=>{
  return();
}    
            
              
 



 





const UserView=({title,model})=>{
  return (
    <div className="scoreboard">
     
     <SubmitGuests model={model}/>
     </div>
  );
}

let model = new Model();
let render = () => {
   ReactDOM.render(
      <UserView title="UserView" model={model} />,
      document.getElementById('container')
   );
};
model.subscribe(render);
render(); 