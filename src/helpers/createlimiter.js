import { rateLimit } from "express-rate-limit";

const createLimiter = (limit, min, msg) => {
    const limiter = rateLimit({
        windowMs: min * 60 * 1000,
        limit: limit,
        standardHeaders: 'draft-7',
        legacyHeaders: false,
        message: msg
    });
    
    return limiter;
};

export default createLimiter;