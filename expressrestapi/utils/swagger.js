import swaggerJSDoc from 'swagger-jsdoc';   
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

dotenv.config();


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express JS with MongoDB API',
            version: '1.0.0',
            description: 'A simple Express Library API'
        },
        servers: [
            {
                url: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3001}`
            },
        ],
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT'
                    },
                },
                schemas: {
                Product: {
                    type: 'object',
                    properties: {
                    id: {
                        type: 'integer',
                        description: 'The product ID',
                        example: 1,
                    },
                    name: {
                        type: 'string',
                        description: 'The product name',
                        example: 'iPhone 12 Pro Max',
                    },
                    price: {
                        type: 'integer',
                        description: 'The price of product',
                        example: '1000',
                    }
                    },
                },
            },
        },
        security : [
            {
                BearerAuth: [],
            }
        ]
    },
    apis:[`./routes/*.js`] 
}

const swaggerSpec = swaggerJSDoc(options)
const setupSwagger = (app) => {
    app.use('/api-docs', (_, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        next()
    })
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec,{
        customSiteTitle: 'Express JS with MongoDB API',
        explorer: true,
        swaggerOptions: {
            filter: true,
        }
    }))
}

export default setupSwagger