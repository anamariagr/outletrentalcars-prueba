'use client';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
    to: string;
    label?: string;
    className?: string;
}

/**
 * Reusable Back Button component
 */
export default function BackButton({
    to,
    label = 'Volver',
    className = '',
}: BackButtonProps) {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.push(to)}
            className={`mr-2 text-blue-600 hover:text-blue-800 text-2xl ${className}`}
            aria-label={label}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
}
