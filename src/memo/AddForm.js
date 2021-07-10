import React, { useEffect, useState } from 'react';
import usePersist from '../Persist';

function AddForm(props){
  const [memo, setMemo] = usePersist("memo", []);
  const [message, setMessage] = useState('');

  const doChange = (e) => {
    setMessage(e.target.value);
  }

  const doAction = (e) => {
    const data = {
      message: message,
      created: new Date()
    };
    memo.unshift(data);
    setMemo(memo);
    setMessage('');
    // e.preventDefault()しないとsubmitのアクションをした時にページをリロードする
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" value={message} onChange={doChange} required className="form-control-sm col"/>
        <input type="submit" value="Add" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default AddForm;