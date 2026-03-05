#!/usr/bin/env node
/**
 * Sync versions from package.json to jsr.json files
 * Run after changeset version to keep JSR config in sync
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

const packages = [
  'config',
  'config-eslint',
  'config-stylelint',
  'config-typescript',
];

process.stdout.write('🔄 Syncing versions to jsr.json files...\n\n');

for (const pkg of packages) {
  const packagePath = resolve(rootDir, 'packages', pkg, 'package.json');
  const jsrPath = resolve(rootDir, 'packages', pkg, 'jsr.json');

  try {
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));
    const jsrJson = JSON.parse(readFileSync(jsrPath, 'utf-8'));

    if (packageJson.version !== jsrJson.version) {
      jsrJson.version = packageJson.version;
      writeFileSync(jsrPath, JSON.stringify(jsrJson, null, 2) + '\n');
      process.stdout.write(`✅ Updated ${pkg}: ${jsrJson.version}\n`);
    } else {
      process.stdout.write(`⏭️  Skipped ${pkg}: already at ${jsrJson.version}\n`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${pkg}:`, error.message);
    process.exit(1);
  }
}

process.stdout.write('\n✨ Version sync complete!\n');
