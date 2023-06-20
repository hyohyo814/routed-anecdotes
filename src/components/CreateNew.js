import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks';

const CreateNew = (props) => {
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')

  const navigate = useNavigate();
  const content = useField('content');
  const author = useField('author');
  const info = useField('info');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate('/');
  };

  const handleReset = (e) => {
    console.log('reset');
    content.onReset();
    author.onReset();
    info.onReset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
