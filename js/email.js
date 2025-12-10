// EmailJS Service
class EmailService {
    constructor() {
        this.initialized = false;
        this.init();
    }

    init() {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS is not loaded. Please check the script inclusion.');
            return;
        }

        try {
            // Initialize with your EmailJS public key
            emailjs.init("scrsB-ae9wiFNA4Yg");
            this.initialized = true;
            console.log('EmailJS initialized successfully');
        } catch (error) {
            console.error('Failed to initialize EmailJS:', error);
        }
    }

    // Function to generate a simple message ID
    generateMessageId() {
        return 'MSG_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Function to send auto-reply to user
    async sendAutoReply(userData) {
        if (!this.initialized) {
            throw new Error('EmailJS not initialized');
        }

        try {
            const autoReplyData = {
                to_name: userData.from_name,
                to_email: userData.from_email,
                user_name: userData.from_name,
                user_email: userData.from_email,
                from_name: 'Cephas Osei-Bonsu',
                subject: `We've received your message: ${userData.subject}`,
                user_subject: userData.subject,
                original_subject: userData.subject,
                date: new Date().toLocaleString(),
                message_id: this.generateMessageId(),
                reply_to: 'cephasbonsuosei003@gmail.com'
            };

            console.log('Sending auto-reply with data:', autoReplyData);

            const response = await emailjs.send(
                'service_jnet60c', // Your EmailJS service ID
                'template_ytrcu6f', // Your auto-reply template ID
                autoReplyData
            );

            console.log('Auto-reply sent to user successfully:', response);
            return { success: true, response };

        } catch (error) {
            console.error('Auto-reply to user failed:', error);
            let errorMessage = 'Unknown error';
            if (error.text) {
                errorMessage = error.text;
                console.error('EmailJS error details:', error.text);
            }
            return {
                success: false,
                error: errorMessage
            };
        }
    }

    // Function to send internal notification (to you)
    async sendInternalNotification(formData) {
        if (!this.initialized) {
            throw new Error('EmailJS not initialized');
        }

        try {
            const internalData = {
                from_name: formData.from_name,
                from_email: formData.from_email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Cephas Osei-Bonsu',
                reply_to: formData.from_email,
                date: formData.date,
                message_id: formData.message_id || this.generateMessageId()
            };

            console.log('Sending internal notification with data:', internalData);

            const response = await emailjs.send(
                'service_jnet60c', // Your EmailJS service ID
                'contact_reply', // Your contact template ID
                internalData
            );

            console.log('Internal notification sent successfully:', response);
            return { success: true, response };

        } catch (error) {
            console.error('Internal notification failed:', error);
            let errorMessage = 'Unknown error';
            if (error.text) {
                errorMessage = error.text;
                console.error('EmailJS error details:', error.text);
            }
            return {
                success: false,
                error: errorMessage
            };
        }
    }

    // Main function to handle form submission
    async handleFormSubmission(formData) {
        try {
            // Send both emails concurrently
            const [internalResult, autoReplyResult] = await Promise.allSettled([
                this.sendInternalNotification(formData),
                this.sendAutoReply(formData)
            ]);

            const internalSuccess = internalResult.status === 'fulfilled' && internalResult.value.success;
            const autoReplySuccess = autoReplyResult.status === 'fulfilled' && autoReplyResult.value.success;

            return {
                internalSuccess,
                autoReplySuccess,
                internalError: internalResult.status === 'rejected' ? internalResult.reason : null,
                autoReplyError: autoReplyResult.status === 'rejected' ? autoReplyResult.reason : null
            };

        } catch (error) {
            console.error('Form submission error:', error);
            return {
                internalSuccess: false,
                autoReplySuccess: false,
                error: error.message
            };
        }
    }
}

// Create global instance
const emailService = new EmailService();

// Form Handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }

    const statusMessage = document.getElementById('statusMessage');
    const submitBtn = contactForm.querySelector('.submit-btn');

    const showMessage = (message, isSuccess = true) => {
        if (!statusMessage) return;

        statusMessage.textContent = message;
        statusMessage.style.display = 'block';
        statusMessage.style.padding = '12px';
        statusMessage.style.borderRadius = '8px';
        statusMessage.style.marginTop = '15px';
        statusMessage.style.background = isSuccess ? 'rgba(16, 183, 255, 0.1)' : 'rgba(255, 71, 87, 0.1)';
        statusMessage.style.border = isSuccess ? '1px solid #10b7ff' : '1px solid #ff4757';
        statusMessage.style.color = isSuccess ? '#10b7ff' : '#ff4757';
        statusMessage.style.textAlign = 'center';
        statusMessage.style.fontWeight = '600';

        setTimeout(() => {
            if (statusMessage) {
                statusMessage.style.display = 'none';
            }
        }, 5000);
    };

    const setLoading = (isLoading) => {
        if (!submitBtn) return;

        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
            submitBtn.textContent = 'Sending...';
        } else {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.textContent = 'Send Message';
        }
    };

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const honeypot = document.getElementById('website')?.value.trim();
        if (honeypot) {
            console.warn('Submission blocked by honeypot field.');
            return;
        }

        const formData = {
            from_name: document.querySelector('input[name="name"]')?.value.trim() || '',
            from_email: document.querySelector('input[name="reply_to"]')?.value.trim() || '',
            subject: document.querySelector('input[name="title"]')?.value.trim() || '',
            message: document.querySelector('textarea[name="message"]')?.value.trim() || '',
            to_name: 'Cephas Osei-Bonsu',
            reply_to: document.querySelector('input[name="reply_to"]')?.value.trim() || '',
            date: new Date().toLocaleString()
        };

        console.log('Form data to be submitted:', formData);

        // Basic validation
        if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
            showMessage('Please fill in all fields.', false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.from_email)) {
            showMessage('Please enter a valid email address.', false);
            return;
        }

        setLoading(true);

        try {
            const result = await emailService.handleFormSubmission(formData);

            if (result.internalSuccess && result.autoReplySuccess) {
                showMessage('🎉 Thank you! Your message has been sent successfully. You will receive a confirmation email shortly!', true);
                contactForm.reset();
            } else if (result.internalSuccess && !result.autoReplySuccess) {
                showMessage('✅ Message received! However, there was an issue sending the confirmation email. We\'ll still get back to you soon!', true);
                contactForm.reset();
            } else if (!result.internalSuccess && result.autoReplySuccess) {
                showMessage('⚠️ Confirmation sent, but there was an issue delivering your message. Please try again or contact me directly.', false);
            } else {
                showMessage('❌ Sorry, there was an error sending your message. Please try again later or contact me directly at your email.', false);
            }

        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('❌ Sorry, there was an unexpected error. Please try again later.', false);
        } finally {
            setLoading(false);
        }
    });
});
