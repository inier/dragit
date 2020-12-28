
export default{
  name:'Portlet',
  props: {
    variant:'outlined',
    open:true,
    withHeader:true,
    title:'基本信息',
    collapsible: true,
  },
  children:[
    {
      name:'FormGridContainer',
      children:[
        {
          name: 'PortletGridItem',
          props:{
            xs:12,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'标题',
                variant:"outlined",
                fullWidth:true,
                field:'title',
                rule:{
                  valueType:'string',
                  required:true,
                }                      
              }
            }
          ]
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:12,                      
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'Slug',
                variant:"outlined",
                fullWidth:true,
                field:'slug',
                //required:true,
                rule:{
                  //valueType:'string',
                  //required:true,
                }                      
              },
            }
          ]
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:6,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'作者',
                variant:"outlined",
                fullWidth:true,
                field:'auther',
                //required:true,
                helperText:'作者提示',
                rule:{
                  //valueType:'string',
                  //required:true,
                }                      
              },
            }
          ]
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:6,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'Email',
                variant:"outlined",
                fullWidth:true,
                field:'email',
                rule:{
                  valueType:'string',
                  ruleType:'email',
                  required:true,
                },
              },
            }
          ]

        },
        {
          name: 'PortletGridItem',
          props:{
            xs:6,
          },
          children:[
            {
              name:'TextBox',
              props:{
                label:'创作日期',
                variant:"outlined",
                fullWidth:true,
                //size:"small",
                type:'date',
                shrinkLabel:true,
                field:'created_at',
              },
            }
          ],
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:6,
          },
          children:[
            {
              name:'TreeSelect',
              designProps:{
                dataApi:null,
                isDeisgning:true,
              },
              props:{
                label:"频道",
                variant:"outlined",
                field:'channel',
                fullWidth:true,
                multiSelect:true,
                //size:"small",
                xs:6,
                query:'channelTree',
                rule:{
                  //required:true,
                },
              },        
            }
          ],
        },
        {
          name: 'PortletGridItem',
          props:{
            xs:12,
          },
          children:[
            {
              name:'Combobox',
              props:{
                label:"标签",
                variant:"outlined",
                field:'tags',
                multiple:true,
                fullWidth:true,
                //dataApi:{
                //  url: API_LIST_MODEL.url,
                //  params:{
                //    modelName:'/Model/Tag',
                //  }
                //},
                rule:{
                  //required:true,
                },
              },                         
            }
          ]

        },

        {
          name:"PortletGridItem",
          props:{
            xs:12,
          },
          children:[
            {
              name:'TextBox',
              props:{
                fullWidth: true,
                label:'简介',
                variant:"outlined",
                //size:"small",
                multiline:true,
                rows:5,
              }                        
            }
          ]

        }
        
      ]
    },
  ]
}