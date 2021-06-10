'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
      const results =['腕立て30回', '腹筋30回', 'スクワット30回', '1分休憩'];
    //   const n = Math.floor(Math.random() * results.length);
    //   btn.textContent = results[n];
      btn.textContent = results[Math.floor(Math.random() * results.length)];
    // btn.textContent=n;

    // switch (n) {
    //     case 0:
    //         btn.textContent = '腕立て30回'
    //         break;
    //     case 1:
    //         btn.textContent = '腹筋30回'
    //         break;
    //     case 2:
    //         btn.textContent = 'スクワット30回'
    //         break;
    // }
    });
}
