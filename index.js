 function bookNow() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const pickup = document.getElementById('pickup').value;
            const drop = document.getElementById('drop').value;
            const carType = document.getElementById('car-type').value;

            if (!name || !phone || !date || !time || !pickup || !drop || !carType) {
                alert('Please fill all fields');
                return;
            }

            const message = `Hi Srikanth,%0A
*New Car Booking Request*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Date: ${date}%0A
Time: ${time}%0A
From: ${pickup}%0A
To: ${drop}%0A
Car: ${carType}%0A
%0A*Pricing:* ₹100 for first 150 km, then ₹15/km`;

            window.open(`https://wa.me/919640091779?text=${message}`, '_blank');
        }

        function quickBook(car) {
            document.getElementById('modalCarType').value = car;
            document.getElementById('bookingModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('bookingModal').style.display = 'none';
        }

        function confirmBooking() {
            const name = document.getElementById('modalName').value;
            const phone = document.getElementById('modalPhone').value;
            const date = document.getElementById('modalDate').value;
            const time = document.getElementById('modalTime').value;
            const pickup = document.getElementById('modalPickup').value;
            const drop = document.getElementById('modalDrop').value;
            const carType = document.getElementById('modalCarType').value;

            if (!name || !phone || !date || !time || !pickup || !drop || !carType) {
                alert('Please fill all fields');
                return;
            }

            const message = `Hi Srikanth,%0A
*New Car Booking Request*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Date: ${date}%0A
Time: ${time}%0A
From: ${pickup}%0A
To: ${drop}%0A
Car: ${carType}%0A
%0A*Pricing:* ₹100 for first 150 km, then ₹15/km`;

            window.open(`https://wa.me/919640091779?text=${message}`, '_blank');
            closeModal();
        }

        function openMap() {
            window.open('https://maps.google.com/?q=Bhagyanagar+Colony+Shadanagar+Hyderabad', '_blank');
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('bookingModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active link in bottom nav
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.bottom-nav a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        if(document.getElementById('date')) {
            document.getElementById('date').setAttribute('min', today);
        }
        if(document.getElementById('modalDate')) {
            document.getElementById('modalDate').setAttribute('min', today);
        }