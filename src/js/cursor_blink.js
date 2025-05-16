const cursor = document.querySelector('.cursor');

const toggleCursor = () => {
  if (cursor.style.display === 'none') {
    cursor.style.display = 'inline-block';
  } else {
    cursor.style.display = 'none';
  }
}

setInterval(toggleCursor, 600);