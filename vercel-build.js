import { execSync } from 'child_process';
import * as fs from 'fs';

// Make sure Vite binary is executable
try {
  fs.chmodSync('./node_modules/.bin/vite', 0o755);
  console.log('Made Vite executable');
} catch (error) {
  console.error('Failed to make Vite executable:', error);
}

// Run the build command
try {
  console.log('Running Vite build...');
  execSync('node ./node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}