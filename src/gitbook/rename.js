const fse = require('fs-extra');

async function renameProject(folder, index) {
  try {
    const nodes = Object.keys(index);

    for (let i = 0; i < nodes.length; i += 1) {
      const node = index[nodes[i]];

      if (typeof node.content !== 'undefined') {
        await renameProject(`${folder}/${node.name}`, node.content);
      }

      if (`${folder}/${node.name}` !== `${folder}/${nodes[i]}`) {
        await fse.move(`${folder}/${node.name}`, `${folder}/${nodes[i]}`);
      }
    }

    return true;
  } catch (e) {
    console.error('Error: Unable to rename the project');
    console.error(e);
    return false;
  }
}

module.exports = renameProject;
