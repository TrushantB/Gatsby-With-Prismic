const path=require("path")
const Promise = require('bluebird')

exports.createPages=({graphql,actions}) => {
    const { createPage } = actions
    return new Promise((resolve ,reject) =>{
        const post=path.resolve('src/templates/service-view.js')
        resolve(
            graphql(`
                {
                    allPrismicServicepost {
                        edges {
                            node {
                               uid
                            }
                        }
                    }
                }
            `).then((result) =>{
                 if(result.errors) {
                     reject(result.errors)
                 }                
                result.data.allPrismicServicepost.edges.map(element => {
                    createPage({
                        path:`/services/${element.node.uid}`,
                        component:post,
                        context:{
                           uid:element.node.uid
                        }
                    }) 
                })
               
            })
        )
    })
}
