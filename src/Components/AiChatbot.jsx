import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Fab,
    Paper,
    Typography,
    TextField,
    IconButton,
    Slide,
    Avatar,
    CircularProgress,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Tooltip from '@mui/material/Tooltip';
import { sendMessage } from '../ai-backend/chatService';

const INITIAL_MESSAGE = { role: 'ai', content: "Hi there! 👋 I'm the resume assistant. Ask me anything about Dhiya or Jason's skills, projects, or education!" };

const AiChatbot = ({ currentView }) => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to newest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    const handleSend = async () => {
        const text = input.trim();
        if (!text || loading) return;

        // Add user message
        const userMsg = { role: 'user', content: text };
        const updatedMessages = [...messages, userMsg];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);

        try {
            // Build history for the backend (skip the initial greeting)
            const history = updatedMessages
                .filter((_, i) => i > 0) // skip initial AI greeting
                .map((m) => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.content }));

            const reply = await sendMessage(text, history);
            setMessages((prev) => [...prev, { role: 'ai', content: reply }]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: 'ai', content: '⚠️ Sorry, something went wrong. Please try again.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleNewChat = () => {
        setMessages([INITIAL_MESSAGE]);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* ── Floating Action Button ─────────────────────────────────── */}
            {!open && (
                <Fab
                    color="secondary"
                    aria-label="Open AI Chat"
                    onClick={() => setOpen(true)}
                    sx={{
                        position: 'fixed',
                        bottom: 28,
                        right: 28,
                        zIndex: 1400,
                        width: 64,
                        height: 64,
                        boxShadow: '0 4px 20px rgba(52,152,219,0.45)',
                        animation: 'fabPulse 2s infinite',
                        '@keyframes fabPulse': {
                            '0%': { boxShadow: '0 4px 20px rgba(52,152,219,0.45)' },
                            '50%': { boxShadow: '0 4px 32px rgba(52,152,219,0.7)' },
                            '100%': { boxShadow: '0 4px 20px rgba(52,152,219,0.45)' },
                        },
                        '&:hover': {
                            transform: 'scale(1.08)',
                            transition: 'transform 0.2s',
                        },
                    }}
                >
                    <SmartToyIcon sx={{ fontSize: 32 }} />
                </Fab>
            )}

            {/* ── Chat Panel ─────────────────────────────────────────────── */}
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <Paper
                    elevation={12}
                    sx={{
                        position: 'fixed',
                        bottom: 28,
                        right: 28,
                        zIndex: 1500,
                        width: { xs: 'calc(100% - 32px)', sm: 400 },
                        maxHeight: { xs: '75vh', sm: 520 },
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        overflow: 'hidden',
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
                            color: '#fff',
                            px: 2.5,
                            py: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <SmartToyIcon />
                            <Box>
                                <Typography variant="subtitle1" fontWeight={700} lineHeight={1.2}>
                                    Resume Assistant
                                </Typography>
                                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                                    Powered by Groq AI
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Tooltip title="New Chat">
                                <IconButton size="small" onClick={handleNewChat} sx={{ color: '#fff' }}>
                                    <AddCommentIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Close">
                                <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>

                    {/* Messages */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowY: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                            backgroundColor: '#f8f9fb',
                            minHeight: 260,
                        }}
                    >
                        {messages.map((msg, idx) => {
                            const isUser = msg.role === 'user';
                            return (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: isUser ? 'flex-end' : 'flex-start',
                                        gap: 1,
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    {!isUser && (
                                        <Avatar
                                            sx={{
                                                width: 30,
                                                height: 30,
                                                bgcolor: 'secondary.main',
                                                fontSize: 16,
                                            }}
                                        >
                                            <SmartToyIcon sx={{ fontSize: 18 }} />
                                        </Avatar>
                                    )}
                                    <Box
                                        sx={{
                                            maxWidth: '78%',
                                            px: 2,
                                            py: 1.2,
                                            borderRadius: isUser
                                                ? '16px 16px 4px 16px'
                                                : '16px 16px 16px 4px',
                                            backgroundColor: isUser ? 'primary.main' : '#fff',
                                            color: isUser ? '#fff' : 'text.primary',
                                            boxShadow: isUser
                                                ? '0 2px 8px rgba(44,62,80,0.25)'
                                                : '0 1px 4px rgba(0,0,0,0.08)',
                                            fontSize: '0.9rem',
                                            lineHeight: 1.55,
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        {msg.content}
                                    </Box>
                                </Box>
                            );
                        })}

                        {/* Typing indicator */}
                        {loading && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar
                                    sx={{ width: 30, height: 30, bgcolor: 'secondary.main', fontSize: 16 }}
                                >
                                    <SmartToyIcon sx={{ fontSize: 18 }} />
                                </Avatar>
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1.2,
                                        borderRadius: '16px 16px 16px 4px',
                                        backgroundColor: '#fff',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <CircularProgress size={16} thickness={5} color="secondary" />
                                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                                        Thinking...
                                    </Typography>
                                </Box>
                            </Box>
                        )}

                        <div ref={messagesEndRef} />
                    </Box>

                    {/* Input area */}
                    <Box
                        sx={{
                            p: 1.5,
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            display: 'flex',
                            gap: 1,
                            backgroundColor: '#fff',
                        }}
                    >
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Ask about skills, projects, education..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 6,
                                    backgroundColor: '#f4f6f8',
                                },
                            }}
                        />
                        <IconButton
                            color="secondary"
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            sx={{
                                bgcolor: 'secondary.main',
                                color: '#fff',
                                borderRadius: 2,
                                width: 42,
                                height: 42,
                                '&:hover': { bgcolor: 'secondary.dark' },
                                '&.Mui-disabled': { bgcolor: '#ccc', color: '#fff' },
                            }}
                        >
                            <SendIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Paper>
            </Slide>
        </>
    );
};

export default AiChatbot;
