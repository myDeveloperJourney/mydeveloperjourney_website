import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'temp123';

    const [state, handleSubmit] = useForm(formId);
    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    useEffect(() => {
        if (state.succeeded) {
            setDisplaySuccessMessage(true);
            setFormState({
                name: '',
                email: '',
                message: ''
            });
        }
    }, [state.succeeded]);

    useEffect(() => {
        if (displaySuccessMessage) {
            const timer = setTimeout(() => {
                setDisplaySuccessMessage(false);
            }, 3000); // Hide after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [displaySuccessMessage]);

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-6"
        >
            <div className="text-center mb-6 h-[18px]">
                {displaySuccessMessage && (
                    <p className="text-xl text-green-600 font-semibold">
                        Your message has been sent!
                    </p>
                )}
            </div>
            <div className="mb-4">
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-darkbgAlt border border-purpleAccent text-white focus:outline-none focus:ring-2 focus:ring-purpleAccent"
            />
            <ValidationError
                field="name"
                prefix="Name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
            />
            </div>
            <div className="mb-4">
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-darkbgAlt border border-purpleAccent text-white focus:outline-none focus:ring-2 focus:ring-purpleAccent"
            />
            <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
            />
            </div>
            <div className="mb-4">
            <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-darkbgAlt border border-purpleAccent text-white focus:outline-none focus:ring-2 focus:ring-purpleAccent" />
            <ValidationError
                field="message"
                prefix="Message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
            />
            </div>
            {/* Honeypot field */}
            <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
            />
            <button
                type="submit"
                className="w-full bg-purpleAccent text-black font-bold py-3 rounded hover:bg-purpleAccent/90 transition"
            >
                Send Message
            </button>
        </form>
    );
}