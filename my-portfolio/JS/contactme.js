let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('counter-display').innerText = count;