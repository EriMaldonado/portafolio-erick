"use client";
import React, { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  life: number;
  color: string;
  pulseOffset: number;
};

interface NeuralNetworkMovingProps {
  darkMode?: boolean;
}

const NeuralNetworkMoving: React.FC<NeuralNetworkMovingProps> = ({
  darkMode = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let nodes: Node[] = [];
    const baseNodeCount = 140;
    const maxDistance = 140;
    const maxNodes = 180;
    const mouseTrail: { x: number; y: number; life: number }[] = [];
    const mouse = { x: width / 2, y: height / 2, active: false };

    const createNode = (): Node => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.08,
      dy: (Math.random() - 0.5) * 0.08,
      size: 2.5,
      life: 1000 + Math.random() * 1000,
      color: darkMode ? "#AFCBFF" : "rgba(100,100,100,0.3)",
      pulseOffset: Math.random() * Math.PI * 2,
    });

    for (let i = 0; i < baseNodeCount; i++) nodes.push(createNode());

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const opacity = 1 - dist / maxDistance;
            ctx.strokeStyle = darkMode
              ? `rgba(150,190,255,${opacity * 0.12})`
              : `rgba(180,180,180,${opacity * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node, idx) => {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x < 0 || node.x > width) node.dx *= -1;
        if (node.y < 0 || node.y > height) node.dy *= -1;

        node.life -= 1;
        if (node.life <= 0) {
          nodes[idx] = createNode();
          return;
        }

        mouseTrail.forEach((trail) => {
          const dx = trail.x - node.x;
          const dy = trail.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const force = (1 - dist / 80) * 0.015;
            node.x += dx * force;
            node.y += dy * force;
          }
        });

        const distMouse = Math.sqrt(
          (mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2
        );
        if (mouse.active && distMouse < 25 && Math.random() < 0.2) {
          nodes[idx] = createNode();
        }

        node.size = 2.5 + Math.sin(time / 1000 + node.pulseOffset) * 0.5;
        const haloColor = darkMode
          ? `rgba(160,190,255,${0.1 + node.size / 25})`
          : `rgba(200,200,200,${0.04 + node.size / 25})`;

        ctx.fillStyle = haloColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        mouseTrail[i].life -= 1;
        if (mouseTrail[i].life <= 0) mouseTrail.splice(i, 1);
      }
      if (nodes.length < maxNodes && Math.random() < 0.015) {
        nodes.push(createNode());
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      mouseTrail.push({ x: e.clientX, y: e.clientY, life: 40 });
      if (mouseTrail.length > 50) mouseTrail.shift();
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 transition-colors duration-500"
    />
  );
};

export default NeuralNetworkMoving;
