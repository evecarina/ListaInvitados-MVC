class Model{
    constructor(){
        this.guests=[];
        this.input=null;
        this.callback=null;
    }
     addGuests(){
      this.guests.push({name:this.input.value,id:Utils.uuid()});
      this.input.value='';
      this.update();
    }
    subscribe(render){
        this.callback=render;
    }
    update(){
       this.callback();
     }
 
}
const ListGuests=({model})=>{
  return (<ul>
    {model.guests.map((g)=>{
      return <li><label>{g.name}<input type='checkbox' /></label><button>Remove</button></li>;
      })
    }
    </ul>);
}

const SubmitGuests=({title,model})=>{
  return (
    <div className="wrapper">
      <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form onSubmit={(e)=>{e.preventDefault();model.addGuests()}}>
          <input type="text" onChange={e => (model.input = e.target)} />
          <button type="submit">Submit</button>
        </form>
      </header>
      <div className="main">	
        <h2>Invitees</h2>
        <ListGuests model={model}/>
      </div>
    </div>
  );
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
      < UserView title="UserView" model={model} />,
      document.getElementById('container')
   );
};
model.subscribe(render);
render();  