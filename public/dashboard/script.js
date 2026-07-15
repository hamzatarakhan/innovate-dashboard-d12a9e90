
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize Lucide icons
            lucide.createIcons();

            // --- Dynamic Greeting and Time ---
            const greetingEl = document.getElementById('greeting');
            const dateTimeEl = document.getElementById('current-date-time');
            const userName = "Alex"; // This could be fetched from a server

            function updateTime() {
                const now = new Date();
                const hour = now.getHours();
                let greetingText;

                if (hour < 12) {
                    greetingText = `Good Morning, ${userName}!`;
                } else if (hour < 18) {
                    greetingText = `Good Afternoon, ${userName}!`;
                } else {
                    greetingText = `Good Evening, ${userName}!`;
                }
                greetingEl.textContent = greetingText;

                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
                dateTimeEl.textContent = now.toLocaleDateString('en-US', options);
            }
            updateTime();
            setInterval(updateTime, 1000 * 60); // Update every minute

            // --- Notification Banner ---
            const notifications = [
                { label: 'Company Town Hall:', text: "This Friday at 3 PM. Don't miss the important updates!" },
                { label: 'New Message:', text: 'Priya Sharma sent you a message in #design-team.' },
                { label: 'Reminder:', text: 'Your timesheet for this week is due tomorrow.' },
                { label: 'Policy Update:', text: 'The remote work policy has been updated. Please review it.' },
                { label: 'Shoutout:', text: 'Rohan Mehta gave you kudos for your recent work!' },
            ];
            const banner = document.getElementById('announcement-banner');
            const bannerMessage = document.getElementById('banner-message');
            const dismissBtn = document.getElementById('dismiss-banner');
            let notificationIndex = 0;

            function renderNotification() {
                const notification = notifications[notificationIndex];
                bannerMessage.innerHTML = `<strong>${notification.label}</strong> ${notification.text}`;
            }

            function hideBanner() {
                banner.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                banner.style.opacity = '0';
                banner.style.transform = 'scale(0.95)';
                setTimeout(() => banner.remove(), 500);
            }

            if (banner && bannerMessage && dismissBtn) {
                renderNotification();
                dismissBtn.addEventListener('click', () => {
                    notificationIndex++;
                    if (notificationIndex < notifications.length) {
                        banner.style.transition = 'opacity 0.2s ease';
                        banner.style.opacity = '0';
                        setTimeout(() => {
                            renderNotification();
                            banner.style.opacity = '1';
                        }, 200);
                    } else {
                        hideBanner();
                    }
                });
            }

            // --- Upcoming Events Data & Rendering ---
            const events = [
                { title: 'Project Phoenix Kick-off', time: '10:00 AM', type: 'meeting', color: 'blue' },
                { title: 'Yoga & Mindfulness Session', time: '12:30 PM', type: 'wellness', color: 'green' },
                { title: 'Q3 Design Review', time: '2:00 PM', type: 'review', color: 'purple' },
            ];
            const eventsContainer = document.getElementById('events-container');

            events.forEach(event => {
                const eventEl = document.createElement('div');
                eventEl.className = 'flex items-center gap-4';
                eventEl.innerHTML = `
                    <div class="w-12 h-12 rounded-lg bg-${event.color}-100 flex items-center justify-center flex-shrink-0">
                        <i data-lucide="${event.type === 'meeting' ? 'briefcase' : event.type === 'wellness' ? 'heart' : 'figma'}" class="w-6 h-6 text-${event.color}-600"></i>
                    </div>
                    <div class="flex-1">
                        <p class="font-semibold">${event.title}</p>
                        <p class="text-sm text-gray-500">${event.time}</p>
                    </div>
                    <button data-event-title="${event.title}" class="rsvp-btn bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">RSVP</button>
                `;
                eventsContainer.appendChild(eventEl);
            });
            lucide.createIcons(); // Re-run for dynamically added icons

            // --- RSVP Modal Logic ---
            const modal = document.getElementById('rsvp-modal');
            const modalContent = modal.querySelector('.transform');
            const closeModalBtn = document.getElementById('close-modal-btn');
            const modalCancelBtn = document.getElementById('modal-cancel-btn');
            const modalTitle = document.getElementById('modal-title');
            const modalDetails = document.getElementById('modal-event-details');

            function openModal(title) {
                modalTitle.textContent = `RSVP for ${title}`;
                modalDetails.textContent = `You'll be added to the guest list for "${title}".`;
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                }, 10);
            }

            function closeModal() {
                modalContent.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                   modal.classList.add('hidden');
                }, 300);
            }

            document.querySelectorAll('.rsvp-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    openModal(e.currentTarget.dataset.eventTitle);
                });
            });

            closeModalBtn.addEventListener('click', closeModal);
            modalCancelBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // --- Blogs Carousel ---
            const blogs = [
                { title: 'Designing for Focus: Our New Branding Guide', category: 'Design', author: 'Priya Sharma', date: 'Jul 12, 2026', excerpt: 'How we rebuilt our visual identity around clarity, and what it means for every team.', cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80&auto=format&fit=crop' },
                { title: 'Cutting Query Times by 30%', category: 'Engineering', author: 'Rohan Mehta', date: 'Jul 8, 2026', excerpt: 'A deep dive into the database optimizations powering our faster dashboards.', cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop' },
                { title: '3 Years of Product Lessons', category: 'Product', author: 'Anjali Rao', date: 'Jul 1, 2026', excerpt: 'Reflections on shipping, listening to users, and growing with Innovate Inc.', cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop' }
            ];
            const blogTrack = document.getElementById('blog-carousel');
            const blogDots = document.getElementById('blog-dots');
            const blogPrev = document.getElementById('blog-prev');
            const blogNext = document.getElementById('blog-next');
            let currentSlide = 0;

            blogs.forEach(blog => {
                const slide = document.createElement('div');
                slide.className = 'w-full flex-shrink-0 px-1';
                slide.innerHTML = `
                    <img src="${blog.cover}" class="w-full h-28 object-cover rounded-lg mb-3">
                    <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider">${blog.category}</span>
                    <h4 class="font-bold text-lg mt-1">${blog.title}</h4>
                    <p class="text-sm text-gray-600 mt-1">${blog.excerpt}</p>
                    <p class="text-xs text-gray-500 mt-2">${blog.author} &middot; ${blog.date}</p>
                `;
                blogTrack.appendChild(slide);

                const dot = document.createElement('button');
                dot.className = 'w-2.5 h-2.5 rounded-full transition-colors';
                blogDots.appendChild(dot);
            });

            function updateCarousel() {
                blogTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
                blogDots.querySelectorAll('button').forEach((dot, index) => {
                    dot.className = 'w-2.5 h-2.5 rounded-full transition-colors ' + (index === currentSlide ? 'bg-blue-600' : 'bg-gray-300');
                });
            }

            function goToSlide(index) {
                currentSlide = (index + blogs.length) % blogs.length;
                updateCarousel();
            }

            blogPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
            blogNext.addEventListener('click', () => goToSlide(currentSlide + 1));
            blogDots.querySelectorAll('button').forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(index));
            });

            // Swipe support
            let touchStartX = 0;
            blogTrack.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
            blogTrack.addEventListener('touchend', (e) => {
                const deltaX = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(deltaX) > 40) goToSlide(currentSlide + (deltaX < 0 ? 1 : -1));
            });

            updateCarousel();

            // --- Surveys ---
            const surveys = [
                { id: 'engagement', title: 'Employee Engagement Survey', due: 'Jul 18, 2026', color: 'blue', questions: [
                    { type: 'rating', text: 'How satisfied are you with your current role?' },
                    { type: 'choice', text: 'How often do you feel recognized for your work?', options: ['Weekly', 'Monthly', 'Rarely', 'Never'] },
                    { type: 'rating', text: 'How likely are you to recommend Innovate Inc. as a place to work?' },
                    { type: 'choice', text: 'Which area should leadership focus on most?', options: ['Career growth', 'Compensation', 'Work-life balance', 'Team culture'] },
                    { type: 'text', text: 'What one change would improve your day-to-day work?' },
                ]},
                { id: 'remote', title: 'Remote Work Experience', due: 'Jul 22, 2026', color: 'purple', questions: [
                    { type: 'choice', text: 'Where do you work most days?', options: ['Home', 'Office', 'Hybrid', 'Co-working space'] },
                    { type: 'rating', text: 'Rate your home-office setup.' },
                    { type: 'choice', text: 'What is your biggest remote-work challenge?', options: ['Communication', 'Distractions', 'Loneliness', 'Tooling'] },
                    { type: 'text', text: 'Any suggestions to improve remote collaboration?' },
                ]},
                { id: 'manager', title: 'Q2 Manager Feedback', due: 'Jul 10, 2026', color: 'green', questions: [
                    { type: 'rating', text: 'How well does your manager communicate expectations?' },
                    { type: 'rating', text: 'How supported do you feel in your career growth?' },
                    { type: 'text', text: 'What should your manager keep doing or change?' },
                ]},
                { id: 'cafeteria', title: 'Office Cafeteria Feedback', due: 'Jul 30, 2026', color: 'orange', questions: [
                    { type: 'rating', text: 'Rate the overall food quality.' },
                    { type: 'choice', text: 'Which cuisine day is your favorite?', options: ['Indian', 'Italian', 'Asian', 'Salad bar'] },
                    { type: 'text', text: 'What would you add to the menu?' },
                ]},
            ];
            const surveysContainer = document.getElementById('surveys-container');
            const SURVEY_STORAGE_KEY = 'innovate-survey-state';

            let surveyState = JSON.parse(localStorage.getItem(SURVEY_STORAGE_KEY) || 'null') || {
                engagement: { status: 'new', answers: {}, current: 0 },
                remote: { status: 'in-progress', answers: { 0: 'Home' }, current: 1 },
                manager: { status: 'completed', answers: {}, current: 0 },
                cafeteria: { status: 'new', answers: {}, current: 0 },
            };

            function saveSurveyState() {
                localStorage.setItem(SURVEY_STORAGE_KEY, JSON.stringify(surveyState));
            }

            const surveyStatusStyles = {
                'new': { label: 'New', badge: 'bg-blue-100 text-blue-700', action: 'Start' },
                'in-progress': { label: 'In Progress', badge: 'bg-yellow-100 text-yellow-700', action: 'Continue' },
                'completed': { label: 'Completed', badge: 'bg-green-100 text-green-700', action: null },
            };

            function renderSurveys() {
                surveysContainer.innerHTML = '';
                surveys.forEach(survey => {
                    const state = surveyState[survey.id];
                    const status = surveyStatusStyles[state.status];
                    const surveyEl = document.createElement('div');
                    surveyEl.className = 'flex items-center gap-4 p-3 bg-white/60 rounded-lg';
                    surveyEl.innerHTML = `
                        <div class="w-10 h-10 rounded-lg bg-${survey.color}-100 flex items-center justify-center flex-shrink-0">
                            <i data-lucide="clipboard-list" class="w-5 h-5 text-${survey.color}-600"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2">
                                <p class="font-semibold truncate">${survey.title}</p>
                                <span class="text-xs font-medium px-2 py-0.5 rounded-full ${status.badge}">${status.label}</span>
                            </div>
                            <p class="text-sm text-gray-500">${survey.questions.length} questions &middot; Due ${survey.due}</p>
                        </div>
                        ${status.action ? `<button class="survey-action-btn bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors flex-shrink-0">${status.action}</button>` : `<i data-lucide="check-circle" class="w-5 h-5 text-green-500 flex-shrink-0"></i>`}
                    `;
                    const actionBtn = surveyEl.querySelector('.survey-action-btn');
                    if (actionBtn) {
                        actionBtn.addEventListener('click', () => openSurveyModal(survey));
                    }
                    surveysContainer.appendChild(surveyEl);
                });
                lucide.createIcons(); // Re-run for dynamically added icons
            }

            // --- Survey Modal ---
            const surveyModal = document.getElementById('survey-modal');
            const surveyModalContent = surveyModal.querySelector('.transform');
            const surveyModalTitle = document.getElementById('survey-modal-title');
            const surveyCloseBtn = document.getElementById('survey-close-btn');
            const surveyProgressLabel = document.getElementById('survey-progress-label');
            const surveyProgressPct = document.getElementById('survey-progress-pct');
            const surveyProgressBar = document.getElementById('survey-progress-bar');
            const surveyQuestionArea = document.getElementById('survey-question-area');
            const surveyBackBtn = document.getElementById('survey-back-btn');
            const surveyNextBtn = document.getElementById('survey-next-btn');

            let activeSurvey = null;
            let activeIndex = 0;

            function openSurveyModal(survey) {
                activeSurvey = survey;
                activeIndex = Math.min(surveyState[survey.id].current, survey.questions.length - 1);
                surveyModalTitle.textContent = survey.title;
                surveyModal.classList.remove('hidden');
                setTimeout(() => surveyModalContent.classList.remove('scale-95', 'opacity-0'), 10);
                renderSurveyQuestion();
            }

            function closeSurveyModal() {
                const state = surveyState[activeSurvey.id];
                if (state.status !== 'completed') {
                    state.status = Object.keys(state.answers).length > 0 ? 'in-progress' : 'new';
                    state.current = activeIndex;
                }
                saveSurveyState();
                renderSurveys();
                surveyModalContent.classList.add('scale-95', 'opacity-0');
                setTimeout(() => surveyModal.classList.add('hidden'), 300);
            }

            function renderSurveyQuestion() {
                const questions = activeSurvey.questions;
                const state = surveyState[activeSurvey.id];
                const question = questions[activeIndex];
                const answer = state.answers[activeIndex];

                surveyProgressLabel.textContent = `Question ${activeIndex + 1} of ${questions.length}`;
                const pct = Math.round((activeIndex / questions.length) * 100);
                surveyProgressPct.textContent = `${pct}%`;
                surveyProgressBar.style.width = `${pct}%`;

                let controls = '';
                if (question.type === 'choice') {
                    controls = `<div class="space-y-2">${question.options.map(opt => `
                        <button data-value="${opt}" class="survey-option w-full text-left p-3 rounded-lg transition-colors ${answer === opt ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}">${opt}</button>
                    `).join('')}</div>`;
                } else if (question.type === 'rating') {
                    controls = `
                        <div class="flex justify-center gap-3">${[1, 2, 3, 4, 5].map(n => `
                            <button data-value="${n}" class="survey-option w-11 h-11 rounded-full font-semibold transition-colors ${answer === n ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}">${n}</button>
                        `).join('')}</div>
                        <div class="flex justify-between text-xs text-gray-400 mt-2 px-1"><span>Not at all</span><span>Very much</span></div>
                    `;
                } else {
                    controls = `<textarea id="survey-text-input" class="w-full h-28 p-3 bg-gray-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your answer...">${answer || ''}</textarea>`;
                }

                surveyQuestionArea.innerHTML = `<p class="font-medium mb-4">${question.text}</p>${controls}`;

                surveyQuestionArea.querySelectorAll('.survey-option').forEach(btn => {
                    btn.addEventListener('click', () => {
                        state.answers[activeIndex] = question.type === 'rating' ? parseInt(btn.dataset.value) : btn.dataset.value;
                        saveSurveyState();
                        renderSurveyQuestion();
                    });
                });
                const textInput = surveyQuestionArea.querySelector('#survey-text-input');
                if (textInput) {
                    textInput.addEventListener('input', () => {
                        if (textInput.value.trim()) {
                            state.answers[activeIndex] = textInput.value;
                        } else {
                            delete state.answers[activeIndex];
                        }
                        saveSurveyState();
                        updateSurveyNav();
                    });
                }

                surveyBackBtn.style.visibility = activeIndex === 0 ? 'hidden' : 'visible';
                surveyNextBtn.textContent = activeIndex === questions.length - 1 ? 'Submit' : 'Next';
                surveyNextBtn.onclick = handleSurveyNext;
                updateSurveyNav();
            }

            function updateSurveyNav() {
                const state = surveyState[activeSurvey.id];
                surveyNextBtn.disabled = state.answers[activeIndex] === undefined;
            }

            function handleSurveyNext() {
                const questions = activeSurvey.questions;
                if (activeIndex < questions.length - 1) {
                    activeIndex++;
                    renderSurveyQuestion();
                } else {
                    const state = surveyState[activeSurvey.id];
                    state.status = 'completed';
                    state.current = 0;
                    saveSurveyState();
                    renderSurveys();
                    showSurveyThankYou();
                }
            }

            function showSurveyThankYou() {
                surveyProgressLabel.textContent = 'Completed';
                surveyProgressPct.textContent = '100%';
                surveyProgressBar.style.width = '100%';
                surveyQuestionArea.innerHTML = `
                    <div class="text-center py-8">
                        <i data-lucide="check-circle" class="w-14 h-14 text-green-500 mx-auto mb-4"></i>
                        <h4 class="font-bold text-lg">Thanks for your feedback!</h4>
                        <p class="text-sm text-gray-500 mt-1">Your responses have been submitted.</p>
                    </div>
                `;
                lucide.createIcons();
                surveyBackBtn.style.visibility = 'hidden';
                surveyNextBtn.textContent = 'Done';
                surveyNextBtn.disabled = false;
                surveyNextBtn.onclick = closeSurveyModal;
            }

            surveyCloseBtn.addEventListener('click', closeSurveyModal);
            surveyModal.addEventListener('click', (e) => {
                if (e.target === surveyModal) {
                    closeSurveyModal();
                }
            });

            renderSurveys();

            // --- Digital Sticky Notes ---
            const addNoteBtn = document.getElementById('add-note-btn');
            const notesContainer = document.getElementById('sticky-notes-container');
            const noteColors = ['yellow-200', 'green-200', 'pink-200', 'blue-200', 'purple-200'];

            function createStickyNote() {
                const noteEl = document.createElement('div');
                const color = noteColors[Math.floor(Math.random() * noteColors.length)];
                noteEl.className = `sticky-note p-4 rounded-lg shadow-md h-40 flex flex-col justify-between bg-${color} fade-in`;
                
                noteEl.innerHTML = `
                    <textarea class="bg-transparent border-none focus:ring-0 w-full h-full resize-none text-sm text-gray-800 p-0" placeholder="Type something..."></textarea>
                    <button class="delete-note-btn self-end text-gray-500 hover:text-red-500 p-1">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                `;
                
                notesContainer.prepend(noteEl);
                lucide.createIcons(); // Re-run for new icon

                noteEl.querySelector('.delete-note-btn').addEventListener('click', () => {
                    noteEl.style.transition = 'opacity 0.3s, transform 0.3s';
                    noteEl.style.opacity = '0';
                    noteEl.style.transform = 'scale(0.8)';
                    setTimeout(() => noteEl.remove(), 300);
                });
            }

            addNoteBtn.addEventListener('click', createStickyNote);
            // Add a default note to start
            createStickyNote();


        });
    