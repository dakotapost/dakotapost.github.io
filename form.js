document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Capture form data
    const data = {
        input1: document.getElementById('input1').value,
        input2: document.getElementById('input2').value,
        option1: document.querySelector('input[name="option1"]:checked')?.value || '',
        option2: document.querySelector('input[name="option2"]:checked')?.value || '',
        option3: document.querySelector('input[name="option3"]:checked')?.value || '',
        option4: document.querySelector('input[name="option4"]:checked')?.value || ''
    };

    // Send data to your backend API (replace '/api/save' with your endpoint)
    try {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Data submitted successfully!');
        } else {
            alert('Submission failed.');
        }
    } catch (error) {
        alert('Error submitting