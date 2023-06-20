const Anecdote = ({anecdote}) => {
  console.log(anecdote)
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes} votes</p>
    </div>
  );
};

export default Anecdote;
