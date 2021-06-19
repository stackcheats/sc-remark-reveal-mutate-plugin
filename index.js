exports.mutateSource = ({ markdownNode }) => {
  if (!Object.keys(markdownNode.frontmatter).includes('reveal')) {
    return
  }
  markdownNode.internal.content = mutate(markdownNode.internal.content)
}

/**
 * mutate remark content
 *
 * @param {*} md markdown content
 * @returns
 */
function mutate(md) {
  let del = getDelimiterRegx('--h--')
  return md.split(del).map(mutateContent).join('\n')
}

/**
 * mutate remark content
 *
 * @param {*} md markdown content
 * @returns
 */
function mutateContent(md) {
  let noteDel = getDelimiterRegx('reveal-note:')
  let verticalDel = getDelimiterRegx('--v--')

  if (md.match(verticalDel)) {
    md = md.split(verticalDel).map(mutateContent).join('\n')
  }

  if (md.match(noteDel)) {
    let [content, ...notes] = md.split(noteDel)
    let notesContent = notes.join('\n')
    md = `${content}\n\n<aside class="notes">\n\n${notesContent}\n\n</aside>`
  }

  return `<section>\n\n${md}\n\n</section>`
}

function getDelimiterRegx(token) {
  return new RegExp('^\\s*' + escapeStringRegxP(token) + '(?:$|\\s)', 'gmi')
}

function escapeStringRegxP(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string')
  }

  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}
