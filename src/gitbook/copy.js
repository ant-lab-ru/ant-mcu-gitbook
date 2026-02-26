const fse = require('fs-extra');

async function copyProject(obsidian, gitbook) {
  try { 
    await fse.emptyDir(gitbook);
    await fse.copySync(obsidian, gitbook);
    console.log('> GitBook folder created.');

    await fse.remove(`${gitbook}/.obsidian`);
    console.log('> Removed Obsidian files');

    return true;
  } catch (e) {
    console.error('> Error copying Obsidian project to GitBook folder');
    console.error(e);
    return false;
  }
}

module.exports = copyProject;
