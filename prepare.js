const fs = require('fs');
const path = require('path');
const {
  select,
  text,
  group,
  intro,
  outro,
  isCancel,
  cancel,
} = require('@clack/prompts');

function getDirectories(source, filter = () => true) {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && filter(dirent.name))
    .map((dirent) => dirent.name)
    .sort((a, b) => b.localeCompare(a));
}

async function main() {
  intro('Code Kata Prepare Script');

  const rootDir = path.join(__dirname);
  const topLevelFolders = getDirectories(rootDir, (name) =>
    /^\d{4}-\d{2}-\d{2}$/.test(name),
  );

  const userInputs = await group(
    {
      targetDate: () =>
        select({
          message: 'Choose a week:',
          options: topLevelFolders.map((folder) => ({
            value: folder,
            label: folder,
          })),
        }),
      subFolder: ({ results }) => {
        const targetDir = path.join(rootDir, results.targetDate);
        const subFolders = getDirectories(targetDir);

        return select({
          message: 'Select a challenge:',
          options: subFolders.map((folder) => ({
            value: folder,
            label: folder,
          })),
        });
      },
      name: () =>
        text({
          message: 'Your name:',
          hint: 'This is used to name your test file.',
          initialValue: process.env.USER,
          validate(value) {
            if (value.length === 0) return 'Value is required!';
          },
        }),
    },
    {
      onCancel: ({ results }) => {
        cancel('Operation cancelled.');
        process.exit(0);
      },
    },
  );

  const { targetDate, subFolder, name } = userInputs;
  const folderPath = path.join(rootDir, targetDate, subFolder);
  const files = fs.readdirSync(folderPath);

  files.forEach(async (file) => {
    if (file.includes('[your-name].test.')) {
      const extension = path.extname(file);
      const newFileName = `${name}.test${extension}`;
      const src = path.join(folderPath, file);
      const dest = path.join(folderPath, newFileName);

      if (fs.existsSync(dest)) {
        console.error(
          `❌ Error: ${newFileName} already exists in ${subFolder}. Please delete it and try again.`,
        );
      } else {
        const fileContent = fs.readFileSync(src, 'utf-8');
        const updatedContent = fileContent.replace(
          'const RUN_TESTS = false',
          'const RUN_TESTS = true',
        );
        fs.writeFileSync(dest, updatedContent, 'utf-8');
        console.log(`✅ Copied ${file} to ${newFileName} in ${subFolder}`);
      }
    }
  });

  outro(
    `Good luck! You can run the test with one of the following:
    ∙ npm test ${targetDate}/${subFolder}/${name}
    ∙ npm test ${targetDate}/${subFolder}
    ∙ npm test ${targetDate}
    ∙ npm test
    `);
}

main();

