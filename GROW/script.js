document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reg-form');
    const confirmation = document.getElementById('confirmation');
    const ticketCount = document.getElementById('ticket-count');
    let tickets = 20;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate ticket decrement
        if (tickets > 0) {
            tickets--;
            ticketCount.textContent = tickets;
            
            // Show confirmation
            form.classList.add('hidden');
            confirmation.classList.remove('hidden');
            
            // Submit to Formspree (handled by form action)
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (!response.ok) {
                    console.error('Form submission failed');
                }
            });
        }
        
        if (tickets === 0) {
            form.querySelector('button').disabled = true;
            form.querySelector('button').textContent = 'Sold Out';
        }
    });
});