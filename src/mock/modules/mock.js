import Mock from 'mockjs'
import createId from 'utils/createId'
import getQueryVariable from 'mock/utils/getQueryVariable'
import moduleCategories from './moduleCategories'
import { remove } from 'ArrayHelper';

export function getCagegoryById(id){
  for(var index = 0; index < moduleCategories.length; index++){
    if(moduleCategories[index].id.toString() === id){
      return moduleCategories[index];
    }
  }
}

export function getCategoryOfModule(id){
  for(var index = 0; index < moduleCategories.length; index++){
    let modules = moduleCategories[index].modules;
    for(var i = 0; i < modules.length; i++){
      let module = modules[i]
      if(module.id.toString() === id){
        return  moduleCategories[index];
      }
    }
  }
}

export function getModuleIndexPage(moduleSlug){
  for(var index = 0; index < moduleCategories.length; index++){
    let modules = moduleCategories[index].modules;
    for(var i = 0; i < modules.length; i++){
      let module = modules[i]
      if(module.slug === moduleSlug){
        let pages = module.pages
        if(pages){
          for(var j=0; j < pages.length; j++){
            if(pages[j].id === module.indexPageId){
              return JSON.parse(JSON.stringify(pages[j]));
            }
          }
        }
      }
    }
  }
}

export function getModuleById(muduleId){
  for(var index = 0; index < moduleCategories.length; index++){
    let modules = moduleCategories[index].modules;
    for(var i = 0; i < modules.length; i++){
      let module = modules[i]
      if(module.id.toString() === muduleId){
        return module;
      }
    }
  }

}

export function getModulePage(pageSlug){
  for(var index = 0; index < moduleCategories.length; index++){
    let modules = moduleCategories[index].modules;
    for(var i = 0; i < modules.length; i++){
      let module = modules[i]
      let pages = module.pages
      if(pages){
        for(var j=0; j < pages.length; j++){
          if(pages[j].slug === pageSlug){
            return JSON.parse(JSON.stringify(pages[j]));
          }
        }
      }
    }
  }
}

export default function mockModules(){
  Mock.mock('/api/modules','get', (request)=>{
    return JSON.parse(JSON.stringify(moduleCategories));
  } );

  Mock.mock(RegExp('/api/change-cagegory?.*'),'post', (request)=>{
    let id = getQueryVariable('id', request.url);
    let name = getQueryVariable('name', request.url);
    
    let category = getCagegoryById(id);
    if(category){
      category.name = name;
      return category      
    }
  })


  Mock.mock(RegExp('/api/change-module?.*'),'post', (request)=>{
    let id = getQueryVariable('id', request.url);
    let name = getQueryVariable('name', request.url);
    let slug = getQueryVariable('slug', request.url);
    
    let module = getModuleById(id);
    if(module){
      module.title = name;
      module.slug = slug;
      return module      
    }
  })

  
  
  Mock.mock(RegExp('/api/remove-cagegory-module?.*'),'post', (request)=>{
    let id = getQueryVariable('id', request.url);  
    let cagtegory = getCagegoryById(id);  
    remove(cagtegory, moduleCategories);
  })

  Mock.mock(RegExp('/api/remove-module?.*'),'post', (request)=>{
    let id = getQueryVariable('id', request.url);  
    let category = getCategoryOfModule(id);
    let module = getModuleById(id);
    remove(module, category.modules);
  })

    
  Mock.mock(RegExp('/api/add-module-category?.*'),'post', (request)=>{
    let name = getQueryVariable('name', request.url);
    let category = {id:createId(), name:name};
    moduleCategories.push(category);
    return category
  })
  
  
  Mock.mock(RegExp('/api/add-module?.*'),'post', (request)=>{
    let name = getQueryVariable('name', request.url);
    let cagegoryId = getQueryVariable('cagegoryId', request.url);
    let category = getCagegoryById(cagegoryId);
    let module = {id:createId(), name:name, pages:[], auths:[]};
    category.modules = category.modules ? category.modules :[];
    category.modules.push(module);
  })
  
  Mock.mock(RegExp('/api/get-module-by-id?.*'),'get', (request)=>{
    let id = getQueryVariable('id', request.url);
    return getModuleById(id);
  })
  
 
  Mock.mock(RegExp('/api/update-module-page?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let module =getModuleById(id);
    let page = JSON.parse(request.body).page;
    //console.log(request.body, request.body.page)
    for(var i = 0; i < module.pages.length; i ++){
      if(module.pages[i].id === page.id){
        module.pages[i] = page;
      }
    }
    return JSON.parse(JSON.stringify(module));;
  })
  
  Mock.mock(RegExp('/api/remove-page-of-module?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let pageId = parseInt(getQueryVariable('pageId', request.url));
    let module =getModuleById(id);
    module.pages = module.pages.filter(page=>{
      return page.id !== pageId
    })
    return JSON.parse(JSON.stringify(module));
  })
  
  Mock.mock(RegExp('/api/add-page-of-module?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let name = getQueryVariable('name', request.url);
    let slug = getQueryVariable('slug', request.url);
    let module =getModuleById(id);
    module.pages = [...module.pages, {id:createId(), name, slug}]
    return JSON.parse(JSON.stringify(module));
  })
  
  Mock.mock(RegExp('/api/update-index-page-of-module?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let indexPageId = getQueryVariable('indexPageId', request.url);
    let module =getModuleById(id);
    module.indexPageId = parseInt(indexPageId);
    return JSON.parse(JSON.stringify(module));
  })
  
  Mock.mock(RegExp('/api/add-auth-of-module?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let name = getQueryVariable('name', request.url);
    let slug = getQueryVariable('slug', request.url);
    let module =getModuleById(id);
    module.auths = [...module.auths, {id:createId(), name:name, slug:slug}]
    return JSON.parse(JSON.stringify(module));
  })
  
  Mock.mock(RegExp('/api/remove-auth-of-module?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let authId = parseInt(getQueryVariable('authId', request.url));
    let module =getModuleById(id);
    module.auths = module.pages.filter(auth=>{
      return auth.id !== authId
    })
    return JSON.parse(JSON.stringify(module));
  })
  
  Mock.mock(RegExp('/api/update-module-auth?.*'),'post', (request)=>{
    let id = getQueryVariable('moduleId', request.url);
    let module =getModuleById(id);
    let auth = JSON.parse(request.body).auth;
    //console.log(request.body, request.body.page)
    for(var i = 0; i < module.auths.length; i ++){
      if(module.auths[i].id === auth.id){
        module.auths[i] = auth;
      }
    }
    return JSON.parse(JSON.stringify(module));;
  })
  Mock.mock(RegExp('/api/get-module-index-page?.*'),'get', (request)=>{
    let slug = getQueryVariable('moduleSlug', request.url);
    return getModuleIndexPage(slug);
  })
  
  Mock.mock(RegExp('/api/get-page/?.*'),'get', (request)=>{
    let slug =getQueryVariable('pageSlug', request.url);
    let module = getModulePage(slug);
    if(module) {
      return module;
    }
    new Error("404");
  })

  
  Mock.mock(RegExp('/api/get-module-index-page?.*'),'get', (request)=>{
    let slug = getQueryVariable('moduleSlug', request.url);
    let module =  getModuleIndexPage(slug);
    if(module) {
      return module;
    }
    console.log('not found page');
    throw new Error("404");
  })
  
}