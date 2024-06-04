// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta');

    cta.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    });

    const matrixEffect = () => {
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = Array(256).join("1").split("");
        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00FF00";
            letters.map((y_pos, index) => {
                const text = String.fromCharCode(3e4 + Math.random() * 33);
                const x_pos = index * 10;
                ctx.fillText(text, x_pos, y_pos);
                letters[index] = (y_pos > canvas.height || Math.random() > 0.975) ? 0 : y_pos + 10;
            });
        };
        setInterval(draw, 33);
    };

    matrixEffect();

    window.addEventListener('resize', () => {
        const canvas = document.querySelector('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
