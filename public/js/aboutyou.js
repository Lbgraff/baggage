
const ageSelect = document.getElementById('age');
for (let i = 18; i <= 100; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    ageSelect.appendChild(option);
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('signupBtn');

    submitButton.addEventListener('click', function () {
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const marriage = document.getElementById('marriage').value;
        const children = document.getElementById('children').value;
        const family = document.getElementById('family').value;
        const smoker = document.getElementById('smoker').value;
        const debt = document.getElementById('debt').value;
        const travel = document.getElementById('travel').value;
        const bio = document.getElementById('bio').value.trim();



        if (!email || !password || !firstName || !lastName || !age || !gender) {
            alert('Please fill in all required fields.');
            return;
        }

        const formData = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            age: parseInt(age, 10), 
            gender: gender,
            marriage: marriage,
            children: children,
            family: family,
            smoker: smoker,
            debt: debt,
            travel: travel,
            bio: bio,

        };

        console.log('FormData being sent:', formData);

        fetch('api/users/about_you', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Signup successful!');
            window.location.href = '/';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was a problem with the signup.');
        });
    });
});
