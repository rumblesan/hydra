#! /usr/bin/env node

const fs = require('fs')
const glslfuncs = require('hydra-synth/src/composable-glsl-functions.js')

const [,, outPath] = process.argv

const categories = {}
const argtypes = {}

Object.keys(glslfuncs).forEach((k) => {
  const f = glslfuncs[k]
  const categoryName = f.type.charAt(0).toUpperCase() + f.type.slice(1)
  categories[categoryName] = categories[categoryName] || []
  categories[categoryName].push(k)
  const inputs = f.inputs || []
  inputs.forEach((i) => {
    argtypes[i.type] = i.type
  })
})

const createlist = (items) => items.map((i) => `* ${i}`).join('\n')

const funcArgsList = (argnames) => {
  return argnames.length > 1 ? ` ${(argnames).map((n) => '`' + n + '`').join(', ')} ` : ''
}

const createFuncDoc = (fname, cname) => {
  const f = glslfuncs[fname]
  const argnames = (f.inputs || []).map(i => i.name)
  const arginfo = (f.inputs || []).map(i => `${i.name} :: ${i.type}`)
  const displayName = (cname !== 'Src' ? '.' : '') + fname

  const title = `### ${displayName}(${funcArgsList(argnames)})`
  const notes = f.notes ? f.notes + '\n\n' : ''
  let args
  if (argnames.length > 1) {
    args = `${createlist(arginfo)}`
  } else {
    args = 'No Args'
  }

  return `${title}\n\n${notes}${args}\n`
}

const createCategory = (cname) => `## ${cname}

${categories[cname].sort().map((fname) => createFuncDoc(fname, cname)).join('\n')}
-----------

`

const output = `# Functions

${Object.keys(categories).sort().map(createCategory).join('\n')}

# Argument Types

${createlist(Object.keys(argtypes).sort())}

`

fs.writeFile(outPath, output, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('The file was saved!')
})
