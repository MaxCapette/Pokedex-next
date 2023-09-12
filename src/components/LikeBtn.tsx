'use client';

import { useState } from 'react';

function LikeBtn() {
  const [nb, setNb] = useState(0);

  return (
    <button
      type="button"
      onClick={() => { setNb(nb + 1); }}
    >
      {nb}
      ❤️
    </button>
  );
}

export default LikeBtn;
