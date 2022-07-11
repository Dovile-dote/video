import { useContext } from 'react';
import FrontContext from '../FrontContext';

function Message() {
  const { message } = useContext(FrontContext);

  if (null === message) {
    return null;
  }

  return (
    <div className="message">
      <div role="alert">{message.text}</div>
    </div>
  );
}

export default Message;
