import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 100 requests per minute
});
