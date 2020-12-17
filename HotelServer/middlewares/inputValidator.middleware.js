const { celebrate, Joi, Segments } = require('celebrate');

const validator = (inputType) => {
    switch (inputType) {
        case 'date':
            return celebrate({
                [Segments.QUERY]: {
                    date: Joi.date().required()
                }
            })
        case 'register':
            return celebrate({
                [Segments.BODY]: {
                    firstname: Joi.string().required(),
                    lastname: Joi.string().required(),
                    username: Joi.string().required(),
                    password: Joi.string().required(),
                    role: Joi.string().allow(['user', 'admin'])
                }
            })
        case 'login':
            return celebrate({
                [Segments.BODY]: {
                    username: Joi.string().required(),
                    password: Joi.string().required()
                }
            })
        case 'token':
            return celebrate({
                [Segments.BODY]: {
                    refreshToken: Joi.string().required()
                },
                [Segments.HEADERS]: {
                    Authorization: Joi.string().required()
                }
            })
        case 'logout':
            return celebrate({
                [Segments.BODY]: {
                    refreshToken: Joi.string().required()
                }
            })
        case 'addReservation':
            return celebrate({
                [Segments.BODY]: {
                    roomId: Joi.string().required(),
                    nGuests: Joi.number().required(),
                    reservationDate: Joi.date().required()
                }
            })
        case 'freeRooms':
            return celebrate({
                [Segments.QUERY]: {
                    nGuests: Joi.number().required(),
                    reservationDate: Joi.date().required()
                }
            })
        case 'changeReservation':
            return celebrate({
                [Segments.BODY]: {
                    reservationId:Joi.string().required(),
                    roomId: Joi.string().required(),
                    nGuests: Joi.number().required(),
                    reservationDate: Joi.date().required()
                }
            })
        case 'cancelReservation':
            return celebrate({
                [Segments.QUERY]:{
                    reservationId:Joi.string().required()
                }
            })
    }
}

module.exports = validator;