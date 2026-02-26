const copyProject = require('./gitbook/copy');
const indexProject = require('./gitbook/index-project');
const renameProject = require('./gitbook/rename');
const summarize = require('./gitbook/summary');

let settings = {
  obsidianProject: '../obsidian',
  gitbookProject: '../gitbook',
};

try {
  settings = require('./settings.json');
  console.log('Settings loaded from settings.json');
} catch {
  console.log('Settings not found. Using default settings');
}

async function main() {
  console.log('Building GitBook from Obsidian.');
  
  const copied = await copyProject(settings.obsidianProject, settings.gitbookProject);
  if (!copied) {
    console.error('Aborting.');
    return false;
  }

  const index = await indexProject(settings.gitbookProject);

  const renamed = await renameProject(settings.gitbookProject, index);
  if (!renamed) {
    console.error('Unable to rename the project. Aborting.');
    return false;
  } else {
    console.log('> Project successfully renamed.');
  }

  const summarized = await summarize(settings.gitbookProject, index);
  if (!summarized) {
    console.error('Aborting.');
    return false;
  }

  return true;
}

main();
