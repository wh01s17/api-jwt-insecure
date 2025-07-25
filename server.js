const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const SECRET = 'secret';

app.use(bodyParser.json());

const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'juan', password: 'test123', role: 'user' },
    { id: 3, username: 'ana', password: 'test123', role: 'user' },
];

// Endpoint: login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        u => u.username === username && u.password === password
    );
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        SECRET
    );

    res.json({ token });
});

// Middleware: verificar JWT
function authenticateToken(req, res, next) {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token requerido' });

    try {
        const payload = jwt.verify(token, SECRET);
        req.user = payload;
        next();
    } catch {
        res.status(403).json({ error: 'Token inválido' });
    }
}

// GET /api/users/me
app.get('/api/users/me', authenticateToken, (req, res) => {
    res.json(req.user);
});

// GET /api/users
app.get('/api/users', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin')
        return res.status(403).json({ error: 'Solo para admins' });

    res.json(users);
});

// PUT /api/users/:id/role
app.put('/api/users/:id/role', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin')
        return res.status(403).json({ error: 'Solo para admins' });

    const { id } = req.params;
    const { role } = req.body;
    const user = users.find(u => u.id == id);

    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    user.role = role;
    res.json({ message: 'Rol actualizado', user });
});

// Cabeceras de respuesta mínimas (para análisis)
app.use((req, res) => {
    res.setHeader('Server', 'Express');
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`API vulnerable corriendo en http://localhost:${PORT}`);
});
