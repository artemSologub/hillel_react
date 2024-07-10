import React, { useState } from 'react';

export default function Button(props) {
  const [data, setData] = useState(props);

  return <button>{data.buttonName}</button>;
}
