//filter portfolio cards
document.addEventListener('DOMContentLoaded', () => {
    //grab buttons and cards
    const buttons = document.querySelectorAll('.filter-tabs button');
    const cards = document.querySelectorAll('.cards .card');
  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            //remove active class from every button
            buttons.forEach(btn => btn.classList.remove('active'));
            //add active class to clicked button
            button.classList.add('active');

        cards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            }
            else {
                if (card.classList.contains(filter)) {
                    card.classList.remove('hidden');
                }
                else {
                    card.classList.add('hidden');
                }
            }
        });
    });
    });
});
  
