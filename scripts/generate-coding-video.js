const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Simple 5x7 ASCII bitmap font for ultra-crisp, zero-dependency code rendering
const FONT = {
  ' ': [0,0,0,0,0],
  'a': [0x20, 0x54, 0x54, 0x78, 0x40],
  'b': [0x7f, 0x48, 0x44, 0x44, 0x38],
  'c': [0x38, 0x44, 0x44, 0x44, 0x20],
  'd': [0x38, 0x44, 0x44, 0x48, 0x7f],
  'e': [0x38, 0x54, 0x54, 0x54, 0x18],
  'f': [0x08, 0x7e, 0x09, 0x01, 0x02],
  'g': [0x0c, 0x52, 0x52, 0x52, 0x3e],
  'h': [0x7f, 0x08, 0x04, 0x04, 0x78],
  'i': [0x00, 0x44, 0x7d, 0x40, 0x00],
  'j': [0x20, 0x40, 0x44, 0x3d, 0x00],
  'k': [0x7f, 0x10, 0x28, 0x44, 0x00],
  'l': [0x00, 0x41, 0x7f, 0x40, 0x00],
  'm': [0x7c, 0x04, 0x18, 0x04, 0x78],
  'n': [0x7c, 0x08, 0x04, 0x04, 0x78],
  'o': [0x38, 0x44, 0x44, 0x44, 0x38],
  'p': [0x7c, 0x14, 0x14, 0x14, 0x08],
  'q': [0x08, 0x14, 0x14, 0x18, 0x7c],
  'r': [0x7c, 0x08, 0x04, 0x04, 0x08],
  's': [0x48, 0x54, 0x54, 0x54, 0x20],
  't': [0x04, 0x3f, 0x44, 0x40, 0x20],
  'u': [0x3c, 0x40, 0x40, 0x20, 0x7c],
  'v': [0x1c, 0x20, 0x40, 0x20, 0x1c],
  'w': [0x3c, 0x40, 0x30, 0x40, 0x3c],
  'x': [0x44, 0x28, 0x10, 0x28, 0x44],
  'y': [0x0c, 0x50, 0x50, 0x50, 0x3c],
  'z': [0x44, 0x64, 0x54, 0x4c, 0x44],
  'A': [0x7e, 0x11, 0x11, 0x11, 0x7e],
  'B': [0x7f, 0x49, 0x49, 0x49, 0x36],
  'C': [0x3e, 0x41, 0x41, 0x41, 0x22],
  'D': [0x7f, 0x41, 0x41, 0x22, 0x1c],
  'E': [0x7f, 0x49, 0x49, 0x49, 0x41],
  'F': [0x7f, 0x09, 0x09, 0x09, 0x01],
  'G': [0x3e, 0x41, 0x49, 0x49, 0x7a],
  'H': [0x7f, 0x08, 0x08, 0x08, 0x7f],
  'I': [0x00, 0x41, 0x7f, 0x41, 0x00],
  'L': [0x7f, 0x40, 0x40, 0x40, 0x40],
  'M': [0x7f, 0x02, 0x0c, 0x02, 0x7f],
  'N': [0x7f, 0x04, 0x08, 0x10, 0x7f],
  'P': [0x7f, 0x09, 0x09, 0x09, 0x06],
  'R': [0x7f, 0x09, 0x19, 0x29, 0x46],
  'S': [0x46, 0x49, 0x49, 0x49, 0x31],
  'T': [0x01, 0x01, 0x7f, 0x01, 0x01],
  'W': [0x7f, 0x20, 0x18, 0x20, 0x7f],
  '0': [0x3e, 0x51, 0x49, 0x45, 0x3e],
  '1': [0x00, 0x42, 0x7f, 0x40, 0x00],
  '2': [0x42, 0x61, 0x51, 0x49, 0x46],
  '3': [0x21, 0x41, 0x45, 0x4b, 0x31],
  '4': [0x18, 0x14, 0x12, 0x7f, 0x10],
  '5': [0x27, 0x45, 0x45, 0x45, 0x39],
  '6': [0x3c, 0x4a, 0x49, 0x49, 0x30],
  '7': [0x01, 0x71, 0x09, 0x05, 0x03],
  '8': [0x36, 0x49, 0x49, 0x49, 0x36],
  '9': [0x06, 0x49, 0x49, 0x29, 0x1e],
  '.': [0x00, 0x60, 0x60, 0x00, 0x00],
  ',': [0x00, 0x80, 0x60, 0x00, 0x00],
  ';': [0x00, 0x80, 0x66, 0x00, 0x00],
  ':': [0x00, 0x36, 0x36, 0x00, 0x00],
  '(': [0x00, 0x1c, 0x22, 0x41, 0x00],
  ')': [0x00, 0x41, 0x22, 0x1c, 0x00],
  '{': [0x00, 0x08, 0x36, 0x41, 0x00],
  '}': [0x00, 0x41, 0x36, 0x08, 0x00],
  '[': [0x00, 0x7f, 0x41, 0x41, 0x00],
  ']': [0x00, 0x41, 0x41, 0x7f, 0x00],
  '=': [0x14, 0x14, 0x14, 0x14, 0x14],
  '<': [0x08, 0x14, 0x22, 0x41, 0x00],
  '>': [0x00, 0x41, 0x22, 0x14, 0x08],
  '+': [0x08, 0x08, 0x3e, 0x08, 0x08],
  '-': [0x08, 0x08, 0x08, 0x08, 0x08],
  '/': [0x20, 0x10, 0x08, 0x04, 0x02],
  '*': [0x14, 0x08, 0x3e, 0x08, 0x14],
  '"': [0x00, 0x07, 0x00, 0x07, 0x00],
  '\'': [0x00, 0x05, 0x03, 0x00, 0x00],
  '_': [0x40, 0x40, 0x40, 0x40, 0x40],
  '$': [0x12, 0x2a, 0x7f, 0x2a, 0x24],
  '%': [0x23, 0x13, 0x08, 0x64, 0x62],
  '!': [0x00, 0x00, 0x5f, 0x00, 0x00],
  '&': [0x36, 0x49, 0x55, 0x22, 0x50],
};

const WIDTH = 1280;
const HEIGHT = 720;
const TOTAL_FRAMES = 120; // 4 seconds at 30fps

const CODE_LINES = [
  [ { t: "import", c: [129, 140, 248] }, { t: " { NextServer, EdgeRuntime } ", c: [226, 232, 240] }, { t: "from", c: [129, 140, 248] }, { t: " 'next/server';", c: [52, 211, 153] } ],
  [ { t: "import", c: [129, 140, 248] }, { t: " { WordPressEngine, ACFPro } ", c: [226, 232, 240] }, { t: "from", c: [129, 140, 248] }, { t: " '@deploymedia/wp';", c: [52, 211, 153] } ],
  [ { t: "import", c: [129, 140, 248] }, { t: " { n8nRunner, CAPIBridge } ", c: [226, 232, 240] }, { t: "from", c: [129, 140, 248] }, { t: " '@deploymedia/ops';", c: [52, 211, 153] } ],
  [],
  [ { t: "export async function", c: [56, 189, 248] }, { t: " deployFullStack() {", c: [251, 191, 36] } ],
  [ { t: "  const wp = await WordPressEngine.compile({", c: [226, 232, 240] } ],
  [ { t: "    blocks: 'custom-acf-pro',", c: [52, 211, 153] } ],
  [ { t: "    headless: true,", c: [248, 113, 113] } ],
  [ { t: "    cacheTTL: 'instant-edge',", c: [52, 211, 153] } ],
  [ { t: "    subSecondTTFB: true,", c: [248, 113, 113] } ],
  [ { t: "  });", c: [226, 232, 240] } ],
  [],
  [ { t: "  const pipeline = await n8nRunner.automate({", c: [226, 232, 240] } ],
  [ { t: "    leadRouting: 'ai-triage-30s',", c: [52, 211, 153] } ],
  [ { t: "    twoWayCRM: ['HubSpot', 'Salesforce'],", c: [251, 191, 36] } ],
  [ { t: "    offlineConversions: 'google-meta-capi',", c: [52, 211, 153] } ],
  [ { t: "  });", c: [226, 232, 240] } ],
  [],
  [ { t: "  return { status: 200, roasScale: '4.6x', speed: '99ms' };", c: [56, 189, 248] } ],
  [ { t: "}", c: [251, 191, 36] } ]
];

function drawChar(buf, char, startX, startY, scale, r, g, b, alpha = 1) {
  const glyph = FONT[char] || FONT[' '];
  for (let col = 0; col < 5; col++) {
    const bits = glyph[col] || 0;
    for (let row = 0; row < 7; row++) {
      if ((bits >> row) & 1) {
        for (let dx = 0; dx < scale; dx++) {
          for (let dy = 0; dy < scale; dy++) {
            const px = startX + col * scale + dx;
            const py = startY + row * scale + dy;
            if (px >= 0 && px < WIDTH && py >= 0 && py < HEIGHT) {
              const idx = (py * WIDTH + px) * 3;
              buf[idx] = Math.round(buf[idx] * (1 - alpha) + r * alpha);
              buf[idx + 1] = Math.round(buf[idx + 1] * (1 - alpha) + g * alpha);
              buf[idx + 2] = Math.round(buf[idx + 2] * (1 - alpha) + b * alpha);
            }
          }
        }
      }
    }
  }
}

function drawRect(buf, rx, ry, rw, rh, r, g, b, alpha = 1) {
  for (let y = Math.max(0, ry); y < Math.min(HEIGHT, ry + rh); y++) {
    for (let x = Math.max(0, rx); x < Math.min(WIDTH, rx + rw); x++) {
      const idx = (y * WIDTH + x) * 3;
      buf[idx] = Math.round(buf[idx] * (1 - alpha) + r * alpha);
      buf[idx + 1] = Math.round(buf[idx + 1] * (1 - alpha) + g * alpha);
      buf[idx + 2] = Math.round(buf[idx + 2] * (1 - alpha) + b * alpha);
    }
  }
}

async function renderVideo() {
  const outPath = path.join(__dirname, '../public/videos/hero-coding.mp4');
  const posterPath = path.join(__dirname, '../public/videos/hero-coding-poster.jpg');

  // Ensure directory
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const ffmpeg = spawn('ffmpeg', [
    '-f', 'image2pipe',
    '-vcodec', 'ppm',
    '-r', '30',
    '-i', '-',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '20',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-y', outPath
  ]);

  const header = Buffer.from(`P6\n${WIDTH} ${HEIGHT}\n255\n`);
  const frameBuf = Buffer.alloc(WIDTH * HEIGHT * 3);

  console.log(`Generating ${TOTAL_FRAMES} frames of cinematic coding video...`);

  for (let f = 0; f < TOTAL_FRAMES; f++) {
    const progress = f / TOTAL_FRAMES;

    // 1. Deep Obsidian Blue Background (#020617)
    for (let i = 0; i < WIDTH * HEIGHT; i++) {
      frameBuf[i * 3 + 0] = 2;
      frameBuf[i * 3 + 1] = 6;
      frameBuf[i * 3 + 2] = 23;
    }

    // 2. Blueprint Tech Grid
    const gridSize = 40;
    for (let x = 0; x < WIDTH; x += gridSize) {
      for (let y = 0; y < HEIGHT; y++) {
        const idx = (y * WIDTH + x) * 3;
        frameBuf[idx + 0] = Math.min(255, frameBuf[idx + 0] + 4);
        frameBuf[idx + 1] = Math.min(255, frameBuf[idx + 1] + 16);
        frameBuf[idx + 2] = Math.min(255, frameBuf[idx + 2] + 32);
      }
    }
    for (let y = 0; y < HEIGHT; y += gridSize) {
      for (let x = 0; x < WIDTH; x++) {
        const idx = (y * WIDTH + x) * 3;
        frameBuf[idx + 0] = Math.min(255, frameBuf[idx + 0] + 4);
        frameBuf[idx + 1] = Math.min(255, frameBuf[idx + 1] + 16);
        frameBuf[idx + 2] = Math.min(255, frameBuf[idx + 2] + 32);
      }
    }

    // 3. Ambient Glow Gradients (Top-Right Cyan, Bottom-Left Blue)
    const glowX1 = Math.round(900 + Math.sin(progress * Math.PI * 2) * 50);
    const glowY1 = Math.round(180 + Math.cos(progress * Math.PI * 2) * 30);
    for (let y = 50; y < 400; y += 2) {
      for (let x = 600; x < 1200; x += 2) {
        const dist = Math.hypot(x - glowX1, y - glowY1);
        if (dist < 320) {
          const intensity = (1 - dist / 320) * 0.18;
          drawRect(frameBuf, x, y, 2, 2, 56, 189, 248, intensity);
        }
      }
    }

    // 4. Code Window Frame
    const winX = 140;
    const winY = 60;
    const winW = 1000;
    const winH = 600;

    // Window shadow & body
    drawRect(frameBuf, winX + 8, winY + 8, winW, winH, 0, 0, 0, 0.45);
    drawRect(frameBuf, winX, winY, winW, winH, 15, 23, 42, 0.95); // slate-900

    // Window border
    drawRect(frameBuf, winX, winY, winW, 1, 51, 65, 85, 0.8);
    drawRect(frameBuf, winX, winY + winH, winW, 1, 51, 65, 85, 0.8);
    drawRect(frameBuf, winX, winY, 1, winH, 51, 65, 85, 0.8);
    drawRect(frameBuf, winX + winW, winY, 1, winH, 51, 65, 85, 0.8);

    // Title Header Bar
    drawRect(frameBuf, winX, winY, winW, 40, 30, 41, 59, 1);
    drawRect(frameBuf, winX, winY + 40, winW, 1, 51, 65, 85, 0.8);

    // Window Controls (Traffic Lights)
    drawRect(frameBuf, winX + 18, winY + 14, 12, 12, 244, 63, 94); // Red
    drawRect(frameBuf, winX + 38, winY + 14, 12, 12, 251, 191, 36); // Amber
    drawRect(frameBuf, winX + 58, winY + 14, 12, 12, 52, 211, 153); // Emerald

    // Tab Title
    const title = "deploymedia-engine.tsx (Next.js & WordPress)";
    let tx = winX + 90;
    for (let c of title) {
      drawChar(frameBuf, c, tx, winY + 14, 2, 148, 163, 184);
      tx += 13;
    }

    // Gutter Separator
    drawRect(frameBuf, winX + 64, winY + 41, 1, winH - 41, 51, 65, 85, 0.5);

    // 5. Code Lines Rendering
    const startCodeY = winY + 60;
    const lineHeight = 24;

    for (let lineIdx = 0; lineIdx < CODE_LINES.length; lineIdx++) {
      const lineY = startCodeY + lineIdx * lineHeight;

      // Line Number
      const lineNumStr = String(lineIdx + 1).padStart(2, ' ');
      drawChar(frameBuf, lineNumStr[0], winX + 22, lineY, 2, 100, 116, 139, 0.8);
      drawChar(frameBuf, lineNumStr[1], winX + 35, lineY, 2, 100, 116, 139, 0.8);

      // Code Tokens
      let charX = winX + 85;
      const tokens = CODE_LINES[lineIdx];

      for (let token of tokens) {
        for (let ch of token.t) {
          drawChar(frameBuf, ch, charX, lineY, 2, token.c[0], token.c[1], token.c[2], 0.95);
          charX += 12;
        }
      }

      // Animated Glowing Cursor on Active Line (Blinking effect)
      if (lineIdx === 18 && Math.floor(f / 15) % 2 === 0) {
        drawRect(frameBuf, charX + 4, lineY - 2, 8, 18, 56, 189, 248, 0.9);
      }
    }

    // 6. Laser Scanner Line (sweeps top to bottom smoothly)
    const scanY = Math.round(winY + 42 + ((f * 5) % (winH - 42)));
    drawRect(frameBuf, winX + 1, scanY, winW - 2, 2, 56, 189, 248, 0.4);
    drawRect(frameBuf, winX + 1, scanY - 4, winW - 2, 8, 14, 165, 233, 0.08);

    // Pipe frame to ffmpeg
    ffmpeg.stdin.write(header);
    ffmpeg.stdin.write(frameBuf);

    // Save first frame as poster
    if (f === 0) {
      fs.writeFileSync(path.join(__dirname, 'temp_poster.ppm'), Buffer.concat([header, frameBuf]));
    }
  }

  ffmpeg.stdin.end();

  return new Promise((resolve, reject) => {
    ffmpeg.on('close', (code) => {
      if (code === 0) {
        console.log('Video generated successfully at:', outPath);
        // Convert temp poster to JPG
        const posterProc = spawn('ffmpeg', [
          '-i', path.join(__dirname, 'temp_poster.ppm'),
          '-q:v', '2',
          '-y', posterPath
        ]);
        posterProc.on('close', () => {
          fs.unlinkSync(path.join(__dirname, 'temp_poster.ppm'));
          console.log('Poster generated at:', posterPath);
          resolve();
        });
      } else {
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });
  });
}

renderVideo().catch(err => {
  console.error('Error generating video:', err);
  process.exit(1);
});
