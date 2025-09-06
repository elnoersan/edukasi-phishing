document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const form = document.getElementById('phishing-form');
    const steps = {
        1: document.getElementById('step-1'),
        2: document.getElementById('step-2'),
        3: document.getElementById('step-3'),
    };

    form.addEventListener('submit', (e) => e.preventDefault());

    const showStep = (stepNumber) => {
        Object.values(steps).forEach(step => step.classList.add('hidden'));
        steps[stepNumber].classList.remove('hidden');
    };

    window.nextStep = () => {
        currentStep = 2;
        showStep(currentStep);
    };

    window.showFinalMessage = () => {
        currentStep = 3;
        showStep(currentStep);
    };

    window.resetDemo = () => {
        currentStep = 1;
        form.reset();
        showStep(currentStep);
    };

    showStep(currentStep);
});
