import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';

const execAsync = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(stderr || stdout || error.message);
      resolve(stdout);
    });
  });

(async () => {
  console.log("🚀 Lancement du build ASBPlayer...");

  try {
    const buildOutput = await execAsync('yarn tsx build.mts production');
    console.log("✅ Build terminé.");
    console.log(buildOutput);
  } catch (e) {
    console.error("❌ Erreur pendant le build:");
    console.error(e);
    process.exit(1);
  }

  const distPath = path.resolve('dist/chromium');

  if (!fs.existsSync(distPath)) {
    console.error("❌ Dossier dist/chromium introuvable.");
    process.exit(1);
  }

  console.log("📦 Création de l’archive ZIP...");

  try {
    await execAsync(`zip -r extension.zip dist/chromium`);
    console.log("✅ extension.zip créé avec succès !");
  } catch (e) {
    console.error("❌ Échec du zip :", e);
    process.exit(1);
  }
})();
