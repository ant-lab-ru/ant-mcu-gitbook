const TYPE_DIR = 'dir';
const TYPE_FILE = 'file';

function parseName(name, type) {
  let regex = /[^a-z0-9 ]/g;
  if (type === TYPE_FILE) {
    regex = /[^a-z0-9. ]/g;
  }

  return name.toLowerCase().replace(regex, "").replace(/\s+/g, "-");
}

function buildNode(name, type) {
  return {
    type,
    name,
  };
}

module.exports = {
  TYPE_FILE,
  TYPE_DIR,
  parseName,
  buildNode,
};
