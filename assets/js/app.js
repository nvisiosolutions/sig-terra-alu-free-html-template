const currentPage = document.getElementById('current-page')
const allPage = document.getElementById('all-page')

let currentSectionIndex = 0;
const sections = document.getElementsByClassName('page');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let touchStartY;

// Initialize Current page and total page
const currentSection = currentSectionIndex + 1;
const totalSections = sections.length;

currentPage.innerHTML = currentSection
allPage.innerHTML = totalSections

prevButton.disabled = true
nextButton.disabled = false

function showSection(index) {
    if (index >= 0 && index < sections.length) {
        const currentSection = sections[currentSectionIndex];
        const nextSection = sections[index];

        if (index > currentSectionIndex) {
            // Show next section
            currentSection.style.transform = `translateY(-100%)`;
            nextSection.style.transform = `translateY(0)`;
        } else {
            // Show previous section
            currentSection.style.transform = `translateY(100%)`;
            nextSection.style.transform = `translateY(0)`;
        }

        currentSectionIndex = index;
        updateSectionInfo()
    }
}

function showNext() {
    showSection(currentSectionIndex + 1);
    handleDisabledButton()
}

function showPrevious() {
    showSection(currentSectionIndex - 1);
    handleDisabledButton()
}

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
  }

function handleTouchMove(event) {
    const touchEndY = event.changedTouches[0].clientY
    const touchDiff = touchEndY - touchStartY;
    if (touchDiff > 0 && touchDiff > 50) {
        showPrevious();
    } else if (touchDiff < 0 && Math.abs(touchDiff) > 50) {
        showNext();
    }
}

function updateSectionInfo() {
    const currentSection = currentSectionIndex + 1;
    const totalSections = sections.length;

    currentPage.innerHTML = currentSection
    allPage.innerHTML = totalSections
}

function handleScroll(event) {
    const delta = Math.sign(event.deltaY);

    if (delta > 0) {
        showNext();
    } else if (delta < 0) {
        showPrevious();
    }

    handleDisabledButton()
}

function handleDisabledButton() {
    if (currentSectionIndex === 0) {
        prevButton.disabled = true
        nextButton.disabled = false
    } else if (currentSectionIndex === sections.length - 1) {
        prevButton.disabled = false
        nextButton.disabled = true
    } else {
        prevButton.disabled = false
        nextButton.disabled = false
    }
}

window.addEventListener('touchstart', handleTouchStart);
window.addEventListener('touchend', handleTouchMove);
window.addEventListener('wheel', handleScroll);