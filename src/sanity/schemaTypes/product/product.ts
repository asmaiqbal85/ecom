export const product = {
   
        name: 'product',
        type: 'document',
        title: 'Product',
        fields: [
            {
                name: 'title',
                type: 'string',
                title: 'Title'
            },
            {
                name: 'discription',
                type: 'string',
                title: 'produt discription'
            },
            {
                name: 'image',
                type: 'image',
                title: 'Image',
                options:{
                    hotspot:true
                }
            },
        ]
    }
