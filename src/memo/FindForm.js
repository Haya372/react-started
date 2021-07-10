import React, { useEffect, useState } from 'react';
import usePersist from '../Persist';

function FindForm(props){
  const [memo,] = usePersist("memo", []);
  const [fmemo, setFmemo] = usePersist("findMemo", []);
  const [message, setMessage] = useState('');
  const [mode, setMode] = usePersist('mode', 'find');

  const doChange = (e) => {
    setMessage(e.target.value);
  }

  const doAction = (e) => {
    if(message == ''){
      setMode('default');
      return;
    }
    let res = memo.filter((item, key) => {
      return item.message.includes(message);
    });
    setFmemo(res);
    setMode('find');
    setMessage('');
    // e.preventDefault()しないとsubmitのアクションをした時にページをリロードする
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" value={message} onChange={doChange} className="form-control-sm col" />
        <input type="submit" value="Find" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default FindForm;