const svg = document.getElementById('drawing-svg');
let isDrawing = false;
let currentPath = null;

// Add event listeners
svg.addEventListener('mousedown', startDrawing);
svg.addEventListener('mousemove', continueDrawing);
svg.addEventListener('mouseup', stopDrawing);
svg.addEventListener('mouseleave', stopDrawing);

function startDrawing(event) {
  isDrawing = true;

  // Get mouse coordinates relative to SVG
  const rect = svg.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Create new path element
  currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  currentPath.setAttribute('stroke', '#0066cc');
  currentPath.setAttribute('stroke-width', '2');
  currentPath.setAttribute('fill', 'none');
  currentPath.setAttribute('stroke-linecap', 'round');
  currentPath.setAttribute('stroke-linejoin', 'round');

  // Start path with M (move to) command — needs to be a string
  currentPath.setAttribute('d', `M ${x} ${y}`);

  svg.appendChild(currentPath);
}

function continueDrawing(event) {
  if (!isDrawing || !currentPath) return;

  // Get mouse coordinates relative to SVG
  const rect = svg.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Add L (line to) command to existing path
  const currentD = currentPath.getAttribute('d');
  currentPath.setAttribute('d', `${currentD} L ${x} ${y}`);
}

function stopDrawing() {
  isDrawing = false;
  currentPath = null;
}
