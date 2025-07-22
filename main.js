// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Dropdown toggle
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Form validation for registration
document.querySelector('.auth-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = this.querySelector('#password').value;
    const confirmPassword = this.querySelector('#confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Form is valid, proceed with registration
    alert('Registration successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
});

// Form validation for login
document.querySelector('.auth-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('#email').value;
    const password = this.querySelector('#password').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Form is valid, proceed with login
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
});