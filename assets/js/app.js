const currentPage = document.getElementById('current-page')
const allPage = document.getElementById('all-page')

let currentSectionIndex = 0;
const sections = document.getElementsByClassName('page');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

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

window.addEventListener('scroll', handleScroll);
window.addEventListener('wheel', handleScroll);