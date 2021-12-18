const path = require('path')
const fs = require('fs')


const parcelDefinitionFile = path.resolve(process.cwd(), 'parcel.d.ts')
if (!fs.existsSync(parcelDefinitionFile))
{
    fs.writeFileSync(parcelDefinitionFile, `
        // This file is autogenerated
    
        declare module '*.css' {
            const css: any
            export default css
        }
    `.replace(/^\s+/igm, ''))
}


const tsconfigFile = path.resolve(process.cwd(), 'tsconfig.json')
const tsconfig = JSON.parse(fs.readFileSync(tsconfigFile).toString())
if (!tsconfig.include.contains('./parcel.d.ts'))
{
    tsconfig.include.push('./parcel.d.ts')
    fs.writeFileSync(tsconfigFile, JSON.stringify(tsconfig, null, 2))
}


module.exports = {
    extends: '@parcel/config-default',
    transformers: {
        '*\\.css': [
            'parcel-transformer-ts-css-modules'
        ]
    }
}
