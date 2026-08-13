import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
}

const SmokeyCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // 🎨 يمكنك تغيير لون المؤشر والذيل من هنا فقط (بصيغة RGB)
    // أزرق نيون/سيان: "0, 225, 255"
    // أرجواني/بنفسجي: "168, 85, 247"
    // أخضر نيون: "34, 197, 94"
    // أصفر نيون: "234, 179, 8"
    const cursorColor = "0, 225, 255";

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const trailLength = 35;
        const trail: Point[] = Array(trailLength).fill({ ...pointer });

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            trail[0] = {
                x: trail[0].x + (pointer.x - trail[0].x) * 0.8,
                y: trail[0].y + (pointer.y - trail[0].y) * 0.8,
            };

            for (let i = 1; i < trailLength; i++) {
                trail[i] = {
                    x: trail[i].x + (trail[i - 1].x - trail[i].x) * 0.7,
                    y: trail[i].y + (trail[i - 1].y - trail[i].y) * 0.7,
                };
            }

            for (let i = trailLength - 1; i >= 0; i--) {
                const point = trail[i];
                const ratio = 1 - i / trailLength;

                const radius = Math.pow(ratio, 1.2) * 11 + 1.2;
                const alpha = Math.pow(ratio, 0.4);

                ctx.beginPath();
                // 🔹 استخدام المتغير لتغيير اللون بدلاً من الأبيض الثابت
                ctx.fillStyle = `rgba(${cursorColor}, ${alpha})`;
                ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        />
    );
};

export default SmokeyCursor;