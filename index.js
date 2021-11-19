module.exports.selekuPlugin = (args,rootDir)=>{

  return {
    name: 'seleku',
    async setup(build) {
      let path = require('path')
      let fs = require('fs')

      if(args instanceof Array) for(let x of args){

        build.onResolve({filter: new RegExp(x.from)},async (args)=>{

          return {
            path: path.join(rootDir,x.to,"")
          }

        })

      }

    }
  }

}
