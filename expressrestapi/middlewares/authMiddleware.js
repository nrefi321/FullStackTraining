import * as jwtUtils from '../utils/jwtUtils.js';

const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('Unauthorized');
    }

    // Bearer token ที่ส่งมาด้วย จะมีรูปแบบดังนี้: Bearer <token> 
    // ดังนั้นเราต้องตัดคำว่า Bearer ออก เพื่อให้ได้แค่ token 
    const token = authHeader.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send('Unauthorized (no token found)');
    }

    try {
        const payload = jwtUtils.verifyAccessToken(token);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(403).send('Invalid or expired token');
    }
}

export default authenticateJWT;