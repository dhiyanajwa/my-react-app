/**
 * Chat service — calls the backend proxy at /api/chat
 */
export async function sendMessage(message, history = []) {
    const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to get a response.');
    }

    const data = await res.json();
    return data.reply;
}
