async function loadProfileData() {
    try {
        const response = await fetch('/profile');
        const profileData = await response.json();

        document.getElementById('profile-first-name').textContent = profileData.first_name;
        document.getElementById('profile-last-name').textContent = profileData.last_name;
        document.getElementById('profile-age').textContent = profileData.age;
        document.getElementById('profile-marriage').textContent = profileData.marriage;
        document.getElementById('profile-children').textContent = profileData.children;
        document.getElementById('profile-family').textContent = profileData.family;
        document.getElementById('profile-smoker').textContent = profileData.smoker;
        document.getElementById('profile-debt').textContent = profileData.debt;
        document.getElementById('profile-travel').textContent = profileData.travel;
        document.getElementById('profile-bio').textContent = profileData.bio;

        const connectionsContainer = document.getElementById('connections-container');
        connectionsContainer.innerHTML = ''; 

        profileData.connections.forEach(connection => {
            const connectionCard = document.createElement('div');
            connectionCard.className = 'connection-card';
            connectionCard.innerHTML = `
                <p>First Name: ${connection.first_name}</p>
                <p>Last Name: ${connection.last_name}</p>
                <p>Age: ${connection.age}</p>
                <p>Marriage: ${connection.marriage}</p>
                <p>Children: ${connection.children}</p>
                <p>Famly: ${connection.family}</p>
                <p>Smoker: ${connection.smoker}</p>
                <p>Debt: ${connection.debt}</p>
                <p>Travel: ${connection.travel}</p>
                <p>Bio: ${connection.bio}</p>
            `;

            connectionsContainer.appendChild(connectionCard);
        });

    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProfileData);

document.addEventListener('DOMContentLoaded', () => {
    const userIdElement = document.querySelector('.id-holder');
    if (!userIdElement) {
      console.error('User ID holder not found.');
      return;
    }
  
    const user_id = userIdElement.dataset.id;
  
    const disconnectBtnHandler = async (event) => {
      event.preventDefault();
  
      const connected_to_id = event.target.dataset.connectedToId;
  
      if (!connected_to_id) {
        console.error('Connected to ID not found.');
        return;
      }
  
      const response = await fetch(`/api/connections/${connected_to_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Connection removed!');
      } else {
        alert('Failed to remove connection.');
      }
    };
  
    document.querySelectorAll('.disconnect-btn').forEach(button => {
      button.addEventListener('click', disconnectBtnHandler);
    });
  });
  