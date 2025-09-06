document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const totalSteps = 4;
    const form = document.getElementById('phishing-form');
    const formSteps = document.querySelectorAll('.form-step');
    const progressLine = document.getElementById('progress-line');
    const stepIndicators = document.querySelectorAll('.progress-step');

    form.addEventListener('submit', (e) => e.preventDefault());

    const showStep = (stepNumber) => {
        formSteps.forEach(step => step.classList.add('hidden'));
        document.getElementById(`step-${stepNumber}`).classList.remove('hidden');
        updateProgressBar(stepNumber);
    };

    const updateProgressBar = (stepNumber) => {
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index < stepNumber);
        });
        const progressPercentage = ((stepNumber - 1) / (stepIndicators.length - 1)) * 100;
        progressLine.style.width = `${progressPercentage}%`;
    };

    window.nextStep = () => {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    };

    window.prevStep = () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    };

    window.submitForm = () => {
        currentStep = 4;
        showStep(currentStep);
    };

    window.resetDemo = () => {
        currentStep = 1;
        form.reset();
        showStep(currentStep);
    };

    showStep(currentStep);
});
