fetch('events.json')
  .then(response => response.json())
  .then(events => {
    const list = document.getElementById('events-list');
    events.forEach(event => {
      const item = document.createElement('li');
      const date = new Date(event.date).toDateString();
      item.innerHTML = `${date}: ${event.description}` + 
        (event.pizza ? ' <span class="pizza">🍕 Pizza!</span>' : '');
      list.appendChild(item);
    });
  });
