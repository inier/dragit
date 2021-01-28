export var appGQLType = `
  type RxAuth{
    id: ID!
    rx_slug: String!
    name: String
    predefined: Boolean
  }

  type RxPage{
    id:ID!
    name:String
    query:String
    "弹出式页面使用，可选：'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'false'"
    max_width:String
    width:Int
    schema:JSON
    auths:[String]
  }

  type RxApp{
    id: ID!
    name: String
    is_system: Boolean
    icon: String 
    color: String
    app_type: String
    pages: [RxPage]
    navigation_items: JSON
    auths: [RxAuth]
    notifications:Int
  }
`

export var appGQLInput =`
  input RxAuthInput{
    id: ID
    rx_slug: String
    name: String
    predefined: Boolean
  }

  input RxPageInput{
    id:ID
    name:String
    query:String
    max_width:String
    width:Int
    schema:JSON
    auths:[String]
  }
  input RxAppInput{
    id: ID
    name: String
    icon: String 
    color: String
    app_type: String
    navigation_items: JSON
  }

`

export var appGQLQuery = `
  rxApps:[RxApp]!
  rxApp(id:ID):RxApp
  rxPage(id:ID):RxPage
`

export var appGQLMutation = `
  removeRxApp(id:ID):RxApp
  saveRxApp(rxApp:RxAppInput):RxApp
  saveRxPage(rxPage:RxPageInput):RxPage
  createRxPage(appId:ID, templateId:ID, pageId:ID, name:String):RxPage
  removeRxPage(id:ID):RxPage
  duplicateRxPage(id:ID):RxPage
  createRxAuth(appId:ID, rxSlug:String, name:String):RxAuth
  saveRxAuth(rxAuth:RxAuthInput):RxAuth
  removeRxAuth(id:ID):RxAuth
`