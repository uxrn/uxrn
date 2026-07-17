// Initialize Vanta.js animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize CLOUDS effect on hero section
    const heroElement = document.getElementById('hero');
    if (heroElement && typeof VANTA !== 'undefined' && VANTA.CLOUDS) {
        VANTA.CLOUDS({
            el: heroElement,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            cloudColor: 0xcedcf9,
            sunColor: 0xff9400,
            sunGlareColor: 0x0,
            sunlightColor: 0xff9400,
            speed: 0.50
        });
    }

}); 
