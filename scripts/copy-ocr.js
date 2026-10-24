// Copies the offline photo-reading (OCR) files into www/ocr before the Android build.
const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'www', 'ocr');
fs.mkdirSync(out, { recursive: true });
const nm = path.join(__dirname, '..', 'node_modules');
const files = [
  ['tesseract.js/dist/tesseract.min.js', 'tesseract.min.js'],
  ['tesseract.js/dist/worker.min.js', 'worker.min.js'],
  ['tesseract.js-core/tesseract-core-simd-lstm.wasm.js', 'tesseract-core-simd-lstm.wasm.js'],
  ['tesseract.js-core/tesseract-core-lstm.wasm.js', 'tesseract-core-lstm.wasm.js'],
];
// Android's build strips ".gz" from asset names, so ship the language data already unzipped
const zlib = require('zlib');
fs.writeFileSync(path.join(out, 'eng.traineddata'),
  zlib.gunzipSync(fs.readFileSync(path.join(nm, '@tesseract.js-data/eng/4.0.0_best_int/eng.traineddata.gz'))));
console.log('ocr/eng.traineddata', (fs.statSync(path.join(out, 'eng.traineddata')).size / 1048576).toFixed(1) + ' MB');
for (const [from, to] of files) {
  fs.copyFileSync(path.join(nm, from), path.join(out, to));
  console.log('ocr/' + to, (fs.statSync(path.join(out, to)).size / 1048576).toFixed(1) + ' MB');
}
