const Welcomemsg = ({ongetposts}) => {
  return (
    <div className="welcomemsg">
      <h1 className="welcomemsg" role="alert">
        There is No Post!
      </h1>
      <button type="button" 
      onClick={ongetposts} 
      className="btn btn-primary">Get Posts From Server</button>
    </div>
  );
};

export default Welcomemsg;
