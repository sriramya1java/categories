import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    treeData1: {
      label: 'Company',
      children: [
        { label: 'Ken',
          children: [
            { label: 'Ben' },
            { label: 'Karen',
              children: [
                { label: 'Amy' }
              ]
            },
            { label: 'John' },
            { label: 'Mike',
              children: [
                { label: 'Mary',
                  children: [
                    { label: 'James',
                      children: [
                        { label: 'Susan',
                          children: [
                            { label: 'sri',
                              children: [
                                { label: 'ramya',
                                  children: [
                                    { label: 'Deevi',
                                      children: [
                                        { label: 'abc',
                                          children: [
                                            { label: 'def',
                                              children: [
                                                { label: 'ghi',
                                                  children: [
                                                    { label: 'jkl' }
                                                  ]}
                                              ]}
                                          ]}
                                      ]}
                                  ]}
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { label: 'Lisa' }
              ]
            }
          ]
        },
        {
          label: 'Jason',
          children: [
            { label: 'Rose' }
          ]
        }
      ]
    },
    collapseData: {
      label: 'root',
      children: [
        {
          label: 'item1',
          children: [
            {
              label: 'item1.1'
            },
            {
              label: 'item1.2',
              children: [
                {
                  label: 'item1.2.1'
                }
              ]
            }
          ]
        },
        {
          label: 'item2'
        }
      ]
    },
    collapseData1: {
      label: 'Company',
      children: [
        { label: 'Ken',
          children: [
            { label: 'Ben' },
            { label: 'Karen',
              children: [
                { label: 'Amy' }
              ]
            },
            { label: 'John' },
            { label: 'Mike',
              children: [
                { label: 'Mary',
                  children: [
                    { label: 'James',
                      children: [
                        { label: 'Susan',
                          children: [
                            { label: 'sri',
                              children: [
                                { label: 'ramya',
                                  children: [
                                    { label: 'Deevi',
                                      children: [
                                        { label: 'abc',
                                          children: [
                                            { label: 'def',
                                              children: [
                                                { label: 'ghi',
                                                  children: [
                                                    { label: 'jkl' }
                                                  ]}
                                              ]}
                                          ]}
                                      ]}
                                  ]}
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { label: 'Lisa' }
              ]
            }
          ]
        },
        {
          label: 'Jason',
          children: [
            { label: 'Rose' }
          ]
        }
      ]
    },
    treeData: {
      name: 'My Tree',
      children: [
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' }
              ]
            },
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' }
              ]
            }
          ]
        }
      ]
    }
  },
  getters: {
    treeData: state => state.treeData,
    treeData1: state => state.treeData1
  }
})
