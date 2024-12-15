// Smooth Scroll Function for buttons
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 20,  // Offset to account for any header or spacing
        behavior: 'smooth'
    });
}
