import "../styles/faleconosco.css";

const Faleconosco = () => {
  return (
    <>
      <div>
        <h1>Contact us :</h1>
      </div>
      <div className="teste">
        <form action="" className="test">
          <label htmlFor="nome" className="name">Name:
          </label>
          <input type="text"
          id="nome"
          placeholder="name" />
          <label htmlFor="user">User:
          </label>
          <input type="text" 
          id="user"
          placeholder="user"/>
          <br></br>
          <div className="teste">
          <h2 className="dois">What is the reason?</h2>
         <select name="subject" id="">
         <option value="dúvida">doubt</option>
         <option value="reclamação">complaint</option>
         <option value="sugestão">suggestion</option>
         </select><br></br>
         <textarea rows={8} cols={80} placeholder="type here"></textarea>
         <input type="button" value="Enviar" className="button" />
        </div>
        </form>
        </div>
    
    </>
  );
};

export default Faleconosco;

